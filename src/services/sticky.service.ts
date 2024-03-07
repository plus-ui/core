import { FloatingUI, FloatingUIOptions } from "../../src/utils/floating-ui";

export class StickyService extends FloatingUI {
  options: FloatingUIOptions;

  constructor() {
    super();
  }

  protected listener(): void {
    if (!this.options.target) return;
    document.addEventListener("click", e => {
      e.composedPath().includes(this.options.target) ? this.show() : this.hide();
    });
  }
}
