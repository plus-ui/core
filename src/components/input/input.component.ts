// @ts-ignore
import style from "./input.style.css?inline";

import { unsafeCSS } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { live } from "lit/directives/live.js";
import { html } from "lit/static-html.js";
import { PlusBase } from "../../base/plus-base";
import { captionStyle } from "../caption/caption.style";
import { labelStyle } from "../label/label.style";
import { inputStyle } from "./input.style";

import { ifDefined } from "lit/directives/if-defined.js";

@customElement("plus-input")
export class InputComponent extends PlusBase {
  static styles = [...PlusBase.styles, unsafeCSS(style)];

  @query("#input") input: HTMLInputElement;

  @state() private hasFocus = false;

  @property({ reflect: true }) type: "date" | "datetime-local" | "email" | "number" | "password" | "search" | "tel" | "text" | "time" | "url" = "text";
  @property() name = "";
  @property() value = "";
  @property() placeholder = "";
  @property({ reflect: true }) size: "sm" | "md" | "lg" = "md";
  @property({ type: Boolean }) clearable = false;
  @property({ attribute: "password-toggle", type: Boolean }) passwordToggle = false;
  @property({ attribute: "password-visible", type: Boolean }) passwordVisible = false;
  @property({ type: String }) label?: string;
  @property() pattern: string;
  @property({ type: Number }) minlength: number;
  @property({ type: Number }) maxlength: number;
  @property() min: number | string;
  @property() max: number | string;
  @property() step: number | "any";
  @property() autocapitalize: "off" | "none" | "on" | "sentences" | "words" | "characters";
  @property() autocorrect: "off" | "on";
  @property() autocomplete: string;
  @property({ type: Boolean }) autofocus: boolean;
  @property() enterkeyhint: "enter" | "done" | "go" | "next" | "previous" | "search" | "send";
  @property() inputmode: "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";
  @property({ type: Boolean }) spellcheck: boolean;
  @property({ type: String }) caption?: string;
  @property({ type: Boolean, converter: value => value != "false" }) error = false;

  @property({ reflect: true, attribute: "full-width", type: Boolean }) fullWidth = false;

  private handleBlur() {
    this.hasFocus = false;
    this.emit("plus-blur");
  }

  private handleChange() {
    this.value = this.input.value;
    this.emit("plus-change");
  }

  private handleClearClick(event: MouseEvent) {
    this.value = "";
    this.emit("plus-clear");
    this.emit("plus-input");
    this.emit("plus-change");
    this.input.focus();

    event.stopPropagation();
  }

  private handleFocus() {
    this.hasFocus = true;
    this.emit("plus-focus");
  }

  private handleInput() {
    this.value = this.input.value;
    this.emit("plus-input");
  }

  private handleInvalid(_event: Event) {
    // TODO
  }

  private handleKeyDown(_event: KeyboardEvent) {
    // TODO
  }

  handleSlotchange(e) {
    const childNodes = e.target.assignedNodes({ flatten: true });
    if (childNodes.length) {
      e.target.style.display = "block";
    }
  }

  render() {
    const { label, hasFocus, error, disabled, caption, clearable, value, size, required } = this;
    const { inputElement, host, inputWrapper, prefix, suffix, clearButton } = inputStyle({ focus: hasFocus, error, disabled, size });

    const LabelTemplate = () => (label ? html`<label class=${labelStyle({ size, required })} for="input">${label}</label>` : null);
    const CaptionTemplate = () => (caption ? html`<div class=${captionStyle({ error, size })}>${caption}</div>` : null);
    const ClearTemplate = () =>
      clearable && value
        ? html`<div class=${clearButton() + suffix()} @click=${this.handleClearClick}>
            <i class="fas fa-circle-xmark"></i>
          </div>`
        : null;

    return html`<div class=${host()}>
      ${LabelTemplate()}
      <div class=${inputWrapper()} @click=${() => this.input.focus()}>
        <slot name="prefix" class=${prefix()} @slotchange=${this.handleSlotchange}></slot>
        <input
          id="input"
          type="text"
          class=${inputElement()}
          type=${this.type === "password" && this.passwordVisible ? "text" : this.type}
          title=${this.title}
          name=${ifDefined(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${ifDefined(this.placeholder)}
          minlength=${ifDefined(this.minlength)}
          maxlength=${ifDefined(this.maxlength)}
          min=${ifDefined(this.min)}
          max=${ifDefined(this.max)}
          step=${ifDefined(this.step as number)}
          .value=${live(this.value)}
          autocapitalize=${ifDefined(this.autocapitalize)}
          autocomplete=${ifDefined(this.autocomplete as any)}
          autocorrect=${ifDefined(this.autocorrect)}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${ifDefined(this.pattern)}
          enterkeyhint=${ifDefined(this.enterkeyhint)}
          inputmode=${ifDefined(this.inputmode)}
          aria-describedby="help-text"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @keydown=${this.handleKeyDown}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
        />
        <slot name="suffix" class=${suffix()} @slotchange=${this.handleSlotchange}></slot>
        ${ClearTemplate()}
      </div>
      ${CaptionTemplate()}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-input": InputComponent;
  }
}
