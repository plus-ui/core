import { customElement, property, state } from "lit/decorators.js";
import { html } from "lit/static-html.js";
import { PlusBase } from "../../base/plus-base";
import { captionStyle } from "../caption/caption.style";
import { labelStyle } from "../label/label.style";
import { checkboxGroupStyle } from "./checkbox-group.style";

@customElement("plus-checkbox-group")
export class CheckboxGroupComponent extends PlusBase {
  @property({ type: String }) orientation: "horizontal" | "vertical" = "horizontal";

  @property({ type: String }) size: "sm" | "md" | "lg" = "md";
  @property({ type: String }) label?: string;
  @property({ type: String }) caption?: string;
  @property({ type: Boolean, converter: value => value != "false" }) error = false;

  @state() hasFocus = false;

  // private handleClick() {
  //   this.emit("plus-change");
  // }

  // private handleFocus() {
  //   this.hasFocus = true;
  //   this.emit("plus-focus");
  // }

  // private handleBlur() {
  //   this.hasFocus = false;
  //   this.emit("plus-blur");
  // }

  // private handleChange() {
  //   this.emit("plus-change");
  // }

  render() {
    const { size, required, error, label, caption, orientation } = this;
    const { host, inputWrapper } = checkboxGroupStyle({ size, orientation });
    const LabelTemplate = () => (label ? html`<label class=${labelStyle({ size, required })} for="input">${label}</label>` : null);
    const CaptionTemplate = () => (caption ? html`<div class=${captionStyle({ error, size })}>${caption}</div>` : null);
    return html`
      <div class=${host()}>
        ${LabelTemplate()}
        <div class=${inputWrapper()}>
          <slot></slot>
        </div>
        ${CaptionTemplate()}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-checkbox-group": CheckboxGroupComponent;
  }
}
