import { consume } from "@lit/context";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";
import { dropdownItemStyle } from "./dropdown-item.style";
import { DropdownContext, dropdownContext } from "./dropdown.component";

@customElement("plus-dropdown-item")
export class DropDownItemComponent extends PlusBase {
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean, reflect: true, converter: value => value != "false" }) active = false;
  @property({ type: String }) size: "sm" | "md" | "lg" = "md";

  @consume({ context: dropdownContext })
  @property({ attribute: false })
  public dropdownContext?: DropdownContext;

  private handleClick(): void {
    if (this.disabled) return;
    this.dropdownContext.onSelect(this.id);
  }

  render() {
    const size = this.dropdownContext.size ?? this.size;
    const { active, disabled } = this;
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
