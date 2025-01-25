# Modules in JavaScript?
**Modules in JavaScript are a way to organize and reuse code by dividing it into smaller, reusable pieces. Each module encapsulates code and can export specific parts of it, like functions, objects, or variables, so that other modules can import and use them. This modular design makes the codebase more maintainable, reusable, and easier to understand.**

## Key Features of JavaScript Modules:

- Encapsulation: Variables and functions defined in one module are not accessible outside unless explicitly exported.
- Reusability: You can use the same module across multiple parts of your project.
- Maintainability: Modules keep code organized by functionality.
- Native Support: Modern JavaScript (ES6 and above) provides native support for modules.

## Syntax:

- export: Used to expose functions, variables, or objects from a module.
- import: Used to bring the exported parts of a module into another file.

## 1. Creating a Module:

```
// Exporting a function
export function add(a, b) {
  return a + b;
}

// Exporting another function
export function subtract(a, b) {
  return a - b;
}

// Exporting a constant
export const PI = 3.14;
```

## 2. Importing the Module:

```
// Importing specific functions and constants
import { add, subtract, PI } from './mathUtils.js';

console.log(`Addition: ${add(5, 3)}`);         // Output: Addition: 8
console.log(`Subtraction: ${subtract(5, 3)}`); // Output: Subtraction: 2
console.log(`Value of PI: ${PI}`);             // Output: Value of PI: 3.14
```

## 3. Using Default Exports
A module can have a default export, which allows importing without curly braces.

```
// greeting.js
export default function greet(name) {
  return `Hello, ${name}!`;
}

// Importing the default export
import greet from './greeting.js';

console.log(greet('Punit')); // Output: Hello, Punit!

```

















