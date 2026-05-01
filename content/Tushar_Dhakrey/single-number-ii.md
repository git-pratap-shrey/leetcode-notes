---
title: "Single Number II"
slug: single-number-ii
date: "2026-04-26"
---

# My Solution
~~~java
class Solution {
    public int singleNumber(int[] nums) {
        int n = nums.length;
        int ans = 0;
        for(int bitind=0;bitind<=31;bitind++){
            int cnt = 0;
            for(int i=0;i<n;i++){
                if((nums[i] & (1<<bitind)) != 0){
                    cnt++;
                }
            }
            if(cnt%3==1){
                ans = ans | (1<<bitind);
            }
        }
        return ans;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Bit Manipulation (Bit Counting).
- **Optimality**: Optimal. The algorithm counts the occurrences of each bit across all numbers. Since every number except one appears three times, the sum of bits at any position $i$ will be $3k + 1$ if the single number has a bit at that position, and $3k$ otherwise.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the length of the input array. The outer loop runs a constant 32 times, and the inner loop runs $N$ times.
- **Space Complexity**: $O(1)$, as only a few integer variables are used regardless of input size.

## Efficiency Feedback
- The runtime is efficient and stable.
- **Minor Optimization**: While the current solution is $O(N)$, a more "clever" bitwise approach using two variables (`ones` and `twos`) can solve this in a single pass without the outer 32-iteration loop, though the asymptotic complexity remains the same.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. Simple nested loop structure.
- **Naming**: Moderate. `bitind` and `cnt` are acceptable, though `bitIndex` and `count` would be more standard.
- **Concrete Improvements**:
    - Use a constant instead of the literal `31` for the loop boundary (e.g., `Integer.SIZE`) to improve maintainability.
    - The logic `if(cnt % 3 == 1)` is correct and sufficient given the problem constraints.

---

# Question Revision
### Single Number II

**Pattern:** Bit Manipulation

**Brute Force:** 
Use a hash map to store frequency counts of each number. Iterate through the map to find the key with a value of 1.
- **Time:** $O(n)$
- **Space:** $O(n)$

**Optimal Approach:** 
Sum the bits at each of the 32 positions for all numbers in the array. Because every number except the unique one appears three times, the sum of bits at any given position $i$ will be $3k$ if the unique number has a 0 at that position, or $3k + 1$ if it has a 1. Applying `sum % 3` at each position reconstructs the unique number.
- **Time:** $O(n)$
- **Space:** $O(1)$

**The 'Aha' Moment:** 
The "appears three times" constraint implies that summing bits modulo 3 will eliminate all elements except the unique one.

**Summary:** 
Reconstruct the unique number by calculating the sum of bits at each position modulo 3.

---