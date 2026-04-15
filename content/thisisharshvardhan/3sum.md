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
- **Technique**: Sorting followed by a Two-Pointer approach.
- **Optimality**: Optimal. The $O(n^2)$ time complexity is the standard efficient solution for the 3Sum problem.

## Complexity
- **Time Complexity**: $O(n^2)$
  - Sorting takes $O(n \log n)$.
  - The nested loop structure (one `for` loop and one `while` loop) results in $O(n^2)$ operations.
- **Space Complexity**: $O(1)$ or $O(\log n)$
  - Excluding the space required for the output list, the auxiliary space is determined by the sorting algorithm (typically $O(\log n)$ for `std::sort` in C++).

## Efficiency Feedback
- **Performance**: The solution is highly efficient.
- **Minor Optimization**: The explicit creation of `vector<int> temp` is unnecessary. Using an initializer list inside `push_back` (e.g., `ans.push_back({nums[i], nums[j], nums[k]});`) reduces verbosity and can slightly improve performance by avoiding an explicit named variable.

## Code Quality
- **Readability**: Good. The logic is clean and follows standard patterns for this problem.
- **Structure**: Good. Duplicate handling for all three pointers (`i`, `j`, and `k`) is implemented correctly.
- **Naming**: Moderate. While `i`, `j`, and `k` are acceptable for loop indices, `left` and `right` would more clearly communicate the two-pointer intent.
- **Concrete Improvements**:
    - Use `ans.push_back({nums[i], nums[j], nums[k]});` instead of creating a `temp` vector.
    - Add `const` qualifiers to variables that do not change if applicable (though not critical here).

---

# Question Revision
### 3Sum Revision Report

**Pattern:** Two Pointers (with Sorting)

**Brute Force:**
Triple nested loop to check every possible triplet combination, using a Set to filter duplicate triplets.
**Time:** $O(n^3)$ | **Space:** $O(k)$ where $k$ is the number of unique triplets.

**Optimal Approach:**
1. **Sort** the array to enable the two-pointer technique and easy duplicate skipping.
2. **Iterate** through the array, fixing the first element $i$. If $nums[i] > 0$, break (no three positive numbers can sum to zero).
3. **Two Pointers:** For each $i$, set `left = i + 1` and `right = n - 1`.
    - If `sum < 0`, increment `left`.
    - If `sum > 0`, decrement `right`.
    - If `sum == 0`, record the triplet and move both pointers, skipping over identical values.
4. **Time:** $O(n^2)$
5. **Space:** $O(1)$ or $O(\log n)$ depending on the sorting implementation.

**The 'Aha' Moment:**
Sorting the array transforms the search for a sum into a directional movement problem, allowing you to skip duplicates by simply checking if the next element is the same as the current.

**Summary:** 
Fix one element and solve the remaining Two Sum problem using two pointers on a sorted array while skipping adjacent duplicates.

---