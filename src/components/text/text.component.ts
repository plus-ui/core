import { html, unsafeStatic } from "lit/static-html.js";

import { unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { PlusBase } from "../../base/plus-base";
import { textStyle } from "./text.style";
/** @ts-ignorqe */
import style from "./text.style.css?inline";

@customElement("plus-text")
export class TextComponent extends PlusBase {
  static styles = [...PlusBase.styles, unsafeCSS(style)];

  @property({ type: String }) kind: "default" | "placeholder" | "caption" = "default";
  @property({ type: String }) status: "default" | "success" | "warning" | "error" | "info" = "default";
  // @property({ type: Boolean }) disabled: boolean;
  @property({ type: Boolean }) underline: boolean;
  @property({ type: Boolean }) overline: boolean;
  @property({ type: Boolean, attribute: "line-through" }) lineThrough: boolean;
  @property({ type: Boolean }) highlight: boolean; // mark tag
  @property({ type: Boolean }) strong: boolean;
  @property({ type: Boolean }) italic: boolean;
  @property({ type: String, attribute: "text-transform" }) textTransform?: "uppercase" | "lowercase" | "capitalize";
  @property({ type: Boolean }) code: boolean;
  @property({ type: Boolean }) truncate: boolean;
  @property({ type: Boolean }) blockquote: boolean;
  @property({ type: String }) size = "base";
  @property({ type: String }) type: string = "p";

  textDecoration() {
    const { underline, overline, lineThrough } = this;
    if (!underline && !overline && !lineThrough) {
      return {};
    }
    return {
      "text-decoration": `${underline ? "underline" : ""} ${overline ? "overline" : ""} ${lineThrough ? "line-through" : ""}`.trim(),
    };
  }

  render() {
    const { kind, status, disabled, highlight, strong, italic, type, size } = this;

    const { base } = textStyle({ kind, status, disabled, highlight, strong, italic, type, size });

    const tag = unsafeStatic(type);

    return html`
      <${tag} class="${base()}" style="${styleMap(this.textDecoration())}">
        <slot></slot>
      </${tag}>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-text": TextComponent;
  }
}
