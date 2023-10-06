import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { PlusElement } from "../../shared/plus.element";

@customElement("plus-avatar")
export class AvatarComponent extends PlusElement("") {
  @property({ type: String }) text = "";

  render() {
    return html`
      <div>
        <slot>${this.text}</slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-avatar": AvatarComponent;
  }
}