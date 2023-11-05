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
  @property() text?: string;

  isSizeLargeEnough() {
    return this.customSize() ? +this.size >= 24 : Plus.Sizes[this.size] != "xs";
  }

  getText() {
    const words = this.text?.split(" ");
    if (!words) return;
    return words[0][0] + (words.length > 1 && this.isSizeLargeEnough() ? words[words.length - 1][0] : "");
  }

  customSize() {
    return !Object.keys(Plus.Sizes).includes(this.size);
  }

  sizeValue() {
    return this.customSize() ? "custom" : Plus.Sizes[this.size];
  }

  @state() isFallback: boolean = false;

  // renderDefaultIcon() {
  //   return html`<i class=${this.icon}></i>`;
  // }

  render() {
    const { shape, size, alt, invert } = this;

    const text = this.getText();

    const { base, image, icon } = avatarStyle({
      size: this.sizeValue(),
      shape,
      invert,
    });

    const renderDefaultIcon = () => { return html`<i class=${icon() + " " + this.icon}></i>`; }

    const RenderContent = () => {
      if (this.isFallback) {
        if (this.text) {
          return text;
        } else {
          return renderDefaultIcon();
        }
      } else if (this.image) {
        return html`<img class=${image()} @error=${() => (this.isFallback = true)} src=${this.image} alt=${this.alt} />`;
      } else if (text) {
        return text;
      } else {
        return renderDefaultIcon();
      }
    };

    return html`
      <div role="img" aria-label=${alt || this.text || "Avatar"} class=${base()} style=${styleMap(this.customSize() ? { ["--size"]: +size + "px" } : {})}>${RenderContent()}</div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-avatar": AvatarComponent;
  }
}
