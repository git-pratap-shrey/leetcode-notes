---
title: "Kth Missing Positive Number"
slug: kth-missing-positive-number
date: "2026-04-05"

---
---

# My Solution
~~~c
int findKthPositive(int* arr, int arrSize, int k) {

    int low=0;
    int high=arrSize-1;
    int mid;
    int ans=0;
    int count;
    int ind=-1;
    while(low<=high){
        mid=(low+high)/2;

        count=arr[mid]-(mid+1);
        if(count<k){
            ans=arr[mid];
            ind=mid;
            low=mid+1;
        }
        else{
            high=mid-1;
        }
    }

    count=ans-(ind+1);
    ans=ans+(k-count);

    return ans;
    
}
~~~

# Submission Review
## Approach
*   **Technique:** Binary Search.
*   **Optimality:** Optimal. It correctly utilizes the property that the number of missing elements before `arr[i]` is given by `arr[i] - (i + 1)`. Binary search is the most efficient way ($O(\log N)$) to find the insertion point.

## Complexity
*   **Time Complexity:** $O(\log N)$, where $N$ is the size of the array.
*   **Space Complexity:** $O(1)$, as it uses only a constant amount of auxiliary space.

## Efficiency Feedback
*   **Runtime/Memory:** Excellent. The solution avoids linear scanning.
*   **Corner Cases:** The logic handles the case where all missing numbers are after the array correctly, but initializing `ans=0` and `ind=-1` is a clever way to handle the calculation after the loop.

## Code Quality
*   **Readability:** Good. The logic is concise.
*   **Structure:** Good. The binary search pattern is standard.
*   **Naming:** Moderate. `ind` could be more descriptive (e.g., `last_idx`), and `count` is slightly ambiguous (e.g., `missing_count`).
*   **Concrete Improvements:**
    *   **Initialization:** If `k` is smaller than the first missing number, the current code calculates `ans = 0 + (k - (0 - 0)) = k`, which is correct. However, explicitly initializing `ind = -1` works, but the post-loop logic is slightly opaque.
    *   **Refinement:** You can simplify the post-loop calculation. If the loop completes without finding a "smaller" index, `ans` remains 0. The final result can be derived more cleanly as `low + k`.
    *   **Overflow:** `mid = low + (high - low) / 2` is safer than `(low + high) / 2` to prevent potential integer overflow, even if not strictly necessary given typical constraint limits.

**Recommended refactor for clarity:**
```c
int findKthPositive(int* arr, int arrSize, int k) {
    int low = 0, high = arrSize - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] - (mid + 1) < k)
            low = mid + 1;
        else
            high = mid - 1;
    }
    // 'low' now points to the index where the kth missing number would be inserted
    return low + k;
}
``` 
This simplified logic achieves the same result without needing `ans`, `count`, or `ind` tracking.

---
---


# Question Revision
### Revision Report: Kth Missing Positive Number

**Pattern:** Binary Search (on an implicit index array)

**Brute Force:**
Iterate through integers $1, 2, 3, \dots$ and track the count of missing numbers until the count reaches $k$. 
*   **Time Complexity:** $O(n + k)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:**
Since the sequence is strictly increasing, the number of missing elements before index $i$ is `arr[i] - (i + 1)`. We binary search for the first index where the count of missing numbers is $\ge k$. The result is then `left + k`.
*   **Time Complexity:** $O(\log n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
When an array is sorted and you need to find a value based on a condition that changes monotonically (like "missing count"), you aren't searching for an element, but for the boundary where the function `missing_count(i)` crosses $k$.

**Summary:**
Binary search is the tool of choice when you need to find a missing value in a sorted sequence by comparing the expected value at each index to the actual value stored.

---
