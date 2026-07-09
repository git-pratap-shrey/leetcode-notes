--- title: "Remove Element" slug: remove-element date: "2026-06-26" ---  # My Solution ~~~class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        if(nums.size()==0){
            return nums.size();
        }
        vector<int>s;
        for(int i=0;i<nums.size();i++){
            if(nums[i]!=val){
                s.push_back(nums[i]);
            }
        }
        nums=s;
        return s.size();
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique:** Auxiliary storage (Filtering). The code creates a temporary vector to store elements that do not match `val`, then assigns that vector back to the original.
- **Optimality:** **Suboptimal**. The problem specifically requires an in-place modification. This solution uses $O(n)$ extra space, whereas the optimal approach (two-pointer technique) uses $O(1)$ space.

## Complexity
- **Time Complexity:** $O(n)$ — The code iterates through the input vector once and performs a vector assignment which is also $O(n)$.
- **Space Complexity:** $O(n)$ — An auxiliary vector `s` is used to store up to all elements of the original vector.

## Efficiency Feedback
- **Memory Overhead:** High. Allocating a second vector doubles the memory usage.
- **Performance Hit:** The line `nums = s;` triggers a deep copy of the vector, which is redundant if the elements were shifted in-place.
- **Optimization:** Replace the auxiliary vector with a write-pointer (e.g., `int k = 0;`). Iterate through the array and if `nums[i] != val`, set `nums[k++] = nums[i]`.

## Code Quality
- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Good. Simple flow.
- **Naming:** Poor. The variable `s` is non-descriptive; a name like `filteredNums` or `result` would be better.
- **Concrete Improvements:** 
    - Remove the `if(nums.size()==0)` check; the `for` loop naturally handles empty vectors.
    - Implement the two-pointer approach to meet the $O(1)$ space constraint typical for this problem.  ---  # Question Revision ### Remove Element

**Pattern:** Two Pointers (Read-Write)

**Brute Force:** Iterate through the array; whenever the target value is found, shift all subsequent elements one position to the left to fill the gap.
- **Time:** $O(n^2)$
- **Space:** $O(1)$

**Optimal Approach:** Use a `write` pointer to track the position of the next valid (non-target) element. Iterate through the array with a `read` pointer; if the current element is not the target, copy it to the `write` pointer's position and increment `write`.
- **Time:** $O(n)$
- **Space:** $O(1)$

**The 'Aha' Moment:** The requirement to modify the array "in-place" while returning a new length suggests maintaining a boundary pointer to separate the processed "kept" elements from the rest.

**Summary:** Use a write pointer to overwrite the array from the front, keeping only the elements that don't match the target value.  ---