---
title: "Next Permutation"
slug: next-permutation
date: "2026-04-07"

---
---

# My Solution
~~~c
int compare(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}
void nextPermutation(int* nums, int numsSize) {

    int ind=-1;
    
    for(int i=numsSize-2;i>=0;i--){
        if(nums[i]<nums[i+1] ){
            
            ind=i;
            break;
        }


    }

    if(ind==-1){

        qsort(nums, numsSize, sizeof(int), compare);
        return;
    }
    int min=INT_MAX;
    int indx=ind+1;
    for(int i=ind+1;i<numsSize;i++){
        if(nums[i]>nums[ind] && nums[i]<nums[indx]){
            
            indx=i;
        }

    }

    int temp=nums[ind];
    nums[ind]=nums[indx];
    nums[indx]=temp;

    qsort(nums + ind + 1, numsSize-ind-1, sizeof(int), compare);
    return;
    
}
~~~

# Submission Review
## Approach
*   **Technique**: Greedy algorithm based on the standard lexicographical permutation generation rule (finding the first decreasing element from the right, swapping it with the smallest element larger than it to its right, and sorting the remainder).
*   **Optimality**: Suboptimal. While the logic is correct, the use of `qsort` for the tail end makes the solution $O(N \log N)$ instead of the optimal $O(N)$.

## Complexity
*   **Time Complexity**: $O(N \log N)$ due to the `qsort` call.
*   **Space Complexity**: $O(\log N)$ on average for the `qsort` stack space. 
*   **Bottleneck**: Sorting the suffix `nums + ind + 1` is unnecessary. Since the suffix is guaranteed to be in descending order before the swap, it can be reversed in $O(N)$ to achieve the required ascending order.

## Efficiency Feedback
*   **Runtime**: The `qsort` introduces overhead. Replacing it with a simple two-pointer reversal (`while(start < end) { swap(...); }`) would reduce complexity to $O(N)$.
*   **Redundancy**: `qsort` is overkill for a sequence that is already sorted in reverse order.

## Code Quality
*   **Readability**: Moderate. The code is functional, but lacks comments explaining the algorithmic steps (e.g., "Find the pivot," "Find the successor").
*   **Structure**: Moderate. Logic is linear and easy to follow. However, the use of `INT_MAX` without including `<limits.h>` might lead to compilation issues depending on the environment.
*   **Naming**: Poor. Variable names like `ind` and `indx` are ambiguous and prone to typos. `pivot` and `successor_idx` would be clearer.
*   **Concrete Improvements**:
    1. Replace `qsort` with an in-place `reverse` function.
    2. Include `<limits.h>` for `INT_MAX`.
    3. Improve naming conventions for better maintainability.
    4. Remove unnecessary whitespace/newlines inside the loops for cleaner flow.

---
---


# Question Revision
### Revision Report: Next Permutation

**Pattern:** Two Pointers / Greedy

**Brute Force:** Generate all permutations of the array using backtracking, sort them, and find the successor of the current sequence.
*   **Time Complexity:** $O(n \cdot n!)$
*   **Space Complexity:** $O(n)$

**Optimal Approach:**
1.  **Find Pivot:** Traverse from right to left to find the first index `i` such that `nums[i] < nums[i + 1]`.
2.  **Find Successor:** If `i` exists, traverse from right to left again to find the first index `j` such that `nums[j] > nums[i]`. Swap `nums[i]` and `nums[j]`.
3.  **Reverse:** Reverse the subarray to the right of `i` to get the smallest possible lexicographical arrangement for that suffix.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The requirement to find the "next" lexicographical order implies we must modify the smallest possible prefix from the right to increase the value incrementally without jumping to a much larger permutation.

**Summary:** Identify the first non-increasing suffix from the right, swap its pivot with the next smallest available digit, and reverse the remaining suffix to reach the immediate successor.

---
