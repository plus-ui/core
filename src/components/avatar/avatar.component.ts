import { html } from "lit/static-html.js";

import { customElement, property, state } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";
import { avatarStyle } from "./avatar.style";
import Plus from "../../model/plus";
import { styleMap } from "lit/directives/style-map.js";

@customElement("plus-avatar")
export class AvatarComponent extends PlusBase {
  @property() image: string;
  @property() alt: string;
  @property() shape: "circle" | "square" = "circle";
  @property() size: Plus.Sizes | string = Plus.Sizes.md;
  @property() color: string;
  @property() icon: string = "fas fa-user";

  @state() _text = "";
  @property()
  set text(value) {
    const words = value.split(" ");
    this._text = words[0][0] + (words.length > 1 ? words[words.length - 1][0] : "");    
  }
  get text() {
    return this._text;
  }

  @state() isFallback: boolean = false;

  renderDefaultIcon() {
    return html`<i class=${this.icon}></i>`;
  }

  render() {
    const { shape, size, text, alt } = this;
    const customSize = !Object.keys(Plus.Sizes).includes(size);

    const { base, image } = avatarStyle({
      size: !customSize ? Plus.Sizes[size] : "custom",
      shape,
    });

    const RenderContent = () => {
      if (this.isFallback) {
        if (this.text) {
          return text;
        } else {
          return this.renderDefaultIcon();
        }
      } else if (this.image) {
        return html`<img
          class=${image()}
          @error=${() => (this.isFallback = true)}
          src=${this.image}
          alt=${this.alt}
        />`;
      } else if (text) {
        return text;
      } else {
        return this.renderDefaultIcon();
      }
    };

    return html`
      <div
        role="img"
        aria-label=${alt || text || "Avatar"}
        class=${base()}
        style=${styleMap(customSize ? { ["--size"]: +size + "px" } : {})}
      >
        ${RenderContent()}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-avatar": AvatarComponent;
  }
}
