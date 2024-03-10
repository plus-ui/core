import { html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { PlacementType, SizeType } from "src/model/plus-types";
import Plus from "../../model/plus";
import { FloatingService } from "../../services/floating.service";
import { popconfirmStyle } from "./popconfirm.style";

@customElement("plus-popconfirm")
export class PopconfirmComponent extends FloatingService {
  @property({ type: String }) size: SizeType = Plus.Sizes.md;
  @property({ type: String }) placement: PlacementType = "top";
  @property({ type: Boolean }) showArrow: boolean = true;

  @property({ type: String }) title: string;
  @property({ type: String }) description: string;
  @property({ type: String }) status: "success" | "warning" | "error" | "info" | "default" | "primary" | "attention" = "primary";
  @property() okText: string = "Confirm";
  @property() cancelText: string = "Cancel";
  @property() trigger = "click"; // click manual

  @state() _prefixIcon = "";
  @property({ type: String })
  set prefixIcon(value) {
    this._prefixIcon = value;
  }
  get prefixIcon() {
    const defaultIcon = {
      info: "fa-solid fa-circle-info",
      success: "fa-solid fa-circle-check",
      warning: "fa-solid fa-triangle-exclamation",
      error: "fa-solid fa-xmark-circle",
      attention: "fa-solid fa-circle-exclamation",
    };
    return this._prefixIcon ? this._prefixIcon : defaultIcon[this.status];
  }

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
    const { size, title, prefixIcon, description, showArrow, cancelText, okText, status } = this;
    const { base, contentClass, footerClass, wrapperClass, titleClass, descriptionClass, prefixIconClass, arrowClass } = popconfirmStyle({
      size,
      available: !!(title || description),
      status,
    });

    const renderPrefixIcon = () => {
      if (!prefixIcon) return;
      return html`<div class=${prefixIconClass()}><i class=${prefixIcon}></i></div>`;
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
            <plus-button @click=${this.onConfirm} status=${status != "attention" ? status : "invert"} size=${size}>${okText}</plus-button>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-popconfirm": PopconfirmComponent;
  }
}
