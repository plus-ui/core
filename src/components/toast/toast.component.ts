import { PropertyValueMap, html } from "lit";
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
  @property({ type: Boolean, converter: value => value != "false" }) invert = false;
  @property({ type: Boolean, converter: value => value != "false" }) dismiss = false;
  @property({ type: Number }) duration: number = 3000;
  @property({ type: String }) position: "top-left" | "top-right" | "bottom-left" | "bottom-right" = "top-right";

  @property({ type: String }) message: string;

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
    return this._icon ? this._icon : defaultIcon[this.status];
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

  render() {
    const { size, invert, kind, status, placement, message, icon } = this;
    const { base, iconClass, messageClass, closeClass } = toastStyle({ size, kind, status, invert, placement });

    return html`
      <div class=${base()} id=${"toast-" + this.id} style=${"display:none"} @mouseenter=${this.mouseEnter} @mouseleave=${this.mouseLeave}>
        <div class=${messageClass()}>
          ${icon ? html`<i class=${iconClass() + " fa " + icon}></i>` : ""}
          <span><slot>${message}</slot></span>
        </div>
        ${this.dismiss ? html`<div class=${closeClass()}><i class="fa fa-solid fa-times"></i></div>` : ""}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-toast": ToastComponent;
  }
}
