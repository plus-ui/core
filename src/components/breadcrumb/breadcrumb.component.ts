import { PropertyValueMap } from "lit";
import { customElement, property, queryAssignedElements } from "lit/decorators.js";
import { html } from "lit/static-html.js";
import { PlusBase } from "../../base/plus-base";
import { breadCrumbStyle } from "./breadcrumb.style";

@customElement("plus-breadcrumb")
export class BreadCrumbComponent extends PlusBase {
  @queryAssignedElements() links!: Array<HTMLElement>;

  @property({ type: String }) size: "sm" | "md" | "lg" = "md";
  @property({ type: String }) separator: string = "/";

  protected handleChanges() {
    const { links } = this;
    if (links.length === 0) return;
    links.forEach((item, index) => {
      if (index === links.length - 1) {
        item.setAttribute("active", "true");
      } else {
        item.shadowRoot.querySelector('slot[name="separator"]').innerHTML = this.separator;
      }
      item.setAttribute("size", this.size);
      item.setAttribute("isBreadcrumb", "true");
    });
  }

  protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.updated(_changedProperties);
    this.handleChanges();
  }

  private handleClickItem({ target }: Event) {
    if (target instanceof HTMLElement && target.tagName.toLowerCase() === "plus-link") {
      const { id } = target;
      this.links?.forEach((item, _) => {
        if (item.id === id) {
          item.setAttribute("active", "true");
          this.emit("plus-click", { detail: { item } });
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
