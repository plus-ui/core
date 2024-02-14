import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { PlacementType, SizeType } from "src/model/plus-types";
import Plus from "../../model/plus";
import { FloatingService } from "../../services/floating.service";
import { dialogStyle } from "./dialog.style";

@customElement("plus-dialog")
export class DialogComponent extends FloatingService {
  @property({ type: String }) size: SizeType = Plus.Sizes.md;
  @property({ type: String }) placement: PlacementType = "top";
  @property({ type: Boolean }) showArrow: boolean = true;
  @property({ type: String }) prefixIcon: string = "fas fa-heart-circle-plus";
  @property({ type: String }) title: string;
  @property({ type: String }) description: string;
  @property() okText: string = "Confirm";
  @property() cancelText: string = "Cancel";
  @property() trigger = "click"; // click manual

  private onConfirm() {
    this.emit("plus-confirm");
    this.hide();
  }

  private onCancel() {
    this.emit("plus-cancel");
    this.hide();
  }

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
    const { size, title, prefixIcon, description, showArrow, cancelText, okText } = this;
    const { base, contentClass, footerClass, wrapperClass, titleClass, descriptionClass, prefixIconClass, arrowClass } = dialogStyle({ size, available: !!(title || description) });

    const renderPrefixIcon = () => {
      if (prefixIcon === "") return;
      return html`<i class=${prefixIconClass() + " " +  prefixIcon}></i>`;
    };

    return html`
      <slot @slotchange=${this.handleSlotChange.bind(this)}></slot>
      <div class=${base()}>
        <div class=${wrapperClass()}>
          <div class=${contentClass()}>
            ${showArrow && !!(title || description) ? html`<div class=${arrowClass()}></div>` : ""}
            ${title ? html`<div class=${titleClass()}>${renderPrefixIcon()}<span>${title}</span></div>` : ""}
            ${description ? html`<div class=${descriptionClass()}>${description}</div>` : ""}
          </div>
          <div class=${footerClass()}>
            <plus-button @click=${this.onCancel} size=${size}>${cancelText}</plus-button>
            <plus-button @click=${this.onConfirm} status="primary" size=${size}>${okText}</plus-button>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-dialog": DialogComponent;
  }
}
