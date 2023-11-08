import { customElement, property } from "lit/decorators.js";
import { html } from "lit/static-html.js";
import { PlusBase } from "../../base/plus-base";
import { tabStyle } from "./tab.style";


@customElement("plus-tab")
export class TabComponent extends PlusBase {
  @property({ type: String }) size: "sm" | "md" | "lg" = "md";
  @property({ type: Boolean, reflect: true }) active = false;


  render() {
    const { size, active, disabled } = this;
    const { host, tab, inkBar } = tabStyle({ size, active, disabled });
    return html`
      <div class=${host()} @click=${() => this.emit("plus-click")}>
        <div class=${tab()}>
          <slot></slot>
          ${this.active ? html`<div id="ink-bar" class=${inkBar()}></div>` : null}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-tab": TabComponent;
  }
}
