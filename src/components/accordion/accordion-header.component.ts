import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";

@customElement("plus-accordion-header")
export class AccordionHeaderComponent extends PlusBase {
  constructor() {
    super();
    this.slot = "header";
  }

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-accordion-header": AccordionHeaderComponent;
  }
}
