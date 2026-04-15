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
- **Technique**: Hash Set based linear scan.
- **Optimality**: Optimal. It ensures each element is processed at most twice (once during the set iteration and once during the sequence expansion), achieving linear time complexity.

## Complexity
- **Time Complexity**: $O(n)$ on average. Building the set takes $O(n)$, and the nested `while` loop only executes for the start of each sequence, meaning each element is visited a constant number of times.
- **Space Complexity**: $O(n)$ to store all unique elements in the `unordered_set`.

## Efficiency Feedback
- **Performance**: The use of `unordered_set` provides average $O(1)$ lookup time. 
- **Potential Bottleneck**: In worst-case scenarios (many hash collisions), `unordered_set` operations can degrade to $O(n)$, making the total time $O(n^2)$. This is rare but possible depending on the test cases and the compiler's hash implementation.

## Code Quality
- **Readability**: Moderate. The logic is clear, but variable names are generic.
- **Structure**: Good. The edge case for an empty vector is handled correctly at the start.
- **Naming**: Poor. 
    - `longer` $\rightarrow$ `maxSequenceLength` or `maxLen`.
    - `it` $\rightarrow$ `num` (it is an element, not an iterator).
    - `st` $\rightarrow$ `numSet`.
    - `cnt` $\rightarrow$ `currentStreak`.
- **Improvements**: 
    - Use `const auto&` in the range-based for loop (`for (const auto& num : st)`) to avoid unnecessary copies, though negligible for `int`.
    - Reserve space in the set using `st.reserve(n)` to reduce rehash overhead.

---

# Question Revision
### Longest Consecutive Sequence

**Pattern:** Hashing (Set)

**Brute Force:** Sort the array and iterate through it to count the longest contiguous chain.  
**Complexity:** Time $O(n \log n)$, Space $O(1)$ or $O(n)$ depending on sorting implementation.

**Optimal Approach:** 
1. Insert all numbers into a `Set` for $O(1)$ lookups.
2. Iterate through the array; for each number, check if it is the **start** of a sequence (i.e., `num - 1` is not in the set).
3. If it is a start, use a `while` loop to count how many consecutive integers (`num + 1`, `num + 2`...) exist in the set.
4. Update the global maximum length.

**Complexity:** 
- **Time:** $O(n)$ — each element is visited at most twice (once by the loop, once by the `while` loop).
- **Space:** $O(n)$ — to store the set.

**The 'Aha' Moment:** The $O(n)$ requirement for unsorted data signals a trade-off where space (a Set) must be used to eliminate the $O(n \log n)$ sorting bottleneck.

**Summary:** Only initiate sequence counting from the smallest element of a potential chain to ensure each element is processed linearly.

---