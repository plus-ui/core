import { PlusBase } from "../../base/plus-base";
import { customElement, property, html } from "lit-element";
import { badgeStyle } from "./badge.style";
import { ColorHelper } from "../../helper/color-helper";

@customElement("plus-badge")
export class BadgeComponent extends PlusBase {  @property({ type: String }) color;
@property({ type: String }) size: "small" | "medium" | "large" = "medium";

render() {
  const { size, color } = this;

  const { tone, colorName } = ColorHelper.parseColorString(color);

  const dc = ColorHelper.generateColorVariables({
    color: colorName,
    tones: {
      [tone]: ["bg"],
    },
    variable: "--plus-badge",
  });

  const style = {
    ...dc,
    ...(dc["--bcm-badge-bg"] && {
      "--bcm-badge-text": ColorHelper.getContrastingTextColor(
        dc["--bcm-badge-bg"]
      ),
    }),
  };

  const { base } = badgeStyle({ size });
  return html`
    <div
      class="${base()}"
      style="${ColorHelper.objectToCssString(style)}"
      role="status"
      aria-live="polite"
    >
      <slot></slot>
    </div>
  `;
}
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-badge": BadgeComponent;
  }
}
