import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";
import { dropdownItemStyle } from "./dropdown-item.style";

@customElement("plus-dropdown-menu")
export class DropdonwMenuComponent extends PlusBase {
  render() {
    const { base } = dropdownItemStyle();

    return html` <div class="flex w-full flex-col">
      <slot></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-dropdown-menu": DropdonwMenuComponent;
  }
}
