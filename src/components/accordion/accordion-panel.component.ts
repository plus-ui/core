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
    return html` <slot class="bg-color-base text-color-default"></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-accordion-panel": AccordionPanelComponent;
  }
}
