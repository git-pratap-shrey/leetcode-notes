---
title: "Add Two Integers"
slug: add-two-integers
date: "2026-09-30"
---

# My Solution
~~~cpp
class Solution {
public:
    void solve(vector<int>& nums,int target,int sum,int ind,int k,int& ans){
        if(k==3){
            if(abs(target-sum)<abs(target-ans))
                ans=sum;
            return;
        }

        for(int i=ind;i<nums.size();i++){
            solve(nums,target,sum+nums[i],i+1,k+1,ans);
        }
    }

    int threeSumClosest(vector<int>& nums,int target){
        int ans=nums[0]+nums[1]+nums[2];
        solve(nums,target,0,0,0,ans);
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Brute-force recursion (Combinatorial search). The code explores every possible combination of 3 elements to find the sum closest to the target.
- **Optimality**: Not optimal. The standard optimal approach for this problem is sorting the array followed by a two-pointer technique.

## Complexity
- **Time Complexity**: $O(N^3)$, where $N$ is the number of elements in `nums`. The algorithm generates all combinations $\binom{N}{3}$.
- **Space Complexity**: $O(1)$ auxiliary space. Although it uses recursion, the depth is fixed at 3, resulting in constant stack space.

## Efficiency Feedback
- **Bottleneck**: The $O(N^3)$ complexity is inefficient. For a typical competitive programming constraint (e.g., $N=1000$), this will result in a Time Limit Exceeded (TLE) error.
- **Optimization**: Sort the array $O(N \log N)$ and iterate through the array once, using two pointers (one at `i+1`, one at `nums.size()-1`) to find the closest sum in $O(N^2)$ total time.

## Code Quality
- **Readability**: Moderate. The recursive logic is easy to follow, but the use of a helper function for a simple triple-loop task adds unnecessary overhead.
- **Structure**: Moderate. The logic is split between a driver function and a recursive helper.
- **Naming**: Poor.
    - `solve` is too generic; `findClosestSum` would be more descriptive.
    - `k` is used as a counter for elements picked; `count` or `depth` would be clearer.
    - `ind` is a common shorthand, but `startIndex` is preferred.
- **Improvements**: 
    - Replace recursion with nested loops to avoid function call overhead if sticking to brute force.
    - Implement the two-pointer approach to move from $O(N^3)$ to $O(N^2)$.

---

# Question Revision
### Pattern: Basic Arithmetic

**Brute Force**: Use the addition operator `+` to sum the two integers.

**Optimal Approach**: Direct addition.
- **Time Complexity**: $O(1)$
- **Space Complexity**: $O(1)$

**The 'Aha' Moment**: The problem asks for the sum of two scalar values, requiring a single primitive operation.

**Summary**: Return the sum of two integers using the `+` operator.

---