import { html } from "lit/static-html.js";

import { customElement, property } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";
import { DividerStyle } from "./divider.style";
/** @ts-ignore */
import style from "./divider.style.css?inline";
import { unsafeCSS } from "lit";

@customElement("plus-divider")
export class DividerComponent extends PlusBase {
  static styles = [...PlusBase.styles, unsafeCSS(style)];

  @property({ type: String }) kind: "default" | "dashed" = "default";
  @property({ type: String }) type: "vertical" | "horizontal" = "horizontal";

  render() {
    const { kind, type } = this;

    const { base } = DividerStyle({ kind, type });

    return html`<hr class="${base()}" />`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-divider": DividerComponent;
  }
}
