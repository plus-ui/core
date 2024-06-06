import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";

@customElement("plus-accordion-helper")
export class AccordionHelperComponent extends PlusBase {
  constructor() {
    super();
    this.slot = "helper";
  }

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-accordion-helper": AccordionHelperComponent;
  }
}
