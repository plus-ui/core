import { customElement, property } from "lit/decorators.js";
import { html } from "lit/static-html.js";
import { PlusBase } from "../../base/plus-base";

@customElement("plus-tab-panel")
export class TabPanelComponent extends PlusBase {
  @property({ type: Boolean, reflect: true }) active = false;


  constructor() {
    super();
    this.slot = "content";
  }

  render() {
    return html`
      <div class=${this.active ? "block" : "hidden"}>
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-tab-panel": TabPanelComponent;
  }
}
