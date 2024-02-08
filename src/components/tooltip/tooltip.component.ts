import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { PlacementType, SizeType } from "src/model/plus-types";
import Plus from "../../model/plus";
import { FloatingService } from "../../services/floating.service";
import { tooltipStyle } from "./tooltip.style";

@customElement("plus-tooltip")
export class TooltipComponent extends FloatingService {
  @property({ type: String }) size: SizeType = Plus.Sizes.md;
  @property({ type: String }) placement: PlacementType = "top";
  @property({ type: Boolean }) showArrow: boolean = true;
  @property({ type: String }) message: string;
  @property({ type: String }) description: string;
  @property() trigger = "hover focus"; // hover focus click manual

  constructor() {
    super();
  }

  protected firstUpdated() {
    this.options = {
      ...this.options,
      position: this.placement,
      showArrow: this.showArrow,
    };
  }

  render() {
    const { size, message, description, showArrow } = this;
    const { base, messageClass, descriptionClass, arrowClass } = tooltipStyle({ size, available: !!(message || description) });

    return html`
      <slot @slotchange=${this.handleSlotChange.bind(this)}></slot>
      <div class=${base()}>
        ${showArrow && !!(message || description) ? html`<div class=${arrowClass()}></div>` : ""} ${message ? html`<div class=${messageClass()}>${message}</div>` : ""}
        ${!!(message && description) ? html`<plus-divider></plus-divider>` : ""} ${description ? html`<div class=${descriptionClass()}>${description}</div>` : ""}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-tooltip": TooltipComponent;
  }
}
