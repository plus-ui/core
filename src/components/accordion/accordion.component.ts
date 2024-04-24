import { html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";
import { accordionStyle } from "./accordion.style";
/** @ts-ignore */
import style from "./accordion.style.css?inline";
@customElement("plus-accordion")
export class PlusAccordion extends PlusBase {
  @property({ type: Boolean, reflect: true }) open: boolean = false;
  @property({ type: Boolean, reflect: true }) isGrouped: boolean = false;
  @property({ type: Boolean, reflect: true }) isLast: boolean = false;

  static styles = [...PlusBase.styles, unsafeCSS(style)];

  private toggleOpen(): void {
    this.open = !this.open;
    this.emit("plus-accordion-toggle", { detail: { open: this.open } });
  }

  render() {
    const { open } = this;
    const { base, header, panel, icon } = accordionStyle({ open, isGrouped: this.isGrouped, isLast: this.isLast });
    return html`
      <div class=${base()}>
        <div class=${header()} @click=${this.toggleOpen}>
          <slot name="header"></slot>
          <i class=${icon()}></i>
        </div>
        <div class=${panel()}>
          <slot name="panel"></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-accordion": PlusAccordion;
  }
}
