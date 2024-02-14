import { arrow, computePosition, flip, hide, offset, shift } from "@floating-ui/dom";
import { PlusBase } from "../../src/base/plus-base";
import { PlacementType } from "../../src/model/plus-types";

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
    const { target, content, offset: _offset, autoHide, position, showArrow } = this.options;
    if (!target || !content) return;
    const _middleware = [offset(_offset), flip(), shift({ padding: 8 })];
    if (autoHide) {
      _middleware.push(hide({ padding: 10 }));
    }
    const arrowElement = content.querySelector(".arrow") as HTMLElement;
    if (showArrow) {
      if (arrowElement) {
        _middleware.push(arrow({ element: arrowElement }));
      }
    }

    computePosition(target, content, {
      placement: position,
      middleware: _middleware,
    }).then(({ x, y, placement, middlewareData }) => {
      Object.assign(content.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
      if (showArrow && arrowElement) {
        const { x: arrowX, y: arrowY } = middlewareData.arrow;

        const staticSide = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right",
        }[placement.split("-")[0]];

        Object.assign(arrowElement.style, {
          left: arrowX != null ? `${arrowX}px` : "",
          top: arrowY != null ? `${arrowY}px` : "",
          right: "",
          bottom: "",
          [staticSide]: "-6px",
        });
      }
    });
  }

  show() {
    const { content } = this.options;
    content.style.display = "block";
    this.updatePosition();
  }

  hide() {
    const { content } = this.options;
    content.style.display = "none";
  }

  isOpen() {
    return this.options.content.style.display === "block";
  }

  destroy() {}
}
