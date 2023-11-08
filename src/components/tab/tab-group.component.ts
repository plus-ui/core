import { customElement, property, query } from "lit/decorators.js";
import { html } from "lit/static-html.js";
import { PlusBase } from "../../base/plus-base";
// @ts-ignore
import style from "./tab-group.css?inline";

@customElement("plus-tab-group")
export class TabGroupComponent extends PlusBase {
  @query(".tab-group") tabGroup: HTMLDivElement;
  @query("slot") defaultSlot: HTMLSlotElement;
  @query("slot[name='content']") panelSlot: HTMLSlotElement;
  @property({ type: String }) size: "sm" | "md" | "lg" = "md";
  @property({ type: String }) align: "vertical" | "horizontal" = "horizontal";

  private get tabItems() {
    return [...this.defaultSlot?.assignedElements({ flatten: true })].filter(item => item.tagName.toLowerCase() === "plus-tab") as any;
  }

  private get panelItems() {
    return [...this.panelSlot?.assignedElements({ flatten: true })].filter(item => item.tagName.toLowerCase() === "plus-tab-panel") as any;
  }

  protected handleSlotChange() {
    this.panelItems?.forEach((panel, _) => {
      panel.slot = "content";
    });
  }

  handleClickItem({ target }: Event) {
    if (target instanceof HTMLElement && target.tagName.toLowerCase() === "plus-tab") {
      const { id } = target;
      this.tabItems?.forEach((item, _) => {
        item.active = item.id === id;
      });
      const activeItem = this.tabItems?.find(item => item.active);
      this.panelItems?.forEach((panel, _) => {
        panel.active = activeItem?.value === panel.value;
      });
    }
  }

  render() {
    return html`
      <div class="tab-group flex flex-col justify-start items-start gap-2" role="tablist" aria-label="Tab Group">
        <div class="flex flex-row items-center justify-start gap-2">
          <slot @slotchange=${() => this.handleSlotChange()} @click=${this.handleClickItem}></slot>
        </div>
        <div class="-mt-[6px] flex h-[2px] w-full flex-row items-end justify-between rounded-md bg-color-default"></div>
        <slot class="flex flex-row justify-start items-start" name="content"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-tab-group": TabGroupComponent;
  }
}
