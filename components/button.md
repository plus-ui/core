---
description: >-
  Buttons simplify user interactions with a single tap, enhancing the user
  experience and aiding those with mobility issues.
---

# Button

The Button component is a flexible user interface element that allows users to interact with your application and trigger different actions and operations. Other than prebuilt **144 variants**, we provide many customization options to accommodate various design preferences and use cases. Buttons are commonly placed throughout your user interface, such as in&#x20;

* modal windows
* forms
* cards
* toolbars

## 🧩 Anatomy

The Chip component in Plus UI is built upon fundamental elements that define its functionality and appearance. These elements collectively create a versatile component for displaying essential information or context in a visually appealing manner. Customizable properties further enhance the Chip component's user interaction and engagement capabilities within your application.

## 🛠️ Properties

With our button properties and variable structure, you have the creative freedom to tailor your buttons to precisely match your design preferences. All variable and variants identified exactly same on both our design system and our multi-framework component library.

<table><thead><tr><th>Kinds</th><th>Status</th><th>States</th><th>Icons</th><th>Size</th><th data-hidden>Kinds</th><th data-hidden>States</th><th data-hidden>Size</th><th data-hidden>Icons</th><th data-hidden></th><th data-hidden></th><th data-hidden></th></tr></thead><tbody><tr><td>Filled</td><td>Default</td><td>Default</td><td>No icon</td><td>Small</td><td>Filled</td><td>Default</td><td>Small</td><td></td><td></td><td></td><td></td></tr><tr><td>Outlined</td><td>Primary</td><td>Hovered</td><td>Prefix icon</td><td>Medium</td><td>Outlined</td><td>Hovered</td><td>Medium</td><td></td><td></td><td></td><td></td></tr><tr><td>Dashed</td><td></td><td>Pressed</td><td>Suffix icon</td><td>Large</td><td>Dashed</td><td>Pressed</td><td>Large</td><td></td><td></td><td></td><td></td></tr><tr><td>Text</td><td></td><td>Disabled</td><td>Icon only</td><td></td><td>Text</td><td>Disabled</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td>Loading</td><td></td><td></td><td></td><td>Loading</td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>

### Kinds

* **Filled button** are used to indicate the main action or the primary path a user should take. They have a strong visual indicator, encouraging users to complete their intended journey. Its a solid-colored button.
* **Outlined button** are typically placed alongside primary buttons and indicate that there are multiple avenues or alternative actions users can take.
* **Dashed button** have a dashed border. They are used to draw attention without being too visually dominant.
* **Text button** are used for less prominent actions to maintain focus on the primary content. They have minimal visual weight and its perfect for text links and unobtrusive calls to action.

<figure><img src="broken-reference" alt=""><figcaption></figcaption></figure>

{% tabs %}
{% tab title="React" %}

{% endtab %}

{% tab title="Angular" %}

{% endtab %}

{% tab title="Vue" %}

{% endtab %}

{% tab title="Stelve" %}

{% endtab %}

{% tab title="Javascript" %}

{% endtab %}
{% endtabs %}

### Status

* **Default button**: Your button's default state, always ready for action, serving as the reliable foundation of your user interface.
* **Primary button**: A special status that emphasises the button's significance and its role as a primary call to action, ensuring it stands out and captures user attention.

<figure><img src="broken-reference" alt=""><figcaption></figcaption></figure>

{% tabs %}
{% tab title="React" %}
<pre class="language-jsx" data-full-width="false"><code class="lang-jsx"><strong>import React from 'react';
</strong><strong>import { Button } from 'plus-ui';
</strong><strong>
</strong>&#x3C;plus-button kind="outlined">Primary Button&#x3C;/plus-button> // default
&#x3C;plus-button kind="outlined">Primary Button&#x3C;/plus-button>
&#x3C;plus-button kind="ghost">Primary Button&#x3C;/plus-button>
&#x3C;plus-button kind="text">Primary Button&#x3C;/plus-button>
<strong>
</strong><strong>
</strong></code></pre>
{% endtab %}

{% tab title="Angular" %}

{% endtab %}

{% tab title="Vue" %}

{% endtab %}

{% tab title="Stelve" %}

{% endtab %}

{% tab title="Javascript" %}

{% endtab %}
{% endtabs %}

### States

The button component also has different states to communicate interactivity and feedback to users.

* **Default state** when it is available for interaction but not being interacted with.
* **Hovered state** when the cursor hovers over it, indicating potential interactivity.
* **Pressed state** appears when the button is clicked, giving visual feedback that the action has been triggered.
* **Disabled state** is used when a button cannot be interacted when a particular action is unavailable.&#x20;
* **Loading state** is displayed when the button triggers a time-consuming operation, like submitting a form or fetching data.

<figure><img src="broken-reference" alt=""><figcaption></figcaption></figure>

{% tabs %}
{% tab title="React" %}

{% endtab %}

{% tab title="Angular" %}

{% endtab %}

{% tab title="Vue" %}

{% endtab %}

{% tab title="Stelve" %}

{% endtab %}

{% tab title="Javascript" %}

{% endtab %}
{% endtabs %}

### **Icon**

Incorporating icons into buttons can enhance the user experience by providing visual cues, improving aesthetics, and simplifying interactions.&#x20;

* **No Icon button** is often used for actions that are self-explanatory or when a text label alone provides sufficient context&#x20;
* **Prefix Icon button** is positioned before the text label on a button, offering additional context or visual emphasis to the action.&#x20;
* **Suffix Icon button** appear after the text label, offering visual cues or feedback related to the action.&#x20;
* **Icon-Only button** use visual symbols without any accompanying text. They are ideal when actions can be represented by universally recognised icons, reducing clutter and text translations.

<figure><img src="broken-reference" alt=""><figcaption></figcaption></figure>

{% tabs %}
{% tab title="React" %}



{% endtab %}

{% tab title="Angular" %}

{% endtab %}

{% tab title="Vue" %}

{% endtab %}

{% tab title="Stelve" %}

{% endtab %}

{% tab title="Untitled" %}

{% endtab %}
{% endtabs %}

### Size

The Button component supports different sizes such as small, medium, large to fit various design requirements.

<figure><img src="broken-reference" alt=""><figcaption></figcaption></figure>

{% tabs %}
{% tab title="Javascript" %}
```
// Some code
```
{% endtab %}

{% tab title="React" %}

{% endtab %}

{% tab title="Angular" %}

{% endtab %}

{% tab title="Vue" %}

{% endtab %}

{% tab title="Stelve" %}

{% endtab %}
{% endtabs %}

##

## 🧬 Design Tokens

Design tokens are a combination of names and corresponding values that encapsulate concise and recurring design choices. These tokens encompass a variety of attributes, such as colors, font styles, spacing units, or even motion animations, all tailored to serve specific design requirements.&#x20;

In Plus UI, we use global tokens which provide a centralized and consistent way to manage and apply these design attributes throughout a project. To learn more about Plus UI's design tokens such as [color tokens](../design-tokens/overview/color-tokens.md), [size tokens](../design-tokens/overview/size-tokens.md), [border radius tokens](../design-tokens/overview/border-radius-tokens.md) and [gap tokens](../design-tokens/overview/gap-tokens.md), please visit [Design Tokens](broken-reference).

##

## 📏 Layout & Spacing

Layout and spacing for buttons in user interfaces are crucial for usability, aesthetics, and accessibility. By paying attention to the placement and spacing of buttons, designers can create interfaces that are both visually appealing and user-friendly, ultimately enhancing the overall user experience.

<figure><img src="broken-reference" alt=""><figcaption><p>Button's Layout &#x26; Spacing</p></figcaption></figure>

## 🌙 Light & Dark Mode

Providing both light and dark modes for buttons in user interfaces enhances user comfort, choice, accessibility, and energy efficiency. It also aligns with contemporary design trends and accommodates a variety of user preferences and needs.&#x20;

<figure><img src="broken-reference" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
We structured the design system simply switch from the light mode to the dark mode within the **Layer > Color** section.
{% endhint %}

##

## 🦾 Accessibility

Accessibility is not only a moral and legal imperative but also a valuable design principle. Ensuring that buttons in a design system are accessible not only benefits users with disabilities but also leads to a more inclusive, user-friendly, and successful digital product.&#x20;

<table><thead><tr><th width="197.33333333333331">Criteria</th><th width="433">Description</th><th data-type="select">Status</th></tr></thead><tbody><tr><td>Discernible Text</td><td>Ensures buttons have discernible text</td><td></td></tr><tr><td>ID Attribute</td><td>Ensures every id attribute value is unique</td><td></td></tr><tr><td>Interactive Controls</td><td>Ensures interactive controls aren’t nested as they are not always announced by screen readers or can cause focus problems for assistive technologies</td><td></td></tr><tr><td>Tabindex Attribute</td><td>Ensures tabindex attribute values are not greater than 0</td><td></td></tr><tr><td>Color Contrast</td><td>Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds.</td><td></td></tr></tbody></table>

To learn more about Plus UI's accessibility criteria, please visit [Accessibility](broken-reference).



## 🎨 Design System

{% @figma/embed fileId="3NjFHfYJfEz4T5R18heV9O" nodeId="1573:14605" url="https://www.figma.com/file/3NjFHfYJfEz4T5R18heV9O/Plus-UI-Design-System?mode=design&node-id=1573:14605&t=I4RiPafecFlUYrfn-1&type=design" %}

##

## ⇅ API

<table data-full-width="false"><thead><tr><th width="124">Property</th><th width="306">Description</th><th width="232" data-type="select" data-multiple>Type</th><th>Default</th></tr></thead><tbody><tr><td>kind</td><td>The kind of button, which affects its appearance.</td><td></td><td>filled</td></tr><tr><td>type</td><td>The type of the button.</td><td></td><td>button</td></tr><tr><td>size</td><td>The size of the button.</td><td></td><td>md</td></tr><tr><td>color</td><td>The color of the button.</td><td></td><td></td></tr><tr><td>icon</td><td>The name of the icon to display in the button.</td><td></td><td>null</td></tr><tr><td>readonly</td><td>Whether the button is readonly.</td><td></td><td>false</td></tr><tr><td>disabled</td><td>This property, when set to <code>true</code>, renders the associated component or element non-interactive, typically by graying it out. It is commonly used to indicate that a particular feature or functionality is temporarily unavailable or inactive."</td><td></td><td>false</td></tr><tr><td>href</td><td>The URL that the hyperlink points to. If defined, the button will render as an anchor.</td><td></td><td></td></tr><tr><td>target</td><td>The target attribute to use when the button is rendered as an anchor.</td><td></td><td></td></tr></tbody></table>

