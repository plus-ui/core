import { createContext, provide } from "@lit/context";
import { PropertyValueMap, html } from "lit";
import { customElement, property, queryAsync, state } from "lit/decorators.js";
import { PlacementType } from "../../../src/model/plus-types";
import { PlusBase } from "../../base/plus-base";
import { selectStyle } from "./select.style";

export interface SelectContext {
  onSelect: (id: string | number) => void;
  size: "sm" | "md" | "lg";
  slot: HTMLElement[];
}
export const selectContext = createContext<SelectContext>("selectContext");
@customElement("plus-select")
export class SelectComponent extends PlusBase {
  @queryAsync(".plus-input") input!: Promise<HTMLElement> | undefined;

  @property({ attribute: false }) position: PlacementType = "bottom-start";
  @property({ type: String }) size: "sm" | "md" | "lg" = "md";

  @state() selected = "";
  @state() open = false;

  @provide({ context: selectContext })
  context = {
    onSelect: id => {
      const selectOptionItems = this.context?.slot;
      selectOptionItems?.forEach((item: any) => {
        item.active = item.id == id;
        if (item.active) this.selected = item.textContent?.trim() ?? "";
      });
      this.emit("plus-select-change", { detail: { id } });
    },
    size: this.size,
  } as SelectContext;

  protected update(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.update(changedProperties);
  }

  render() {
    const { base } = selectStyle();
    return html`<div class=${base()}>
      <plus-input class="plus-input" .value=${this.selected} readonly size=${this.size}>
        <i slot="suffix" class=${!this.open ? "fas fa-angle-down" : "fas fa-angle-up"}></i>
      </plus-input>
      <plus-sticky-box class="plus-sticky-box" .target=${this.input} .position=${this.position} @plus-sticky-box-change=${({ detail: { open } }) => (this.open = open)}>
        <slot></slot>
      </plus-sticky-box>
    </div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-select": SelectComponent;
  }
}
