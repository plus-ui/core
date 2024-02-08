import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { PlacementType, SizeType } from "src/model/plus-types";
import { PlusBase } from "../../base/plus-base";
import Plus from "../../model/plus";
import { tooltipStyle } from "./tooltip.style";

@customElement("plus-tooltip")
export class TooltipComponent extends PlusBase {
  @property({ type: String }) size: SizeType = Plus.Sizes.md;
  @property({ type: String }) placement: PlacementType = "top-start";
  @property({ type: String }) message: string;
  @property({ type: String }) description: string;

  render() {
    const { size, message, description } = this;
    const { base, messageClass, descriptionClass } = tooltipStyle({ size, available: !!(message || description) })

    return html`
      <slot></slot>
      <div class=${base()}>
        ${message ? html`<div class=${messageClass()}>${message}</div>` : ""}
        ${!!(message && description) ? html`<plus-divider></plus-divider>` : ""}
        ${description ? html`<div class=${descriptionClass()}>${description}</div>` : ""}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-tooltip": TooltipComponent;
  }
}
