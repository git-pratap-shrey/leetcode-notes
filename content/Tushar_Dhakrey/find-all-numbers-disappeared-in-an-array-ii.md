---
title: "Find All Numbers Disappeared in an Array II"
slug: find-all-numbers-disappeared-in-an-array-ii
date: "2026-08-24"
---

# My Solution
~~~java
class Solution {
    public List<List<Integer>> findDisappearedNumbers(int[] nums, int lower, int upper) {
        List<List<Integer>> ans = new ArrayList<>();
        Arrays.sort(nums);
        long prev = (long)lower-1;
        for(int x:nums){
            if(x<lower || x>upper){
                continue;
            }
            if(x>prev+1){
                ans.add(Arrays.asList((int)prev+1,x-1));
            }
            prev = x;
        }
        if(prev<upper){
            ans.add(Arrays.asList((int)prev+1,upper));
        }
        return ans;
    }
}
~~~

# Submission Review
## Approach
- **Technique:** Sorting-based linear scan.
- **Optimality:** Suboptimal. While the logic is correct for finding gaps in a range, sorting forces $O(N \log N)$ complexity, whereas the problem (typically defined as finding missing elements in $[1, N]$) can be solved in $O(N)$ time using cyclic sort or hash sets.

## Complexity
- **Time Complexity:** $O(N \log N)$ due to `Arrays.sort()`.
- **Space Complexity:** $O(1)$ auxiliary space (excluding the output list), depending on the implementation of `Arrays.sort()` (typically $O(\log N)$ stack space).

## Efficiency Feedback
- The sorting step is the primary bottleneck. If the input array is large, $O(N \log N)$ is significantly slower than the optimal $O(N)$ approach.
- The use of `long` for `prev` is a safe way to handle potential integer overflow during the `lower - 1` calculation, which is good practice.

## Code Quality
- **Readability:** Good. The logic flow is straightforward and easy to follow.
- **Structure:** Good. The logic cleanly handles the range boundaries before and after the iteration.
- **Naming:** Moderate. `x` is idiomatic for loops, but `ans` could be more descriptive (e.g., `missingRanges`).
- **Improvements:**
    - If the range is small or memory is not an issue, using a `boolean` array or `BitSet` could achieve $O(N)$ time.
    - If the input is guaranteed to be within $[1, N]$, an in-place modification (negating indices) would reduce space to $O(1)$.
    - The `Arrays.asList` is fine, but ensure the return type matches the problem requirements (List of Lists vs. List of Strings, etc.).

---

# Question Revision
### Revision Report: Find All Numbers Disappeared in an Array

**Pattern:** In-place Index Mapping (Cyclic Sort variant)

**Brute Force:** Use a Hash Set to store all numbers, then iterate from $1$ to $n$ to check for missing values.
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**Optimal Approach:** Use the input array itself to track visitation. Iterate through the array; for each value `abs(nums[i])`, treat it as an index and negate the value at that index (`nums[index - 1] *= -1`). A second pass identifies indices that remain positive, indicating their corresponding numbers were never encountered.
*   **Time:** $O(n)$
*   **Space:** $O(1)$ (ignoring output array)

**The 'Aha' Moment:** The constraint that all numbers are in the range $[1, n]$ and the array size is exactly $n$ allows you to map each value to a unique array index without external storage.

**Summary:** Whenever an array contains integers mapped to its own index range $[1, n]$, use index-based negation to mark presence in-place.

---