---
title: "3Sum Closest"
slug: 3sum-closest
date: "2026-09-29"
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
- **Technique**: Recursive brute-force/exhaustive search. The code generates all possible combinations of 3 elements from the input array.
- **Optimality**: **Not optimal**. The standard optimal approach for 3Sum Closest is $O(n^2)$ using sorting and a two-pointer technique. This solution is $O(n^3)$.

## Complexity
- **Time Complexity**: $O(n^3)$. The recursion explores all combinations of 3 elements, which is $\binom{n}{3}$.
- **Space Complexity**: $O(1)$. While there is recursion, the depth is fixed at 3, resulting in constant stack space.

## Efficiency Feedback
- **Bottleneck**: The nested recursion effectively creates three nested loops. For a typical constraint of $n=1000$, this results in $\approx 1.6 \times 10^8$ operations, which is likely to cause a Time Limit Exceeded (TLE) error.
- **Optimization**: 
    1. Sort the array first.
    2. Iterate through the array with a fixed pointer `i`.
    3. Use two pointers (`left` and `right`) to converge on the target sum for the remaining two elements.

## Code Quality
- **Readability**: Moderate. The logic is simple, but recursion is an unconventional and overkill choice for a fixed-size combination problem.
- **Structure**: Moderate. The helper function `solve` is separated, but using a recursive approach for a 3-sum problem is logically inefficient.
- **Naming**: Good. Variable names like `target`, `sum`, and `ans` are clear.
- **Improvements**:
    - Replace the recursive `solve` function with three nested `for` loops to avoid function call overhead if brute-forcing.
    - Implement the two-pointer approach to improve time complexity.
    - Handle edge cases (though the initialization `nums[0]+nums[1]+nums[2]` assumes `nums.size() >= 3`).

---

# Question Revision
### 3Sum Closest

**Pattern:** Two Pointers (on Sorted Array)

**Brute Force:** Use three nested loops to calculate the sum of every possible triplet and track the one with the minimum absolute difference from the target. 
- Time: $O(n^3)$
- Space: $O(1)$

**Optimal Approach:**
1. **Sort** the input array to enable directional movement of pointers.
2. **Iterate** through the array with a fixed pointer `i`.
3. For each `i`, initialize two pointers: `left = i + 1` and `right = n - 1`.
4. **Converge:** 
    - If `sum < target`, increment `left` to increase the sum.
    - If `sum > target`, decrement `right` to decrease the sum.
    - If `sum == target`, return immediately.
5. **Update** the closest sum whenever the current absolute difference is smaller than the previously recorded minimum.

- **Time Complexity:** $O(n^2)$
- **Space Complexity:** $O(1)$ (or $O(n)$ depending on sorting implementation)

**The 'Aha' Moment:** Whenever you need to find a sum of multiple elements closest to a target, sorting the input allows you to use two pointers to greedily narrow the gap.

**Summary:** Sort the array and use a fixed element combined with a shrinking window (two pointers) to find the sum nearest to the target.

---