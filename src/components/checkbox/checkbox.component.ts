import { html } from "lit/static-html.js";

import { customElement, property, query } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { live } from "lit/directives/live.js";
import { PlusBase } from "../../base/plus-base";
import { checkboxStyle } from "./checkbox.style";

@customElement("plus-checkbox")
export class CheckboxComponent extends PlusBase {
  @query("checkbox") el: HTMLInputElement;

  @property({ type: String }) size: "sm" | "md" | "lg" = "md";
  @property({ type: String }) label: string;
  @property({ type: Boolean, reflect: true }) checked = false;
  @property({ type: Boolean, reflect: true }) indeterminate = false;

  handleChange = (e: Event) => {
    const input = e.target as HTMLInputElement;
    this.checked = input.checked;
    this.indeterminate = input.indeterminate;
    this.emit("plus-change", { detail: { id: this.id, checked: this.checked } });
  };

  render() {
    const { id, size, disabled, readonly, indeterminate, checked, required } = this;
    const checkboxId = id + "-checkbox";
    const { base, input, icon, label } = checkboxStyle({ size, disabled, readonly, indeterminate, checked, required });
    return html`
      <div class=${base()}>
        <input
          id=${checkboxId}
          class=${input()}
          type="checkbox"
          name=${this.name}
          value=${ifDefined(this.value)}
          .checked=${live(checked)}
          .indeterminate=${indeterminate}
          .disabled=${disabled}
          .required=${required}
          .readonly=${readonly}
          aria-checked=${this.checked ? "true" : "false"}
          @change=${this.handleChange}
        />
        <div class=${icon()}>${indeterminate ? html`<i class="fa fa-minus text-xs"></i>` : html`<i class="fas fa-check text-xs"></i>`}</div>
        <label class=${label()} for=${checkboxId}>${this.label}</label>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-checkbox": CheckboxComponent;
  }
}
