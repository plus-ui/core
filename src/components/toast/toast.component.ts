import { html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { PlacementType, SizeType, StatusType } from "src/model/plus-types";
import { PlusBase } from "../../base/plus-base";
import Plus from "../../model/plus";
import { toastStyle } from "./toast.style";

@customElement("plus-toast")
export class ToastComponent extends PlusBase {
  @property({ type: String }) size: SizeType = Plus.Sizes.md;
  @property({ type: String }) kind: "filled" | "outlined" = "filled";

  @property({ type: String }) placement: PlacementType = "top-start";
  @property({ type: String }) status: StatusType = "default";
  @property({ type: Boolean, converter: value => value != "false" }) invert = false;
  @property({ type: Boolean, converter: value => value != "false" }) dismiss = false;

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

  render() {
    const { size, invert, kind, status, placement, message, icon } = this;
    const { base, iconClass, messageClass, closeClass } = toastStyle({ size, kind, status, invert, placement });

    return html`
      <div class=${base()}>
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
