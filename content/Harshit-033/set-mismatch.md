---
title: "Set Mismatch"
slug: set-mismatch
date: "2026-04-09"

---
---

# My Solution
~~~c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* findErrorNums(int* nums, int numsSize, int* returnSize) {
    int* ans=(int*)malloc(sizeof(int) * 2);
    int hass[10001]={0};
    
    for(int i=0;i<numsSize;i++){
        hass[nums[i]]+=1;
        
    }
    int k=0;
    for(int i=1;i<=numsSize;i++){
        if(hass[i]==0){
            ans[1]=i;
            
        }
        else if(hass[i]>1){
            ans[0]=i;
            
        }

        
    }
   
    *returnSize=2;
    return ans;
    
}
~~~

# Submission Review
## Approach
*   **Technique:** Frequency array (counting sort principle).
*   **Optimality:** Optimal in terms of time complexity $O(n)$, but sub-optimal in terms of space complexity $O(M)$ (where $M=10001$) compared to an $O(1)$ auxiliary space approach using bit manipulation or cyclic sort.

## Complexity
*   **Time Complexity:** $O(n)$, where $n$ is `numsSize`. The code performs two linear passes: one to count frequencies and one to identify the missing/duplicate numbers.
*   **Space Complexity:** $O(M)$, where $M$ is the fixed size of the `hass` array (10001).

## Efficiency Feedback
*   **Runtime:** High efficiency for the given constraints ($10^4$).
*   **Memory:** While the 10KB `hass` array is negligible in most environments, it is technically an $O(M)$ space overhead. An in-place approach (swapping elements to their index positions) could achieve $O(1)$ space if modifying the input array is permitted.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. Simple loops handle the identification logic clearly.
*   **Naming:** Moderate. `ans` and `hass` are acceptable, though `frequencies` or `counts` would be more descriptive than `hass`.
*   **Improvements:**
    *   **Safety:** Add a check to ensure `malloc` does not return `NULL`.
    *   **Logic:** The current loop goes up to `numsSize`, which is correct for this problem, but ensure `numsSize` is not zero (though constraints usually guarantee $n \ge 2$).
    *   **Initialization:** The `hass` array is stack-allocated; for larger constraints, this could cause a stack overflow. Since it is already initialized to `{0}`, it is safe in C, but `calloc` or `memset` is safer if the array size were dynamically determined.

---
---


# Question Revision
### Revision Report: Set Mismatch

**Pattern:** Frequency Array / Cyclic Sort / Index Mapping

**Brute Force:**
Use a nested loop or a hash map to count frequencies of each number from $1$ to $n$.
*   **Time Complexity:** $O(n^2)$ with nested loops or $O(n)$ with a hash map.
*   **Space Complexity:** $O(n)$.

**Optimal Approach:**
Since the numbers are in the range $[1, n]$, treat the input array as its own hash map. Iterate through the array, using the absolute value of the current element as an index. If the value at that index is already negative, you've found the **duplicate**. After the pass, the index that remains positive marks the **missing** number.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$ (in-place modification).

**The 'Aha' Moment:**
When a problem constraints state that values are restricted to a range $[1, n]$ and map directly to array indices, you can use the array elements themselves as markers to track state without extra space.

**Summary:** 
Whenever input values are constrained to the range of their indices, use the values as index pointers to track frequency in-place.

---
