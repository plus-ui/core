import { PlusBase } from "../../base/plus-base";
import { customElement, property, html } from "lit-element";

@customElement("plus-avatar")
export class AvatarComponent extends PlusBase {
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
