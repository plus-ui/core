import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("plus-avatar")
export class AvatarComponent extends LitElement {
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