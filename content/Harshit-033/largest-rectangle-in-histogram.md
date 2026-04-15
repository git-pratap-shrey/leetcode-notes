---
title: "Largest Rectangle in Histogram"
slug: largest-rectangle-in-histogram
date: "2026-04-14"
---

# My Solution
~~~cpp
class Solution {
public:
    int largestRectangleArea(vector<int>& heights) {
        stack<int> ns;
        stack<int> ps;

        int len=heights.size();
        vector<int> next(len, 1);
        vector<int> prev(len, 1);
        

        for(int i=len-1;i>=0;i--){
            while(!ns.empty() && heights[ns.top()]>=heights[i]){
                ns.pop();
            }
            next[i]=(ns.empty())?(len-i):(ns.top()-i);
            ns.push(i);            

        }

        for(int i=0;i<len;i++){
            while(!ps.empty() && heights[ps.top()]>=heights[i]){
                ps.pop();
            }
            prev[i]=(ps.empty())?(i+1):(i-ps.top());
            ps.push(i);
        }
        

        int sum=0;
        int max=0;
        for(int i=0;i<len;i++){
            sum=(heights[i]*(prev[i]-1))+(heights[i]*(next[i]));
            max=(sum>=max)?sum:max;

        }

        return max;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Monotonic Stack. The solution uses two passes to precompute the distance to the nearest smaller element to the left (`prev`) and to the right (`next`) for every bar in the histogram.
- **Optimality**: Optimal in terms of time complexity. The standard approach for this problem is either a two-pass or one-pass monotonic stack.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the number of elements in `heights`. Each index is pushed and popped from the stacks at most once.
- **Space Complexity**: $O(n)$ to store the `next` and `prev` arrays and the stacks.

## Efficiency Feedback
- **Space Overhead**: The solution uses two auxiliary vectors (`next`, `prev`) and two stacks. This can be optimized to a single pass using one stack and calculating the area on-the-fly as elements are popped, reducing space usage.
- **Redundant Initializations**: `vector<int> next(len, 1)` and `vector<int> prev(len, 1)` are initialized with `1`, but every element is overwritten during the loops. Initializing with `0` or using a constructor without a default value would be cleaner.
- **Potential Overflow**: The result is stored in an `int`. Given the constraints typical for this problem (e.g., $10^5$ bars of height $10^4$), the maximum area can reach $10^9$, which fits in a 32-bit signed integer. However, if constraints increase, `long long` would be required.

## Code Quality
- **Readability**: Moderate. The logic for calculating `prev` and `next` as relative distances rather than absolute indices makes the final area calculation formula `(heights[i]*(prev[i]-1))+(heights[i]*(next[i]))` non-intuitive.
- **Structure**: Moderate. The logic is split into three distinct loops. While clear, it is more verbose than the standard single-pass implementation.
- **Naming**: Poor. 
    - `max` is a function in the C++ Standard Library (`std::max`). Using it as a variable name is legal within this scope but is a bad practice that can lead to naming collisions.
    - `sum` is misleading; it calculates the **area** of a rectangle, not a sum of values.
    - `ns` and `ps` are overly cryptic (likely standing for "next smaller" and "previous smaller").
- **Concrete Improvements**:
    1. Rename `max` to `maxArea` and `sum` to `currentArea`.
    2. Use absolute indices for `next` and `prev` arrays to simplify the area formula to: `heights[i] * (next[i] - prev[i] - 1)`.
    3. Combine the logic into a single pass using one stack to improve cache locality and reduce space.

---

# Question Revision
### Largest Rectangle in Histogram

**Pattern:** Monotonic Stack

**Brute Force:** 
Iterate through every possible pair of boundaries $(i, j)$, find the minimum height within that range, and calculate the area: $\text{width} \times \min(\text{heights})$. 
- **Complexity:** $O(n^2)$ time, $O(1)$ space.

**Optimal Approach:** 
Maintain a stack of indices where heights are monotonically increasing. When a bar shorter than the stack's top is encountered, it triggers the calculation of areas for all bars in the stack that are taller than the current bar. The current bar acts as the right boundary, and the index below the popped bar in the stack acts as the left boundary.
- **Time Complexity:** $O(n)$ — each element is pushed and popped exactly once.
- **Space Complexity:** $O(n)$ — to store the stack.

**The 'Aha' Moment:** 
The problem requires finding the first smaller element to both the left and right for every bar to determine its maximum possible width.

**Summary:** 
Use a monotonic increasing stack to efficiently identify the boundaries where a bar is the shortest, allowing for $O(n)$ area calculations.

---