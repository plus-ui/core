import { consume } from "@lit/context";
import { html } from "lit";
import { customElement, property, queryAssignedElements } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";
import { DropdownContext, dropdownContext } from "./dropdown.component";
@customElement("plus-dropdown-menu")
export class DropdonwMenuComponent extends PlusBase {
  @queryAssignedElements() defaultSlot: HTMLElement[] | undefined;
  @property({ type: String }) size: "sm" | "md" | "lg" = "md";

  @consume({ context: dropdownContext })
  @property({ attribute: false })
  public dropdownContext?: DropdownContext;

  private handleSlotChange() {
    this.dropdownContext.slot = this.defaultSlot.map(el => el.tagName.toLowerCase() == "plus-dropdown-item" && el);
  }

  render() {
    return html` <div class="flex w-full flex-col">
      <slot @slotchange=${this.handleSlotChange}></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-dropdown-menu": DropdonwMenuComponent;
  }
}
