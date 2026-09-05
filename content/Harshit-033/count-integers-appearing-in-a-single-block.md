---
title: "Count Integers Appearing in a Single Block"
slug: count-integers-appearing-in-a-single-block
date: "2026-08-30"
---

# My Solution
~~~cpp
class Solution {
public:
    int countSpecialIntegers(vector<int>& nums) {
        int count[101]={};
        for(int i=0;i<nums.size();i++){
            if(i==0 || nums[i]!=nums[i-1]){
                count[nums[i]]++;
            }
        }
        int ans=0;
        for(int x=1;x<=100;x++){
            if(count[x]==1){
                ans++;
            }
        }
        return ans;
        
        
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Linear iteration (frequency counting).
- **Optimality:** Optimal. It effectively groups consecutive duplicates into a single representative element and checks if those representatives appear exactly once.

## Complexity
- **Time Complexity:** $O(N + K)$, where $N$ is the size of `nums` and $K=100$ (the range of values).
- **Space Complexity:** $O(K)$, as the frequency array is fixed to 101 regardless of input size.

## Efficiency Feedback
- The algorithm is already as efficient as possible. It performs a single pass over the input and a fixed-size pass over the auxiliary array.
- Using a `std::unordered_set` or `std::map` would be less efficient due to constant factors and overhead. The use of a stack-allocated array is optimal.

## Code Quality
- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Good. The two-pass approach (marking, then counting) is clear.
- **Naming:** Moderate. `count` is a generic name; `freq` or `valCount` would be more descriptive.
- **Concrete Improvements:**
    - The `count` array is indexed up to 100, which is correct for the range given (assuming constraints $1 \le nums[i] \le 100$). Add a comment or `assert` to verify the range if the input constraints aren't guaranteed.
    - You can use a range-based `for` loop for the counting phase to improve readability:
      ```cpp
      for (int c : count) {
          if (c == 1) ans++;
      }
      ```
    - The variable `count` masks the standard `std::count` function; while valid, renaming it avoids potential ambiguity in larger scopes.

---

# Question Revision
### Revision Report: Counting Blocks of Consecutive Integers

**Pattern:** Sliding Window / Iterative Linear Scan

**Brute Force:**
Iterate through the array, and for every element, look ahead to count consecutive matches until the value changes or the boundary is reached. This results in $O(n^2)$ if re-traversing segments.

**Optimal Approach:**
Single-pass iteration: maintain a `current_count` and a `previous_value`. Increment the counter while the current element equals the previous; if it differs, reset the counter to 1.
*   **Time Complexity:** $O(n)$ where $n$ is the length of the input.
*   **Space Complexity:** $O(1)$ as only a few variables are needed to track state.

**The 'Aha' Moment:**
When the problem defines a "block" by a contiguous property (like identical values), it signals that a single pass tracking the current streak is sufficient to delineate boundaries without needing nested loops.

**Summary:**
Whenever a problem asks to process contiguous segments of identical elements, treat the sequence as a state machine that resets its counter whenever the current value deviates from the previous one.

---