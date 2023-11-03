import { customElement, property, query } from "lit/decorators.js";
import { live } from "lit/directives/live.js";
import { html } from "lit/static-html.js";
import { PlusBase } from "../../base/plus-base";
import { radioStyle } from "./radio.style";

@customElement("plus-radio")
export class RadioComponent extends PlusBase {
  @query("radio") el: HTMLInputElement;

  @property({ type: String }) size: "sm" | "md" | "lg" = "md";
  @property({ type: String }) label: string;
  @property({ type: Boolean, reflect: true }) checked = false;

  handleChange(e) {
    this.checked = e?.target?.checked ?? false;
    this.emit("plus-change", { detail: { checked: this.checked } });
  }

  render() {
    const { id, size, disabled, readonly, checked, required, label } = this;
    const radioId = id + "-radio";
    const { base, radio, labelClass } = radioStyle({ size, disabled, readonly, checked, required });
    return html`
      <div class=${base()}>
        <input
          id=${radioId}
          role="radio"
          type="radio"
          class=${radio()}
          .checked=${live(checked)}
          .disabled=${disabled}
          .required=${required}
          .readonly=${readonly}
          @change=${e => this.handleChange(e)}
          aria-checked=${this.checked ? "true" : "false"}
        />
        ${label ? html`<label class=${labelClass()} for=${radioId}>${label}</label>` : null}
      </div>
    `;
  }
}



declare global {
  interface HTMLElementTagNameMap {
    "plus-radio": RadioComponent;
  }
}