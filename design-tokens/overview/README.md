---
description: >-
  Design tokens are a single source of truth to name and store design decisions
  for Plus UI's products.
---

# Overview

## What are design tokens?

Design Tokens are the single source of truth that stores design decisions distributed across design tools and coding languages. Use them for **colors**, **typography**, **shadows**, **border radius**, **spacing**, **borders**, **animation**, **icon** **sizing** and more. Design Tokens will help you:

* Manage your Design systems more efficiently
* Maintain consistency across product UI
* Bring developers and designers closer by creating a common language between them

\
Design tokens are the new way to apply visual foundations in Plus UI Design System and Component Library. They are a combination of names and corresponding values that encapsulate concise and recurring design choices. These tokens encompass a variety of attributes, such as colors, font styles, spacing units, or even motion animations, all tailored to serve specific design requirements.

For example,&#x20;

{% hint style="warning" %}

{% endhint %}

### Why use design tokens?

Design tokens unlock the potential for dynamic features such as global theming (including dark mode), responsive design, and user customization. They streamline both the design and development processes, simplifying decision-making and facilitating a seamless transition between design and development.

Our visual language continues to evolve, design tokens offer a game-changing advantage. Modifications can be made at a single point within the system, resonating across all products. Say goodbye to the tedious task of finding and replacing hard-coded values scattered throughout.

Plus UI further expedites the use of design tokens with automated tools, ensuring that both designers and developers can harness their power efficiently.

Tokens serve as the linchpin for implementing our newest visual foundations. This not only ensures visual consistency but also paves the way for other enhancements in the Plus UI.

### How to Interpret Design Token Names

Understanding the structure of design token names is key to swiftly locating the right token in both design and code contexts. Let's break it down:

<figure><img src="broken-reference" alt=""><figcaption></figcaption></figure>

1. **Foundation**: This part signifies the foundational design attribute or style, encompassing elements like color, elevation, or space.
2. **Property**: The property segment points to the specific UI element to which the token applies, whether it's a border, background, shadow, or another property.
3. **Modifier**: The modifier offers additional insights into the token's purpose, delineating its color role, emphasis, or interaction state. It's important to note that not every token requires a modifier. For instance, `color.text` represents our default body text color and doesn't necessitate a modifier.

## Plus UI's Design Tokens

### Color Tokens

Color tokens simplify the process of selecting and applying colors, ensuring a harmonious and cohesive color palette throughout your design. These tokens are versatile and are designed to cover a wide range of use cases, allowing you to maintain visual consistency across your design elements.

Specific color tokens have been designated for various design elements, including text, links, icons, backgrounds, borders, overlays, charts, and skeleton loaders in Plus UI's Design System.

For a comprehensive exploration of our color token system and guidance on using colors effectively in your designs, refer to our dedicated [color foundation.](broken-reference)

<figure><img src="broken-reference" alt=""><figcaption></figcaption></figure>

### Size Tokens

Size tokens simplify decision-making and ensure consistent sizing for elements across your design. These tokens are designed to be used for a wide range of contexts, providing guidance for both horizontal and vertical dimensions.

For an in-depth exploration of our size token system and practical guidance on integrating sizes effectively into your designs, refer to our dedicated size foundation.

<figure><img src="broken-reference" alt=""><figcaption></figcaption></figure>

### Border Radius Tokens

Border radius tokens ensure a consistent and harmonious curvature for various elements in your design. These tokens are designed for versatile applications and can be used to define border radius for different UI components and elements.&#x20;

To learn more about our spacing system and discover how to effectively integrate space into your designs, please visit our [spacing foundation](broken-reference) page or check out our design system on Figma.&#x20;

<figure><img src="broken-reference" alt=""><figcaption></figcaption></figure>

### Gap Tokens

Space tokens ensure a uniform spacing between elements in your page layout. These tokens are versatile, intended for both horizontal and vertical spacing, and can be applied in various design contexts.&#x20;

To learn more about our spacing system and discover how to effectively integrate space into your designs, please visit our [spacing foundation](broken-reference) page or check out our design system on Figma.&#x20;

<figure><img src="broken-reference" alt=""><figcaption></figcaption></figure>

## Use tokens in Figma

## Use tokens in code

### Primitives

Primitives in Figma are foundational design elements that form the basis of your components. By using Primitives like frames, shapes, and groups, you can build versatile and reusable components that are easy to modify and extend. For more information, please visit our [Primitives](../primitives.md) page.

<figure><img src="broken-reference" alt=""><figcaption><p>Plus UI's Primitives in Figma</p></figcaption></figure>

### Local Variables

Local Variables in Figma allow you to define and manage reusable values, such as colors, typography, spacing, and more, within your design files.

**Key Benefits of Local Variables:**

* **Centralized Control:** With Local Variables, you have a centralized hub for managing key design properties. Change a variable once, and it updates across your entire project, eliminating the need for manual adjustments.
* **Effortless Updates:** If you decide to tweak your color palette, typography, or other design elements, you can make updates in one place, and the changes propagate automatically.
* **Consistency:** Local Variables are the secret sauce for ensuring a consistent look and feel throughout your project, making it easier to maintain design integrity.

### Local Styles

Local Styles in Figma take your design consistency to the next level. They allow you to define and apply reusable text and layer styles, which is especially useful for maintaining a consistent brand identity and design language across your project.

**Key Benefits of Local Styles:**

* **Design Efficiency:** Local Styles streamline the design process by allowing you to save and apply consistent text and layer styles quickly.
* **Consistency Across Teams:** Whether you're working solo or in a team, Local Styles ensure that everyone adheres to the same design guidelines.
* **Easy Updates:** If a style needs modification, update the Local Style once, and it cascades across all instances.

### Alias





### Components

