---
title: "Sliding Window Maximum"
slug: sliding-window-maximum
date: "2026-09-30"
---

# My Solution
~~~cpp
class Solution {
public:
    int maxEqualAdjacentPairs(vector<int>& nums) {
        map<pair<int, int>, int> mp;
        int max_len = 0, equal = 0;

        for(int i = 0; i < nums.size()-1; i++){
            if(nums[i] < nums[i+1]){
                max_len = max(++mp[{nums[i], nums[i+1]}], max_len);
            }
            else if(nums[i] > nums[i+1]){
                max_len = max(++mp[{nums[i+1], nums[i]}], max_len);
            }
            else{
                mp[{nums[i+1], nums[i]}]++;
                equal++;
            }
        }

        return max_len+equal;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Frequency counting using a map to store pairs of adjacent elements.
- **Optimality:** **Not Optimal/Incorrect.** The provided code does not solve the "Sliding Window Maximum" problem. Instead, it implements a custom logic for counting adjacent pairs, which is irrelevant to the problem statement.

## Complexity
- **Time Complexity:** $O(N \log M)$, where $N$ is the size of `nums` and $M$ is the number of unique pairs. The $\log M$ factor comes from the `std::map` operations.
- **Space Complexity:** $O(M)$ to store the pairs in the map.

## Efficiency Feedback
- **Wrong Algorithm:** The primary bottleneck is that the code solves a completely different problem. For "Sliding Window Maximum," the optimal approach is using a `std::deque` to maintain indices of potential maximums in $O(N)$ time.
- **Data Structure:** Even for the current logic, `std::unordered_map` with a custom hash for `std::pair` would be faster than `std::map`.

## Code Quality
- **Readability:** Moderate. The logic is simple, but the intent is disconnected from the problem title.
- **Structure:** Good. Standard class structure for competitive programming.
- **Naming:** Poor. The function name `maxEqualAdjacentPairs` does not match the problem "Sliding Window Maximum."
- **Concrete Improvements:**
    1. Replace the entire logic with a Monotonic Queue (Deque) implementation to actually solve the Sliding Window Maximum problem.
    2. If the intended problem was actually about adjacent pairs, use `std::unordered_map` to reduce lookup time from logarithmic to average constant time.

---

# Question Revision
# Revision Report: Sliding Window Maximum

- **Pattern**: Monotonic Queue (Deque)
- **Brute Force**: For every window position, iterate through all $k$ elements to find the maximum.
    - **Complexity**: Time: $O(n \cdot k)$, Space: $O(1)$ (excluding output array).
- **Optimal Approach**: Use a **Deque** (double-ended queue) to store indices of elements. Maintain the deque such that elements are always in **strictly decreasing order**. 
    1. When adding a new element, remove all smaller elements from the back of the deque (they can never be the maximum).
    2. Remove the element from the front if its index is now outside the current window.
    3. The front of the deque always points to the maximum element for the current window.
    - **Complexity**: Time: $O(n)$ (each element is pushed and popped once), Space: $O(k)$ to store indices.
- **The 'Aha' Moment**: The need to find a maximum in a sliding range while efficiently discarding elements that are "useless" (smaller and older) suggests a Monotonic Queue.
- **Summary**: Use a deque to keep indices of potential maximums in decreasing order, popping from the back for value and the front for expiry.

---