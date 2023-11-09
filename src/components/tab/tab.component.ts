import { unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { html } from "lit/static-html.js";
import { PlusBase } from "../../base/plus-base";
import { tabStyle } from "./tab.style";
// @ts-ignore
import style from "./tab.style.css?inline";

@customElement("plus-tab")
export class TabComponent extends PlusBase {
  static styles = [...PlusBase.styles, unsafeCSS(style)];

  @property({ type: String }) size: "sm" | "md" | "lg" = "md";
  @property({ type: Boolean, reflect: true }) active = false;
  @property({ type: String }) kind: "vertical" | "horizontal" = "horizontal";

  constructor() {
    super();
    this.slot = "tabItem";
  }

  render() {
    const { size, active, disabled, kind } = this;
    const { tabItem } = tabStyle({ size, active, disabled, kind });
    return html`
      <div class=${tabItem()} @click=${() => !this.disabled && this.emit("plus-tab-click")} role="tab" aria-selected=${active} tabindex=${active ? 0 : -1}>
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-tab": TabComponent;
  }
}
