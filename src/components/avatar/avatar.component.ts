import { customElement, property, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { html } from "lit/static-html.js";
import { PlusBase } from "../../base/plus-base";
import Plus from "../../model/plus";
import { avatarStyle } from "./avatar.style";

@customElement("plus-avatar")
export class AvatarComponent extends PlusBase {
  @property() image: string;
  @property() alt: string;
  @property() shape: "circle" | "square" = "circle";
  @property() size: Plus.Sizes | string = Plus.Sizes.md;
  @property() color: string;
  @property() icon: string = "fas fa-user";
  @property({ type: Boolean, converter: value => value != "false" }) invert = false;

  @state() _text = "";
  @property()
  set text(value) {
    const words = value.split(" ");
    const isSizeLargeEnough = this.customSize() ? +this.size >= 24 : Plus.Sizes[this.size] != Plus.Sizes.xs;
    this._text = words[0][0] + (words.length > 1 && isSizeLargeEnough ? words[words.length - 1][0] : "");
  }
  get text() {
    return this._text;
  }

  customSize() {
    return !Object.keys(Plus.Sizes).includes(this.size);
  }

  sizeValue() {
    return this.customSize() ? "custom" : Plus.Sizes[this.size];
  }

  @state() isFallback: boolean = false;

  renderDefaultIcon() {
    return html`<i class=${this.icon}></i>`;
  }

  render() {
    const { shape, size, text, alt, invert } = this;

    const { base, image } = avatarStyle({
      size: this.sizeValue(),
      shape,
      invert,
    });

    const RenderContent = () => {
      if (this.isFallback) {
        if (this.text) {
          return text;
        } else {
          return this.renderDefaultIcon();
        }
      } else if (this.image) {
        return html`<img class=${image()} @error=${() => (this.isFallback = true)} src=${this.image} alt=${this.alt} />`;
      } else if (text) {
        return text;
      } else {
        return this.renderDefaultIcon();
      }
    };

    return html`
      <div role="img" aria-label=${alt || text || "Avatar"} class=${base()} style=${styleMap(this.customSize() ? { ["--size"]: +size + "px" } : {})}>${RenderContent()}</div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-avatar": AvatarComponent;
  }
}
