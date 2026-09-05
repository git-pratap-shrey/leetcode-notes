---
title: "Smallest Missing Integer Greater Than Sequential Prefix Sum"
slug: smallest-missing-integer-greater-than-sequential-prefix-sum
date: "2026-09-05"
---

# My Solution
~~~cpp
class Solution {
public:
    int missingInteger(vector<int>& nums) {
        set<int> hash;
        for(int num : nums){
            hash.insert(num);
        }

        int sum = nums[0];
        for(int i = 1; i < nums.size(); i++){
            if(nums[i] == nums[i-1] + 1){
                sum += nums[i];
            }
            else{
                break;
            }
        }

        while(hash.count(sum)){
            sum++;
        }

        return sum;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Set-based lookup and linear prefix scanning.
- **Optimality**: Optimal. The logic correctly identifies the longest sequential prefix sum and finds the smallest missing integer using a lookup table.

## Complexity
- **Time Complexity**: $O(N \log N)$, where $N$ is the number of elements in `nums`. Building the `std::set` takes $O(N \log N)$ and the final `while` loop performs up to $N+1$ lookups, each taking $O(\log N)$.
- **Space Complexity**: $O(N)$ to store all elements of the input array in the set.

## Efficiency Feedback
- **Bottleneck**: The use of `std::set` (implemented as a Red-Black Tree) results in logarithmic time complexity for insertions and lookups.
- **Optimization**: Replacing `std::set<int>` with `std::unordered_set<int>` would reduce the average time complexity to $O(N)$ as lookups and insertions would become $O(1)$.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The separation of concerns (building the set $\rightarrow$ calculating sum $\rightarrow$ finding missing integer) is clear.
- **Naming**: Moderate. The variable `hash` is poorly named because `std::set` is not a hash-based container; `seen` or `numSet` would be more accurate.
- **Improvement**: Use `std::unordered_set` for better performance.

---

# Question Revision
### Revision Report: Smallest Missing Integer Greater Than Sequential Prefix Sum

**Pattern:** Hash Set / Boolean Marking

**Brute Force:** 
Calculate all prefix sums and store them in a list. For every integer starting from 1, iterate through the entire prefix sum list to check for its existence.
- **Time Complexity:** $O(n^2)$
- **Space Complexity:** $O(n)$

**Optimal Approach:**
1. Compute the prefix sums of the array in a single pass.
2. Insert each prefix sum into a Hash Set for $O(1)$ average-time lookups.
3. Starting from $k = 1$, increment $k$ until it is not found in the Hash Set.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$

**The 'Aha' Moment:** 
The phrase "smallest missing integer" is a trigger to use a Hash Set or a boolean array to track presence and find the first gap in $O(n)$.

**Summary:** 
Generate prefix sums, store them in a set, and iterate from 1 upward to find the first missing value.

---