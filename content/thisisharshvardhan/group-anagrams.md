---
title: "Group Anagrams"
slug: group-anagrams
date: "2026-10-02"
---

# My Solution
~~~cpp
class Solution {
public:
    int countGoodRotations(vector<int>& nums) {
        int n=nums.size();
        int mid=n/2;
        long long sum1=0;long long sum2=0;
        for(int i=0;i<mid;i++){
            sum1+=nums[i];
            sum2+=nums[i+mid];
        }
        int count=0;
        if(sum1>sum2){
            count++;
        }
        for(int i=0;i<n-1;i++){
            sum1=sum1-nums[i]+nums[(i+mid)%n];
            sum2=sum2-nums[(i+mid)%n]+nums[i];
            if(sum1>sum2){
                count++;
            }
        }
        return count;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Sliding Window. The code maintains two sums representing two halves of the array and updates them as the array "rotates."
- **Optimality**: The approach is optimal for the problem it attempts to solve (likely "Count Good Rotations" or similar sum-comparison problems), as it processes the array in linear time.
- **Critical Error**: The provided code is labeled "Group Anagrams" in the problem description, but the implementation is for an entirely different numerical problem involving array rotations. The code does **not** solve Group Anagrams.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the size of the input vector. The code performs one initial pass and one subsequent loop of $n-1$ iterations.
- **Space Complexity**: $O(1)$, as it only uses a few scalar variables regardless of input size.

## Efficiency Feedback
- **Runtime**: Very efficient. The use of `long long` prevents overflow during summation, and the sliding window avoids re-summing the array in $O(n^2)$.
- **Optimization**: The modulo operator `% n` inside the loop is slightly expensive; since the index `(i + mid)` is predictable, it could be optimized with a simple `if` or by handling the wrap-around outside the loop.

## Code Quality
- **Readability**: Moderate. The logic is concise, but the lack of spacing and condensed variable declarations (`long long sum1=0;long long sum2=0;`) make it look cluttered.
- **Structure**: Good. The logic flows linearly from initialization to the sliding window.
- **Naming**: Poor. `sum1`, `sum2`, and `count` are generic. While acceptable for competitive programming, they lack descriptive context.
- **Concrete Improvements**:
    1. **Fix Labeling**: Ensure the class/function matches the intended problem (this code does not group anagrams).
    2. **Formatting**: Add spaces around operators and separate declarations onto new lines for better legibility.
    3. **Loop Bound**: The loop runs `n-1` times and the initial check is separate; this could be unified into a single loop for cleaner code.

---

# Question Revision
# Revision Report: Group Anagrams

- **Pattern**: Hashing / Categorization
- **Brute Force**: For every string, compare it with every other string in the list by checking if they are anagrams (via sorting or frequency counts).
    - **Complexity**: $O(n^2 \cdot k \log k)$ where $n$ is the number of strings and $k$ is the max string length.
- **Optimal Approach**: 
    - **Logic**: Use a Hash Map where the **key** is a unique identifier for the anagram group (either the sorted string or a character frequency tuple) and the **value** is a list of strings that share that key.
    - **Time Complexity**: $O(n \cdot k \log k)$ if sorting, or $O(n \cdot k)$ if using frequency arrays.
    - **Space Complexity**: $O(n \cdot k)$ to store the groups in the map.
- **The 'Aha' Moment**: The requirement to "group" items based on a shared property (anagrams) signals the need for a Hash Map to categorize elements by a normalized key.
- **Summary**: Normalize each string (sort or count) to create a unique key for mapping anagrams into the same bucket.

---