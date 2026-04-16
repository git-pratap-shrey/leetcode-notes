---
title: "3Sum"
slug: 3sum
date: "2026-04-15"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        vector<vector<int>>  ans;
        int n=nums.size();
        sort(nums.begin(),nums.end());
        for(int i=0;i<n;i++){
            if(i>0 && nums[i]==nums[i-1]) continue;
            int j=i+1;
            int k=n-1;
            while(j<k){
                int sum=nums[i]+nums[j]+nums[k];
                if(sum<0){
                    j++;
                }
                else if(sum>0){
                    k--;
                }
                else{
                    vector<int> temp={nums[i],nums[j],nums[k]};
                    ans.push_back(temp);
                    j++;
                    k--;
                    while(j<k && nums[j]==nums[j-1]) j++;
                    while(j<k && nums[k]==nums[k+1]) k--;
                    
                }
            }
        }
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Sorting followed by a Two-Pointer approach.
- **Optimality:** Optimal. The $O(n^2)$ time complexity is the standard best-known approach for the 3Sum problem.

## Complexity
- **Time Complexity:** $O(n^2)$. Sorting takes $O(n \log n)$ and the nested loops (one `for` loop and one `while` loop) take $O(n^2)$.
- **Space Complexity:** $O(1)$ or $O(\log n)$ depending on the `std::sort` implementation, excluding the space used to store the result.

## Efficiency Feedback
- **Performance:** The logic is efficient and avoids redundant computations by skipping duplicates.
- **Optimization:** The outer loop could be terminated early with `if (nums[i] > 0) break;`. Since the array is sorted, if the smallest element of the triplet is positive, the sum can never be zero.

## Code Quality
- **Readability:** Good. The logic is clean and follows standard competitive programming patterns.
- **Structure:** Good. The separation of the fixed pointer and the moving pointers is clear.
- **Naming:** Moderate. Variable names `i`, `j`, `k`, and `ans` are common in competitive programming but less descriptive than `left`, `right`, and `result`.
- **Concrete Improvements:**
    - Replace `vector<int> temp={nums[i],nums[j],nums[k]}; ans.push_back(temp);` with `ans.push_back({nums[i], nums[j], nums[k]});` to avoid an explicit temporary variable.
    - Add the early break condition (`nums[i] > 0`) to slightly improve average-case runtime.

---

# Question Revision
### 3Sum Revision Report

**Pattern:** Sorting + Two Pointers

**Brute Force:** 
Triple nested loop to evaluate every possible triplet combination; use a hash set to filter out duplicate triplets.  
**Time:** $O(n^3)$ | **Space:** $O(k)$ (where $k$ is the number of unique triplets)

**Optimal Approach:** 
1. Sort the array to enable the two-pointer technique and easily skip duplicates.
2. Iterate through the array, fixing one element $i$ as the anchor.
3. For each anchor, initialize two pointers: `left` at $i+1$ and `right` at the end of the array.
4. Calculate `sum = nums[i] + nums[left] + nums[right]`:
   - If `sum == 0`: Record triplet and move both pointers, skipping over identical values.
   - If `sum < 0`: Increment `left` to increase the sum.
   - If `sum > 0`: Decrement `right` to decrease the sum.

**Time Complexity:** $O(n^2)$  
**Space Complexity:** $O(1)$ or $O(n)$ depending on the sorting algorithm implementation.

**The 'Aha' Moment:** 
The requirement for unique triplets and a specific sum in a numeric array suggests that sorting the data allows us to replace a nested loop with a linear two-pointer scan.

**Summary:** 
Sort the array, fix one element, and use a two-pointer "squeeze" to find pairs that complete the zero sum while skipping adjacent duplicates.

---