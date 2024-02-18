import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";
import { dropdownItemStyle } from "./dropdown-item.style";

@customElement("plus-dropdown-item")
export class DropDownItemComponent extends PlusBase {
  render() {
    const { base } = dropdownItemStyle();

    return html`
      <div class=${base()}>
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-dropdown-item": DropDownItemComponent;
  }
}
