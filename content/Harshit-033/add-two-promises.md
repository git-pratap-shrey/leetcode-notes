---
title: "Add Two Promises"
slug: add-two-promises
date: "2026-09-28"
---

# My Solution
~~~javascript
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    const [a, b] = await Promise.all([promise1, promise2]);
    return a + b;
    
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
~~~

# Submission Review
## Approach
- **Technique**: Asynchronous concurrency using `Promise.all` combined with `async/await` syntax.
- **Optimality**: Optimal. `Promise.all` allows both promises to be processed concurrently rather than sequentially, ensuring the function resolves as soon as the slowest promise completes.

## Complexity
- **Time Complexity**: $O(1)$ relative to the input size (excluding the internal resolution time of the passed promises).
- **Space Complexity**: $O(1)$ to store the two resolved values.

## Efficiency Feedback
- **Runtime**: Minimal. By avoiding `await promise1; await promise2;`, the code prevents "waterfalling," meaning the total wait time is $\max(t_1, t_2)$ instead of $t_1 + t_2$.
- **Memory**: Low. Only a small temporary array is created by `Promise.all` to hold the results.

## Code Quality
- **Readability**: Good. The use of destructuring `[a, b]` makes the intent clear and concise.
- **Structure**: Good. The function correctly returns a promise (implicit in `async` functions) and handles the asynchronous flow cleanly.
- **Naming**: Moderate. `a` and `b` are generic, though acceptable given the simplicity of the mathematical operation.
- **Improvements**: None required for this scope. The solution is idiomatic modern JavaScript.

---

# Question Revision
### Revision Report: Add Two Promises

- **Pattern**: Asynchronous Orchestration (`Promise.all`)
- **Brute Force**: Await each promise sequentially using `await p1` then `await p2`. This is inefficient because the second promise doesn't start resolving until the first one finishes, wasting time if they are independent.
- **Optimal Approach**: Use `Promise.all([p1, p2])` to trigger both promises concurrently. Once the returned array contains both resolved values, sum them up.
    - **Time Complexity**: $O(\max(T_1, T_2))$ where $T$ is the resolution time of each promise.
    - **Space Complexity**: $O(1)$ to store the final sum.
- **The 'Aha' Moment**: The requirement to sum two independent asynchronous values suggests that waiting for them sequentially is a bottleneck, signaling the need for parallel execution.
- **Summary**: To handle multiple independent promises, use `Promise.all` to resolve them concurrently rather than sequentially.

---