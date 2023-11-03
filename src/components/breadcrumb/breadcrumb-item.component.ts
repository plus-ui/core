import { customElement, property } from "lit/decorators.js";
import { html } from "lit/static-html.js";
import { PlusBase } from "../../base/plus-base";
import { breadCrumbItemStyle } from "./breadcrumb-item.style";

@customElement("plus-breadcrumb-item")
export class BreadCrumbItemComponent extends PlusBase {
  @property({ type: String, reflect: true }) url: string;
  @property({ type: String, reflect: true }) label: string;
  @property({ type: Boolean, reflect: true, converter: value => (value == "false" ? false : true) }) active;
  @property({ type: String, reflect: true }) prefixIcon: string;
  @property({ type: String, reflect: true }) suffixIcon: string;
  @property({ type: Boolean, reflect: true }) iconOnly: boolean;
  @property({ type: String, reflect: true }) seperator: string = "/";
  @property({ type: Boolean }) isLast: boolean = false;


  render() {
    const { label, active, prefixIcon, suffixIcon, iconOnly, isLast, disabled, readonly, url } = this;
    const { main, seperator, linkClass, hrefClass } = breadCrumbItemStyle({ active, disabled, readonly });
    return html`
      <div class=${main()} @click=${() => (!disabled || !readonly) && this.emit("plus-breadcrum-change")}>
        <section class=${linkClass()}>
            ${(prefixIcon || iconOnly) && html`<i class=${prefixIcon}></i>`}
            ${!iconOnly && html`<a class=${hrefClass()} href=${url}>${label}</a> `}
            ${suffixIcon && html`<i class=${suffixIcon}></i>`}
        </section>
        ${isLast ? html`` : html`<span class=${seperator()}>${this.seperator}</span>`}</div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-breadcrumb-item": BreadCrumbItemComponent;
  }
}
