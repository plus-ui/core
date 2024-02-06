import { html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";

@customElement("plus-form")
export class FormComponent extends PlusBase {
  @query("slot") _slot: HTMLSlotElement;
  @property({ type: String }) size: "sm" | "md" | "lg" = "md";
  @property({ type: String }) kind: "filled" | "outlined" = "filled";
  @property({ type: String }) status: "success" | "warning" | "error" | "info" | "default" = "default";
  @property({ type: Boolean, converter: value => value != "false" }) invert = false;

  @property({ type: String }) color!: string;

  submit() {
    const slot = this._slot.assignedElements({ flatten: true }).filter(item => item.tagName.toLowerCase().startsWith("plus-"));
    slot.length &&
      slot.forEach((item: any) => {
        console.log({ item });
        console.log({ item: item.checkValidity() });
        console.log({ item: item.reportValidity() });
      });
  }

  render() {
    return html`
      <form @submit=${this.submit}>
        <slot></slot>
      </form>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-form": FormComponent;
  }
}
