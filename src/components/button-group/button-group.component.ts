import { html } from "lit";
import { customElement, property, queryAssignedElements } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";
import { buttonGroupStyle } from "./button-group.style";

@customElement("plus-button-group")
export class ButtonGroupComponent extends PlusBase {
  @queryAssignedElements() defaultSlot: HTMLElement[] | undefined;
  @property({ type: String, reflect: true }) orientation: "horizontal" | "vertical" = "horizontal";

  handleSlotChange() {
    const buttons = this.defaultSlot.map(node => node.tagName === "PLUS-BUTTON" && node) as any;

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
    const { base } = buttonGroupStyle({ orientation });
    return html`
      <div class=${base()} role="group" aria-live="polite">
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
