---
title: "Maximum Points You Can Obtain from Cards"
slug: maximum-points-you-can-obtain-from-cards
date: "2026-04-17"
---

# My Solution
~~~cpp
class Solution {
public:
    int maxScore(vector<int>& cardPoints, int k) {

        
        int max=0;
        int current=0;
        int len=cardPoints.size();
        for(int i=0;i<k;i++){
            max=max+cardPoints[i];
        }
        current=max;

        for(int i=0;i<k;i++){
            current -=cardPoints[k-i-1];
            current +=cardPoints[len-i-1];

            max=(current>max)?current:max;
            
        }
        return max;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Sliding Window / Two-Pointer approach. It starts by taking all $k$ cards from the left, then iteratively replaces one card from the left end of the window with one card from the right end of the array.
- **Optimality**: Optimal. It explores all $\binom{k}{x}$ combinations of taking $x$ cards from the left and $k-x$ from the right in linear time.

## Complexity
- **Time Complexity**: $O(k)$. The code performs two linear passes over a range of size $k$.
- **Space Complexity**: $O(1)$. Only a constant amount of extra space is used regardless of input size.

## Efficiency Feedback
- The runtime and memory usage are optimal for this problem.
- No meaningful performance optimizations are required.

## Code Quality
- **Readability**: Moderate. The logic is straightforward, but variable naming is suboptimal.
- **Structure**: Good. The linear flow is easy to follow.
- **Naming**: Poor. 
    - `max` is used as a variable name; this is poor practice in C++ as it shadows `std::max`.
    - `current` and `len` are generic.
- **Concrete Improvements**:
    - Rename `max` to `maxScore` or `result` to avoid shadowing.
    - Use `std::max(max, current)` instead of the ternary operator for better idiomatic C++.
    - Use `size_t` for `len` and loop indices to avoid signed/unsigned comparison warnings.

---

# Question Revision
### Maximum Points You Can Obtain from Cards

**Pattern:** Sliding Window

**Brute Force:** 
Iterate through all possible combinations of picking $i$ cards from the left and $k-i$ cards from the right (where $0 \le i \le k$).
- Time: $O(k)$
- Space: $O(1)$

**Optimal Approach:** 
Instead of maximizing the ends, minimize the sum of the contiguous subarray remaining in the middle. The middle window size is fixed at $n - k$. Find the minimum window sum using a sliding window and subtract it from the total sum of all cards.
- Time: $O(n)$
- Space: $O(1)$

**The 'Aha' Moment:** 
Picking elements from the edges is mathematically equivalent to leaving a single contiguous block in the center.

**Summary:** 
Maximize the sum of $k$ edge elements by minimizing the sum of the $n-k$ contiguous elements remaining in the middle.

---