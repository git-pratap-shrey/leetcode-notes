---
title: "Kth Missing Positive Number"
slug: kth-missing-positive-number
date: "2026-04-29"
---

# My Solution
~~~cpp
class Solution {
public:
    int findKthPositive(vector<int>& arr, int k) {
        int low = 0, high = arr.size() - 1;

        while (low <= high) {
            int mid = low + (high - low) / 2;

            int missing = arr[mid] - (mid + 1);

            if (missing < k) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        // final answer
        return low + k;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Binary Search on indices.
- **Optimality**: Optimal. Instead of linear scanning $O(N)$, it leverages the sorted property of the array to find the insertion point of the $k$-th missing number in $O(\log N)$.

## Complexity
- **Time Complexity**: $O(\log N)$, where $N$ is the size of the input array.
- **Space Complexity**: $O(1)$, as it only uses a few integer variables.

## Efficiency Feedback
- The runtime and memory usage are minimal.
- The calculation `int mid = low + (high - low) / 2;` correctly prevents potential integer overflow.
- No further optimizations are required as the time complexity is logarithmic.

## Code Quality
- **Readability**: Good. The logic is concise and the `missing` variable clearly explains the binary search condition.
- **Structure**: Good. Follows standard binary search patterns.
- **Naming**: Good. Variables `low`, `high`, `mid`, and `missing` are intuitive.
- **Improvements**: No concrete improvements needed; the code is clean and professional.

---

# Question Revision
### Kth Missing Positive Number

**Pattern:** Binary Search

**Brute Force:** 
Iterate from 1 upwards, incrementing a counter whenever a number is not present in the array, until the counter reaches $k$.
- **Time:** $O(n + k)$
- **Space:** $O(1)$

**Optimal Approach:** 
Since the array is sorted, the number of missing integers at index $i$ is calculated as: $\text{missing} = \text{arr}[i] - (i + 1)$. Perform binary search to find the smallest index `left` where the number of missing elements is $\ge k$. The $k$-th missing number is then $\text{left} + k$.
- **Time:** $O(\log n)$
- **Space:** $O(1)$

**The 'Aha' Moment:** 
The sorted property allows us to treat the "count of missing numbers" as a monotonic function, making it searchable via binary search.

**Summary:** 
Use binary search to find the insertion point where the difference between the element value and its expected value $(\text{arr}[i] - (i+1))$ first reaches $k$.

---