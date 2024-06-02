import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { PlusBase } from "../../base/plus-base";
import { badgeStyle } from "./badge.style";
@customElement("plus-badge")
export class BadgeComponent extends PlusBase {
  @property({ type: String }) kind: "dot" | "text" = "text";
  @property({ type: String }) status: "success" | "warning" | "error" | "info" | "default" = "default";
  @property({ type: String }) size: "sm" | "md" | "lg" = "md";
  @property({ type: Boolean, converter: value => value != "false" }) invert = false;
  @property({ type: String }) content!: string;
  @property({ type: String }) orientation: "top-left" | "top-right" | "bottom-left" | "bottom-right" = "top-right";
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

  render() {
    const { size, invert, kind, status, orientation, content, offset } = this;

    const { base } = badgeStyle({ size, kind, status, invert, orientation, isSingleChar: content?.length === 1 });
    return html`
      <div class="relative box-border" role="status" aria-live="polite">
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
