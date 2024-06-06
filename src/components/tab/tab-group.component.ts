import { PropertyValueMap, unsafeCSS } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { html } from "lit/static-html.js";
import { PlusBase } from "../../base/plus-base";
import { tabStyle } from "./tab.style";
// @ts-ignore
import style from "./tab.style.css?inline";
@customElement("plus-tab-group")
export class TabGroupComponent extends PlusBase {
  static styles = [...PlusBase.styles, unsafeCSS(style)];

  @query(".tab-group") tabGroup: HTMLDivElement;
  @query("slot[name='tabItem'") tabSlot: HTMLSlotElement;
  @query("slot[name='content']") panelSlot: HTMLSlotElement;
  @property({ type: String }) size: "sm" | "md" | "lg" = "md";
  @property({ type: String }) orientation: "vertical" | "horizontal" = "horizontal";
  @property({ type: Boolean, converter: value => value != "false" }) disabled = false;
  @property({ type: Boolean, converter: value => value != "false" }) dismiss = false;

  private get tabItems() {
    return [...this.tabSlot?.assignedElements({ flatten: true })].filter(item => item.tagName.toLowerCase() === "plus-tab") as any;
  }

  private get panelItems() {
    return [...this.panelSlot?.assignedElements({ flatten: true })].filter(item => item.tagName.toLowerCase() === "plus-tab-panel") as any;
  }

  protected handleSlotChange() {
    this.tabItems?.forEach((item, _) => {
      item.setAttribute("size", this.size);
      item.setAttribute("orientation", this.orientation);
      item.disabled = this.disabled || item.disabled;
      item.dismiss = this.dismiss || item.dismiss;
    });
  }

  protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.updated(_changedProperties);
    this.handleSlotChange();
  }

  handleClickItem({ target }: Event) {
    const _target = target as HTMLElement;
    const _parent = _target.parentElement;
    if (target instanceof HTMLElement && target.tagName.toLowerCase() === "plus-tab") {
      const { id } = target;
      this.tabItems?.forEach((item, _) => {
        item.active = item.id === id;
        this.emit("plus-change", { detail: { id } });
      });
      const activeItem = this.tabItems?.find(item => item.active);
      this.panelItems?.forEach((panel, _) => {
        panel.active = activeItem?.value === panel.value;
      });
    }
  }

  handleDismiss() {
    return ({ target }: Event) => {
      const _target = target as HTMLElement;
      if (target instanceof HTMLElement && target.tagName.toLowerCase() === "plus-tab") {
        const { id } = target;
        const findItem = this.tabItems?.find(item => item.id === id);
        const findPanel = this.panelItems?.find(panel => panel.value === findItem?.value);
        if (findItem && findPanel) {
          const isActived = findItem.active;
          findItem.isRemoved = true;
          findPanel.isRemoved = true;
          if (isActived) {
            const nextItem = this.tabItems?.find(item => !item.isRemoved);
            const nextPanel = this.panelItems?.find(panel => panel.value === nextItem?.value);
            if (nextItem && nextPanel) {
              nextItem.active = true;
              nextPanel.active = true;
            }
          }
        }
      }
    };
  }

  render() {
    const { size, disabled, orientation } = this;
    const { tabHeader, tabGroup } = tabStyle({ size, disabled, orientation });

    return html`
      <div class=${tabGroup()} role="tablist" aria-label="Tab Group">
        <div class=${tabHeader()}>
          <slot name="tabItem" @slotchange=${this.handleSlotChange} @plus-tab-click=${this.handleClickItem} @plus-dismiss=${this.handleDismiss()}></slot>
        </div>
        <div class="flex w-full flex-col items-start justify-start">
          <slot name="content"></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-tab-group": TabGroupComponent;
  }
}
