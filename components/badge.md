---
description: Badge produces a tiny emblem on the upper-right side of its offspring.
---

# Badge

The Badge component is a versatile UI element used to display additional information, notifications, or status indicators. This documentation provides an overview of the Badge component and its different variants, states, sizes, and additional features, along with usage examples.

## 🧩 Anatomy

The Badge component comes in different variants to suit various design requirements.



## 🛠️ Properties

### Kind

* **Text badge** variant displays textual content, such as numbers or short labels.
* **Dot badge** variant uses a small dot to indicate the presence of new information or notifications without displaying specific content.
* **Number badge** variant shows a numerical value or count as its content.
* **Icon badge** variant allows you to place an icon as the content of the badge.



{% tabs %}
{% tab title="First Tab" %}

{% endtab %}

{% tab title="Untitled" %}

{% endtab %}

{% tab title="Untitled" %}

{% endtab %}

{% tab title="Untitled" %}

{% endtab %}

{% tab title="Second Tab" %}

{% endtab %}
{% endtabs %}

### Status

The Badge component supports different states to indicate various statuses or interactions.

* **Default** state represents the badge in its normal state, with no specific interactions or changes.
* **In Progress** state is typically used to indicate that a task or action is currently ongoing. It provides a visual cue that something is happening.
* **Success** state is used to signify that a task or action has been completed successfully. It typically uses a green color to convey a positive outcome.
* **Warning** state is used to highlight potential issues or warnings. It typically uses a yellow or orange color to grab the user's attention.
* **Error** state is used to indicate errors or critical issues. It typically uses a red color to alert the user to a problem.



{% tabs %}
{% tab title="First Tab" %}

{% endtab %}

{% tab title="Untitled" %}

{% endtab %}

{% tab title="Untitled" %}

{% endtab %}

{% tab title="Untitled" %}

{% endtab %}

{% tab title="Second Tab" %}

{% endtab %}
{% endtabs %}

### Size

The Badge component comes in different sizes to accommodate various design needs.

* Small
* Medium (Default)
* Large

You can set the size of a badge using the `size` prop.



{% tabs %}
{% tab title="First Tab" %}

{% endtab %}

{% tab title="Second Tab" %}

{% endtab %}

{% tab title="Untitled" %}

{% endtab %}

{% tab title="Untitled" %}

{% endtab %}

{% tab title="Untitled" %}

{% endtab %}
{% endtabs %}

### Invert

The "Outline" variant adds a border around the badge, providing a clean and subtle appearance.

{% tabs %}
{% tab title="First Tab" %}

{% endtab %}

{% tab title="Second Tab" %}

{% endtab %}

{% tab title="Untitled" %}

{% endtab %}

{% tab title="Untitled" %}

{% endtab %}

{% tab title="Untitled" %}

{% endtab %}
{% endtabs %}

## 🧬 Design Tokens

Design tokens are a combination of names and corresponding values that encapsulate concise and recurring design choices. These tokens encompass a variety of attributes, such as colors, font styles, spacing units, or even motion animations, all tailored to serve specific design requirements.&#x20;

In Plus UI, we use global tokens which provide a centralized and consistent way to manage and apply these design attributes throughout a project. To learn more about Plus UI's design tokens such as [color tokens](../design-tokens/overview/color-tokens.md), [size tokens](../design-tokens/overview/size-tokens.md), [border radius tokens](../design-tokens/overview/border-radius-tokens.md) and [gap tokens](../design-tokens/overview/gap-tokens.md), please visit [Design Tokens](broken-reference).



## 📏 Layout & Spacing

Layout and spacing for buttons in user interfaces are crucial for usability, aesthetics, and accessibility. By paying attention to the placement and spacing of buttons, designers can create interfaces that are both visually appealing and user-friendly, ultimately enhancing the overall user experience.

## 🌙 Light & Dark Mode

Providing both light and dark modes for buttons in user interfaces enhances user comfort, choice, accessibility, and energy efficiency. It also aligns with contemporary design trends and accommodates a variety of user preferences and needs.&#x20;



{% hint style="info" %}
We structured the design system simply switch from the light mode to the dark mode within the **Layer > Color** section.
{% endhint %}

##

## 🦾 Accessibility

Accessibility is not only a moral and legal imperative but also a valuable design principle. Ensuring that buttons in a design system are accessible not only benefits users with disabilities but also leads to a more inclusive, user-friendly, and successful digital product.&#x20;

|   |   |   |
| - | - | - |
|   |   |   |
|   |   |   |
|   |   |   |

## 🎨 Design System

{% @figma/embed fileId="3NjFHfYJfEz4T5R18heV9O" nodeId="1594:26193" url="https://www.figma.com/file/3NjFHfYJfEz4T5R18heV9O/Plus-UI-Design-System?mode=design&node-id=1594:26193&t=xSkmDRwU2t0KoyvN-1&type=design" %}

## ⇅ API

<table data-full-width="true"><thead><tr><th width="125">Property</th><th width="421">Description</th><th width="325" data-type="select">Type</th><th>Default</th></tr></thead><tbody><tr><td>fill</td><td>This property determines whether the badge should have a filled background or not. If set to <code>true</code>, the badge will have a filled background; otherwise, if set to <code>false</code>, the badge will have a transparent background. By default, it is set to <code>false</code></td><td></td><td>false</td></tr><tr><td>size</td><td>This property represents the size of the badge component and can have three possible values - "small", "medium", or "large". The default value is set to "medium"</td><td></td><td>medium </td></tr><tr><td>status</td><td>This property determines the status of the badge and can be one of five options - "default", "success", "warning", "error", or "info". The default value is set to "default".</td><td></td><td>default</td></tr><tr><td>value</td><td>This property holds the value or content that will be displayed within the badge. It is initialized with an empty string by default.</td><td></td><td>null</td></tr><tr><td>icon</td><td>This property allows you to specify an icon to be displayed within the badge. The value of this property should be the name or URL of the icon to be used. By default, it is set to an empty string, meaning no icon will be displayed if not explicitly provided.</td><td></td><td>null</td></tr></tbody></table>

