import { html } from "lit";
import { customElement, property, queryAssignedNodes } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";

@customElement("plus-accordion-group")
export class PlusAccordionGroup extends PlusBase {
  @queryAssignedNodes({ flatten: true }) accordions!: Array<Node>;
  @property({ type: Boolean, reflect: true, converter: value => value != "false" }) multi = false;

  constructor() {
    super();
  }

  private handleSlotChange(): void {
    const accordions = this.accordions.filter(el => el.tagName?.toLowerCase() == "plus-accordion");
    accordions?.forEach((accordion: any) => {
      accordion.isGrouped = true;
      const isLast = accordions.indexOf(accordion) == accordions.length - 1;
      accordion.isLast = isLast;
      accordion.addEventListener("plus-accordion-toggle", (event: any) => {
        if (!this.multi && event.detail.open) {
          accordions.forEach((el: any) => {
            if (el != event.target) {
              el.open = false;
            }
          });
        }
      });
    });
  }

  render() {
    return html` <div class="rounded-md border border-color-default font-sans antialiased">
      <slot @slotchange=${this.handleSlotChange}></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-accordion-group": PlusAccordionGroup;
  }
}
