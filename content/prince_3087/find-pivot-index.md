---
title: "Find Pivot Index"
slug: find-pivot-index

---
---

# My Solution
~~~cpp
class Solution {
public:
    int pivotIndex(vector<int>& nums) {
        int left = 0;
        int sum =0;
        for(int i=0;i<nums.size();i++){
            sum=sum+nums[i];
        }
        for(int j=0;j<nums.size();j++){
            
            int right = sum-left-nums[j];
            if(left==right){
                return j;
            }
            left = left+nums[j];
            

        }
        return -1;
        
    }
};
~~~

# Submission Review
## Approach
* **Technique:** Prefix sum (accumulative sum comparison).
* **Optimality:** Optimal. It uses two passes: one to calculate the total sum and one to compare left/right segments in $O(1)$ time per index.

## Complexity
* **Time Complexity:** $O(n)$, where $n$ is the size of the input vector. The array is traversed twice.
* **Space Complexity:** $O(1)$, as it uses a constant amount of auxiliary space.

## Efficiency Feedback
* The logic is highly efficient. Calculating the total sum first allows for $O(1)$ calculation of the `right` sum at each step (`total_sum - left_sum - current_element`).
* No meaningful optimizations are required; this is the standard approach for this problem.

## Code Quality
* **Readability:** Good. The logic is straightforward and easy to follow.
* **Structure:** Good. The two-loop structure is clean and separates the sum calculation from the pivot search.
* **Naming:** Moderate. `left` and `sum` are clear enough for this scope, but `sum` could be more descriptive (e.g., `totalSum`) to distinguish it from the running `left` sum.
* **Improvements:**
    * Use `std::accumulate` (from `<numeric>`) to calculate the initial sum for more idiomatic C++.
    * Use `long long` for the `sum` and `left` variables if the input array values could potentially cause an integer overflow (though not strictly necessary given typical constraints for this problem).
    * `nums.size()` returns `size_t` (unsigned); consider using `size_t` for loop indices to avoid signed/unsigned comparison warnings.

---
---


# Question Revision
### Revision Report: Find Pivot Index

**Pattern:** Prefix Sum / Running Sum

**Brute Force:**
For every index $i$, iterate through the left side (0 to $i-1$) and the right side ($i+1$ to $n-1$) to compute their respective sums. Compare the two and return the first index where they match.
*   **Time Complexity:** $O(n^2)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:**
1. Calculate the `totalSum` of the array once.
2. Maintain a `leftSum` variable initialized to 0.
3. Iterate through the array: the `rightSum` at any index is `totalSum - leftSum - currentElement`.
4. If `leftSum == rightSum`, return index. Otherwise, add `currentElement` to `leftSum`.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
When you see a problem asking to compare values on the left versus the right side of an index, realize that `rightSum` can be expressed as a derivation of `totalSum` rather than an explicit re-calculation.

**Summary:**
Whenever a problem requires comparing left and right partitions, use a running `leftSum` and derive the `rightSum` from a pre-calculated `totalSum` to achieve $O(n)$ time.

---
