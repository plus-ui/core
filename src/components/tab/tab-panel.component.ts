import { customElement, property } from "lit/decorators.js";
import { html } from "lit/static-html.js";
import { PlusBase } from "../../base/plus-base";
import { tabStyle } from "./tab.style";

@customElement("plus-tab-panel")
export class TabPanelComponent extends PlusBase {
  @property({ type: Boolean, reflect: true }) active = false;
  @property({ type: Boolean, converter: value => value != "false" }) isRemoved = false;

  constructor() {
    super();
    this.slot = "content";
  }

  render() {
    const { active, isRemoved } = this;
    const { tabPanel } = tabStyle({ active, isRemoved });

    return html`
      <div class=${tabPanel()}>
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
