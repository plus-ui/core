import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";
import { selectStyle } from "./select.style";

@customElement("plus-select")
export class SelectComponent extends PlusBase {
  render() {
    const { base } = selectStyle();

    return html`<div class=${base()}></div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-select": SelectComponent;
  }
}
