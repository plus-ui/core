---
description: >-
  Avatars are an essential element found in a wide range of applications, from
  tables to dialog menus.
---

# Avatar

The Avatar component is used to represent users, providing a visual representation such as text initials, profile images, or icons. It comes with different customization options to fit various design requirements.

## 🧩 Anatomy

The anatomy of an avatar consists of a profile image, which serves as the primary visual representation, complemented by the user's name or a related label. These elements together create a compact yet informative depiction of a user or entity in various applications and interfaces.\


## 🛠️ Properties

With our properties and component structure, you have the creative freedom to tailor your avatar to precisely match your design preferences. All variable and variants identified exactly same on both our design system and our multi-framework component library.

<table><thead><tr><th width="190.33333333333331">Kinds</th><th width="139">Size</th><th width="200">Invert</th><th>Shape</th></tr></thead><tbody><tr><td>Text</td><td>xs</td><td>True</td><td>Circle</td></tr><tr><td>Image</td><td>xm</td><td>False</td><td>Rectangle</td></tr><tr><td>Icon</td><td>md</td><td></td><td></td></tr><tr><td></td><td>lg</td><td></td><td></td></tr><tr><td></td><td>custom</td><td></td><td></td></tr></tbody></table>

### Kinds

The Avatar component supports different types to represent users in various ways.

* **Text type** avatar displays initials representing the user's name.
* **Image type** avatar displays a user's profile image.
* **Icon type** avatar displays a custom icon to represent the user.

<figure><img src="broken-reference" alt=""><figcaption></figcaption></figure>

{% tabs %}
{% tab title="Javascript" %}
```html
<plus-avatar></plus-avatar>
<plus-avatar text="William Dennis"></plus-avatar>
<plus-avatar image="link:"></plus-avatar>
```
{% endtab %}

{% tab title="React" %}
```jsx
⏳ soon
```
{% endtab %}

{% tab title="Angular" %}
```jsx
⏳ soon
```
{% endtab %}

{% tab title="Vue" %}
```
⏳ soon
```
{% endtab %}

{% tab title="Stelve" %}
```
⏳ soon
```
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

The Avatar component supports different size variants such as extra small, small, medium and large to fit various design requirements.&#x20;

You can also customize the size of the avatar component.

<figure><img src="broken-reference" alt=""><figcaption></figcaption></figure>

{% tabs %}
{% tab title="Javascript" %}
```html
<plus-avatar size="xs" text="Avatar"></plus-avatar>
<plus-avatar size="sm" text="Avatar"></plus-avatar>
<plus-avatar size="md" text="Avatar"></plus-avatar> // default
<plus-avatar size="lg" text="Avatar"></plus-avatar>
```
{% endtab %}

{% tab title="React" %}
```
⏳ soon
```
{% endtab %}

{% tab title="Angular" %}
```
⏳ soon
```
{% endtab %}

{% tab title="Vue" %}
```
⏳ soon
```
{% endtab %}

{% tab title="Stelve" %}
```
⏳ soon
```
{% endtab %}
{% endtabs %}

### Invert

The `invert` property provides the option to invert the color scheme of the avatar. This can be particularly useful for highlighting specific avatars or indicating a change in status or mode. By inverting the colors, you can draw attention to certain avatars and create a visually distinct user experience.

<figure><img src="broken-reference" alt=""><figcaption></figcaption></figure>

{% tabs %}
{% tab title="Javascript" %}
```html
<plus-avatar text="Avatar" invert></plus-avatar>
```
{% endtab %}

{% tab title="React" %}
```
⏳ soon
```
{% endtab %}

{% tab title="Angular" %}
```
⏳ soon
```
{% endtab %}

{% tab title="Vue" %}
```
⏳ soon
```
{% endtab %}

{% tab title="Stelve" %}
```
⏳ soon
```
{% endtab %}
{% endtabs %}

### Shape

The `shape` property allows you to define the shape of the avatar. Avatars can take on one of two shapes: "circle" or "square." You can choose the shape that best aligns with your design preferences or the specific context in which the avatar is used.

* **Circle shape** imparts a rounded, circular appearance to the avatar. It's often employed to create a softer and more approachable visual identity for users or entities.
* **Square shape** imparts a square or rectangular appearance to the avatar. This shape provides a more geometric and structured visual style, suitable for various design contexts.



{% tabs %}
{% tab title="Javascript" %}
```html
<plus-avatar text="Avatar" shape="circle"></plus-avatar> // default
<plus-avatar text="Avatar" shape="square"></plus-avatar> 
```
{% endtab %}

{% tab title="React" %}
```
⏳ soon
```
{% endtab %}

{% tab title="Angular" %}
```
⏳ soon
```
{% endtab %}

{% tab title="Vue" %}
```
⏳ soon
```
{% endtab %}

{% tab title="Stelve" %}
```
⏳ soon
```
{% endtab %}
{% endtabs %}

## 🧬 Design Tokens

Design tokens are a combination of names and corresponding values that encapsulate concise and recurring design choices. These tokens encompass a variety of attributes, such as colors, font styles and spacing units, all tailored to serve specific design requirements.&#x20;

In Plus UI, we use global tokens which provide a centralized and consistent way to manage and apply these design attributes throughout a project. To learn more about Plus UI's design tokens such as [color tokens](../design-tokens/overview/color-tokens.md), [size tokens](../design-tokens/overview/size-tokens.md), [border radius tokens](../design-tokens/overview/border-radius-tokens.md) and [gap tokens](../design-tokens/overview/gap-tokens.md), please visit [Design Tokens](broken-reference).



## 📏 Layout & Spacing

Layout and spacing for avatars within user interfaces are fundamental aspects that significantly impact the overall design and user experience.  A well-defined avatar layout ensures that users can easily recognize and engage with profile images, enhancing the overall user experience while maintaining aesthetic harmony. Additionally, attention to spacing around avatars plays a vital role in preventing clutter, improving readability, and accommodating various screen sizes and orientations.



## 🌙 Light & Dark Mode

Offering both light and dark modes for avatars in user interfaces enhances user experience by providing visual comfort, choice, and improved accessibility. It ensures users can adapt the interface to their preferred appearance, promoting inclusivity. This feature aligns with modern design trends and caters to diverse user preferences, while our design system simplifies the transition between light and dark modes with just one click.

<figure><img src="broken-reference" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
We structured the design system simply switch from the light mode to the dark mode within the **Layer > Color** section.
{% endhint %}



## 🦾 Accessibility

Accessibility is a foundational principle for avatars within a design system, representing both a moral obligation and a legal requirement. Prioritizing accessibility in avatar design not only ensures compliance with regulations but also fosters inclusivity. This approach results in a more user-friendly and successful digital product, benefiting all users, including those with disabilities.

<table><thead><tr><th width="202.33333333333331">Criteria</th><th width="438">Description</th><th data-type="select">Status</th></tr></thead><tbody><tr><td>ARIA attributes</td><td>Ensures ARIA attributes are allowed for an element's role</td><td></td></tr><tr><td>ARIA Role</td><td>Ensures role attribute has an appropriate value for the element</td><td></td></tr><tr><td>Aria-hidden Elements</td><td>Ensures aria-hidden elements are not focusable nor contain focusable elements</td><td></td></tr><tr><td>Attributes Provided</td><td>Ensures elements with ARIA roles have all required ARIA attributes</td><td></td></tr><tr><td>Roles Valid Values</td><td>Ensures all elements with a role attribute use a valid value</td><td></td></tr><tr><td>Attributes Valid Values</td><td>Ensures all ARIA attributes have valid values</td><td></td></tr><tr><td>Attributes Valid Names</td><td>Ensures attributes that begin with aria- are valid ARIA attributes</td><td></td></tr><tr><td>Unique ID Attributes</td><td>Ensures every id attribute value is unique</td><td></td></tr><tr><td>Nested Interactive Controls</td><td>Ensures interactive controls are not nested as they are not always announced by screen  readers or can cause focus problems for assistive technologies</td><td></td></tr><tr><td>Alternative Text</td><td>Ensures [role='img'] elements have alternate text</td><td></td></tr><tr><td>Color Contrast</td><td>Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds.</td><td></td></tr></tbody></table>

To learn more about Plus UI's accessibility criteria, please visit [Accessibility](broken-reference).



## 🎨 Design System

Our comprehensive design system includes the Avatar component, offering a consistent and user-friendly approach to representing users or entities in your application. Explore how our design system streamlines the implementation and customization of avatars.

{% @figma/embed fileId="3NjFHfYJfEz4T5R18heV9O" nodeId="1632:8723" url="https://www.figma.com/file/3NjFHfYJfEz4T5R18heV9O/Plus-UI-Design-System?mode=design&node-id=1632:8723&t=SswlqwqlZ8qCzMIR-1&type=design" %}

{% hint style="info" %}
To learn more about Plus UI Design System, please visit [Design System.](broken-reference)
{% endhint %}

## ⇅ API

<table><thead><tr><th width="132">Property</th><th width="301">Description</th><th width="185" data-type="select" data-multiple>Type</th><th>Default</th></tr></thead><tbody><tr><td>name </td><td>The name of the person to display in the avatar.</td><td></td><td>null</td></tr><tr><td>icon</td><td>The "icon" prop is used to specify the icon or symbol associated with the component.</td><td></td><td>fas fa-user</td></tr><tr><td>alt</td><td>The "alt" prop is used to provide alternative text for an image or icon, typically for accessibility purposes</td><td></td><td>null</td></tr><tr><td>color</td><td>The color of the avatar.</td><td></td><td>null</td></tr><tr><td>invert</td><td>The "invert" prop is used to toggle the inversion or color reversal of the component, typically for visual effects or styling changes.</td><td></td><td>false</td></tr><tr><td>text</td><td>This prop represents the main text content of the component.</td><td></td><td>null</td></tr><tr><td>image </td><td>The URL of the image to display in the avatar.</td><td></td><td>null</td></tr><tr><td>size</td><td>The size of the avatar.</td><td></td><td>md</td></tr><tr><td>shape</td><td>The shape of the avatar.</td><td></td><td>circle</td></tr></tbody></table>

