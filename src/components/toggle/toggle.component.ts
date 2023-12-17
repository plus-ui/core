// @ts-ignore
import style from "./toggle.style.css?inline";

import { unsafeCSS } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { live } from "lit/directives/live.js";
import { html } from "lit/static-html.js";
import { PlusBase } from "../../base/plus-base";
import { captionStyle } from "../caption/caption.style";
import { labelStyle } from "../label/label.style";
import { toggleStyle } from "./toggle.style";

import { ifDefined } from "lit/directives/if-defined.js";

@customElement("plus-toggle")
export class ToggleComponent extends PlusBase {
  static styles = [...PlusBase.styles, unsafeCSS(style)];

  @query("#input") input: HTMLInputElement;

  @state() private hasFocus = false;

  @property() name = "";
  @property() value = "";
  @property({ type: Boolean, reflect: true }) checked = false;
  @property({ reflect: true }) size: "sm" | "md" | "lg" = "md";
  @property({ type: String }) label?: string;
  @property({ type: String }) text?: string;
  @property({ type: String, attribute: "text-position" }) textPosition: "left" | "right" = "right";
  @property({ type: String, attribute: "toggle-icon" }) toggleIcon?: string;
  @property({ type: String, attribute: "toggle-active-icon" }) toggleActiveIcon?: string;
  @property({ type: String, attribute: "toggle-inactive-icon" }) toggleInActiveIcon?: string;

  @property({ type: String }) caption?: string;
  @property({ type: Boolean, converter: value => value != "false" }) error = false;

  private handleBlur() {
    this.hasFocus = false;
    this.emit("plus-blur");
  }

  private handleInput() {
    this.emit("plus-input");
  }

  private handleInvalid(_event: Event) {
    // TO DO
  }

  private handleClick() {
    this.checked = !this.checked;
    this.emit("plus-change");
  }

  private handleFocus() {
    this.hasFocus = true;
    this.emit("plus-focus");
  }

  private handleKeyDown(event: KeyboardEvent) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      this.checked = false;
      this.emit("plus-change");
      this.emit("plus-input");
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      this.checked = true;
      this.emit("plus-change");
      this.emit("plus-input");
    }
  }

  click() {
    this.input.click();
  }

  focus(options?: FocusOptions) {
    this.input.focus(options);
  }

  blur() {
    this.input.blur();
  }

  getToggleIcon() {
    const { checked, toggleIcon, toggleActiveIcon, toggleInActiveIcon } = this;
    let icon = "";
    if (checked && toggleActiveIcon) {
      icon = toggleActiveIcon;
    } else if (!checked && toggleInActiveIcon) {
      icon = toggleInActiveIcon;
    } else if (toggleIcon) {
      icon = toggleIcon;
    }

    return icon ? html`<i class=${icon}></i>` : "";
  }

  render() {
    const { label, hasFocus, error, disabled, caption, value, checked, title, name, required, textPosition, text, readonly, size } = this;
    const { inputElement, host, toggle, toggleText, toggleDot, base } = toggleStyle({ focus: hasFocus, error, disabled, checked, textPosition, readonly, size });

    const LabelTemplate = () => (label ? html`<label class=${labelStyle({ required, size })} @click=${this.focus}>${label}</label>` : null);
    const CaptionTemplate = () => (caption ? html`<div class=${captionStyle({ error, size })}>${caption}</div>` : null);

    return html`<div class=${host()}>
      ${LabelTemplate()}

      <input
        id="input"
        class=${inputElement()}
        type="checkbox"
        title=${title}
        name=${name}
        value=${ifDefined(value)}
        .checked=${live(checked)}
        .disabled=${disabled || readonly}
        .required=${required}
        role="switch"
        aria-checked=${checked ? "true" : "false"}
        @click=${this.handleClick}
        @input=${this.handleInput}
        @invalid=${this.handleInvalid}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @keydown=${this.handleKeyDown}
      />
      <label for="input" class=${base()}>
        <div class="relative order-1">
          <div class=${toggle()}>
            <div class=${toggleDot()}>${this.getToggleIcon()}</div>
          </div>
        </div>
        <div class=${toggleText()}><slot>${text}</slot></div>
      </label>

      ${CaptionTemplate()}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-toggle": ToggleComponent;
  }
}
