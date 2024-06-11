import { html } from "lit/static-html.js";

import { customElement, property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { PlusBase } from "../../base/plus-base";
import { DividerStyle } from "./divider.style";

/** @ts-ignore */
import { unsafeCSS } from "lit";
import style from "./divider.style.css?inline";

@customElement("plus-divider")
export class DividerComponent extends PlusBase {
  static styles = [...PlusBase.styles, unsafeCSS(style)];

  @property({ type: String }) kind: "default" | "dashed" = "default";
  @property({ type: String }) orientation: "vertical" | "horizontal" = "horizontal";
  @property({ type: Number }) thickness!: number;

  render() {
    const { kind, orientation } = this;

    const { base } = DividerStyle({ kind, orientation });

    return html`<hr class="${base()}" style=${styleMap({ "border-top-width": this.thickness + "px" })} aria-orientation=${orientation} role="separator" />`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-divider": DividerComponent;
  }
}
