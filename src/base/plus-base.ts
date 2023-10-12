// Import statements
import { LitElement, unsafeCSS } from "lit";
import { property } from "lit/decorators.js";
/** @ts-ignore */
import tailwind from "../shared/tailwind.global.css?inline";
import theme from "../shared/theme/default.css";

// PlusBase class
export abstract class PlusBase extends LitElement {
  static styles = [unsafeCSS(tailwind), unsafeCSS(theme)];

  // ID property with default value
  @property({ type: String, reflect: true })
  id: string = `plusui-${Math.random().toString(36).slice(2, 12)}`;

  // Name property with default value
  @property()
  name: string = "";

  // Value property with default value
  @property({ type: String, reflect: true })
  value: string = "";

  // Disabled property with default value
  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  // Readonly property with default value
  @property({ type: Boolean, reflect: true })
  readonly: boolean = false;

  // Required property with default value
  @property({ type: Boolean, reflect: true })
  required: boolean = false;

  // Loading property with default value
  @property({ type: Boolean })
  loading = false;

  // Title property with default value
  @property()
  title = "";

  // emit function to dispatch events
  emit(name: string, options?: CustomEventInit) {
    // Create a new CustomEvent object
    const event = new CustomEvent(name, {
      bubbles: true,
      cancelable: false,
      composed: true,
      detail: {},
      ...options,
    });

    // Dispatch the event
    this.dispatchEvent(event);

    // Return the event
    return event;
  }
}
