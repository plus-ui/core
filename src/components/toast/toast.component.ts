import { PropertyValueMap, html, nothing } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { PlacementType, SizeType, StatusType } from "../../../src/model/plus-types";
import { PlusBase } from "../../base/plus-base";
import Plus from "../../model/plus";
import { toastStyle } from "./toast.style";

@customElement("plus-toast")
export class ToastComponent extends PlusBase {
  @query(".plus-toast-class") toast!: HTMLElement | undefined;
  @property({ type: String }) size: SizeType = Plus.Sizes.md;
  @property({ type: String }) kind: "filled" | "outlined" = "filled";

  @property({ type: String }) placement: PlacementType = "top-start";
  @property({ type: String }) status: StatusType = "default";
  @property({ type: Boolean, converter: value => value != "false" }) invert = true;
  @property({ type: Boolean, converter: value => value != "false" }) dismiss = true;
  @property({ type: Boolean, attribute: "action-buttons", converter: value => value != "false" }) actionButtons = false;
  @property({ type: Boolean, converter: value => value != "false" }) statusIcon = true;

  @property({ type: Number }) duration: number = 3000;
  @property({ type: String }) position: "top-left" | "top-right" | "bottom-left" | "bottom-right" = "top-right";

  @property({ type: String }) message: string;
  @property({ type: String }) header: string;

  @property({ type: String }) cancelText: string = "Cancel";
  @property({ type: String }) applyText: string = "Apply";

  @state() _icon = "";
  @property({ type: String })
  set icon(value) {
    this._icon = value;
  }
  get icon() {
    const defaultIcon = {
      info: "fa-solid fa-circle-info",
      success: "fa-solid fa-circle-check",
      warning: "fa-solid fa-triangle-exclamation",
      error: "fa-solid fa-circle-exclamation",
    };
    return this._icon ? this._icon : this.statusIcon ? defaultIcon[this.status] : undefined;
  }

  @state() timeOutId;

  protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.firstUpdated(_changedProperties);
  }

  async show() {
    const toastContainer = this.toastContainer();
    if (toastContainer) {
      this.toast.style.display = "block";
      toastContainer.appendChild(this);
      this.timeOutId = setTimeout(() => {
        this.toast.style.display = "none";
      }, this.duration);
    } else {
      this.createToastContainer();
      this.show();
    }
  }

  private createToastContainer() {
    const container = document.createElement("plus-toast-container");
    container.setAttribute("position", this.position);
    container.setAttribute("id", "plus-toast-container-" + this.position);
    document.body.appendChild(container);
  }

  private toastContainer() {
    return document.getElementById("plus-toast-container-" + this.position);
  }

  private mouseEnter() {
    clearTimeout(this.timeOutId);
  }

  private mouseLeave() {
    this.timeOutId = setTimeout(() => {
      this.toast.style.display = "none";
    }, this.duration);
  }

  private close() {
    this.emit("on-close");
    this.toast.style.display = "none";
  }

  private apply() {
    this.emit("on-apply");
  }

  render() {
    const { size, invert, kind, status, placement, message, icon, actionButtons, dismiss, header, cancelText, applyText } = this;
    const { base, iconClass, messageClass, closeClass, contentClass, titleClass, footerClass, containerClass } = toastStyle({ size, kind, status, invert, placement });

    return html`
      <div class=${base()} id=${"toast-" + this.id} style=${"display:none"} @mouseenter=${this.mouseEnter} @mouseleave=${this.mouseLeave}>
        <div class=${containerClass()}>
          ${icon ? html`<i class=${iconClass() + " fa " + icon}></i>` : ""}
          <div class=${contentClass()}>
            ${header ? html`<div class=${titleClass()}>${header}</div>` : nothing} ${message ? html`<div class=${messageClass()}>${message}</div>` : nothing}
            ${actionButtons
              ? html`
                  <div class=${footerClass()}>
                    <plus-button .size=${size} kind="text" @plus-click=${() => this.close()}>${cancelText}</plus-button>
                    <plus-button .size=${size} invert=${status === "default"} status=${status == "default" ? "invert" : status} @plus-click=${() => this.apply()}
                      >${applyText}</plus-button
                    >
                  </div>
                `
              : nothing}
          </div>
          ${dismiss ? html` <div class=${closeClass()} @click=${this.close}><i class="fa fa-solid fa-times"></i></div> ` : nothing}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-toast": ToastComponent;
  }
}
