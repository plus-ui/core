---
description: >-
  Avatars are an essential element found in a wide range of applications, from
  tables to dialog menus.
---

# Avatar

The Avatar component is used to represent users, providing a visual representation such as text initials, profile images, or icons. It comes with different customization options to fit various design requirements.

## 🧩 Anatomy



## 🛠️ Properties

With our properties and component structure, you have the creative freedom to tailor your avatar to precisely match your design preferences. All variable and variants identified exactly same on both our design system and our multi-framework component library.

<table><thead><tr><th width="190.33333333333331">Kinds</th><th>Size</th><th>Invert</th><th>Shape</th></tr></thead><tbody><tr><td>Text</td><td>xs</td><td>True</td><td>Circle</td></tr><tr><td>Image</td><td>xm</td><td>False</td><td>Rectangle</td></tr><tr><td>Icon</td><td>md</td><td></td><td></td></tr><tr><td></td><td>lg</td><td></td><td></td></tr><tr><td></td><td>custom</td><td></td><td></td></tr></tbody></table>

### Kinds

The Avatar component supports different types to represent users in various ways.

* **Text type** avatar displays initials representing the user's name.
* **Image type** avatar displays a user's profile image.
* **Icon type** avatar displays a custom icon to represent the user.

<figure><img src="broken-reference" alt=""><figcaption><p>text, icon, image types of Avatar</p></figcaption></figure>

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

{% hint style="info" %}
When no avatar image is available, the system uses the initials of the user's first and last name, capitalizing them. In the absence of user information, it substitutes with an icon.
{% endhint %}

{% hint style="warning" %}
* A text avatar acquires the capitalized initials of both the user's first name and last name. However, for XS-sized avatars, it uses only the capitalized initial of the user's first name.
* When both the first name and last name consist of more than two words, the text avatar will solely utilize the capital initials of the first and last names.
{% endhint %}

### Size

The Avatar component supports different size variants such as extra small, small, medium and large to fit various design requirements. You can also customize the size of the avatar component.



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

### Invert





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

### Shape



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

## 🧬 Design Tokens

Design tokens are a combination of names and corresponding values that encapsulate concise and recurring design choices. These tokens encompass a variety of attributes, such as colors, font styles, spacing units, or even motion animations, all tailored to serve specific design requirements.&#x20;

In Plus UI, we use global tokens which provide a centralized and consistent way to manage and apply these design attributes throughout a project. To learn more about Plus UI's design tokens such as [color tokens](../design-tokens/overview/color-tokens.md), [size tokens](../design-tokens/overview/size-tokens.md), [border radius tokens](../design-tokens/overview/border-radius-tokens.md) and [gap tokens](../design-tokens/overview/gap-tokens.md), please visit [Design Tokens](broken-reference).



## 📏 Layout & Spacing

Layout and spacing for avatar in user interfaces are crucial for usability, aesthetics, and accessibility. By paying attention to the placement and spacing of avatar, designers can create interfaces that are both visually appealing and user-friendly, ultimately enhancing the overall user experience.



## 🌙 Light & Dark Mode

Providing both light and dark modes for avatar in user interfaces enhances user comfort, choice, accessibility, and energy efficiency. It also aligns with contemporary design trends and accommodates a variety of user preferences and needs.&#x20;

{% hint style="info" %}
We structured the design system simply switch from the light mode to the dark mode within the **Layer > Color** section.
{% endhint %}



## 🦾 Accessibility

Accessibility is not only a moral and legal imperative but also a valuable design principle. Ensuring that avatar in a design system are accessible not only benefits users with disabilities but also leads to a more inclusive, user-friendly, and successful digital product.&#x20;

<table><thead><tr><th width="197.33333333333331">Criteria</th><th width="433">Description</th><th data-type="select">Status</th></tr></thead><tbody><tr><td>Discernible Text</td><td>Ensures buttons have discernible text</td><td></td></tr><tr><td>ID Attribute</td><td>Ensures every id attribute value is unique</td><td></td></tr><tr><td>Interactive Controls</td><td>Ensures interactive controls aren’t nested as they are not always announced by screen readers or can cause focus problems for assistive technologies</td><td></td></tr><tr><td>Tabindex Attribute</td><td>Ensures tabindex attribute values are not greater than 0</td><td></td></tr><tr><td>Color Contrast</td><td>Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds.</td><td></td></tr></tbody></table>

To learn more about Plus UI's accessibility criteria, please visit [Accessibility](broken-reference).



## 🎨 Design System

{% @figma/embed fileId="DTyYhNZUybgIJD4fj2LAP7" nodeId="4:675" url="https://www.figma.com/file/DTyYhNZUybgIJD4fj2LAP7/Components?mode=design&node-id=4:675&t=hkvkUNZZoAsV4hV0-1&type=design" %}

## ⇅ API

<table><thead><tr><th>Property</th><th>Description</th><th data-type="select" data-multiple>Type</th><th>Default</th></tr></thead><tbody><tr><td>name </td><td>The name of the person to display in the avatar.</td><td></td><td></td></tr><tr><td>color</td><td>The color of the avatar.</td><td></td><td></td></tr><tr><td>src </td><td>The URL of the image to display in the avatar.</td><td></td><td></td></tr><tr><td>image </td><td>The URL of the image to display in the avatar.</td><td></td><td></td></tr><tr><td>size</td><td>The size of the avatar.</td><td></td><td>medium</td></tr><tr><td>shape</td><td>The shape of the avatar.</td><td></td><td>circle</td></tr></tbody></table>

