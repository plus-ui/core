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
  // dismiss
  @property({ type: Boolean, converter: value => value != "false" }) dismiss = false;

  onDismiss() {
    this.emit("plus-dismiss");
  }

  // next version of plus-badge
  @property({ type: String }) color!: string;

  render() {
    const { size, disabled, status, kind, invert, prefixIcon, dismiss } = this;

    const { base, dismissClass } = chipStyle({ size, kind, status, disabled, invert });
    return html`
      <div class=${base()}>
        ${prefixIcon ? html`<i class="${prefixIcon}"></i>` : ""}
        <slot></slot>
        ${dismiss ? html`<div class=${dismissClass()} aria-label="Dismiss" role="button" tabindex="0" @click=${this.onDismiss}><i class="fa-solid fa-xmark"></i></div>` : ""}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-chip": ChipComponent;
  }
}
