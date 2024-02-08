import { computePosition, flip, offset, shift } from "@floating-ui/dom";
import { LitElement } from "lit";
export class FloatingService extends LitElement {
  id: string = "";
  protected type: "tooltip" | "linked" = "linked";
  protected position: string = "top";
  protected self: HTMLElement | null = null;
  protected target: HTMLElement | null = null;
  protected align: string = "center";

  constructor() {
    super();
    const container = document.getElementById("plus-overlay-container");
    if (!container) {
      const container = document.createElement("div");
      container.id = "plus-overlay-container";
      document.body.appendChild(container);
    }
  }

  setSelf(self: HTMLElement) {
    this.self = self;
  }

  setTarget(target: HTMLElement) {
    this.target = target;
  }

  setPosition(position: string) {
    this.position = position;
  }

  setAlign(align: string) {
    this.align = align;
  }

  setType(type: "tooltip" | "linked") {
    this.type = type;
  }

  getSelf() {
    return this.self;
  }

  getTarget() {
    return this.target;
  }

  getPosition() {
    return this.position;
  }

  getAlign() {
    return this.align;
  }

  getType() {
    return this.type;
  }

  getOverlayContainer() {
    return document.getElementById("plus-overlay-container");
  }

  computePosition() {}

  private createArrow() {
    const arrow = document.createElement("div");
    arrow.classList.add("absolute", "bg-black", "text-white", "w-3", "h-3", "transform", "rotate-45");
    return arrow;
  }

  private createTooltip() {
    const tooltip = document.createElement("div");
    tooltip.id = this.id + "-tooltip";
    tooltip.classList.add("absolute", "w-max-content", "p-2", "rounded-lg", "shadow-lg", "top-0", "left-0", "bg-white");
    tooltip.textContent = "My tooltip with more content";
    return tooltip;
  }

  show() {
    const tooltip = this.createTooltip();
    const arrow = this.createArrow();
    tooltip.appendChild(arrow);
    this.getOverlayContainer().appendChild(tooltip);
    const target = this.getTarget();

    computePosition(target, tooltip, {
      placement: "top",
      middleware: [offset(6), flip(), shift({ padding: 5 })],
    }).then(({ x, y }) => {
      Object.assign(tooltip.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
    });
  }

  hide() {
    this.getOverlayContainer()?.removeChild(document.getElementById(this.id + "-tooltip"));
  }

  listen() {
    if (this.type == "tooltip") {
      this.getTarget()?.addEventListener("mouseenter", this.show.bind(this));
      this.getTarget()?.addEventListener("mouseleave", this.hide.bind(this));
    } else {
      this.getTarget()?.addEventListener("click", this.show.bind(this));
      this.getTarget()?.addEventListener("click", this.hide.bind(this));
    }
  }
}
