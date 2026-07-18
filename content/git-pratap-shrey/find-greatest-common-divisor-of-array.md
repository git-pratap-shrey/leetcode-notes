---
title: "Find Greatest Common Divisor of Array"
slug: find-greatest-common-divisor-of-array
date: "2026-07-18"
---

# My Solution
~~~cpp
class Solution {
public:
    int calculate_gcd(int a, int b) {
        if (b == 0) {
            return a;
        }
        return calculate_gcd(b, a % b);
    }
    int findGCD(vector<int>& nums) {
        int smallest = 1001;
        int biggest = 0;

        for (int num : nums) {
            if (num < smallest) {
                smallest = num;
            }
            if (num > biggest) {
                biggest = num;
            }
        }
        return calculate_gcd(biggest, smallest);
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Linear scan to find the minimum and maximum elements, followed by the Euclidean algorithm for GCD.
- **Optimality:** Optimal. Finding the min and max requires a single pass $O(N)$, and the Euclidean algorithm is logarithmic with respect to the input values.

## Complexity
- **Time Complexity:** $O(N + \log(\min(a, b)))$, where $N$ is the number of elements in the array.
- **Space Complexity:** $O(\log(\min(a, b)))$ due to the recursive stack of the Euclidean algorithm (or $O(1)$ if tail-call optimized/converted to iterative).

## Efficiency Feedback
- The logic is efficient. The time complexity is dominated by the linear scan.
- **Micro-optimization:** The `calculate_gcd` function can be implemented iteratively to guarantee $O(1)$ auxiliary space by eliminating the recursion stack.
- The use of `<algorithm>` headers `std::min_element` and `std::max_element` or `std::minmax_element` would make the code more idiomatic, though the manual loop is equally performant.

## Code Quality
- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Good. Separation of concerns between GCD calculation and array processing is maintained.
- **Naming:** Good. Variable names (`smallest`, `biggest`, `calculate_gcd`) are descriptive and standard.
- **Concrete Improvements:**
    - Consider using `std::gcd` available in the `<numeric>` header (since C++17) to reduce boilerplate.
    - If restricted to pre-C++17, you can replace your custom `calculate_gcd` with a simple `while` loop:
      ```cpp
      while (b) {
          a %= b;
          std::swap(a, b);
      }
      return a;
      ```
    - Initialize `smallest` and `biggest` using `nums[0]` to handle the constraints more safely rather than relying on an arbitrary constant like `1001`.

---

# Question Revision
### Revision Report: Find Greatest Common Divisor of Array

**Pattern:** Math / Linear Scan

**Brute Force:**
Iterate through the array to find the global minimum and maximum, then iterate from the minimum value down to 1 to find the largest integer that divides both.
*   **Time Complexity:** $O(n + \min(A))$
*   **Space Complexity:** $O(1)$

**Optimal Approach:**
1. Traverse the array once to find `min` and `max` values.
2. Use the **Euclidean Algorithm** to compute the GCD of the `min` and `max`.
*   **Time Complexity:** $O(n + \log(\min(A, B)))$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
When a problem asks for an aggregate property (like GCD) based on the extreme values of a set, the problem is actually just a search for the bounds followed by a targeted mathematical operation.

**Summary:** 
Identify the range extremities first, then apply the Euclidean Algorithm to reduce the complexity of GCD calculation from linear to logarithmic.

---