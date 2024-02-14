import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";
import Plus from "../../model/plus";
import { SizeType } from "../../model/plus-types";
import { modalStyle } from "./modal.style";

@customElement("plus-modal")
export class ModalComponent extends PlusBase {
  // modal özellikleri
  // show ve hide metotları olur
  // eventler fire eder
  // size özelliği olur
  @property() size: SizeType = Plus.Sizes.md;

  hide() {
    this.emit("plus-modal-hide");
  }

  show() {
    this.emit("plus-modal-show");
  }

  render() {
    const { size } = this;
    const { base, modalClass, modalOverlay, modalContainer, modalHeader, modalBody, modalFooter, modalCloseButtonClass } = modalStyle({ size });

    return html`<div class=${base()}>
      <div class=${modalOverlay()}></div>
      <div class=${modalClass()}>
        <div class=${modalContainer()}>
          <slot name="close">
            <button class=${modalCloseButtonClass()} aria-label="Close" @click=${() => this.hide()}><i class="fas fa-xmark"></i></button>
          </slot>
          <div class=${modalHeader()}>
            <slot name="header"></slot>
          </div>
          <div class=${modalBody()}>
            <slot name="body"></slot>
            <slot></slot>
          </div>
          <div class=${modalFooter()}>
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-modal": ModalComponent;
  }
}
