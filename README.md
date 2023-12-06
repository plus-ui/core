<!-- markdownlint-disable MD033 MD041 -->

<p align="center">
  <a href="https://www.plusui.com">
    <img width="300" src="https://www.plusui.com/assets/plusui.svg" alt="Plus UI Logo" />
  </a>
</p>

# **Welcome to Plus UI Library! 🚀**

Elevate your development experience with Plus UI Library, a powerful toolkit offering a plethora of features seamlessly integrable into any framework.

[![npm](https://img.shields.io/npm/v/%40plusui%2Fcore?logo=javascript&label=%40plusui%2Fcore)](https://www.npmjs.com/package/@plusui/core) [![npm](https://img.shields.io/npm/v/%40plusui%2Freact?logo=react&label=%40plusui%2Freact)](https://www.npmjs.com/package/@plusui/react)

Plus UI Library provides a versatile collection of components that can be effortlessly utilized in your projects, ensuring a smooth and delightful user interface.

## Installation 📦

### Usage CDN 🌐

Include the Plus UI Library directly in your HTML file using a CDN. Follow these steps:

#### Step 1: Add Script and Stylesheet Links

Add the following code inside the `<head>` tag of your HTML file:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@plusui/core/+esm"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@plusui/core/dist/style.css"/>
```

#### Step 2: Integrate Plus UI Components

Now, you can use any Plus UI component in the body of your HTML file:

```html
<plus-button>Button</plus-button>
```

### Usage NPM 📦

Install Plus UI Library using npm, yarn, or pnpm. Follow these steps:

#### Step 1: Install the Package

Choose one of the following commands based on your preferred package manager:

```bash
npm install @plusui/core
```

```bash
yarn add @plusui/core
```

```bash
pnpm add @plusui/core
```

#### Step 2: Import and Use Components

In your JavaScript-based project, import Plus UI components like this:

```js
import '@plusui/core';
```

Now, you can use Plus UI components in your HTML:

```html
<plus-button>Button</plus-button>
```

### Usage React ⚛️

To integrate Plus UI Library into a React or TypeScript project, follow these steps:

#### Step 1: Install the Packages

Install both `@plusui/core` and `@plusui/react` packages using npm:

```bash
npm install @plusui/core @plusui/react
```

#### Step 2: Import Stylesheet

In your root React file (e.g., `index.js` or `index.tsx`), import the Plus UI stylesheet:

```jsx
import "@plusui/core/style.css";
```

#### Step 3: Import and Use Components

Import the desired Plus UI component(s) in your React component file and use them as shown below:

```jsx
import React from 'react';
import { PlusButton } from '@plusui/react';

function App() {
  return (
    <PlusButton>Button</PlusButton>
  );
}

export default App;
```
### Usage Angular ⚙️

Integrate Plus UI Library into your Angular project with the following steps:

#### Step 1: Install the Package

Run the following command in the terminal to install the Plus UI package:

```bash
npm install @plusui/core
```

#### Step 2: Add Stylesheet to Angular Project

Open the `angular.json` file in your Angular project and add the Plus UI style file to the "styles" section:

```json
"styles": [
    "src/styles.css",
    "node_modules/@plusui/core/dist/style.css"
],
```

#### Step 3: Import Plus UI in AppModule

Open the `app.module.ts` file within your Angular project. Perform the necessary import operations and add `CUSTOM_ELEMENTS_SCHEMA` in the `schemas` section:

```typescript
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import '@plusui/core';
// Other imports...

@NgModule({
  declarations: [ 
    // Other declarations...
  ],
  imports: [
    // Other imports...
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // needed to support custom elements
  // Other module metadata...
})
export class AppModule { }
```

#### Step 4: Use Plus UI Components in Angular Component

Open an Angular component file within your project and add an example using the Plus UI component:

```html
<plus-button>Button</plus-button>
```
