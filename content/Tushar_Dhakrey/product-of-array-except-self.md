---
title: "Product of Array Except Self"
slug: product-of-array-except-self
date: "2026-11-03"
---

# My Solution
~~~java
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int[] ans = new int[nums.length];
        int n = nums.length;
        int left = 1;
        int right = 1;
        for(int i=0;i<n;i++){
            ans[i] = left;
            left *= nums[i];
        }
        for(int i=n-1;i>=0;i--){
            ans[i] *= right;
            right *= nums[i];
        }
        return ans;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Two-pass prefix and suffix product array (implemented using a single output array).
- **Optimality**: Optimal. It achieves the theoretical lower bound for time and satisfies the common constraint of $O(1)$ extra space (excluding the output array).

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the length of the input array. The code performs two linear passes.
- **Space Complexity**: $O(1)$ auxiliary space. The `ans` array is required for the result and typically not counted toward extra space complexity in this problem.

## Efficiency Feedback
- **Runtime**: Very efficient. It avoids division and nested loops.
- **Memory**: Minimal. It reuses the result array to store prefix products before multiplying by suffix products, avoiding the need for two separate auxiliary arrays.

## Code Quality
- **Readability**: Good. The logic is straightforward and follows a standard pattern for this problem.
- **Structure**: Good. The separation of the left-to-right and right-to-left passes is clear.
- **Naming**: Moderate. `ans` is acceptable, though `result` is more conventional. `left` and `right` clearly represent the running products.
- **Concrete Improvements**:
    - No functional improvements needed.
    - Minor style adjustment: `nums.length` is stored in `n`, which is good practice for consistency in the loops.

---

# Question Revision
<thought>*   Problem: "Product of Array Except Self" (LeetCode).
    *   Role: Senior DSA Trainer mentoring a student.
    *   Output Format: Concise, high-signal Markdown.
    *   Specific Requirements:
        *   Pattern.
        *   Brute Force logic.
        *   Optimal Approach (Logic + Complexity).
        *   'Aha' Moment (strictly one sentence).
        *   Summary (one sentence for long-term memory).
    *   Constraints: Standard Big-O, no introductory pleasantries.

    *   *Problem:* Given array `nums`, return array `answer` such that `answer[i]` is the product of all elements except `nums[i]`. Constraint: $O(n)$ time and without using division.
    *   *Pattern:* Prefix/Suffix Products (or Precomputation).
    *   *Brute Force:* Nested loop. For each index $i$, multiply every other index $j$. Time: $O(n^2)$, Space: $O(1)$ (excluding output).
    *   *Optimal Approach:*
        1. Create a result array.
        2. Pass 1 (Left-to-Right): Store the running product of all elements to the left of $i$ in `res[i]`.
        3. Pass 2 (Right-to-Left): Multiply `res[i]` by the running product of all elements to the right of $i$.
        4. Time: $O(n)$.
        5. Space: $O(1)$ if the output array doesn't count as extra space.
    *   *Aha Moment:* The constraint "without using division" forces us to precalculate products from both directions.
    *   *Summary:* Calculate left-side products, then multiply by right-side products in a second pass.</thought>### Product of Array Except Self

- **Pattern**: Prefix & Suffix Products (Precomputation)
- **Brute Force**: Use nested loops to calculate the product of all elements for every index $i$ by iterating through the entire array again.
  - Time: $O(n^2)$ | Space: $O(1)$
- **Optimal Approach**: 
  1. Initialize a result array where `res[i]` first stores the product of all elements to the left of $i$ (Prefix product).
  2. Iterate backward through the array, maintaining a running product of all elements to the right of $i$ (Suffix product), and multiply it into the existing `res[i]`.
  - **Time**: $O(n)$
  - **Space**: $O(1)$ (excluding output array)
- **The 'Aha' Moment**: The prohibition of the division operator forces the realization that any element's "except self" product is simply $(\text{everything to its left}) \times (\text{everything to its right})$.
- **Summary**: Use two passes—one forward for prefix products and one backward for suffix products—to build the final result.

---