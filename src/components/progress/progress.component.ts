import { css, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { html } from "lit/static-html.js";
import { PlusBase } from "../../base/plus-base";
import { captionStyle } from "../caption/caption.style";
import { labelStyle } from "../label/label.style";
import { progressStyle } from "./progress.style";

const statusIcons = {
  success: "fa-solid fa-circle-check",
  warning: "fa-solid fa-triangle-exclamation",
  error: "fa-solid fa-circle-xmark",
  info: "fa-solid fa-circle-info",
};
@customElement("plus-progress")
export class ProgressComponent extends PlusBase {
  @property({ type: String }) size: "sm" | "md" | "lg" = "md";
  @property({ type: String, attribute: "value-format" }) valueFormat: "percent" | "step" = "percent";
  @property({ type: String }) label?: string;
  @property({ type: String }) caption?: string;
  @property({ type: Boolean, converter: value => value != "false" }) error = false;
  @property({ type: String }) status: "success" | "warning" | "error" | "info" | "default" = "default";
  @property({ type: Boolean, reflect: true, attribute: "status-icon" }) statusIcon = false;
  @property({ type: Number, attribute: "max-value" }) maxValue = 100;
  @property({ type: Boolean }) indeterminate = false;

  static host = css`
    :host {
      display: block;
      width: 100%;
    }
  `;

  static styles = [...PlusBase.styles, unsafeCSS(ProgressComponent.host)];

  render() {
    const { size, label, caption, required, error, status, valueFormat, disabled, indeterminate } = this;
    const { host, progress, progressLine, infoArea } = progressStyle({ size, status, disabled, indeterminate });
    const LabelTemplate = () => (label ? html`<label class=${labelStyle({ required, size, disabled })} @click=${this.focus}>${label}</label>` : null);
    const CaptionTemplate = () => (caption ? html`<div class=${captionStyle({ error, size, disabled })}>${caption}</div>` : null);
    const PercentTemplate = () => html`<span>${(+this.value / +this.maxValue) * 100}%</span>`;
    const StepTemplate = () => html`<span>${this.value} / ${this.maxValue}</span>`;
    const StatusIconTemplate = () => html`<i class=${statusIcons[status]}></i>`;
    return html`
      <div class=${host()}>
        <div class="flex flex-row items-start justify-between">
          ${LabelTemplate()}
          <div class=${infoArea()}>${valueFormat === "percent" ? PercentTemplate() : StepTemplate()} ${this.statusIcon && statusIcons[status] ? StatusIconTemplate() : null}</div>
        </div>
        <div class=${progress()}>
          <div
            class=${progressLine()}
            style=${styleMap({
              width: `${(+this.value / +this.maxValue) * 100}%`,
            })}
          ></div>
        </div>
        ${CaptionTemplate()}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-progress": ProgressComponent;
  }
}
