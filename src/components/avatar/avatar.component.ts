import { PlusBase } from "../../base/plus-base";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("plus-avatar")
export class AvatarComponent extends PlusBase {
  @property({ type: String }) text = "";

  render() {
    return html`
      <div class="text-blue-400">
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
