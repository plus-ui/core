import { customElement, property, query, state } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import { html } from "lit/static-html.js";
import { PlusBase } from "../../base/plus-base";
import { breadCrumbStyle } from "./breadcrumb.style";

interface BreadCrumbItem {
  id?: string;
  label: string;
  url: string;
  active?: boolean;
  prefixIcon?: string;
  suffixIcon?: string;
  iconOnly?: boolean;
  maxItems?: number;
  readonly?: boolean;
  disabled?: boolean;
}

@customElement("plus-breadcrumb")
export class BreadCrumbComponent extends PlusBase {
  @query(".breadcrumb") el: HTMLElement;
  @query("slot") defaultSlot: HTMLSlotElement;

  @property({ type: Array, converter: items => (typeof items == "string" ? JSON.parse(items) : items) }) items: BreadCrumbItem[] = [];
  @property({ type: String }) size: "sm" | "md" | "lg" = "md";
  @property({ type: String }) seperator: string = "/";
  @property({ type: Number, attribute: "max-items" })
  set maxItems(value: number) {
    this._maxItems = +value;
  }
  get maxItems(): number {
    return this._maxItems ?? 5;
  }

  @state() private _maxItems: number;

  handleChanges() {
    const items = [...this.defaultSlot?.assignedElements({ flatten: true })].filter(item => item.tagName.toLowerCase() === "plus-breadcrumb-item") as any[];
    items.forEach((item, index) => {
      item.addEventListener("plus-breadcrum-change", e => {
        items.forEach(item => {
          if(item.disabled || item.readonly) return;
          if (item !== e.target) {
            item.setAttribute("active","false");
            item.setAttribute("aria-current","false");
          } else {
            item.setAttribute("active", "true");
            item.setAttribute("aria-current", "page");
          }
        });
      });
      if (index === items.length - 1) {
        item.setAttribute("isLast", "true");
      }
    });
  }

  private handleClickItem({ target }) {
    if (target.tagName.toLowerCase() === "plus-breadcrumb-item") {
      //const items = this.el?.shadowRoot.querySelectorAll('plus-breadcrumb-item');
      this.el?.querySelectorAll("plus-breadcrumb-item").forEach(item => {
        if (item !== target) {
          item.setAttribute("active", "false");
          item.setAttribute("aria-current", "false");
        } else {
          item.setAttribute("active", "true");
          item.setAttribute("aria-current", "page");
        }
      });
    }
  }

  render() {
    const { size } = this;
    console.log(this.maxItems);
    const { base } = breadCrumbStyle({ size });
    return html`
      <nav class="flex" aria-label="Breadcrumb">
        <ol class=${base()}>
          ${map(
            this.items,
            (item, index) =>
              html`<plus-breadcrumb-item
                aria-current=${item.active ? "page" : "false"}
                .readonly=${item.readonly}
                .active=${item.active ?? false}
                .disabled=${item.disabled}
                .prefixIcon=${item.prefixIcon}
                .suffixIcon=${item.suffixIcon}
                .iconOnly=${item.iconOnly}
                .label=${item.label}
                .url=${item.url}
                .isLast=${index == this.items?.length - 1}
                .seperator=${this.seperator}
                @click=${e => this.handleClickItem(e)}
              ></plus-breadcrumb-item>`,
          )}

          <slot @slotchange=${() => this.handleChanges()}></slot>
        </ol>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-breadcrumb": BreadCrumbComponent;
  }
}
