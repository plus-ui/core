import { customElement, property, query } from "lit/decorators.js";
import { html } from "lit/static-html.js";
import { PlusBase } from "../../base/plus-base";
import { captionStyle } from "../caption/caption.style";
import { labelStyle } from "../label/label.style";
import { radioGroupStyle } from "./radio-group.style";

@customElement("plus-radio-group")
export class RadioGroupComponent extends PlusBase {
  @property({ type: String }) orientation: "horizontal" | "vertical" = "horizontal";
  @query("slot") defaultSlot: HTMLSlotElement;
  @property({ type: String }) size: "sm" | "md" | "lg" = "md";
  @property({ type: String }) label?: string;
  @property({ type: String }) caption?: string;
  @property({ type: Boolean, converter: value => value != "false" }) error = false;

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
    const { orientation, label, caption, size, error, required } = this;
    const { host, inputWrapper } = radioGroupStyle({ orientation });
    const LabelTemplate = () => (label ? html`<label class=${labelStyle({ size, required })} for="input">${label}</label>` : null);
    const CaptionTemplate = () => (caption ? html`<div class=${captionStyle({ error, size })}>${caption}</div>` : null);
    return html`
      <div class=${host()}>
        ${LabelTemplate()}
        <div class=${inputWrapper()}>
          <slot class="radio-group" @slotchange=${this.handleSlotChange}> </slot>
        </div>
        ${CaptionTemplate()}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-radio-group": RadioGroupComponent;
  }
}
