import { html } from "lit/static-html.js";

import { unsafeCSS } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";
import { alertStyle } from "./alert.style";
/** @ts-ignore */
import style from "./alert.style.css?inline";

@customElement("plus-alert")
export class AlertComponent extends PlusBase {
  @query(".alert") el!: HTMLElement;
  @property({ type: String, reflect: true }) kind: "outline" | "filled" | "text" | "dashed" = "filled";
  @property({ type: String, reflect: true }) status: "success" | "warning" | "error" | "info" | "default" = "default";
  @property({ type: String, reflect: true }) size: "sm" | "md" | "lg" = "md";

  @property({ type: String }) message: string;
  @property({ type: String }) icon: string;
  @property({ type: String }) description: string;
  @property({ type: Boolean, attribute: "full-width", reflect: true }) fullWidth: boolean = false;
  @property({ type: Boolean }) closable: boolean = false;
  @property({ type: Boolean }) invert: boolean = false;

  static styles = [...PlusBase.styles, unsafeCSS(style)];

  render() {
    const { kind, status, size, invert, fullWidth, closable, message, description, icon } = this;
    const hasDescription = !!description;
    const { base, textArea, descriptionSize, closableArea } = alertStyle({ status, kind, size, invert, fullWidth, closable, hasDescription });
    return html` <div class=${"alert " + base()} role="alert">
      ${icon ? html`<div><i class=${icon}></i></div>` : null}
      <div class=${textArea()}>
        <span>${message}</span>
        <span class=${descriptionSize()}>${description}</span>
      </div>
      <div class=${closableArea()} @click=${() => this.el.remove()}>${closable ? html`<i class="fa fa-close"></i>` : null}</div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-alert": AlertComponent;
  }
}
