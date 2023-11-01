---
description: Use our Chip component to represent tags, categories, or simple selections
---

# Chip

The Chip component is a versatile UI element that can display various types of information in a compact, interactive format. It's commonly used to represent tags, categories, or simple selections. This documentation provides an overview of the Chip component and its different variants, along with usage examples.

## 🧩 Anatomy

The anatomy of a Chip component within Plus UI is comprised of several integral elements that collectively define its functionality and appearance. It includes the chip label, container, and optional prefix/suffix icons. These elements collectively create a versatile component for displaying essential information or context in a visually appealing manner. Customizable properties further enhance the Chip component's user interaction and engagement capabilities within your application.

## 🛠️ Properties



| Kinds    | State   | Status  | Size   | Invert | Disabled |
| -------- | ------- | ------- | ------ | ------ | -------- |
| Filled   | Default | Default | Small  | True   | True     |
| Outlined | Hovered | Info    | Medium | False  | False    |
|          | Pressed | Success | Large  |        |          |
|          |         | Warning |        |        |          |
|          |         | Error   |        |        |          |

### Kinds

* **Filled chip** type provides a simple, solid-colored chip without any specific styling.
* **Outlined chip** type features a transparent background with a border. It's suitable for scenarios where you want a chip that doesn't stand out too much.



{% tabs %}
{% tab title="Javascript" %}

{% endtab %}

{% tab title="React" %}

{% endtab %}

{% tab title="Angular" %}

{% endtab %}

{% tab title="Vue" %}

{% endtab %}

{% tab title="Stelve" %}
```
// Some code
```
{% endtab %}
{% endtabs %}

### State

* **Default chip** represents the normal state of a chip, with no specific interactions or changes.
* **Hovered chip** represents a chip that the user's mouse pointer is currently hovering over. It can provide visual feedback to indicate interactivity.
* **Pressed chip**



{% tabs %}
{% tab title="Javascript" %}

{% endtab %}

{% tab title="React" %}

{% endtab %}

{% tab title="Angular" %}

{% endtab %}

{% tab title="Vue" %}

{% endtab %}

{% tab title="Stelve" %}
```
// Some code
```
{% endtab %}
{% endtabs %}

### Status

The Chip component can display different statuses using predefined colors.

* **Default chip** displays the information without any specific status color.
* **In progress chip** is typically used to indicate that a task or process is currently ongoing. It uses a distinct color to grab the user's attention.
* **Success chip** is used to signify that a task or action has been completed successfully. It typically uses a green color.
* **Warning chip** is used to highlight potential issues or warnings. It typically uses a yellow or orange color.
* **Error** **chip** is used to indicate errors or critical issues. It typically uses a red color to alert the user.

###

{% tabs %}
{% tab title="Javascript" %}

{% endtab %}

{% tab title="React" %}

{% endtab %}

{% tab title="Angular" %}

{% endtab %}

{% tab title="Vue" %}

{% endtab %}

{% tab title="Stelve" %}
```
// Some code
```
{% endtab %}
{% endtabs %}

### Size

Chips come in different sizes to accommodate various design needs.

* **Small**
* **Medium (Default)**
* **Large**



{% tabs %}
{% tab title="Javscript" %}
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

### Invert

The "invert" property for the chip component is a versatile attribute that empowers developers to easily toggle between the default and inverted appearance of the chip. This feature allows for greater design flexibility, enabling you to create eye-catching interfaces and customize the chip's look to match your application's style. Whether you're highlighting specific selections or adding emphasis to certain chips, the "invert" property provides a straightforward way to achieve a dynamic and engaging user interface.

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

### Disabled

Disabled chip indicates that the chip is not interactive and is in a disabled state. It is often used when a chip's functionality should be temporarily unavailable.



{% tabs %}
{% tab title="Javascript" %}

{% endtab %}

{% tab title="React" %}

{% endtab %}

{% tab title="Angular" %}

{% endtab %}

{% tab title="Vue" %}

{% endtab %}

{% tab title="Stelve" %}
```
// Some code
```
{% endtab %}
{% endtabs %}

## 🧬 Design Tokens

Design tokens are a combination of names and corresponding values that encapsulate concise and recurring design choices. These tokens encompass a variety of attributes, such as colors, font styles, spacing units, or even motion animations, all tailored to serve specific design requirements.&#x20;

In Plus UI, we use global tokens which provide a centralized and consistent way to manage and apply these design attributes throughout a project. To learn more about Plus UI's design tokens such as [color tokens](../design-tokens/overview/color-tokens.md), [size tokens](../design-tokens/overview/size-tokens.md), [border radius tokens](../design-tokens/overview/border-radius-tokens.md) and [gap tokens](../design-tokens/overview/gap-tokens.md), please visit [Design Tokens](broken-reference).

## 📏 Layout & Spacing

The placement and spacing of chip elements significantly impact the overall aesthetics and usability of your design. Well-considered spacing between chips, as well as their arrangement, enhances the user experience, making it easier for users to interact with and comprehend the content. Careful spacing and layout contribute to an intuitive and engaging interface, ensuring that your chip components serve their purpose effectively.

## 🌙 Light & Dark Mode

Offering light and dark mode options for chip components in user interfaces enhances user experience by catering to their comfort, preference, and accessibility. This design approach aligns with current trends and supports a range of user needs and choices. Additionally, it contributes to energy efficiency and a more sustainable user interaction.

## 🦾 Accessibility

Ensuring that chip components meet all accessibility criteria is of paramount importance. Accessible chips enable a wide range of users, including those with disabilities, to interact with the interface effectively. By adhering to these criteria, the chips provide equal access to information and functionality, promoting inclusivity and a positive user experience for everyone.

<table><thead><tr><th>Criteria</th><th width="397.3333333333333">Description</th><th data-type="select">Status</th></tr></thead><tbody><tr><td>ARIA Hidden Elements</td><td>Ensures aria-hidden elements are not focusable nor contain focusable elements</td><td></td></tr><tr><td>IDs of Active Elements</td><td>Ensures every id attribute value of active elements is unique</td><td></td></tr><tr><td>ID Elements</td><td>Ensures every id attribute value is unique</td><td></td></tr><tr><td>Tabindex Attributes</td><td>Ensures tabindex attribute values are not greater than 0</td><td></td></tr><tr><td>Color Contrast</td><td>Ensures the contrast between foreground and background colors meets WCAG 2 AA  contrast ratio thresholds</td><td></td></tr></tbody></table>

To learn more about Plus UI's accessibility criteria, please visit [Accessibility](broken-reference).

## 🎨 Design System

{% @figma/embed fileId="3NjFHfYJfEz4T5R18heV9O" nodeId="1632:9853" url="https://www.figma.com/file/3NjFHfYJfEz4T5R18heV9O/Plus-UI-Design-System?mode=design&node-id=1632:9853&t=SswlqwqlZ8qCzMIR-1&type=design" %}

## ⇅API



