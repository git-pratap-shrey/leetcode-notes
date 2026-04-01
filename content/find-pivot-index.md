---
title: "Find Pivot Index"
slug: find-pivot-index

---
---

# My Solution
~~~c
int pivotIndex(int* nums, int numsSize) {
    int sum=0;
    for(int i=0; i<numsSize; i++){
        sum=sum+nums[i];

    }

    int prefix=0;
    if(prefix==(sum-prefix-nums[0])){
            return 0;
        }
    for(int i=1;i<numsSize;i++){
        prefix=prefix+nums[i-1];
        if(prefix==(sum-prefix-nums[i])){
            return i;
        }
    }
    return -1;
}
~~~

# Submission Review
## Approach
*   **Technique:** Prefix Sum / Linear Scan.
*   **Optimal:** Yes. The approach calculates the total sum once and maintains a running prefix sum to check the pivot condition in $O(1)$ per index.

## Complexity
*   **Time Complexity:** $O(n)$, where $n$ is `numsSize`. It iterates through the array twice.
*   **Space Complexity:** $O(1)$, as it uses a fixed number of integer variables regardless of input size.

## Efficiency Feedback
*   The logic is efficient. The only minor overhead is the redundant check for `i=0` outside the loop, followed by a loop starting from `i=1`.
*   **Optimization:** You can merge the `i=0` case into the loop by initializing `prefix = 0` and iterating from `0` to `n-1`. This would simplify the code while maintaining identical performance.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Moderate. The code handles the first element as an edge case, which is unnecessary and slightly complicates the flow.
*   **Naming:** Good. `sum` and `prefix` clearly represent their roles.
*   **Improvements:**
    *   Merge the loops to make the code more concise:
    ```c
    int pivotIndex(int* nums, int numsSize) {
        long long totalSum = 0; // Use long long to prevent potential overflow
        for(int i = 0; i < numsSize; i++) totalSum += nums[i];
        
        long long leftSum = 0;
        for(int i = 0; i < numsSize; i++) {
            if(leftSum == (totalSum - leftSum - nums[i])) return i;
            leftSum += nums[i];
        }
        return -1;
    }
    ```
    *   Consider using `long long` for `sum` and `prefix` if the input constraints allow the total sum to exceed the range of a 32-bit signed integer.

---
---


# Question Revision
### Revision Report: Find Pivot Index

**Pattern:** Prefix Sum / Running Total

**Brute Force:** 
For each element, calculate the sum of all elements to the left and all elements to the right by iterating through the array again ($O(n^2)$ time, $O(1)$ space).

**Optimal Approach:**
1. Calculate the `totalSum` of the array once.
2. Iterate through the array maintaining a `leftSum`. 
3. At any index $i$, the `rightSum` is implicitly `totalSum - leftSum - nums[i]`.
4. If `leftSum == rightSum`, return index $i$.
5. **Complexity:** $O(n)$ time, $O(1)$ space.

**The 'Aha' Moment:**
When the problem asks for a point where the balance of two sides must be equal, recognize that the total sum is a constant, allowing you to derive the "right side" simply by subtracting the "left side" and current element from the total.

**Summary:** 
Whenever a pivot point divides an array into two dynamic segments, pre-calculating the total sum allows you to derive the right-side balance in $O(1)$ time during a single pass.

---
