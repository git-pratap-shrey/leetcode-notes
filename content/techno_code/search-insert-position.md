---
title: "Search Insert Position"
slug: search-insert-position
date: "2026-04-19"
---

# My Solution
~~~cpp
class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        int n=nums.size();
        int ans =n;
        int low=0;
        int high=n-1;
        while(low<=high){
            int mid=(low+high)/2;
            if(nums[mid]>=target){
            ans=mid;
            high=mid-1;}
            else 
            low=mid+1;
        }
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Binary Search (Lower Bound implementation).
- **Optimality**: Optimal. Searching a sorted array for a specific position is most efficiently done in logarithmic time.

## Complexity
- **Time Complexity**: $O(\log n)$ where $n$ is the size of the input vector.
- **Space Complexity**: $O(1)$ as it uses a constant amount of extra space.

## Efficiency Feedback
- The implementation is highly efficient.
- **Potential Bug**: `int mid = (low + high) / 2;` is susceptible to integer overflow if `low + high` exceeds $2^{31}-1$. While unlikely given typical competitive programming constraints for this specific problem, using `int mid = low + (high - low) / 2;` is the industry standard for robustness.

## Code Quality
- **Readability**: Moderate. The logic is clear, but the formatting is cramped (e.g., `if` block lacks proper line breaks and indentation).
- **Structure**: Good. The loop and conditional logic correctly handle all edge cases (target at start, end, or outside the range).
- **Naming**: Good. `low`, `high`, `mid`, and `ans` are standard conventions for binary search.

**Concrete Improvements**:
1. Fix indentation for the `if` block to improve legibility.
2. Change midpoint calculation to `low + (high - low) / 2` to prevent overflow.
3. Use `const vector<int>& nums` to explicitly signal that the input is not modified (though already passed by reference).

---

# Question Revision
### Search Insert Position

**Pattern:** Binary Search

**Brute Force:** Linearly iterate through the array until an element greater than or equal to the target is found; return that index. $O(n)$ time.

**Optimal Approach:** Perform a standard binary search. If the target is found, return its index. If the loop terminates without a match, the `left` pointer represents the smallest index where the target can be inserted while maintaining order.
- **Time Complexity:** $O(\log n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The combination of a "sorted array" and a required $O(\log n)$ time complexity is a direct signal to use Binary Search.

**Summary:** Use binary search and return the `left` pointer as the insertion index if the target isn't found.

---