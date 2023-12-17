import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { PlusBase } from "../../base/plus-base";
import { badgeStyle } from "./badge.style";
@customElement("plus-badge")
export class BadgeComponent extends PlusBase {
  @property({ type: String }) size: "sm" | "md" | "lg" = "md";
  @property({ type: String }) kind: "dot" | "text" = "text";
  @property({ type: Boolean, converter: value => value != "false" }) invert = false;
  @property({ type: String }) placement: "top-left" | "top-right" | "bottom-left" | "bottom-right" = "top-right";
  @property({ type: String }) content!: string;
  @property({ type: String }) status: "success" | "warning" | "error" | "info" | "default" = "default";
  @property({ type: String }) backgroundColor!: string;
  @property({
    type: Array,
    converter: value => {
      const split = value ? value.split(",") : [];
      if (split?.length > 1) {
        return [split[0], split[1]];
      } else {
        return [value, value];
      }
    },
  })
  offset!: [string, string];

  // next version of plus-badge
  @property({ type: String }) color!: string;

  render() {
    const { size, invert, kind, status, placement, content, offset } = this;

    const { base } = badgeStyle({ size, kind, status, invert, placement, isSingleChar: content?.length === 1 });
    return html`
      <div class="relative box-border inline-block" role="status" aria-live="polite">
        <slot></slot>
        <div
          class=${base()}
          style=${styleMap({
            ...(offset && { transform: `translate(${offset[0]}, ${offset[1]})` }),
          })}
        >
          ${content}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-badge": BadgeComponent;
  }
}
