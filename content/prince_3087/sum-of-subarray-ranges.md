---
title: "Sum of Subarray Ranges"
slug: sum-of-subarray-ranges
date: "2026-09-16"
---

# My Solution
~~~cpp
class Solution {
public:
    bool fun(vector<int>&have, vector<int>&need){
        for(int i=0;i<128;i++){
            if(have[i]<need[i]){
                return false;
            }

        }
        return true;
    }
    string minWindow(string s, string t) {
        vector<int>have(128,0);
        vector<int>need(128,0);
        for(int i=0 ; i<t.size();i++){
            need[t[i]]++;
        }
        int left=0,start=0;
        int res = INT_MAX;
        for(int right=0;right<s.size();right++){
            have[s[right]]++;
            while(fun(have,need)){
                int length = right-left+1;
                if(length<res){
                    res = length;
                    start = left;

                }
                have[s[left]]--;
                left++;

            }
        }
        if(res == INT_MAX){
            return "";
        }
        else{
            return s.substr(start,res);
        }
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Sliding Window (Two Pointers).
- **Optimality**: Suboptimal. While the sliding window strategy is correct for this problem, the validity check (`fun` function) is inefficient.

## Complexity
- **Time Complexity**: $O(128 \cdot N)$, where $N$ is the length of string `s`. The window slides $N$ times, and for every movement of the `right` or `left` pointer, the code iterates through the entire 128-character frequency array.
- **Space Complexity**: $O(1)$, as the frequency arrays are fixed at size 128 regardless of input size.

## Efficiency Feedback
- **Bottleneck**: The `fun` function is called inside the `while` loop. This adds a constant factor of 128 to every pointer movement.
- **Optimization**: Use a `count` integer variable to track how many required unique characters from `t` have been satisfied in the current window. This would reduce the time complexity to $O(N)$ by eliminating the $O(128)$ loop.

## Code Quality
- **Readability**: Moderate. The logic is easy to follow, but the helper function `fun` is generically named.
- **Structure**: Good. The separation of the window expansion and contraction is clear.
- **Naming**: Poor. `fun` does not describe the action (e.g., `isValid` or `containsAll`). `have` and `need` are acceptable but `s` and `t` are generic (though common in LeetCode).
- **Concrete Improvements**:
    - Replace the `fun` loop with a character counter.
    - Change `fun` to a more descriptive name.
    - Use `std::string_view` or similar to avoid unnecessary string slicing if performance is critical.

**Note:** The provided code solves the "Minimum Window Substring" problem, but the problem title provided in the prompt was "Sum of Subarray Ranges." The code does not address "Sum of Subarray Ranges."

---

# Question Revision
# Revision Report: Sum of Subarray Ranges

- **Pattern:** Monotonic Stack
- **Brute Force:** Iterate through all possible subarrays using nested loops, tracking the `min` and `max` for each, and adding `(max - min)` to the total.
  - **Complexity:** $O(n^2)$ time, $O(1)$ space.
- **Optimal Approach:** 
  The problem asks for $\sum(\max - \min)$, which is equivalent to $\sum(\max) - \sum(\min)$. Use a Monotonic Stack to find the number of subarrays where each element `nums[i]` acts as the minimum and maximum.
  - **Logic:** For each element $i$, find the distance to the nearest smaller element to the left ($L$) and right ($R$). The number of subarrays where $nums[i]$ is the minimum is $(i - L) \times (R - i)$. Repeat similarly for the maximum.
  - **Complexity:** $O(n)$ time, $O(n)$ space.
- **The 'Aha' Moment:** When a problem asks for the sum of properties (like min/max) across *all* subarrays, think "contribution of each element" via a Monotonic Stack.
- **Summary:** Decompose the problem into $\sum(\text{maxes}) - \sum(\text{mins})$ and use a monotonic stack to calculate the contribution of each element to the total sum.

---