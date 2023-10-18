import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";
import { ColorHelper } from "../../helper/color-helper";
import { badgeStyle } from "./badge.style"
;
@customElement("plus-badge")
export class BadgeComponent extends PlusBase {
  @property({ type: String }) size: "sm" | "md" | "lg" = "md";
  @property({ type: String }) kind: "dot" | "text" = "text";
  @property({ type: Boolean, converter: value => value != "false" }) invert = false;
  @property({ type: String }) placement: "top-left" | "top-right" | "bottom-left" | "bottom-right" = "top-right";
  @property({ type: String }) content!: string;
  @property({ type: String }) status: "success" | "warning" | "error" | "info" | "default" = "default";

  // next version of plus-badge
  @property({ type: String }) color!: string;

  render() {
    const { size, color, invert, kind, status, placement, content } = this;


    const { base } = badgeStyle({ size, kind, status, invert, placement });
    return html`
      <div class="relative box-border inline-block" role="status" aria-live="polite">
        <slot> </slot>
        <div class=${base()}>${content}</div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-badge": BadgeComponent;
  }
}
