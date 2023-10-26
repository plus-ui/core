import { html } from "lit/static-html.js";

import { unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";

// @ts-ignore
import style from "./default.style.css?inline";

@customElement("plus-default")
export class DefaultComponent extends PlusBase {
  static styles = [...PlusBase.styles, unsafeCSS(style)];

  render() {
    return html` <input /> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-default": DefaultComponent;
  }
}
