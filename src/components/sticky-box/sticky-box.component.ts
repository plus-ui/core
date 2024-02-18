import { PropertyValueMap } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { html } from "lit/static-html.js";
import { StickyService } from "../../services/sticky.service.ts";

@customElement("plus-sticky-box")
export class StickyBoxComponent extends StickyService {
  @query(".stickybox") content: HTMLDivElement;

  @property({ attribute: false }) target: Promise<HTMLElement> | undefined;

  constructor() {
    super();
  }

  protected async update(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): Promise<void> {
    super.update(changedProperties);

    await this.target?.then(element => {
      this.options.target = element;
    });

    if (this.options.target) {
      this.options.content = this.content;
      this.options.position = "bottom-start";
      this.options.offset = 4;
      this.listener();
    }
  }

  render() {
    return html`
      <div class="stickybox absolute z-50 flex hidden max-h-40 min-w-64 overflow-y-auto scroll-smooth  rounded border border-color-default bg-color-surface-base shadow-md">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-sticky-box": StickyBoxComponent;
  }
}
