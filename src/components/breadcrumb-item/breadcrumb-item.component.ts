import { unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { html } from "lit/static-html.js";
import { PlusBase } from "../../base/plus-base";
import { breadCrumbItemStyle } from "./breadcrumb-item.style";
// @ts-ignore
import style from "./breadcrumb-item.style.css?inline";

@customElement("plus-breadcrumb-item")
export class BreadComponentNavItem extends PlusBase {
  @property({ type: String, reflect: true }) href: string;
  @property({ type: String, reflect: true }) text: string;
  @property({ type: Boolean, reflect: true, converter: value => (value == "false" || false ? false : true) }) active;
  @property({ type: String, reflect: true }) prefixIcon: string;
  @property({ type: String, reflect: true }) suffixIcon: string;
  @property({ type: String, reflect: true }) separator: string = "/";
  @property({ type: String, reflect: true }) size: "sm" | "md" | "lg" = "md";

  static styles = [...PlusBase.styles, unsafeCSS(style)];

  private handleClick(e) {
    if (this.disabled || this.readonly) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    this.emit("plus-click");
  }

  render() {
    const { active, prefixIcon, suffixIcon, disabled, readonly, href, text, size } = this;
    const { host, separator, linkClass } = breadCrumbItemStyle({ disabled, readonly, active, size });
    return html`
      <div class=${host()} aria-current=${active ? "page" : "false"}>
        <a .href=${href} class=${linkClass()} @click=${this.handleClick}>
          <slot name="prefix"> ${prefixIcon ? html`<i class=${prefixIcon}></i>` : null}</slot>
          <slot>${text}</slot>
          <slot name="suffix"> ${suffixIcon ? html`<i class=${suffixIcon}></i>` : null}</slot>
        </a>
        ${html`<span class=${separator()}>${this.separator}</span>`}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-breadcrumb-item": BreadComponentNavItem;
  }
}
