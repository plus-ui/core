import { PropertyValueMap, unsafeCSS } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { html } from "lit/static-html.js";
import { PlusBase } from "../../base/plus-base";
// @ts-ignore
import { tabStyle } from "./tab.style";
import style from "./tab.style.css?inline";
@customElement("plus-tab-group")
export class TabGroupComponent extends PlusBase {
  static styles = [...PlusBase.styles, unsafeCSS(style)];

  @query(".tab-group") tabGroup: HTMLDivElement;
  @query("slot[name='tabItem'") tabSlot: HTMLSlotElement;
  @query("slot[name='content']") panelSlot: HTMLSlotElement;
  @property({ type: String }) size: "sm" | "md" | "lg" = "md";
  @property({ type: String }) kind: "vertical" | "horizontal" = "horizontal";
  @property({ type: Boolean, converter: value => value != "false" }) disabled = false;

  private get tabItems() {
    return [...this.tabSlot?.assignedElements({ flatten: true })].filter(item => item.tagName.toLowerCase() === "plus-tab") as any;
  }

  private get panelItems() {
    return [...this.panelSlot?.assignedElements({ flatten: true })].filter(item => item.tagName.toLowerCase() === "plus-tab-panel") as any;
  }

  protected handleSlotChange() {
    this.tabItems?.forEach((item, _) => {
      item.setAttribute("size", this.size);
      item.setAttribute("kind", this.kind);
      item.disabled = this.disabled || item.disabled;
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

  render() {
    const { size, disabled, kind } = this;
    const { tabHeader, tabGroup } = tabStyle({ size, disabled, kind });

    return html`
      <div class=${tabGroup()} role="tablist" aria-label="Tab Group">
        <div class=${tabHeader()}>
          <slot name="tabItem" @slotchange=${this.handleSlotChange} @plus-tab-click=${this.handleClickItem}></slot>
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
