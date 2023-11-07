// @ts-ignore
import style from "./textarea.style.css?inline";

import { unsafeCSS } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { live } from "lit/directives/live.js";
import { html } from "lit/static-html.js";
import { PlusBase } from "../../base/plus-base";
import { captionStyle } from "../caption/caption.style";
import { labelStyle } from "../label/label.style";
import { textareaStyle } from "./textarea.style";

import { ifDefined } from "lit/directives/if-defined.js";

@customElement("plus-textarea")
export class textareaComponent extends PlusBase {
  static styles = [...PlusBase.styles, unsafeCSS(style)];

  @query("#textarea") textarea: HTMLInputElement;

  @state() private hasFocus = false;

  @property() name = "";
  @property() value = "";
  @property() placeholder = "";
  @property({ reflect: true }) size: "sm" | "md" | "lg" = "md";
  @property({ type: Boolean }) clearable = false;
  @property({ type: String }) label?: string;
  @property({ type: Number }) minlength: number;
  @property({ type: Number }) maxlength: number;
  @property() autocapitalize: "off" | "none" | "on" | "sentences" | "words" | "characters";
  @property() autocorrect: "off" | "on";
  @property() autocomplete: string;
  @property({ type: Boolean }) autofocus: boolean;
  @property() enterkeyhint: "enter" | "done" | "go" | "next" | "previous" | "search" | "send";
  @property() inputmode: "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";
  @property({ type: Boolean }) spellcheck: boolean;
  @property({ type: String }) caption?: string;
  @property({ type: Boolean, converter: value => value != "false" }) error = false;
  @property({ type: Number }) rows = 4;

  @property({ reflect: true, attribute: "full-width", type: Boolean }) fullWidth = false;

  private handleBlur() {
    this.hasFocus = false;
    this.emit("plus-blur");
  }

  private handleChange() {
    this.value = this.textarea.value;
    this.emit("plus-change");
  }

  private handleClearClick(event: MouseEvent) {
    this.value = "";
    this.emit("plus-clear");
    this.emit("plus-textarea");
    this.emit("plus-change");
    this.textarea.focus();

    event.stopPropagation();
  }

  private handleFocus() {
    this.hasFocus = true;
    this.emit("plus-focus");
  }

  private handleInput() {
    this.value = this.textarea.value;
    this.emit("plus-textarea");
  }

  private handleInvalid(_event: Event) {
    // TODO
  }

  private handleKeyDown(_event: KeyboardEvent) {
    // TODO
  }

  render() {
    const { label, hasFocus, error, disabled, caption, clearable, value, size, required } = this;
    const { inputElement, host, inputWrapper, prefix, suffix, clearButton } = textareaStyle({ focus: hasFocus, error, disabled, size });

    const LabelTemplate = () => (label ? html`<label class=${labelStyle({ size, required })} for="textarea">${label}</label>` : null);
    const CaptionTemplate = () => (caption ? html`<div class=${captionStyle({ error, size })}>${caption}</div>` : null);
    const ClearTemplate = () =>
      clearable && value
        ? html`<div class=${clearButton() + suffix()} @click=${this.handleClearClick}>
            <i class="fas fa-circle-xmark"></i>
          </div>`
        : null;

    return html`<div class=${host()}>
      ${LabelTemplate()}
      <div class=${inputWrapper()} @click=${() => this.textarea.focus()}>
        <!-- <slot name="prefix" class=${prefix()}></slot> -->
        <textarea
          id="textarea"
          type="text"
          class=${inputElement()}
          title=${this.title}
          name=${ifDefined(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${ifDefined(this.placeholder)}
          rows=${ifDefined(this.rows)}
          minlength=${ifDefined(this.minlength)}
          maxlength=${ifDefined(this.maxlength)}
          .value=${live(this.value)}
          autocapitalize=${ifDefined(this.autocapitalize)}
          autocomplete=${ifDefined(this.autocomplete as any)}
          autocorrect=${ifDefined(this.autocorrect)}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          enterkeyhint=${ifDefined(this.enterkeyhint)}
          inputmode=${ifDefined(this.inputmode)}
          aria-describedby="help-text"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @keydown=${this.handleKeyDown}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
        ></textarea>
        <!-- <slot name="suffix" class=${suffix()}></slot> -->
        <!-- ${ClearTemplate()} -->
      </div>
      ${CaptionTemplate()}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-textarea": textareaComponent;
  }
}
