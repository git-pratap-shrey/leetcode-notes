---
title: "Single Number"
slug: single-number
date: "2026-04-25"
---

# My Solution
~~~java
class Solution {
    public int singleNumber(int[] nums) {
        int n = nums.length;
        int ans = 0;
        for(int i=0;i<n;i++){
            ans ^= nums[i];
        }
        return ans;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Bit Manipulation (XOR).
- **Optimality**: Optimal. It leverages the property that $x \oplus x = 0$ and $x \oplus 0 = x$. Since every number except one appears twice, the duplicate values cancel out, leaving only the single number.

## Complexity
- **Time Complexity**: $O(n)$ — The array is traversed exactly once.
- **Space Complexity**: $O(1)$ — Only one integer variable is used regardless of input size.

## Efficiency Feedback
- The solution is maximally efficient in both time and space. No further optimizations are possible.

## Code Quality
- **Readability**: Good. The logic is concise and follows a standard pattern for this problem.
- **Structure**: Good. Simple, linear flow.
- **Naming**: Moderate. `ans` is generic; `result` or `uniqueElement` would be more descriptive, but acceptable in a competitive programming context.
- **Improvements**: 
    - Using an enhanced for-loop (`for (int num : nums)`) would make the code slightly cleaner by removing the index variable `i` and the length check `n`.

---

# Question Revision
### Single Number

**Pattern:** Bit Manipulation (XOR)

**Brute Force:** 
Use a Hash Map to count occurrences of each integer; iterate through the map to find the key with a value of 1. 
- Time: $O(n)$
- Space: $O(n)$

**Optimal Approach:** 
XOR all elements in the array. Since $x \oplus x = 0$ and $x \oplus 0 = x$, all pairs will cancel each other out, leaving only the unique number.
- Time: $O(n)$
- Space: $O(1)$

**The 'Aha' Moment:** 
The requirement for $O(1)$ space combined with the "every element appears twice except one" constraint points directly to the self-canceling property of XOR.

**Summary:** XOR all elements to eliminate pairs and isolate the unique number.

---