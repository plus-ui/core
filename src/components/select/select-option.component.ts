import { consume } from "@lit/context";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";
import { optionStyle } from "./select-option.style";
import { SelectContext, selectContext } from "./select.component";

@customElement("plus-select-option")
export class SelectOptionComponent extends PlusBase {
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean, reflect: true, converter: value => value != "false" }) active = false;
  @property({ type: String }) size: "sm" | "md" | "lg" = "md";

  @consume({ context: selectContext })
  @property({ attribute: false })
  public selectContext?: SelectContext;

  private handleClick(): void {
    if (this.disabled) return;
    this.selectContext.onSelect(this.id);
  }

  render() {
    const size = this.selectContext.size ?? this.size;
    //const { active, disabled } = this;
    const { base } = optionStyle({ size, active: this.active, disabled: this.disabled });

    return html`
      <div class=${base()} @click=${this.handleClick}>
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-select-option": SelectOptionComponent;
  }
}
