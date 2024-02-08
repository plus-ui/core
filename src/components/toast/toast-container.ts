import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";
import { toastStyle } from "./toast.style";

@customElement("plus-toast-container")
export class ToastContainerComponent extends PlusBase {


  render() {
    const { toastContainer } = toastStyle();

    return html`<div class=${toastContainer()}></div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-toast-container": ToastContainerComponent;
  }
}
