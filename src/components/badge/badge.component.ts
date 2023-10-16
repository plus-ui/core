import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";
import { ColorHelper } from "../../helper/color-helper";
import { badgeStyle } from "./badge.style";
@customElement("plus-badge")
export class BadgeComponent extends PlusBase {
    @property({ type: String }) size: "sm" | "md" | "lg" = "md";
    @property({ type: String }) kind: "dot" | "text" = "text";
    @property({ type: Boolean, converter: value => value != "false" }) invert = false;
    @property({ type: String }) placement: "top-left" | "top-right" | "bottom-left" | "bottom-right" = "top-right";
    @property({ type: String }) content!: string;
    @property({ type: String }) status!: "success" | "warning" | "error" | "info";


    @property({ type: String }) color!: string;


    render() {
        const { size, color, invert } = this;

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
            ...(dc["--badge-bg"] && {
                "--badge-text": ColorHelper.getContrastingTextColor(dc["--badge-bg"]),
            }),
        };

        const { base } = badgeStyle({ size });
        return html`
            <div class="${base()} bg-blue-500" style="${ColorHelper.objectToCssString(style)}" role="status" aria-live="polite">
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
