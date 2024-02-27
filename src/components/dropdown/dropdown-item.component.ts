import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";
import { dropdownItemStyle } from "./dropdown-item.style";

@customElement("plus-dropdown-item")
export class DropDownItemComponent extends PlusBase {
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean, reflect: true, converter: value => value != "false" }) active = false;
  @property({ type: String }) size: "sm" | "md" | "lg" = "md";

  private handleClick() {
    if (this.disabled) return;
  }

  render() {
    const { active, disabled, size } = this;
    const { base } = dropdownItemStyle({ active, disabled, size });

    return html`
      <div class=${base()} @click=${this.handleClick}>
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
