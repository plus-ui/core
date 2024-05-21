import { html } from "lit";
import { customElement, query } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";
import { buttonGroupStyle } from "./button-group.style";

@customElement("plus-button-group")
export class ButtonGroupComponent extends PlusBase {
  @query(".button-group") buttonGroup!: HTMLElement;

  handleSlotChange() {
    const slot = this.shadowRoot.querySelector("slot");
    const assignedNodes = slot.assignedNodes({ flatten: true }) as any;

    const buttons = assignedNodes.filter(node => node.tagName === "PLUS-BUTTON");

    buttons.forEach((button, index) => {
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
    const { base } = buttonGroupStyle();
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
