// Import statements
import { unsafeCSS } from "lit";
// import bootstrapIcons from "bootstrap-icons/font/bootstrap-icons.min.css";
// import fa from "@fortawesome/fontawesome-free/css/all.min.css";
import tailwind from "./tailwind.global.css";
import { PlusBase } from "../base/plus-base";

// PlusElement function
export const PlusElement = (style) =>

  // Return a class that extends PlusBase
  class extends PlusBase {

    // Define styles for the element
    static styles = [unsafeCSS(tailwind), unsafeCSS(style)];

    // Constructor for the PlusElement class
    constructor() {

      // Call the super constructor of PlusBase
      super();
    }
  };
