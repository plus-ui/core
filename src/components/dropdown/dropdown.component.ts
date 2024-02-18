import { html } from "lit";
import { customElement, queryAsync } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";
import { dropdownStyle } from "./dropdown.style";

@customElement("plus-dropdown")
export class DropdownComponent extends PlusBase {
  @queryAsync(".dropdown") dropdown: Promise<HTMLElement> | undefined;

  constructor() {
    super();
  }

  render() {
    const { base } = dropdownStyle();

    return html`
      <div>
        <plus-button class="dropdown" status="primary" id="dropdown">Dropdown <i class="fas fa-caret-down"> </i></plus-button>
        <plus-sticky-box .target=${this.dropdown}>
          <slot></slot>
        </plus-sticky-box>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-dropdown": DropdownComponent;
  }
}
