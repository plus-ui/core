import { PropertyValueMap, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";
@customElement("plus-dropdown-menu")
export class DropdonwMenuComponent extends PlusBase {
  @query("slot") defaultSlot: HTMLSlotElement;
  @property({ type: String }) size: "sm" | "md" | "lg" = "md";

  private get slotItems() {
    return [...this.defaultSlot?.assignedElements({ flatten: true })].filter(item => item.tagName.toLowerCase() === "plus-dropdown-item") as any;
  }

  private handleClickItem({ target }: Event) {
    if (target instanceof HTMLElement && target.tagName.toLowerCase() === "plus-dropdown-item") {
      const { id } = target;
      this.slotItems?.forEach((item, _) => {
        item.active = item.id == id;
        item.active ? this.emit("plus-select", { detail: { id } }) : null;
      });
    }
  }

  protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    this.slotItems?.forEach((item, _) => {
      item.size = this.size;
    });
  }

  render() {
    return html` <div class="flex w-full flex-col">
      <slot @click=${this.handleClickItem}></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-dropdown-menu": DropdonwMenuComponent;
  }
}
