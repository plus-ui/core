import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";
import { dropdownStyle } from "./dropdown.style";

@customElement("plus-dropdown")
export class DropdownComponent extends PlusBase {
  render() {
    const { base } = dropdownStyle();

    return html`<div class=${base()}></div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-dropdown": DropdownComponent;
  }
}
