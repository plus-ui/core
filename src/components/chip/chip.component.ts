import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";
import { chipStyle } from "./chip.style";

@customElement("plus-chip")
export class ChipComponent extends PlusBase {
  @property({ type: String }) size: "sm" | "md" | "lg" = "md";
  @property({ type: String }) kind: "filled" | "outlined" = "filled";
  @property({ type: String }) status: "success" | "warning" | "error" | "info" | "default" = "default";
  @property({ type: Boolean, converter: value => value != "false" }) invert = false;
  @property({ type: String, attribute: "prefix-icon" }) prefixIcon!: string;

  // next version of plus-badge
  @property({ type: String }) color!: string;

  render() {
    const { size, disabled, status, kind, invert, prefixIcon } = this;

    const { base } = chipStyle({ size, kind, status, disabled, invert });
    return html`
      <div class=${base()}>
        ${prefixIcon ? html`<i class="${prefixIcon}"></i>` : ""}
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-chip": ChipComponent;
  }
}
