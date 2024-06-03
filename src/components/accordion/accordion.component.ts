import { html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";
import { accordionStyle } from "./accordion.style";
/** @ts-ignore */
import style from "./accordion.style.css?inline";
@customElement("plus-accordion")
export class AccordionComponent extends PlusBase {
  @property({ type: Boolean, converter: expand => expand != "false", reflect: true }) expand = false;
  @property({ type: Boolean, reflect: true }) isGrouped: boolean = false;
  @property({ type: Boolean, reflect: true }) isLast: boolean = false;
  @property({ type: String, reflect: true }) size: "sm" | "md" | "lg" = "md";

  static styles = [...PlusBase.styles, unsafeCSS(style)];

  private toggleOpen(): void {
    this.expand = !this.expand;
    this.emit("plus-accordion-toggle", { detail: { expand: this.expand } });
  }

  render() {
    const { expand, size, isGrouped, isLast } = this;
    const { base, header, panel, icon, helper, headerContainer } = accordionStyle({ expand, isGrouped, isLast, size });
    return html`
      <div class=${base()}>
        <div class=${header()} @click=${this.toggleOpen}>
          <div class=${headerContainer()}>
            <slot name="header"></slot>
            <span class=${helper()}><slot name="helper"></slot></span>
          </div>
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
    "plus-accordion": AccordionComponent;
  }
}
