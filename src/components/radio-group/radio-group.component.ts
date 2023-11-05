import { customElement, property, query } from "lit/decorators.js";
import { html } from "lit/static-html.js";
import { PlusBase } from "../../base/plus-base";
import { radioGroupStyle } from "./radio-group.style";

@customElement("plus-radio-group")
export class RadioGroupComponent extends PlusBase {
  @property({ type: String }) aligment: "horizontal" | "vertical" = "horizontal";
  @query("slot") defaultSlot: HTMLSlotElement;

  private handleSlotChange() {
    const radios = [...this.defaultSlot?.assignedElements({ flatten: true })].filter(item => item.tagName.toLowerCase() === "plus-radio") as any[];
    radios?.forEach(radio => {
      radio?.addEventListener("plus-change", e => {
        radios.forEach(radio => {
          if (radio !== e.target) {
            radio.checked = false;
            this.emit("plus-change", radio);
          } else {
            radio.checked = true;
          }
        });
      });
    });
  }

  render() {
    const { aligment } = this;
    const { host } = radioGroupStyle({ aligment });
    return html`
      <div class=${host()}>
        <slot class="radio-group" @slotchange=${this.handleSlotChange}> </slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-radio-group": RadioGroupComponent;
  }
}
