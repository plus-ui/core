import { FloatingUI } from "../../src/utils/floating-ui";

export class FloatingService extends FloatingUI {
  private target: HTMLElement | null = null;

  constructor() {
    super();
  }

  setTarget(target: HTMLElement) {
    this.target = target;
    this.listener();
  }

  getTarget() {
    return this.target;
  }

  handleSlotChange(el) {
    console.log("handleSlotChange", el.target);
    this.setTarget(el.target);
  }

  listener() {
    this.getTarget()?.addEventListener("mouseenter", () => {
      this.show();
    });
    this.getTarget()?.addEventListener("mouseleave", () => {
      this.hide();
    });
  }
}
