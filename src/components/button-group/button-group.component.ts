import { html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";
import { buttonGroupStyle } from "./button-group.style";

@customElement("plus-button-group")
export class ButtonGroupComponent extends PlusBase {
  @query(".button-group") buttonGroup!: HTMLElement;

  @property({ type: String }) orientation: "vertical" | "horizontal" = "horizontal";

  handleSlotChange() {
    const slot = this.shadowRoot.querySelector("slot");
    const assignedNodes = slot.assignedNodes({ flatten: true }) as any;

    const buttons = assignedNodes.filter(node => node.tagName === "PLUS-BUTTON");

    buttons.forEach((button, index) => {
      button.groupPosition = this.orientation;  
      if (index === 0) {
        button.groupOrder = "first";
      }
      if (index === buttons.length - 1) {
        button.groupOrder = "last";
      }
      if (index > 0 && index < buttons.length - 1) {
        button.groupOrder = "middle";
      }
    });
  }

  render() {
    const { orientation } = this;
    const { base } = buttonGroupStyle({orientation});
    return html`
      <div class=${"button-group " + base()} role="group" aria-live="polite">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-button-group": ButtonGroupComponent;
  }
}
