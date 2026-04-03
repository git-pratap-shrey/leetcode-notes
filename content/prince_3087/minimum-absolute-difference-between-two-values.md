---
title: "Minimum Absolute Difference Between Two Values"
slug: minimum-absolute-difference-between-two-values

---
---

# My Solution
~~~cpp
class Solution {
public:
    int minAbsoluteDifference(vector<int>& nums) {
        int i=0;
        int j=0;
        int n=nums.size();
        
        int result =INT_MAX;
        while(i<n && j<n){
            while(i<n && nums[i]!=1){
                i++;
            }
            while(j<n && nums[j]!=2){
                j++;
            }
            if(i<n && j<n){
                result = min(result , abs(i-j));

                if(i<j){
                    i++;
                }
                else {
                    j++;
                }

            }
        } 
        if(result == INT_MAX){
            return -1;
        }
        else{
            return result;
        }   
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Two-pointer linear scan.
*   **Optimal:** Yes. The algorithm effectively tracks the most recent positions of values `1` and `2` and computes their distance in a single pass.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of elements in the array. Each pointer ($i$ and $j$) traverses the array at most once.
*   **Space Complexity:** $O(1)$, as it uses a constant amount of extra space.

## Efficiency Feedback
*   **Efficiency:** High. The logic correctly handles the updates by incrementing the pointer that found a target value, ensuring the smallest possible difference is calculated for the current window.
*   **Improvement:** The current `while` loop structure is slightly verbose. A more idiomatic approach would be a single `for` loop that updates `last_seen_1` and `last_seen_2` variables as it iterates, removing the need for nested `while` loops.

## Code Quality
*   **Readability:** Moderate. The nested `while` loops make the flow slightly harder to follow than a standard single-pass iteration.
*   **Structure:** Good. The logic is encapsulated well within the class method, and the edge case (no occurrences) is handled correctly.
*   **Naming:** Good. Variables are concise and standard for competitive programming.

### Concrete Improvements
*   **Simplify iteration:** Instead of nested `while` loops, use a single `for` loop to track the indices of `1` and `2`.
    ```cpp
    int last1 = -1, last2 = -1, minDiff = INT_MAX;
    for (int k = 0; k < nums.size(); ++k) {
        if (nums[k] == 1) last1 = k;
        if (nums[k] == 2) last2 = k;
        if (last1 != -1 && last2 != -1) {
            minDiff = min(minDiff, abs(last1 - last2));
        }
    }
    return (minDiff == INT_MAX) ? -1 : minDiff;
    ```
*   This refactoring removes the conditional logic inside the loop and makes the code significantly easier to maintain.

---
---


# Question Revision
### Revision Report: Minimum Absolute Difference

**Pattern:** Sorting + Linear Scan

**Brute Force:** Compare every possible pair in the array using nested loops.
*   **Time Complexity:** $O(n^2)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:** Sort the array first, then iterate through the sorted list to compare only adjacent elements. Since the minimum difference *must* exist between two values that are neighbors in a sorted sequence, we eliminate the need for redundant comparisons.
*   **Time Complexity:** $O(n \log n)$ (due to sorting)
*   **Space Complexity:** $O(1)$ (or $O(n)$ depending on the sorting algorithm implementation)

**The 'Aha' Moment:** Whenever a problem asks for a minimum difference between any two elements, sorting transforms a global search into a local adjacent comparison.

**Summary:** To find the minimum difference between any two elements, sort the array first so you only need to compare neighbors.

---
