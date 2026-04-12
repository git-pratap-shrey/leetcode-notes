---
title: "Max Consecutive Ones III"
slug: max-consecutive-ones-iii
date: "2026-04-11"

---
---

# My Solution
~~~c
int longestOnes(int* nums, int numsSize, int k) {
    
    int current=0;
    int max=0;
   
    int start=0;
    
    for(int i=0;i<numsSize;i++){
        if(nums[i]==1){
            current=i-start+1;
        }
        if(nums[i]==0){
            if(k>0){
                current=i-start+1;
                k--;
            }
            else if(k==0){                
                if(nums[start]!=0){
                     while(nums[start]!=0) start++;
                     start++;
                     
                     
                }
                else{
                    start++;
                
                }
                current=i-start+1;
            }
        }
        max=(current>max)?current:max;
        

    }

    return max;

}
~~~

# Submission Review
## Approach
* **Technique**: Two-pointer / Sliding window.
* **Status**: Suboptimal logic. The implementation attempts to maintain a window $[start, i]$, but the logic for managing `k` (the count of allowed zeros) is brittle and prone to errors. It treats the window size dynamically but relies on a `while` loop inside the main iteration that can behave unpredictably.

## Complexity
* **Time Complexity**: $O(N)$. While the `start` pointer only moves forward, the inner `while` loop within the `else if(k==0)` block makes the logic flow harder to reason about, even if it amortizes to linear time.
* **Space Complexity**: $O(1)$.

## Efficiency Feedback
* The code calculates `current` repeatedly and relies on conditional checks that could be simplified. 
* The logic `if(nums[start]!=0)` followed by a `while` loop is inefficiently structured. A standard sliding window simply increments `start` whenever the window becomes invalid (i.e., `zeros_count > k`).

## Code Quality
* **Readability**: Moderate. The nested `if-else` blocks for handling the `0` case are convoluted.
* **Structure**: Moderate. The logic combines window expansion and shrinking in a single loop, which obscures the "sliding window" invariant.
* **Naming**: Moderate. `current`, `max`, and `start` are descriptive enough, but `current` is technically redundant if you simply use `i - start + 1`.

### Concrete Improvements
1. **Simplify the Window Logic**: Instead of complex conditional branching, maintain a counter for zeros.
2. **Standard Sliding Window Pattern**:
   ```c
   int zeros = 0, start = 0, maxLen = 0;
   for (int end = 0; end < numsSize; end++) {
       if (nums[end] == 0) zeros++;
       while (zeros > k) {
           if (nums[start] == 0) zeros--;
           start++;
       }
       int currentLen = end - start + 1;
       if (currentLen > maxLen) maxLen = currentLen;
   }
   return maxLen;
   ```
3. **Remove `current` variable**: Calculating `i - start + 1` directly is clearer and less error-prone.

---
---


# Question Revision
### Revision Report: Max Consecutive Ones III

**Pattern:** Sliding Window (Variable Size)

**Brute Force:** 
Iterate through every possible starting position of a subarray, count the zeros, and expand until the number of zeros exceeds $k$. 
*   **Complexity:** $O(n^2)$ time, $O(1)$ space.

**Optimal Approach:**
Maintain a window `[left, right]` and a counter for zeros within it. Expand `right` at each step. If `zeros > k`, increment `left` to shrink the window until the zero count is valid again. The maximum window size achieved is the result.
*   **Time Complexity:** $O(n)$ (each element is visited by `left` and `right` pointers at most once).
*   **Space Complexity:** $O(1)$ (only storing integer pointers and a counter).

**The 'Aha' Moment:**
When a problem asks for the "longest subarray" satisfying a flexible constraint (like "at most $k$ zeros"), it is a signal that you can use a sliding window to dynamically expand and shrink based on the budget.

**Summary:**
Whenever you need to find the longest subarray that allows for a limited number of "violations," use a sliding window that expands greedily and shrinks only when the violation limit is breached.

---
