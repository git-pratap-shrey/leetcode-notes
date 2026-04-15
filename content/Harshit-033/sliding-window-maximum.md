---
title: "Sliding Window Maximum"
slug: sliding-window-maximum
date: "2026-04-14"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        deque<int> dq;

        vector<int> ans;
        int j=0;
        for(int i=0;i<nums.size();i++){
            if(dq.empty()){
                dq.push_back(i);
            }
            else{
                while(!dq.empty() && (nums[dq.back()]<nums[i] || dq.back()<=(i-k))){
                    dq.pop_back();
                }
                
                    dq.push_back(i);
               

            }
            while(dq.front()<j){
                dq.pop_front();
            }

            if(i>=(k-1)){
                ans.push_back(nums[dq.front()]);
                j++;

            }

        }

        return ans;
            
            
        
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Monotonic Queue using a `std::deque`.
- **Optimality**: Optimal. The monotonic queue allows finding the maximum of a sliding window in linear time.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the size of `nums`. Each index is pushed and popped from the deque at most once.
- **Space Complexity**: $O(k)$ for the deque (excluding the output vector), as it stores at most $k$ indices.

## Efficiency Feedback
- **Redundant Logic**: The condition `dq.back() <= (i-k)` inside the `pop_back` loop is logically incorrect and redundant. In a monotonic queue for this problem, indices are added in increasing order; therefore, the oldest indices (out of window) are always at the **front**, not the back.
- **Unnecessary Branching**: The `if(dq.empty())` check is redundant because the `while(!dq.empty() && ...)` loop in the `else` block naturally handles the case where the deque is empty.
- **Variable Overhead**: The variable `j` is used to track the window start, but it is simply `i - k + 1`. This can be calculated on the fly.

## Code Quality
- **Readability**: Moderate. The logic is mostly standard, but the confusing `pop_back` condition and inconsistent indentation hinder clarity.
- **Structure**: Moderate. The flow is slightly fragmented due to the redundant `if/else` structure.
- **Naming**: Moderate. `dq` is standard for deque, but `j` is vague; `windowStart` would be more descriptive.

### Concrete Improvements
1. **Remove the `dq.back() <= (i-k)` check**: The `while(dq.front() < j)` loop already handles elements falling out of the window.
2. **Simplify the loop**: Remove the `if(dq.empty())` wrapper and just use the `while` loop to maintain the monotonic property.
3. **Clean up indentation**: The spacing around the `dq.push_back(i)` and the closing braces is erratic.
4. **Refactor `j`**: Replace `j` with `i - k + 1` or keep it but remove the manual increment `j++` in favor of a cleaner index calculation.

---

# Question Revision
### Sliding Window Maximum

**Pattern:** Sliding Window + Monotonic Queue (Deque)

**Brute Force:**
Iterate through all possible windows of size $k$ and perform a linear scan to find the maximum in each.
- **Time:** $O(n \cdot k)$
- **Space:** $O(1)$

**Optimal Approach:**
Use a `deque` to store indices of elements, maintaining them in strictly decreasing order of their corresponding values.
1. **Clean Outdated:** Remove indices from the front if they fall outside the current window boundary.
2. **Maintain Monotonicity:** Remove indices from the back if the current element is greater than or equal to the element at those indices (they can no longer be the maximum).
3. **Record Max:** The element at the front of the deque is always the maximum for the current window.

- **Time:** $O(n)$ (Each element is pushed and popped exactly once)
- **Space:** $O(k)$ (Deque stores at most $k$ indices)

**The 'Aha' Moment:**
When you need the maximum of a sliding range and realize that any element smaller than the current element to its left is useless for all future windows, a monotonic deque is the solution.

**Summary:**
Maintain a deque of indices where values are sorted descending, popping from the front for window expiry and from the back to maintain order.

---