import { consume } from "@lit/context";
import { html } from "lit";
import { customElement, property, queryAssignedElements } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";
import { SelectContext, selectContext } from "./select.component";
@customElement("plus-select-options")
export class SelectOptionsComponent extends PlusBase {
  @queryAssignedElements() defaultSlot: HTMLElement[] | undefined;
  @property({ type: String }) size: "sm" | "md" | "lg" = "md";

  @consume({ context: selectContext })
  @property({ attribute: false })
  public selectContext?: SelectContext;

  private handleSlotChange() {
    this.selectContext.slot = this.defaultSlot.map(el => el.tagName.toLowerCase() == "plus-select-option" && el);
  }

  render() {
    return html` <div class="flex w-full flex-col px-1 py-1">
      <slot @slotchange=${this.handleSlotChange}></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-select-options": SelectOptionsComponent;
  }
}
