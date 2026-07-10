---
title: "Sliding Window Maximum"
slug: sliding-window-maximum
date: "2026-06-22"

---

# My Solution
~~~
class
 Solution {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {

        deque<int> dq;
        vector<int> ans;

        for(int i = 0; i < nums.size(); i++) {

           
            while(!dq.empty() && dq.front() <= i - k) {
                dq.pop_front();
            }

            
            while(!dq.empty() &&
                  nums[dq.back()] <= nums[i]) {
                dq.pop_back();
            }

            dq.push_back(i);

            
            if(i >= k - 1) {
                ans.push_back(nums[dq.front()]);
            }
        }

        return ans;
    }
};
~~~

# Submission Review

## Approach

- **Technique**: Monotonic Deque. The code maintains a deque of indices where the corresponding values in `nums` are kept in strictly decreasing order.
- **Optimality**: Optimal. It ensures each element is processed a constant number of times.

## Complexity

- **Time Complexity**: $O(N)$, where $N$ is the number of elements in `nums`. Each index is pushed and popped from the deque exactly once.
- **Space Complexity**: $O(N)$ to store the output vector. The auxiliary space used by the deque is $O(k)$.

## Efficiency Feedback

- **Runtime**: Very efficient due to the linear scan and amortized constant time deque operations.
- **Memory**: Low overhead. 
- **Optimization**: To avoid multiple reallocations of the `ans` vector, `ans.reserve(nums.size() - k + 1);` could be called before the loop.

## Code Quality

- **Readability**: Good. The logic follows the standard implementation of the monotonic queue pattern.
- **Structure**: Good. The sequence of operations (evict out-of-bounds $\rightarrow$ maintain monotonicity $\rightarrow$ push $\rightarrow$ record result) is logically ordered.
- **Naming**: Moderate. `dq` and `ans` are acceptable in a competitive programming context, though `indexDeque` and `result` would be more descriptive for production code.
- **Improvements**: No functional changes needed; only the aforementioned `reserve()` call for a minor performance gain.

---

# Question Revision

#

## Sliding Window Maximum

**Pattern:** Monotonic Queue (Deque)

**Brute Force:** Iterate through every possible window position and scan all $k$ elements within that window to find the maximum.
- Time: $O(n \cdot k)$
- Space: $O(1)$

**Optimal Approach:** Maintain a `Deque` storing indices of elements in a monotonically decreasing order of their values.
1. **Clean-up:** Remove indices from the front if they are no longer within the current window range.
2. **Maintain Monotonicity:** Remove indices from the back if the value at that index is $\le$ the current element (since they can no longer be the maximum).
3. **Append:** Push the current index to the back.
4. **Result:** The index at the front of the deque always points to the maximum element of the current window.

- Time Complexity: $O(n)$ (each element is pushed and popped at most once)
- Space Complexity: $O(k)$

**The 'Aha' Moment:** The requirement to track a maximum over a sliding range while discarding "useless" smaller elements indicates a Monotonic Queue.

**Summary:** Use a deque to store indices of potential maximums in decreasing order to retrieve the window max in $O(1)$.

---
