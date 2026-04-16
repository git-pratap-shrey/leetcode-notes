---
title: "Longest Consecutive Sequence"
slug: longest-consecutive-sequence
date: "2026-04-13"
---

# My Solution
~~~cpp
class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        int n=nums.size();
        if(n==0) return 0;
        int longer =1;
        unordered_set<int> st;
        for(int i=0;i<n;i++){
            st.insert(nums[i]);
        }
        for(auto it:st){
            if(st.find(it-1)==st.end()){
                int cnt=1;
                int x=it;
                while(st.find(x+1)!=st.end()){
                    x=x+1;
                    cnt=cnt+1;
                }
                longer=max(longer,cnt);
         }
        }
        return longer;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Hash Set. The code uses an `unordered_set` to store all numbers and identifies the start of a sequence by checking if `num - 1` exists. It then counts the length of the sequence starting from that element.
- **Optimality**: Optimal. This approach ensures each element is processed at most twice, achieving linear time complexity.

## Complexity
- **Time Complexity**: $O(n)$ average. 
    - Set insertion: $O(n)$.
    - Sequence traversal: Each element is visited once by the outer loop and at most once by the `while` loop across the entire execution.
- **Space Complexity**: $O(n)$ to store the unique elements in the `unordered_set`.

## Efficiency Feedback
- **Performance**: The average case is $O(n)$, but `std::unordered_set` can degrade to $O(n^2)$ in the worst case due to hash collisions (specifically on platforms like Codeforces with anti-hash test cases).
- **Optimization**: Using `st.reserve(n)` would reduce the number of rehashes during the initial insertion phase.

## Code Quality
- **Readability**: Good. The logic is clear and follows the standard optimal algorithm.
- **Structure**: Good. Handle for the empty input case is present.
- **Naming**: Moderate. 
    - `longer` is a non-standard name for a maximum length variable (e.g., `maxLen` or `longest` is preferred).
    - `it` is used as the value of the element in the range-based loop; naming it `num` would be more accurate as it is not an iterator.
- **Concrete Improvements**:
    - Replace `st.find(x) == st.end()` with `!st.count(x)` for more concise syntax.
    - Use `const auto& it` in the loop to avoid unnecessary copies of integers (though negligible for `int`).

---

# Question Revision
### Longest Consecutive Sequence

**Pattern:** Hash Set

**Brute Force:** Sort the array and iterate through it to count the length of consecutive sequences.
- Time: $O(n \log n)$
- Space: $O(1)$ or $O(n)$ depending on sorting implementation.

**Optimal Approach:** 
Insert all numbers into a Hash Set. Iterate through the array; for each number, check if it is the start of a sequence by verifying that `num - 1` does not exist in the set. If it is a start, use a `while` loop to count how many consecutive integers (`num + 1`, `num + 2`, etc.) exist in the set.
- Time: $O(n)$ (Each element is visited at most twice)
- Space: $O(n)$

**The 'Aha' Moment:** The $O(n)$ time constraint explicitly forbids sorting, signaling that a Hash Set is required for constant-time existence checks.

**Summary:** Only begin counting a sequence when you find a number that has no immediate predecessor in the Set.

---