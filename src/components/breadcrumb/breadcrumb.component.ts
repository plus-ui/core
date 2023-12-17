import { PropertyValueMap } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { html } from "lit/static-html.js";
import { PlusBase } from "../../base/plus-base";
import { breadCrumbStyle } from "./breadcrumb.style";

@customElement("plus-breadcrumb")
export class BreadCrumbComponent extends PlusBase {
  @query("slot") defaultSlot: HTMLSlotElement;

  @property({ type: String }) size: "sm" | "md" | "lg" = "md";
  @property({ type: String }) separator: string = "/";

  private get slotItems() {
    return [...this.defaultSlot?.assignedElements({ flatten: true })].filter(item => item.tagName.toLowerCase() === "plus-breadcrumb-item") as any;
  }

  protected handleChanges() {
    this.slotItems?.forEach((item, _) => {
      item.setAttribute("size", this.size);
      item.setAttribute("separator", this.separator);
    });
  }

  protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.updated(_changedProperties);
    this.handleChanges();
  }

  private handleClickItem({ target }: Event) {
    if (target instanceof HTMLElement && target.tagName.toLowerCase() === "plus-breadcrumb-item") {
      const { id } = target;
      this.slotItems?.forEach((item, _) => {
        if (item.id === id) {
          item.setAttribute("active", "true");
          this.emit("plus-click", { detail: { id } });
        } else {
          item.setAttribute("active", "false");
        }
      });
    }
  }

  render() {
    const { size } = this;
    const { host } = breadCrumbStyle({ size });
    return html`
      <nav class=${host()} aria-label="Breadcrumb">
        <slot @slotchange=${() => this.handleChanges()} @click=${this.handleClickItem}></slot>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-breadcrumb": BreadCrumbComponent;
  }
}
