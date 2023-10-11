import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";
import { badgeStyle } from "./badge.style";
import { ColorHelper } from "../../helper/color-helper";
import {withTailwind} from 'vite-lit-with-tailwind';
import elementStyles from './../../shared/tailwind.global.css?inline';

@customElement("plus-badge")
@withTailwind(elementStyles)
export class BadgeComponent extends PlusBase {

  
  @property({ type: String }) color!: string;
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
        class="${base()} bg-blue-500"
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
