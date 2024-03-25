import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";
import { toastContainerStyle } from "./toast-container.style";
import { ToastComponent } from "./toast.component";

@customElement("plus-toast-container")
export class ToastContainerComponent extends PlusBase {
  @property({ type: String }) position: "top-left" | "top-right" | "bottom-left" | "bottom-right" = "top-right";

  @property({ type: String, reflect: true }) id: string = "plus-toast-container-" + this.position;

  showToast(toast: ToastComponent) {
    toast.style.display = "block";
  }

  hideToast(toast: ToastComponent) {
    toast.style.display = "none";
  }

  render() {
    const { position } = this;
    const { base } = toastContainerStyle({ position });

    return html`<div class=${base()}>
      <slot></slot>
    </div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-toast-container": ToastContainerComponent;
  }
}
