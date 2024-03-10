import { FloatingUI, FloatingUIOptions } from "../../src/utils/floating-ui";

export class FloatingService extends FloatingUI {
  protected options: FloatingUIOptions;
  protected trigger: string;
  private hoverTimeout: number;

  constructor() {
    super();
  }

  private setTarget(target: HTMLElement) {
    this.options.target = target;
  }

  private getTarget() {
    return this.options.target;
  }

  private setContent(content: HTMLElement) {
    this.options.content = content;
  }

  handleSlotChange({ target }) {
    const tooltipTarget = target?.assignedElements({ flatten: true })[0] as HTMLElement;
    const tooltipContent = target?.nextElementSibling;

    if (!tooltipTarget || !tooltipContent) return;

    this.setTarget(tooltipTarget);
    this.setContent(tooltipContent);

    this.listener();
  }

  private hasTrigger(triggerType: string) {
    const triggers = this.trigger.split(" ");
    return triggers.includes(triggerType);
  }

  private listener() {
    this.getTarget()?.addEventListener("blur", this.handleBlur, true);
    this.getTarget()?.addEventListener("focus", this.handleFocus, true);
    this.getTarget()?.addEventListener("click", this.handleClick);
    this.getTarget()?.addEventListener("mouseover", this.handleMouseOver);
    this.getTarget()?.addEventListener("mouseout", this.handleMouseOut);
    document.addEventListener("click", this.handleClickOutside);
  }

  private handleBlur = () => {
    if (this.hasTrigger("focus")) {
      this.hide();
    }
  };

  private handleFocus = () => {
    if (this.hasTrigger("focus")) {
      this.show();
    }
  };

  private handleClick = () => {
    if (this.hasTrigger("click")) {
      if (this.isOpen()) {
        this.hide();
      } else {
        this.show();
      }
    }
  };

  private handleMouseOver = () => {
    if (this.hasTrigger("hover")) {
      clearTimeout(this.hoverTimeout);
      this.hoverTimeout = window.setTimeout(() => this.show(), this.options.showDelay);
    }
  };

  private handleMouseOut = () => {
    if (this.hasTrigger("hover")) {
      clearTimeout(this.hoverTimeout);
      this.hoverTimeout = window.setTimeout(() => this.hide(), this.options.hideDelay);
    }
  };

  private handleClickOutside = (event: MouseEvent) => {
    if (this.hasTrigger("click") && this.isOpen()) {
      if (!this?.contains(event.target as Node)) {
        this.hide();
      }
    }
  };
}
