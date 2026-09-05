---
title: "Return Length of Arguments Passed"
slug: return-length-of-arguments-passed
date: "2026-08-17"
---

# My Solution
~~~javascript
/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args.length;
    
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
~~~

# Submission Review
## Approach
*   **Technique**: Rest parameters.
*   **Optimal**: Yes. This is the idiomatic and most efficient way to capture a variable number of arguments in modern JavaScript.

## Complexity
*   **Time Complexity**: $O(n)$, where $n$ is the number of arguments passed, as the JavaScript engine must iterate through the arguments to construct the `args` array.
*   **Space Complexity**: $O(n)$, to store the collected arguments in the `args` array.

## Efficiency Feedback
*   This solution is highly efficient. In JavaScript, the rest parameter syntax (`...args`) is optimized by engines.
*   **Alternative**: Using the `arguments` object (e.g., `return arguments.length;`) would avoid creating a new array, potentially saving memory. However, `arguments` is considered legacy and is not available in arrow functions, making the rest parameter approach the standard for modern codebases.

## Code Quality
*   **Readability**: Good. The code is concise and clear.
*   **Structure**: Good. The function body is minimal and directly addresses the requirement.
*   **Naming**: Good. `args` is standard for capturing variadic arguments.
*   **Improvements**: None required. The implementation is optimal for the given problem constraints.

---

# Question Revision
### Revision Report: Return Length of Arguments Passed

**Pattern:** Variadic Functions / Rest Parameters

**Brute Force:**
Iterate through the `arguments` object (a built-in array-like structure in JavaScript) using a `for...in` loop or by converting it to an array via `Array.from()` and accessing the `.length` property.

**Optimal Approach:**
Use the **rest parameter syntax** (`...args`) in the function definition to collect all arguments into a standard JavaScript array, then simply return the `.length` property.
*   **Time Complexity:** $O(n)$, where $n$ is the number of arguments passed, as the engine must iterate to collect them into the array.
*   **Space Complexity:** $O(n)$ to store the collected arguments in the array.

**The 'Aha' Moment:**
When the problem specifies an "unknown number of arguments," the rest parameter (`...args`) is the idiomatic way to handle variadic inputs compared to the legacy `arguments` object.

**Summary:** 
Use the rest operator (`...args`) to transform an arbitrary number of inputs into a standard array, unlocking all native array methods like `.length`.

---