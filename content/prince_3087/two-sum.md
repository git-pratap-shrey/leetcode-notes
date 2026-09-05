---
title: "Two Sum"
slug: two-sum
date: "2026-08-27"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        int i=0;
        int j=numbers.size()-1;
        while(i<j){
            if(numbers[i]+numbers[j] == target){
                return vector<int> {i+1,j+1};

            }
            else if(numbers[i]+numbers[j]<target){
                i++;
            }
            else if(numbers[i]+numbers[j]>target){
                j--;
            }

        }
        return vector<int>{};


   
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Two-pointer approach.
*   **Optimal:** No. This approach only works if the input array is **sorted** (Two Sum II). For the standard "Two Sum" problem, the input is typically unsorted, making this approach incorrect as it would yield wrong results for unsorted inputs.

## Complexity
*   **Time Complexity:** $O(N)$ assuming the input is sorted.
*   **Space Complexity:** $O(1)$ (excluding the returned vector).
*   **Bottleneck:** The algorithm relies on the input being sorted; if it is not, sorting it first would increase the complexity to $O(N \log N)$.

## Efficiency Feedback
*   **Runtime:** The logic is highly efficient ($O(N)$) for sorted arrays.
*   **Memory:** Extremely low footprint.
*   **Specific Optimizations:** If the input is indeed unsorted, using a `std::unordered_map` would be the optimal approach to achieve $O(N)$ time complexity, albeit with $O(N)$ space complexity.

## Code Quality
*   **Readability:** Good. The logic is concise and easy to follow.
*   **Structure:** Good. Uses a standard two-pointer loop structure.
*   **Naming:** Moderate. `numbers` is descriptive, but `i` and `j` are standard in competitive programming; however, `left` and `right` are generally preferred for readability.
*   **Concrete Improvements:** 
    *   Add a check or documentation indicating the assumption that the input must be sorted.
    *   Consider using `std::vector<int>{i + 1, j + 1}` instead of `vector<int> {i + 1, j + 1}` (remove the space for consistency).
    *   If the input is guaranteed to be sorted, the `else if` for the `target > sum` case is redundant; a simple `else` suffices.

---

# Question Revision
### Revision Report: Two Sum

**Pattern:** Hash Map (Complement Tracking)

**Brute Force:**
Iterate through every pair $(i, j)$ using nested loops to check if `nums[i] + nums[j] == target`.
*   **Time:** $O(n^2)$
*   **Space:** $O(1)$

**Optimal Approach:**
Iterate through the array once while storing each element's value and index in a hash map. For each element, calculate the `complement` (`target - current_value`) and check if it already exists in the map.
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**The 'Aha' Moment:**
When the problem asks for a specific pair that satisfies a sum, recognizing that you are looking for a *missing complement* allows you to trade space for a single-pass lookup.

**Summary:** 
Whenever you need to find a pair that meets a criteria, store the history of visited elements in a hash map to turn a nested search into a $O(1)$ lookup.

---