import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";
import Plus from "../../model/plus";
import { SizeType } from "../../model/plus-types";
import { drawerStyle } from "./drawer.style";

@customElement("plus-drawer")
export class DrawerComponent extends PlusBase {
  @property() size: SizeType = Plus.Sizes.md;
  @property({ type: Boolean }) isOpen: boolean = false;
  @property({ type: String }) orientation: "left" | "right" | "top" | "bottom" = "right";

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("plus-drawer-before-show", this.drawerShow);
    this.addEventListener("plus-drawer-before-hide", this.drawerHide);
  }

  hide() {
    this.emit("plus-drawer-before-hide");
  }

  private drawerHide() {
    this.isOpen = false;
    this.emit("plus-drawer-hide");
  }

  show() {
    this.emit("plus-drawer-before-show");
  }

  private drawerShow() {
    this.isOpen = true;
    this.emit("plus-drawer-show");
  }

  render() {
    const { size, isOpen, orientation } = this;
    const { base, drawerClass, drawerOverlay, drawerContainer, drawerHeader, drawerBody, drawerFooter, drawerCloseButtonClass } = drawerStyle({ size, isOpen, orientation });

    return html`<div class=${base()}>
      <div class=${drawerOverlay()}></div>
      <div class=${drawerClass()}>
        <div class=${drawerContainer()}>
          <slot name="close">
            <button class=${drawerCloseButtonClass()} aria-label="Close" @click=${() => this.hide()}><i class="fas fa-xmark"></i></button>
          </slot>
          <div class=${drawerHeader()}>
            <slot name="header"></slot>
          </div>
          <div class=${drawerBody()}>
            <slot name="body"></slot>
            <slot></slot>
          </div>
          <div class=${drawerFooter()}>
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-drawer": DrawerComponent;
  }
}
