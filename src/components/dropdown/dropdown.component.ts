import { provide } from "@lit/context";
import { PropertyValueMap, html } from "lit";
import { customElement, property, queryAsync } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";

import { createContext } from "@lit/context";
import { PlacementType } from "../../../src/model/plus-types";
export interface DropdownContext {
  onSelect: (id: string | number) => void;
  size: "sm" | "md" | "lg";
  slot: HTMLElement[];
}
export const dropdownContext = createContext<DropdownContext>("dropdownContext");

@customElement("plus-dropdown")
export class DropdownComponent extends PlusBase {
  @queryAsync(".dropdown") dropdown: Promise<HTMLElement> | undefined;
  @property({ type: String }) size: "sm" | "md" | "lg" = "md";
  @property({ type: String }) text;
  @property({ attribute: false }) orientation: PlacementType = "bottom-start";
  @property({ type: String }) status: "default" | "primary" | "success" | "warning" | "error" | "info" | "invert" = "default";
  @property({ type: String }) kind: "filled" | "outlined" | "dashed" | "text" = "filled";

  @provide({ context: dropdownContext })
  context = {
    onSelect: id => {
      const dropdownItems = this.context?.slot;
      dropdownItems?.forEach((item: any) => {
        item.active = item.id == id;
      });
      this.emit("plus-dropdown-change", { detail: { id } });
    },
    size: this.size,
  } as DropdownContext;

  protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    this.context.size = this.size;
  }

  render() {
    return html`
      <div>
        <plus-button class="dropdown" .status=${this.status} .size=${this.size} .kind=${this.kind} id="dropdown"><slot></slot> <i class="fas fa-caret-down"> </i></plus-button>
        <plus-sticky-box .target=${this.dropdown} .orientation=${this.orientation}>
          <slot name="content"></slot>
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
