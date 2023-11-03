import { html } from "lit/static-html.js";

import { unsafeCSS } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";
import { alertStyle } from "./alert.style";
/** @ts-ignore */
import style from "./alert.style.css?inline";

@customElement("plus-alert")
export class AlertComponent extends PlusBase {
  @query(".alert") el!: HTMLElement;
  @property({ type: String, reflect: true }) kind: "outlined" | "filled" | "dashed" = "filled";
  @property({ type: String, reflect: true }) status: "success" | "warning" | "error" | "info" | "default" = "default";
  @property({ type: String, reflect: true }) size: "sm" | "md" | "lg" = "md";

  @property({ type: String }) message: string;
  
  @state() _icon = "";
  @property({ type: String }) 
  set icon(value) {
    this._icon = value;
  }
  get icon() {
    const defaultIcon = {
      info : "fa-solid fa-circle-info",
      success : "fa-solid fa-circle-check",
      warning : "fa-solid fa-triangle-exclamation",
      error : "fa-solid fa-circle-exclamation",
    };
    return this._icon ? this._icon : defaultIcon[this.status];
  }
  @property({ type: String }) description: string;
  @property({ type: Boolean, attribute: "full-width", reflect: true }) fullWidth: boolean = false;
  @property({ type: Boolean }) closable: boolean = false;
  @property({ type: Boolean }) invert: boolean = false;

  static styles = [...PlusBase.styles, unsafeCSS(style)];

  render() {
    const { kind, status, size, invert, fullWidth, closable, message, description, icon } = this;
    const { base, textArea, descriptionClass, closableArea, iconClass } = alertStyle({ status, kind, size, invert, fullWidth, closable });




    return html`<div class=${"alert " + base()} role="alert">
      ${icon ? html`<div class=${iconClass()}><i class=${icon}></i></div>` : null}
      <div class=${textArea()}>
        <span class="empty:hidden">${message}</span>
        <span class=${descriptionClass()}>${description}</span>
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
