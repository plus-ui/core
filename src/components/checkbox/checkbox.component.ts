import { unsafeCSS } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { live } from "lit/directives/live.js";
import { html } from "lit/static-html.js";
import { PlusBase } from "../../base/plus-base";
import { captionStyle } from "../caption/caption.style";
import { labelStyle } from "../label/label.style";
import { checkboxStyle } from "./checkbox.style";
// @ts-ignore
import style from "./checkbox.style.css?inline";
@customElement("plus-checkbox")
export class CheckboxComponent extends PlusBase {
  static styles = [...PlusBase.styles, unsafeCSS(style)];

  @query(".checkbox") checkbox: HTMLInputElement;
  @property({ type: String }) size: "sm" | "md" | "lg" = "md";
  @property({ type: String }) text: string;
  @property({ type: Boolean, reflect: true }) checked = false;
  @property({ type: Boolean, reflect: true }) indeterminate = false;

  @property({ type: String }) label?: string;
  @property({ type: String }) caption?: string;
  @property({ type: Boolean, converter: value => value != "false" }) error = false;

  @state() hasFocus = false;

  private handleClick() {
    /* TODO: should be on host */
    this.checked = !this.checked;
    this.emit("plus-change");
  }

  private handleFocus() {
    this.hasFocus = true;
    this.emit("plus-focus");
  }

  private handleBlur() {
    this.hasFocus = false;
    this.emit("plus-blur");
  }

  private handleChange() {
    this.checked = this.checkbox.checked;
    this.emit("plus-change");
  }

  render() {
    const { disabled, readonly, checked, text, title, id, size, label, caption, error, required, indeterminate } = this;
    const { base, inputElement, checkbox, checkIcon, host, textSlot } = checkboxStyle({
      disabled,
      readonly,
      checked: checked || indeterminate,
      size,
      focus: this.hasFocus,
      required,
      error,
    });

    const LabelTemplate = () => (label ? html`<label class=${labelStyle({ required, size })} @click=${this.focus}>${label}</label>` : null);
    const CaptionTemplate = () => (caption ? html`<div class=${captionStyle({ error, size })}>${caption}</div>` : null);

    return html`
      <div class=${host()}>
        ${LabelTemplate()}
        <input
          id=${id}
          class=${inputElement()}
          type="checkbox"
          title=${title}
          .checked=${live(checked)}
          .disabled=${disabled || readonly}
          role="checkbox"
          aria-checked=${checked ? "true" : "false"}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick /* TODO: should be on host */}
          @change=${this.handleChange}
        />
        <label for=${id} class=${base()}>
          <div class="relative">
            <div class=${checkbox()}>
              ${indeterminate ? html`<i class=${checkIcon() + " fa-solid fa-minus"}></i>` : html`<i class=${checkIcon() + " fa-solid fa-check"}></i>`}
            </div>
          </div>
          <span class=${textSlot()}><slot>${text}</slot></span>
        </label>
        ${CaptionTemplate()}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-checkbox": CheckboxComponent;
  }
}
