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

  private handleClick() {
    this.emit("plus-click");
  }

  render() {
    const { href, target, download, rel, kind } = this;

    const { base } = linkStyle({ kind });

    return html`
      <plus-text size="inherit">
        <a class="${base()}" href="${href}" target="${ifDefined(target)}" download="${ifDefined(download)}" rel="${ifDefined(rel)}" @click="${this.handleClick}">
          <slot></slot>
        </a>
      </plus-text>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-link": LinkComponent;
  }
}
