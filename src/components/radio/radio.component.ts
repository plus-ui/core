import { customElement, property, query , state} from "lit/decorators.js";
import { live } from "lit/directives/live.js";
import { html } from "lit/static-html.js";
import { PlusBase } from "../../base/plus-base";
import { radioStyle } from "./radio.style";

@customElement("plus-radio")
export class RadioComponent extends PlusBase {
  @query(".radio") radio: HTMLInputElement;
  @property({ type: String }) size: "sm" | "md" | "lg" = "md";
  @property({ type: String }) text: string;
  @property({ type: Boolean, reflect: true }) checked = false;

  @state() hasFocus = false;

  private handleClick() {
    /* TODO: should be on host */
    this.checked = !this.checked;
    this.emit("plus-change");
  }

  private handleFocus() {
    this.hasFocus = true;
    this.emit("plus-focus");
  }

  private handleBlur() {
    this.hasFocus = false;
    this.emit("plus-blur");
  }

  render() {
    const { disabled, readonly, checked, text, title, id } = this;
    const { base, inputElement, radio, radioDot, host } = radioStyle({ disabled, readonly, checked, focus: this.hasFocus });
    return html`
      <div class=${host()}>
        <input
          id=${id}
          class=${inputElement()}
          type="radio"
          title=${title}
          .checked=${live(checked)}
          .disabled=${disabled || readonly}
          role="radio"
          aria-checked=${checked ? "true" : "false"}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick /* TODO: should be on host */}
        />
        <label for=${id} class=${base()}>
          <div class="relative">
            <div class=${radio()}>
              <i class=${radioDot() + " fa-solid fa-circle"}></i>
            </div>
          </div>
          <slot>${text}</slot>
        </label>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-radio": RadioComponent;
  }
}
