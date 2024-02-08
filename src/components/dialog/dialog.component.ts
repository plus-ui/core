import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";
import { dialogStyle } from "./dialog.style";

@customElement("plus-dialog")
export class DialogComponent extends PlusBase {
  render() {
    const { base } = dialogStyle();

    return html`<div class=${base()}></div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-dialog": DialogComponent;
  }
}
