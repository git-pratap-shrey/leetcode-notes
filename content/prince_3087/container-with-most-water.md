---
title: "Container With Most Water"
slug: container-with-most-water
date: "2026-08-27"
---

# My Solution
~~~cpp
class Solution {
public:
    int countPairs(vector<int>& nums, int target) {
        sort(nums.begin(),nums.end());
        int low=0;
        int high = nums.size()-1;
        int ans = 0;
        while(low<high){
            int sum = nums[low]+nums[high];
            if(sum<target){
                ans = ans+(high-low);
                low++;
            }
            else if (sum>=target){
                high--;
            }
        }
        return ans;
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Two-pointer approach on a sorted array.
*   **Optimality:** Optimal. This is the standard linear-time approach for finding the number of pairs with a sum less than a target after sorting.

## Complexity
*   **Time Complexity:** $O(N \log N)$ due to the sorting step. The two-pointer traversal itself is $O(N)$.
*   **Space Complexity:** $O(1)$ or $O(N)$ depending on the implementation of `std::sort` (typically $O(\log N)$ stack space).

## Efficiency Feedback
*   The logic is highly efficient for the given problem type.
*   The greedy observation—that if `nums[low] + nums[high] < target`, then all pairs `(low, low+1...high)` satisfy the condition—is implemented correctly and prevents the need for an $O(N^2)$ brute-force approach.

## Code Quality
*   **Readability:** Good. The logic is concise and easy to follow.
*   **Structure:** Good. The use of a `while` loop with standard two-pointer bounds is clean.
*   **Naming:** Moderate. The class name `Solution` and method `countPairs` are standard for competitive programming platforms (e.g., LeetCode), though the problem name provided in your prompt ("Container With Most Water") does not match the functionality of the code provided (which solves "Count Pairs Whose Sum is Less than Target").
*   **Concrete Improvements:**
    *   **Mismatch:** Ensure the function name matches the actual problem logic. If this is indeed "Count Pairs," the name is fine; if this is intended for "Container With Most Water," the entire logic is incorrect.
    *   **Const correctness:** The input vector `nums` should be passed by `const vector<int>&` to indicate it is not modified (though `sort` requires a mutable reference, so if you must sort the input, this is fine). If the input must be preserved, consider sorting a copy.

---

# Question Revision
### Revision Report: Container With Most Water

**Pattern:** Two Pointers (Greedy)

**Brute Force:**
Iterate through every possible pair of lines $(i, j)$ to calculate the area $Area = \min(h[i], h[j]) \times (j - i)$ and track the maximum.
*   **Time Complexity:** $O(n^2)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:**
Initialize pointers at both ends of the array. Calculate the area, then move the pointer pointing to the **shorter** line inward, as moving the longer line can never yield a larger area with the current width constraint.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
The realization that the area is strictly bottlenecked by the shorter of the two lines means that moving the taller line inward will only decrease the width without any possibility of increasing the height, making it an objectively worse move.

**Summary:**
When the area is constrained by the minimum of two boundaries, shrinking the smaller boundary is the only way to potentially find a larger height to offset the shrinking width.

---