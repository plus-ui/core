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

  @property({ attribute: false }) orientation: PlacementType = "bottom-start";
  @property() placeholder = "";
  @property({ type: String }) label?: string;
  @property({ type: Boolean, converter: value => value != "false" }) error = false;
  @property({ type: String }) caption?: string;
  @property({ type: Boolean }) clearable = false;
  @property({ type: String })
  set size(value: "sm" | "md" | "lg") {
    this._size = value;
    this.context.size = value;
  }

  @state() selected = "";
  @state() open = false;
  @state() _size: "sm" | "md" | "lg" = "md";

  @state() inputWrapper: Promise<HTMLElement> | undefined;

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
  } as SelectContext;

  connectedCallback(): void {
    super.connectedCallback();
    this.input?.then(input => {
      this.inputWrapper = new Promise(resolve => {
        const wrapper = input.shadowRoot?.querySelector(".input-wrapper");
        resolve(wrapper as HTMLElement);
      });
    });
  }

  protected update(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.update(changedProperties);
  }

  render() {
    const { base } = selectStyle();
    return html`<div class=${base()}>
      <plus-input
        class="plus-input"
        full-width
        .value=${this.selected}
        .error=${this.error}
        .caption=${this.caption}
        .clearable=${this.clearable}
        .disabled=${this.disabled}
        .readonly=${this.readonly}
        .size=${this._size}
        .laceholder=${this.placeholder}
        .label=${this.label}
        .required=${this.required}
        .isSelect=${true}
      >
        <i slot="suffix" class=${!this.open ? "fas fa-angle-down" : "fas fa-angle-up"}></i>
      </plus-input>
      <plus-sticky-box
        class="plus-sticky-box"
        .target=${this.inputWrapper}
        .orientation=${this.orientation}
        @plus-sticky-box-change=${({ detail: { open } }) => (this.open = open)}
      >
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
