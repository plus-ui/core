import { arrow, computePosition, flip, hide, offset, shift } from "@floating-ui/dom";
import { PlacementType } from "../../src/model/plus-types";
import { PlusBase } from "../base/plus-base";

export type FloatingUIOptions = {
  target?: HTMLElement;
  content?: HTMLElement;
  position?: PlacementType;
  showArrow?: boolean;
  offset?: number;
  showDelay?: number;
  hideDelay?: number;
  zIndex?: number;
  autoHide?: boolean;
  onShow?: () => void;
  onHide?: () => void;
  isOpened?: (open: boolean) => void;
  onVisibleChange?: (visible: boolean) => void;
  onPositionChange?: (position: PlacementType) => void;
};

export class FloatingUI extends PlusBase {
  protected options: FloatingUIOptions;

  constructor(
    options: FloatingUIOptions = {
      position: "bottom",
      showArrow: false,
      offset: 6,
      showDelay: 200,
      hideDelay: 200,
      zIndex: 50,
      autoHide: true,
    },
  ) {
    super();
    this.options = options;
  }

  updatePosition() {
    // const { target, content, offset: _offset, autoHide, position, showArrow } = this.options;
    if (!this.options.target || !this.options.content) return;
    const _middleware = [offset(this.options.offset), flip(), shift({ padding: 8 })];
    if (this.options.autoHide) {
      _middleware.push(hide({ padding: 10 }));
    }
    const arrowElement = this.options.content.querySelector(".arrow") as HTMLElement;
    if (this.options.showArrow) {
      if (arrowElement) {
        _middleware.push(arrow({ element: arrowElement }));
      }
    }

    computePosition(this.options.target, this.options.content, {
      placement: this.options.position,
      middleware: _middleware,
    }).then(({ x, y, placement, middlewareData }) => {
      Object.assign(this.options.content.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
      if (this.options.showArrow && arrowElement) {
        // const { x: arrowX, y: arrowY } = middlewareData.arrow;

        const staticSide = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right",
        }[placement.split("-")[0]];

        Object.assign(arrowElement.style, {
          left: middlewareData.arrow.x != null ? `${middlewareData.arrow.x}px` : "",
          top: middlewareData.arrow.y != null ? `${middlewareData.arrow.y}px` : "",
          right: "",
          bottom: "",
          [staticSide]: "-6px",
        });
      }
    });
  }

  show() {
    this.options.content.style.display = "block";
    this.updatePosition();
    this.options.isOpened?.(true);
  }

  hide() {
    this.options.content.style.display = "none";
    this.options.isOpened?.(false);
  }

  isOpen() {
    return this.options.content.style.display === "block";
  }

  destroy() {}
}
