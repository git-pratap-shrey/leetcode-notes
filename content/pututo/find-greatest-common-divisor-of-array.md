---
title: "Find Greatest Common Divisor of Array"
slug: find-greatest-common-divisor-of-array
date: "2026-07-18"
---

# My Solution
~~~cpp
class Solution {
public:
    int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    int findGCD(vector<int>& nums) {
        int s=*min_element(nums.begin(),nums.end());
        int l=*max_element(nums.begin(),nums.end());
        return gcd(s, l);
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Greedy/Math. The solution identifies the minimum and maximum elements in the array and computes their Greatest Common Divisor using the Euclidean algorithm.
*   **Optimality:** Optimal. Finding the min and max requires a linear scan $O(N)$, and the Euclidean algorithm is logarithmic with respect to the input values.

## Complexity
*   **Time Complexity:** $O(N + \log(\min(s, l)))$, where $N$ is the size of the array and $s, l$ are the min and max elements.
*   **Space Complexity:** $O(1)$, as it only uses a few integer variables.

## Efficiency Feedback
*   **Performance:** The efficiency is excellent. Using `std::min_element` and `std::max_element` processes the array in a single pass (or two separate passes depending on implementation). 
*   **Optimization:** Technically, you could find both min and max in a single custom loop to reduce the number of passes over the data from two to one, though this is a micro-optimization that won't change the asymptotic complexity.

## Code Quality
*   **Readability:** Good. The code is concise and logic is straightforward.
*   **Structure:** Good. The use of a helper function for GCD keeps the main logic clean.
*   **Naming:** Moderate. `s` and `l` are slightly too brief; `minVal` and `maxVal` would be more descriptive.
*   **Improvements:** 
    *   Consider using `std::gcd` from the `<numeric>` header (available since C++17) instead of implementing a custom one.
    *   Ensure the code handles potential edge cases (though constraints on this problem usually guarantee $N \ge 2$ and positive integers).
    *   Add `const` qualifiers to parameters, e.g., `const vector<int>& nums`.

---

# Question Revision
### Revision Report: Find Greatest Common Divisor of Array

**Pattern:** Math / Linear Scan

**Brute Force:**
Iterate through the array to find the minimum and maximum values using two separate passes, then calculate the GCD using the Euclidean algorithm.  
*   **Time:** $O(n + \log(\min(min, max)))$
*   **Space:** $O(1)$

**Optimal Approach:**
Combine the minimum and maximum finding into a single pass ($O(n)$) and apply the Euclidean algorithm ($O(\log(\min(a, b)))$) using the recursive formula `gcd(a, b) = gcd(b, a % b)`.  
*   **Time:** $O(n)$
*   **Space:** $O(\log(\min(a, b)))$ due to the recursion stack of the Euclidean algorithm.

**The 'Aha' Moment:**
When a problem asks for a property involving the extreme values of a dataset, a single pass to track `min` and `max` simultaneously is always more efficient than sorting ($O(n \log n)$).

**Summary:**
Find the boundaries first, then apply the Euclidean algorithm to reduce the complexity to linear time.

---