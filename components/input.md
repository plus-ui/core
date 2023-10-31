---
description: The input component allows users to enter and edit text.
---

# Input

The Input component is a versatile UI element used to capture user input, such as text or numbers. It offers various customization options and states to ensure a seamless user experience in your applications.

## 🧩 Anatomy

## 🛠️ Properties



## Basic Input Usage

To use the Input component, you'll need to import it into your project and add it to your forms or user interface elements. Here's a basic example:

```jsx
jsxCopy codeimport React from 'react';
import Input from 'your-ui-library/Input';

const MyComponent = () => {
  return (
    <Input placeholder="Enter text here" />
  );
};
```

## States

The Input component supports different states to provide visual feedback and indicate user interactions.

### Default

The default appearance of the input when not interacted with.

```jsx
jsxCopy code<Input placeholder="Default Input" />
```

### Hovered

The input state when the cursor hovers over it, indicating potential interactivity.

```jsx
jsxCopy code<Input placeholder="Hovered Input" />
```

### Pressed

The pressed input state appears when the user clicks or taps on the input.

```jsx
jsxCopy code<Input placeholder="Pressed Input" />
```

### Filled

The filled input state indicates that the input has a value or content.

```jsx
jsxCopy code<Input placeholder="Filled Input" value="Sample text" />
```

### Focused

The focused input state highlights the input when it gains focus, often with a border or outline.

```jsx
jsxCopy code<Input placeholder="Focused Input" autoFocus />
```

### ReadOnly

The read-only input state prevents users from editing the input content but allows them to select and copy text.

```jsx
jsxCopy code<Input placeholder="Read Only Input" readOnly value="Read-only text" />
```

### Disabled

The disabled input state signifies that the input is not available for interaction.

```jsx
jsxCopy code<Input placeholder="Disabled Input" disabled />
```

## Size

The Input component supports different size variants such as small, medium, and large to fit various design requirements.

```jsx
jsxCopy code<Input placeholder="Large Input" size="large" />
```

***

## 🧬 Design Tokens

Design tokens are a combination of names and corresponding values that encapsulate concise and recurring design choices. These tokens encompass a variety of attributes, such as colors, font styles, spacing units, or even motion animations, all tailored to serve specific design requirements.&#x20;

In Plus UI, we use global tokens which provide a centralized and consistent way to manage and apply these design attributes throughout a project. To learn more about Plus UI's design tokens such as [color tokens](../design-tokens/overview/color-tokens.md), [size tokens](../design-tokens/overview/size-tokens.md), [border radius tokens](../design-tokens/overview/border-radius-tokens.md) and [gap tokens](../design-tokens/overview/gap-tokens.md), please visit [Design Tokens](broken-reference).

## 📏 Layout & Spacing

## 🌙 Light & Dark Mode

## 🦾 Accessibility

## 🎨 Design System

## ⇅API

<table data-full-width="true"><thead><tr><th width="192">Property</th><th width="373">Description</th><th width="253" data-type="select">Type</th><th>Default</th></tr></thead><tbody><tr><td>value</td><td>The property represents the value of the input element. It stores the text or data entered by the user into the input field. The default value is an empty string ("").</td><td></td><td>""</td></tr><tr><td>type</td><td>This property sets the type of the input element. It can be used to control the input's behavior and appearance, such as "text," "number," "email," etc. The default value is "text."</td><td></td><td>text</td></tr><tr><td>size</td><td>This property determines the size of the input component and can have custom size values such as "small," "medium," or "large." The default value is set to "medium"</td><td></td><td>medium</td></tr><tr><td>label</td><td>The property provides a label for the input, which is typically displayed alongside the input field to describe its purpose</td><td></td><td>null</td></tr><tr><td>placeholder</td><td>This property sets a placeholder text for the input field, which is displayed as a hint inside the input before the user enters any value.</td><td></td><td>null</td></tr><tr><td>caption</td><td>The property represents an additional description or caption for the input component.</td><td></td><td>null</td></tr><tr><td>captionType</td><td>This property determines the style or type of the caption text, such as "default," "error," etc. The default value is "default."</td><td></td><td>default</td></tr><tr><td>pattern</td><td>The property specifies a regular expression pattern that the input's value must match for it to be considered valid.</td><td></td><td>null</td></tr><tr><td>fullWidth</td><td>This property controls whether the input should take up the full width of its container or not. The default value is <code>false</code>.</td><td></td><td>null</td></tr><tr><td>step</td><td>This property defines the step interval for numeric inputs or inputs with number-related functionality. It can be a specific number or the string "any."</td><td></td><td>null</td></tr><tr><td>autocapitalize</td><td>The property specifies the autocapitalization behavior of the input. It can take values like "off," "none," "on," "sentences," "words," or "characters."</td><td></td><td>null</td></tr><tr><td>autocorrect</td><td>The property determines whether the input's value should be automatically corrected or not. It can have values "off" or "on."</td><td></td><td>null</td></tr><tr><td>autocomplete</td><td>This property enables or disables autocomplete suggestions for the input field.</td><td></td><td>null</td></tr><tr><td>autofocus</td><td>The property, if set to <code>true</code>, allows the input to receive focus automatically when the component is mounted or rendered.</td><td></td><td>false</td></tr><tr><td>enterkeyhint</td><td>This property provides a hint to the browser about what action should be taken when the user presses the "Enter" key while interacting with the input.</td><td></td><td>null</td></tr><tr><td>inputmode</td><td>The property specifies the type of data expected by the input and can be values like "none," "text," "decimal," "numeric," "tel," "search," "email," or "url."</td><td></td><td>null</td></tr><tr><td>passwordToggle</td><td>If set to <code>true</code>, this property enables a password toggle functionality, allowing the user to show or hide the input's content. The default value is <code>false</code>.</td><td></td><td>false</td></tr><tr><td>minlength</td><td>This property specifies the minimum number of characters or digits required for the input's value to be considered valid.</td><td></td><td>null</td></tr><tr><td>maxlength</td><td>The property sets the maximum number of characters or digits allowed for the input's value.</td><td></td><td>null</td></tr><tr><td>min</td><td>The property defines the minimum allowed value for numeric inputs.</td><td></td><td>null</td></tr><tr><td>max</td><td>The property specifies the maximum allowed value for numeric inputs.</td><td></td><td>null</td></tr></tbody></table>

***
