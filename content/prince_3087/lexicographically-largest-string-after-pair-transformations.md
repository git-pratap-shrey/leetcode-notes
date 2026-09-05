---
title: "Lexicographically Largest String After Pair Transformations"
slug: lexicographically-largest-string-after-pair-transformations
date: "2026-08-29"
---

# My Solution
~~~cpp
class Solution {
public:
    int maxArea(vector<int>& height) {
        int left=0,right=height.size()-1;
        int area = 0;
        while(left<right){
            area = max(area,((right-left)*min(height[left],height[right])));
            if(height[left]<height[right]){
                left++;
            }
            else{
                right--;
            }
        }
        return area;

        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Two-pointer approach.
*   **Optimality:** Optimal. This is the standard $O(n)$ solution for the "Container With Most Water" problem.

## Complexity
*   **Time Complexity:** $O(n)$, where $n$ is the number of elements in `height`. The pointers traverse the array exactly once.
*   **Space Complexity:** $O(1)$, as it uses only a few integer variables regardless of input size.

## Efficiency Feedback
*   **Runtime:** Highly efficient. The algorithm visits each element at most once.
*   **Memory:** Highly efficient. No additional data structures are allocated.
*   **Optimization:** The solution is already at the theoretical limit for this problem.

## Code Quality
*   **Readability:** Good. The logic is concise and follows standard idiomatic patterns for this problem.
*   **Structure:** Good. The function is self-contained and logical.
*   **Naming:** Good. Variable names `left`, `right`, and `area` clearly describe their purpose.
*   **Concrete Improvements:**
    *   **Input Validation:** While competitive programming problems often guarantee constraints, adding `if (height.empty()) return 0;` or a check for `height.size() < 2` would be defensive and safer.
    *   **Type Safety:** The return type and area calculation use `int`. If the constraints on `height` values or array size are large (e.g., $10^5$ height and $10^5$ width), the area could exceed the capacity of a 32-bit `int`. Consider using `long long` for the `area` calculation to prevent potential integer overflow.
    *   **Formatting:** Remove the unnecessary trailing whitespace/newlines before the closing brace.

---

# Question Revision
### Revision Report: Lexicographically Largest String

**Pattern:** Greedy + Monotonic Stack (or Greedy String Construction)

**Brute Force:**
Generate all possible transformed strings by iterating through all valid swaps/transformations, then select the maximum lexicographical string.
*   **Time:** $O(n^2)$ or higher depending on the number of possible transformations.
*   **Space:** $O(n^2)$ to store string variations.

**Optimal Approach:**
Construct the string character by character from left to right using a greedy strategy. Maintain a monotonic structure (or track the "best" available character) to ensure that each position in the string is the largest possible value available given the constraints of the transformation rules.
*   **Time:** $O(n)$ where $n$ is the length of the string.
*   **Space:** $O(n)$ to store the result string and potential lookup structures (e.g., character frequency counts or stack).

**The 'Aha' Moment:**
When the problem asks for the "lexicographically largest" result and allows for local reordering or replacement, focus on satisfying the most significant positions (leftmost) first by picking the largest available candidate that satisfies the transformation rules.

**Summary:**
Always prioritize the leftmost character by greedily selecting the highest possible value that remains valid under the transformation constraints.

---