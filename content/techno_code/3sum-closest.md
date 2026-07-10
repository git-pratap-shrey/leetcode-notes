---
title: "3Sum Closest"
slug: 3sum-closest
date: "2026-06-28"

---

# My Solution
~~~
class
 Solution {
public:
    int threeSumClosest(vector<int>& nums,int target) {
        sort(nums.begin(),nums.end());

        int ans=nums[0]+nums[1]+nums[2];

        for(int i=0;i<nums.size()-2;i++){
            int l=i+1,r=nums.size()-1;

            while(l<r){
                int sum=nums[i]+nums[l]+nums[r];

                if(abs(target-sum)<abs(target-ans))
                    ans=sum;

                if(sum<target) l++;
                else if(sum>target) r--;
                else return target;
            }
        }

        return ans;
    }
};
~~~

# Submission Review

## Approach

- **Technique**: Sorting followed by a Two-Pointer approach.
- **Optimality**: Optimal. The $O(n^2)$ time complexity is the standard optimal approach for this problem.

## Complexity

- **Time Complexity**: $O(n^2)$
  - Sorting takes $O(n \log n)$.
  - The nested loops (outer loop for the first element, inner while-loop for the two pointers) result in $O(n^2)$.
- **Space Complexity**: $O(1)$ or $O(\log n)$ depending on the `std::sort` implementation (in-place sorting).

## Efficiency Feedback

- **Runtime**: The solution is efficient. The early exit `else return target;` optimizes cases where an exact match is found.
- **Potential Optimization**: To further reduce runtime on datasets with many duplicate values, the outer loop could skip identical elements:
  ```cpp
  if (i > 0 && nums[i] == nums[i-1]) continue;
  ```

## Code Quality

- **Readability**: Good. The logic is concise and follows a standard pattern.
- **Structure**: Good. The flow is linear and easy to trace.
- **Naming**: Moderate. While `l`, `r`, and `ans` are common in competitive programming, `left`, `right`, and `closestSum` would improve clarity for production code.
- **Concrete Improvements**:
    - Use `const auto&` or `int` for `nums.size()` to avoid signed/unsigned comparison warnings.
    - Ensure the problem constraints guarantee `nums.size() >= 3` before accessing `nums[0]+nums[1]+nums[2]`; otherwise, this will cause a segmentation fault.

---

# Question Revision

#

## 3Sum Closest

**Pattern:** Sorting + Two Pointers

**Brute Force:** 
Use three nested loops to calculate the sum of every possible triplet and track the one with the minimum absolute difference from the target.
- Time: $O(n^3)$
- Space: $O(1)$

**Optimal Approach:**
1. Sort the input array to enable directional movement of pointers.
2. Iterate through the array with a fixed pointer `i`.
3. For each `i`, initialize two pointers: `left = i + 1` and `right = n - 1`.
4. While `left < right`:
    - Calculate `currentSum = nums[i] + nums[left] + nums[right]`.
    - If `currentSum` is closer to the target than the previous `closestSum`, update it.
    - If `currentSum < target`, increment `left` to increase the sum.
    - If `currentSum > target`, decrement `right` to decrease the sum.
    - If `currentSum == target`, return immediately.
- **Time Complexity:** $O(n^2)$
- **Space Complexity:** $O(1)$ (excluding sorting space)

**The 'Aha' Moment:**
The requirement to find a sum "closest" to a target in a numeric array signals that sorting the data will allow two pointers to converge on the target value by predictably increasing or decreasing the sum.

**Summary:**
Sort the array and use a fixed element combined with a Two-Pointer window to efficiently narrow down the triplet sum nearest to the target.

---
