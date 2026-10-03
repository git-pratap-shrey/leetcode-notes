---
title: "Binary Search"
slug: binary-search
date: "2026-09-19"
---

# My Solution
~~~cpp
class Solution {
public:
    int mySqrt(int x) {
        int n =x;
        int left =1;
        int right = n;
        int ans=0;
        while (left<=right){
            long long mid = left+(right-left)/2;
            if(mid*mid==n){
                ans = mid;
                break;
            }
            else if(mid*mid<n){
                ans = mid;
                left=mid+1;
            }
            else{
                right = mid-1;
            }
        }
        return ans;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Binary Search on the answer range $[1, n]$.
- **Optimality:** Optimal. The square root of a number can be found in logarithmic time relative to the input value.

## Complexity
- **Time Complexity:** $O(\log n)$, where $n$ is the input integer.
- **Space Complexity:** $O(1)$, as it uses a constant amount of extra space.

## Efficiency Feedback
- **Runtime:** The implementation is efficient. Using `long long` for `mid` prevents integer overflow during the calculation of `mid * mid`, which is critical for inputs near `INT_MAX`.
- **Optimizations:** For $x=0$, the current code initializes `left=1` and `right=0`, resulting in the loop being skipped and returning `ans=0`. While correct, an explicit check for `x < 2` could slightly shorten the execution path for small inputs.

## Code Quality
- **Readability:** Good. The logic is straightforward and standard for binary search.
- **Structure:** Good. The loop termination and range updates are handled correctly.
- **Naming:** Moderate. `n` is a redundant alias for `x`; `left`, `right`, and `mid` are standard and acceptable.
- **Concrete Improvements:**
    - The line `int n = x;` is unnecessary; `x` can be used directly.
    - Use `const int` or remove the temporary variable `n` to save a small amount of stack space.
    - Consider using `mid <= right` as the loop condition (already implemented correctly).

---

# Question Revision
# Revision Report: Binary Search

- **Pattern:** Binary Search
- **Brute Force:** Iterate through the entire array linearly from index $0$ to $n-1$ and compare each element with the target.
- **Optimal Approach:** Maintain two pointers (`left` and `right`). Calculate the `mid` index; if `target` is greater than `mid`, discard the left half; if smaller, discard the right half. Repeat until the target is found or the pointers cross.
    - **Time Complexity:** $O(\log n)$
    - **Space Complexity:** $O(1)$
- **The 'Aha' Moment:** The input array is **sorted**, and I need to find a specific value.
- **Summary:** Use Binary Search to halve the search space in every iteration when dealing with sorted data.

---