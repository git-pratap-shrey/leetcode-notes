---
title: "Reverse Words in a String"
slug: reverse-words-in-a-string
date: "2026-08-25"
---

# My Solution
~~~cpp
class Solution {
public:
    int threeSumClosest(vector<int>& nums, int target) {
        int n = nums.size();
        sort(nums.begin(),nums.end());
        // int s = nums[0]+nums[1]+nums[2];
        int s = INT_MAX;
        int ans = 0;
        for(int i=0;i<n-2;i++){
            int left = i+1;
            int right = n-1;
        
            while(left < right){
                int sumclosest= nums[i]+nums[left]+nums[right];
                int dif = abs(sumclosest-target);
                if(dif < s){
                    s = dif;
                    ans = sumclosest;
                    
                 
                }
                if(sumclosest<target){
                    left ++;
                }
                else if(sumclosest>target){
                    right--;
                }
                else{
                    return sumclosest;
                }
            }
        }
    return ans;
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Two-pointer approach with sorting.
*   **Optimality:** Optimal. The problem requires exploring combinations, and sorting allows for a linear scan of the remaining two elements in $O(N)$ time per pivot, resulting in an $O(N^2)$ overall complexity, which is standard for this problem.

## Complexity
*   **Time Complexity:** $O(N^2)$, where $N$ is the number of elements. Sorting takes $O(N \log N)$ and the nested loop structure performs $O(N^2)$ iterations.
*   **Space Complexity:** $O(1)$ or $O(\log N)$ depending on the implementation of `std::sort`.

## Efficiency Feedback
*   **Runtime:** Very efficient. The algorithm terminates early if an exact match is found (`return sumclosest`).
*   **Initialization:** `int s = INT_MAX` is correct, but since the sum can potentially overflow `int` if not careful (though constrained by typical LeetCode limits), it is safe here. 

## Code Quality
*   **Readability:** Good. The logic is clear and follows standard patterns for 3-Sum variations.
*   **Structure:** Moderate. The commented-out code (`// int s = ...`) should be removed.
*   **Naming:** Moderate. `s` and `dif` are slightly ambiguous; `min_diff` and `current_diff` would be more descriptive.
*   **Concrete Improvements:** 
    *   Add a check for `n < 3` at the beginning. Although not explicitly required by some constraints, it is good defensive programming.
    *   Remove the dead/commented code.
    *   **Mismatch Alert:** The problem name provided is "Reverse Words in a String," but the code provided is for "3Sum Closest." My review is based on the provided **code**.

---
*Note: The function name provided in the code (`threeSumClosest`) does not match the problem title provided ("Reverse Words in a String"). The code implements the former.*

---

# Question Revision
### Revision Report: Reverse Words in a String

**Pattern:** Two Pointers / String Manipulation

**Brute Force:** Split the string by spaces into an array, reverse the array, and join it back with a single space.
*   **Complexity:** $O(n)$ time, $O(n)$ space.

**Optimal Approach:** 
1. Convert the string to a character array and reverse the entire string.
2. Reverse each individual word within the string.
3. Perform an "in-place" cleanup to remove extra leading/trailing/inter-word spaces by shifting characters forward.
*   **Time Complexity:** $O(n)$ (two passes).
*   **Space Complexity:** $O(n)$ (due to immutability of strings in languages like Java/Python) or $O(1)$ if the string is mutable.

**The 'Aha' Moment:** Whenever a problem requires reversing a sequence while maintaining the internal order of subunits, think of a two-step reversal process: reverse the whole, then reverse the parts.

**Summary:** To reverse words in place, reverse the entire string first, then reverse each individual word back to its original orientation.

---