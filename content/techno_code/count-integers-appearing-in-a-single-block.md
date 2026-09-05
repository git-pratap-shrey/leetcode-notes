---
title: "Count Integers Appearing in a Single Block"
slug: count-integers-appearing-in-a-single-block
date: "2026-09-01"
---

# My Solution
~~~cpp
class Solution {
public:
    int countSpecialIntegers(vector<int>& nums) {
        int count=0;
        unordered_map<int,int>s;
        for(int i=0;i<nums.size();i++){
            s[nums[i]]++;
        }
        for(int i=0;i<nums.size();i++){
            int l=i;
            int r=i;
            while(r<nums.size() && nums[l]==nums[r]){
                r++;
            }
            if(r-l==s[nums[i]]){
                count++;
            }
            i=r-1;
        }
        return count;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Frequency mapping combined with a two-pointer (sliding window) traversal.
- **Optimality**: Optimal. The solution visits each element a constant number of times to determine frequency and block continuity.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the length of the input array. The first loop runs $N$ times, and the second loop effectively runs $N$ times due to the index jump `i = r - 1`.
- **Space Complexity**: $O(K)$, where $K$ is the number of unique integers in the array (worst case $O(N)$), used to store frequencies in the `unordered_map`.

## Efficiency Feedback
- **Runtime**: The efficiency is high. Using `unordered_map` provides average $O(1)$ lookup.
- **Optimization**: For very tight constraints, a sorted array approach or a different data structure could be used, but $O(N)$ is the theoretical lower bound for this problem.

## Code Quality
- **Readability**: Moderate. The logic is simple, but the naming is cryptic.
- **Structure**: Good. The separation between the frequency counting phase and the block validation phase is clear.
- **Naming**: Poor. 
    - `s`: Non-descriptive; should be `freq` or `counts`.
    - `l` and `r`: Acceptable for pointers, but the `l` variable is redundant as it always equals the current `i`.
- **Concrete Improvements**:
    - Replace the `for` loop with a `while` loop for the second pass to avoid modifying the iterator `i` inside the loop body, which is generally discouraged.
    - Use a range-based for loop for the initial frequency count: `for (int num : nums) s[num]++;`.
    - Remove the unused variable `l`.

---

# Question Revision
### Count Integers Appearing in a Single Block

**Pattern:** Linear Scan / State Tracking

**Brute Force:** 
Iterate through all unique elements in the array; for each, check if all its occurrences are contiguous. 
Complexity: $O(U \cdot N)$ where $U$ is the number of unique elements.

**Optimal Approach:**
Use a hash map or array to track the state of each number: `0` (unseen), `1` (seen in one contiguous block), `2` (invalid/multiple blocks). Traverse the array; whenever the current element differs from the previous one, check the current element's state. If it was already `1`, transition it to `2`. If `0`, transition to `1`. Finally, count elements remaining in state `1`.

*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(k)$ where $k$ is the number of unique integers.

**The 'Aha' Moment:** 
A number is disqualified the moment you encounter it again after having already seen a different number.

**Summary:** 
Use a state-tracking map to mark integers as "valid" upon first discovery and "invalid" if they reappear after a break.

---