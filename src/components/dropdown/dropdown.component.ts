import { html } from "lit";
import { customElement, property, query, queryAsync } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";

@customElement("plus-dropdown")
export class DropdownComponent extends PlusBase {
  @property({ type: String }) size: "sm" | "md" | "lg" = "md";

  @query("slot") defaultSlot: HTMLSlotElement;
  @queryAsync(".dropdown") dropdown: Promise<HTMLElement> | undefined;

  constructor() {
    super();
  }

  private get slotItems() {
    return [...this.defaultSlot?.assignedElements({ flatten: true })].filter(item => item.tagName.toLowerCase() === "plus-dropdown-menu") as any;
  }

  private handleSlotChange() {
    this.slotItems?.forEach((item, _) => {
      item.size = this.size;
    });
  }

  render() {
    return html`
      <div>
        <plus-button class="dropdown" status="primary" id="dropdown">Dropdown <i class="fas fa-caret-down"> </i></plus-button>
        <plus-sticky-box .target=${this.dropdown}>
          <slot @slotchange=${this.handleSlotChange}></slot>
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
