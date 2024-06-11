import { ifDefined } from "lit/directives/if-defined.js";
import { html } from "lit/static-html.js";

import { customElement, property } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";
import { linkStyle } from "./link.style";

@customElement("plus-link")
export class LinkComponent extends PlusBase {
  @property({ type: String }) kind: "default" | "primary" = "default";

  @property() href = "";
  @property() target: "_blank" | "_parent" | "_self" | "_top";
  @property() download?: string;
  @property() rel = "noreferrer noopener";
  @property() size = "inherit";
  @property({ type: Boolean, reflect: true, converter: value => (value == "false" || false ? false : true) }) active = false;
  @property({ type: Boolean, reflect: true, converter: value => (value == "false" || false ? false : true) }) isBreadcrumb = false;

  @property({ type: Boolean, converter: value => value != "false" }) truncated = false;
  @property({ type: String, attribute: "prefix-icon" }) prefixIcon: string;
  @property({ type: String, attribute: "suffix-icon" }) suffixIcon: string;

  private handleClick() {
    this.emit("plus-click");
  }

  render() {
    const { href, target, download, rel, kind, disabled, size, active, isBreadcrumb, truncated, prefixIcon, readonly, suffixIcon } = this;

    const { base, host } = linkStyle({ kind, disabled, active, isBreadcrumb, readonly });

    return html`
      <div class=${host()}>
        <plus-text size=${size} ?truncated=${truncated} class="w-full">
          <a class="${base()}" href="${href}" target="${ifDefined(target)}" download="${ifDefined(download)}" rel="${ifDefined(rel)}" @click="${this.handleClick}">
            ${prefixIcon ? html`<i class="${prefixIcon}"></i>` : ""}
            <slot></slot>
            ${suffixIcon ? html`<i class="${suffixIcon}"></i>` : ""}
          </a>
        </plus-text>
        <slot class="no-underline" name="separator"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-link": LinkComponent;
  }
}
