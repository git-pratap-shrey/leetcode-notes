---
title: "3Sum"
slug: 3sum
date: "2026-08-19"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int n= nums.size();
        vector<vector<int>>ans;
        for(int i=0 ; i<n-2 ; i++){
            int target = -1* nums[i];
            if(i>0 && nums[i]==nums[i-1]){
                continue;
            } 
            int left = i+1;
            int right = n-1;
            while(left<right){
                int sum = nums[left]+nums[right];
                if(sum==target){
                    ans.push_back({nums[i], nums[left] , nums[right]});
                    left++;
                    right--;
                    while(left<n && nums[left]==nums[left-1]){
                        left++;
                    }
                    while(right>=0 && nums[right]== nums[right+1]){
                        right--;
                    }
                }
                
                else if(sum<target){
                    left++;
                }
                else{
                    right--;
                }
            }
        }
        return ans;
        
    }
};
~~~

# Submission Review
## Approach
* **Technique:** Sorting followed by a two-pointer approach for the remaining two elements (fixing one element).
* **Optimality:** Optimal. The $O(N^2)$ time complexity is standard for the 3Sum problem given the necessity to handle duplicates and find triplets.

## Complexity
* **Time Complexity:** $O(N^2)$. Sorting takes $O(N \log N)$, and the nested loop structure performs a linear scan for each element, leading to $O(N^2)$.
* **Space Complexity:** $O(1)$ auxiliary space (ignoring the space required for the output vector), as the sorting is done in-place and pointers use constant extra space.

## Efficiency Feedback
* **Runtime:** Highly efficient. The `continue` and `while` loop checks effectively prune the search space by skipping duplicate values, which is the standard way to avoid redundant triplets.
* **Optimization:** The logic is already tightly written. No meaningful algorithmic optimizations exist for this approach.

## Code Quality
* **Readability:** Good. The logic flow is standard and easy to follow.
* **Structure:** Good. The separation of the main loop and the two-pointer logic is clear.
* **Naming:** Good. Variable names (`left`, `right`, `target`) align with standard two-pointer conventions.
* **Improvements:**
    * The check `right >= 0` inside the inner `while` loop is technically redundant because the loop invariant `left < right` guarantees `right > i`, and `i` starts at `0`.
    * You can add a `if (nums[i] > 0) break;` optimization after the sorting step. Since the array is sorted, if the first element is greater than zero, it is impossible for the sum of three numbers to be zero.

---

# Question Revision
### Revision Report: 3Sum

**Pattern:** Two Pointers (following a Sort)

**Brute Force:**
Use three nested loops to check every triplet combination.
*   **Time:** $O(n^3)$
*   **Space:** $O(1)$ (or $O(n)$ depending on sorting algorithm)

**Optimal Approach:**
1.  Sort the array ($O(n \log n)$).
2.  Iterate through the array with a fixed pointer `i`.
3.  For each `i`, use two pointers (`left` and `right`) to find pairs that sum to `-nums[i]` in the remaining subarray.
4.  Skip duplicate values for all pointers to ensure unique triplets.
*   **Time:** $O(n^2)$
*   **Space:** $O(1)$ (ignoring space used by sort)

**The 'Aha' Moment:**
When a problem asks for unique combinations that sum to a target, sorting the array allows you to eliminate duplicate processing and reduce the inner search to a linear scan.

**Summary:**
To solve multi-sum problems efficiently, sort the input to trade a $O(n^3)$ exhaustive search for a $O(n^2)$ two-pointer traversal.

---