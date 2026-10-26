---
title: "Count Magical Substring Pairs I"
slug: count-magical-substring-pairs-i
date: "2026-10-24"
---

# My Solution
~~~cpp
class Solution {
public:
    long long countSubarrays(vector<int>& nums, int minK, int maxK) {
        int n=nums.size();
        long long  ans=0;
        int left=0;
        for(int right=0;right<n;right++){
            if(nums[right]<minK || nums[right]>maxK){
                left=right+1;
            }
            ans+=right-left+1;
        }
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Sliding Window / Two-Pointer approach.
- **Optimality**: **Suboptimal/Incorrect** for the specific problem "Count Magical Substring Pairs I". The current code counts all subarrays where *every* element is within the range `[minK, maxK]`. However, "Magical" problems typically require the subarray to contain *at least one* instance of `minK` and `maxK`. This code ignores the requirement to actually include the boundary values.

## Complexity
- **Time Complexity**: $O(n)$ — Single pass through the array.
- **Space Complexity**: $O(1)$ — Only a few integer variables used.

## Efficiency Feedback
- While the time complexity is optimal for a linear scan, the logic is flawed. The current implementation calculates the number of subarrays consisting entirely of elements in the range `[minK, maxK]`, which is a simpler problem than identifying "Magical" subarrays.

## Code Quality
- **Readability**: Good. The logic is simple and easy to follow.
- **Structure**: Good. The loop and pointer updates are standard.
- **Naming**: Moderate. `ans`, `left`, and `right` are acceptable in competitive programming, but `count` would be more descriptive than `ans`.
- **Improvements**: 
    - To fix the logic: Use three pointers or a hash map to track the last seen positions of `minK` and `maxK`.
    - The number of valid subarrays ending at `right` should be `min(lastPos[minK], lastPos[maxK]) - left + 1` (where `left` is the index after the last invalid element).

---

# Question Revision
# Revision Report: Count Magical Substring Pairs I

### Pattern
**Hash Map + Prefix Counting** (Frequency Tracking)

### Brute Force
Iterate through every possible pair of substrings $(s1, s2)$, calculate the character frequencies for both, and check if they are identical.
- **Complexity:** $O(n^4)$ or $O(n^3)$ depending on implementation.

### Optimal Approach
1. **Frequency Map:** Since the condition for "magical" is based on character counts, represent each substring as a frequency array or a hash map.
2. **Hashing/Serialization:** Convert the frequency map of each substring into a unique string or a tuple (e.g., `"a2b1c0..."`) to use as a key in a global hash map.
3. **Counting Pairs:** As you traverse and generate all substrings, store the frequency of each unique "signature" in the hash map. If a signature has appeared $k$ times, it can form $k$ new pairs with the current substring.
- **Time Complexity:** $O(n^2 \cdot \Sigma)$ where $n$ is string length and $\Sigma$ is alphabet size.
- **Space Complexity:** $O(n^2 \cdot \Sigma)$ to store signatures of all possible substrings.

### The 'Aha' Moment
The requirement that substrings must have the same characters and frequencies means the problem is actually asking to **count pairs of identical frequency distributions**.

### Summary
Treat character frequency maps as unique keys in a hash map to count identical distributions in $O(n^2)$.

---