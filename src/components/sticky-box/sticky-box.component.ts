import { PropertyValueMap } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { html } from "lit/static-html.js";
import { PlacementType } from "../../../src/model/plus-types.ts";
import { StickyService } from "../../services/sticky.service.ts";

@customElement("plus-sticky-box")
export class StickyBoxComponent extends StickyService {
  @query(".stickybox") content: HTMLDivElement;

  @property({ attribute: false }) target: Promise<HTMLElement> | undefined;
  @property({ attribute: false }) position: PlacementType = "bottom-start";
  @property({ attribute: false }) open: boolean = false;

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
      this.options.position = this.position;
      this.options.offset = 4;
      this.listener();
      this.options.isOpened = (open: boolean) => {
        if (this.open != open) {
          this.open = open;
          this.emit("plus-sticky-box-change", { detail: { open } });
        }
      };
    }
  }

  render() {
    return html`
      <div class="stickybox absolute z-[999] hidden max-h-40 min-w-64 overflow-y-auto !scroll-smooth  rounded border border-color-default bg-color-surface-base shadow-md">
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
