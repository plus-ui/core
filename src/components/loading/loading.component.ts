import { html } from "lit/static-html.js";

import { customElement } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";
import { LoadingStyle } from "./loading.style";
import { unsafeCSS } from "lit";
/** @ts-ignore */
import style from "./loading.style.css?inline";

@customElement("plus-loading")
export class LoadingComponent extends PlusBase {
  static styles = [...PlusBase.styles, unsafeCSS(style)];

  render() {
    const { base } = LoadingStyle();

    return html`<div class="${base()}">
      <i class="fa-solid fa-spinner fa-spin"></i>
    </div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-loading": LoadingComponent;
  }
}
