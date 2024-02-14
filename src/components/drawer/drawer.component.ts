import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";
import { drawerStyle } from "./drawer.style";

@customElement("plus-drawer")
export class DrawerComponent extends PlusBase {
  render() {
    const { base } = drawerStyle();

    return html`<div class=${base()}></div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-drawer": DrawerComponent;
  }
}
