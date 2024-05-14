import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";

@customElement("plus-accordion-panel")
export class AccordionPanelComponent extends PlusBase {
  constructor() {
    super();
    this.slot = "panel";
  }

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-accordion-panel": AccordionPanelComponent;
  }
}
