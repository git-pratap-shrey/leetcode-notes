---
title: "Trapping Rain Water"
slug: trapping-rain-water
date: "2026-10-05"
---

# My Solution
~~~cpp
class Solution {
public:
    int trap(vector<int>& height) {
        int n=height.size();
        vector<int>prefix(n);
        vector<int>suffix(n);
        prefix[0]=height[0];
        suffix[n-1]=height[n-1];
        for(int i=1;i<n;i++){
            prefix[i]=max(prefix[i-1],height[i]);
        }
        for(int i=n-2;i>=0;i--){
            suffix[i]=max(suffix[i+1],height[i]);
        }
        int ans=0;
        for(int i=0;i<n;i++){
           ans+=min(prefix[i],suffix[i])-height[i];
        }
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Pre-computation (Prefix and Suffix Max arrays).
- **Optimality**: Suboptimal in terms of space. While the time complexity is optimal, the space can be reduced from $O(n)$ to $O(1)$ using a two-pointer approach.

## Complexity
- **Time Complexity**: $O(n)$ — The code performs three linear passes over the input array.
- **Space Complexity**: $O(n)$ — Two auxiliary vectors (`prefix` and `suffix`) are allocated to store the maximum heights.

## Efficiency Feedback
- **Memory Overhead**: The current solution uses $2n$ additional space. This can be optimized by using two pointers (`left` and `right`) to track the maximums on the fly, eliminating the need for arrays.
- **Runtime**: The runtime is efficient as it avoids nested loops and uses basic vector operations.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The separation of pre-computing boundaries and calculating the final sum is clear.
- **Naming**: Moderate. `prefix` and `suffix` are acceptable, though `leftMax` and `rightMax` would be more descriptive of their purpose in this specific problem.

**Concrete Improvements**:
1. **Edge Case Handling**: Add a check for `if (height.empty()) return 0;` to prevent out-of-bounds access at `height[0]` and `height[n-1]`.
2. **Space Optimization**: Replace the vectors with a two-pointer approach to achieve $O(1)$ auxiliary space.
3. **Integer Overflow**: For extremely large inputs, `ans` should be `long long`, though `int` is usually sufficient for standard LeetCode constraints on this problem.

---

# Question Revision
# Revision Report: Trapping Rain Water

- **Pattern**: Two Pointers
- **Brute Force**: For every element, find the maximum height to its left and the maximum height to its right. The water trapped at that index is $\min(\text{left\_max}, \text{right\_max}) - \text{height}[i]$.
- **Optimal Approach**: 
    - Use two pointers (`left` and `right`) and two variables (`left_max`, `right_max`).
    - Move the pointer pointing to the smaller height toward the center.
    - If `height[left]` is smaller, the water trapped depends on `left_max` because we know a boundary at least as high as `height[left]` exists on the right.
    - **Time Complexity**: $O(n)$
    - **Space Complexity**: $O(1)$
- **The 'Aha' Moment**: The water level is limited by the *shorter* of the two boundaries, meaning I only need to track the global minimum of the two maximums.
- **Summary**: Use two pointers moving inward to track the limiting boundary and calculate trapped water on the fly.

---