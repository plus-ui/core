// import { computePosition } from "@floating-ui/dom";
import { LitElement } from "lit";
import { PlacementType } from "../../src/model/plus-types";
// import { computePosition, flip, shift, offset, arrow, hide, size } from '@floating-ui/dom';

type FloatingUIOptions = {
  target?: HTMLElement;
  content?: HTMLElement;
  position?: PlacementType;
  showArrow?: boolean | { size?: number; color?: string };
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

export class FloatingUI extends LitElement {
  private options: FloatingUIOptions;
    
  constructor(options: FloatingUIOptions = {}) {
    super();
    this.options = options;
  }

//   update() {
//     // const { target, content } = this.options;
//     // computePosition(target, content).then(({ x, y }) => {
//     //   Object.assign(content.style, {
//     //     left: `${x}px`,
//     //     top: `${y}px`,
//     //   });
//     // });
//   }

  show() {
    const { content } = this.options;
    content.style.display = "block";
    // this.update();
  }

  hide() {
    const { content } = this.options;
    content.style.display = "none";
  }

  destroy() {}
}
