import { css, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";

@customElement("plus-avatar-group")
export class AvatarGroupComponent extends PlusBase {
  static hostStyle = css`
    :host {
      display: flex;
      align-items: center;
    }
    ::slotted(plus-avatar) {
      position: relative;
      margin-left: -12px;
    }
    ::slotted(plus-avatar:first-child) {
      margin-left: 0;
    }
  `;

  static styles = [...PlusBase.styles, unsafeCSS(AvatarGroupComponent.hostStyle)];

  render() {
    return html` <slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-avatar-group": AvatarGroupComponent;
  }
}
