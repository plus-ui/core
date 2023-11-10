import { css, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { html, unsafeStatic } from "lit/static-html.js";
import { PlusBase } from "../../base/plus-base";
import { ratingStyle } from "./rating.style";

@customElement("plus-rating")
export class RatingComponent extends PlusBase {
  static host = css`
    :host {
      display: block;
    }
  `;

  static styles = [...PlusBase.styles, unsafeCSS(RatingComponent.host)];

  @property({ type: String }) kind: "default" | "icon" | "face" = "default";
  @property({ type: String }) status: "default" | "primary" | "custom" = "default";
  @property({ type: String }) size: "sm" | "md" | "lg" = "md";
  @property({ attribute: "empty-icon" }) emptyIcon: string = `<i class="fa-regular fa-star"></i>`;
  @property() icon: string = `<i class="fa-solid fa-star"></i>`;

  @property({ type: Number }) max = 5;
  @property({ type: Number }) step = 1;
  @property({ type: Number, attribute: "default-value" }) defaultValue = 0;
  @property({ type: Number, reflect: true }) value = 0;
  @property({ type: Number }) hoveredValue = 0;

  @property({ type: Boolean }) half: boolean = false;

  @property() name: string;

  @state() hasFocus = false;

  calculateSelectedWidth(index: number, half = false, val = 0) {
    const value = val / this.step;
    const floor = Math.floor(value);
    const ceil = Math.ceil(value);
    const isHalf = floor !== ceil;
    const isLast = index === ceil;
    const isBetween = index >= floor && index < ceil;
    const isExact = index === floor;
    const isFull = index < floor;

    if (isHalf && isLast) {
      const decimal = value - floor;
      const percentage = decimal * 100;
      return half ? "50%" : `${percentage}%`;
    }

    if (isBetween) {
      return "100%";
    }

    if (isExact) {
      return "100%";
    }

    if (isFull) {
      return "100%";
    }

    return "0%";
  }

  hoveredWidth(index: number) {
    if (this.hoveredValue > 0) {
      return this.calculateSelectedWidth(index, true, this.hoveredValue);
    } else if (this.value > 0) {
      return this.calculateSelectedWidth(index, true, this.value);
    } else {
      return "0%";
    }
  }

  handleSelect = (value: number) => () => {
    this.value = value;
    this.emit("plus-change", { detail: { value } });
  };

  render() {
    const { size } = this;
    const { host, box, predefined, empty, hovered, icon } = ratingStyle({ size });

    return html`<div class="${host()}" @mouseleave="${() => (this.hoveredValue = 0)}">
      ${Array.from({ length: this.max }).map((_, i) => {
        return html`
          <div class="${box()}" @mouseover="${() => (this.hoveredValue = i + 1)}" @click="${this.handleSelect(i + 1)}">
            <div class="${empty()}">${unsafeStatic(this.emptyIcon)}</div>
            <div
              class="${icon()} ${predefined()}"
              style="${styleMap({
                width: this.calculateSelectedWidth(i + 1, false, this.defaultValue),
              })}"
            >
              ${unsafeStatic(this.icon)}
            </div>
            <div class="${icon()} ${hovered()}" style="${styleMap({ width: this.hoveredWidth(i + 1) })}">${unsafeStatic(this.icon)}</div>
          </div>
        `;
      })}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-rating": RatingComponent;
  }
}
