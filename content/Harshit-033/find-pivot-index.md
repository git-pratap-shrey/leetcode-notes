---
title: "Find Pivot Index"
slug: find-pivot-index
date: "2026-04-01"

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
*   **Technique:** Prefix sum calculation using a linear scan.
*   **Optimality:** Optimal. The algorithm computes the total sum once and performs a single pass to verify the pivot condition, achieving $O(N)$ time.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of elements. The array is traversed twice.
*   **Space Complexity:** $O(1)$, as it uses a fixed number of integer variables regardless of input size.

## Efficiency Feedback
*   **Efficiency:** The implementation is highly efficient.
*   **Potential Improvement:** The `if` check before the loop and the `for` loop logic are slightly redundant. The logic could be unified into a single loop from $0$ to $N-1$ by handling the `prefix` update conditionally or after the check to reduce code branching.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Moderate. The initial `if` block creates a special case that mimics the loop behavior; this can be refactored to make the code cleaner.
*   **Naming:** Good. Variable names (`sum`, `prefix`) are descriptive and standard for this type of problem.

### Concrete Improvements
You can simplify the loop to handle the edge case at index 0 without duplicating the logic:

```c
int pivotIndex(int* nums, int numsSize) {
    long long total_sum = 0; // Use long long to prevent overflow
    for(int i = 0; i < numsSize; i++) total_sum += nums[i];

    long long left_sum = 0;
    for(int i = 0; i < numsSize; i++) {
        // total_sum - left_sum - nums[i] is the right_sum
        if (left_sum == (total_sum - left_sum - nums[i])) {
            return i;
        }
        left_sum += nums[i];
    }
    return -1;
}
```
*   **Note:** Using `long long` for sums is a safer practice in competitive programming to avoid integer overflow if the array contains large values.

---
---


# Question Revision
### Problem: Find Pivot Index

**Pattern:** Prefix Sum

**Brute Force:**
Calculate the sum of elements to the left and right for every index $i$ by iterating through the array repeatedly.
*   **Time:** $O(n^2)$
*   **Space:** $O(1)$

**Optimal Approach:**
1. Calculate the `totalSum` of the array once.
2. Maintain a `leftSum` variable, initialized to 0.
3. Iterate through the array: the `rightSum` at index $i$ is `totalSum - leftSum - nums[i]`.
4. If `leftSum == rightSum`, return $i$. Update `leftSum += nums[i]`.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:**
When the problem asks for a condition based on a comparison between "everything to the left" and "everything to the right," you can derive the right side dynamically if you know the total sum.

**Summary:** 
Use the "Total Sum - Current - Left" formula to calculate the right-hand side in constant time instead of re-summing the array.

---
