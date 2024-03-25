import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";
import Plus from "../../model/plus";
import { SizeType } from "../../model/plus-types";
import { modalStyle } from "./modal.style";

@customElement("plus-modal")
export class ModalComponent extends PlusBase {
  @property() size: SizeType = Plus.Sizes.md;
  @property({ type: Boolean, attribute: "is-open" }) isOpen: boolean = false;

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("plus-modal-before-show", this.modalShow);
    this.addEventListener("plus-modal-before-hide", this.modalHide);
  }

  hide() {
    this.emit("plus-modal-before-hide");
  }

  private modalHide() {
    this.isOpen = false;
    this.emit("plus-modal-hide");
  }

  show() {
    this.emit("plus-modal-before-show");
  }

  private modalShow() {
    this.isOpen = true;
    this.emit("plus-modal-show");
  }

  render() {
    const { size, isOpen } = this;
    const { base, modalClass, modalOverlay, modalContainer, modalHeader, modalBody, modalFooter, modalCloseButtonClass } = modalStyle({ size, isOpen });

    return html`<div class=${base()}>
      <div class=${modalOverlay()} aria-label="Close" @click=${() => this.hide()}></div>
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
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-modal": ModalComponent;
  }
}
