---
title: "Number of Good Pairs"
slug: number-of-good-pairs
date: "2026-07-16"
---

# My Solution
~~~cpp
class Solution {
public:
    int numIdenticalPairs(vector<int>& nums) {
        int n=nums.size();
        int count=0;
       for(int i=0;i<n;i++){
        for(int j=i+1;j<n;j++){
            if(nums[i]==nums[j]){
                count++;
            }
        }
       }
        return count;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Brute-force nested iteration.
*   **Optimal:** No. The problem can be solved in linear time using a frequency map (hash table or array).

## Complexity
*   **Time Complexity:** $O(n^2)$, where $n$ is the number of elements in `nums`. The nested loops perform $n(n-1)/2$ comparisons.
*   **Space Complexity:** $O(1)$ auxiliary space.

## Efficiency Feedback
*   **Bottleneck:** The $O(n^2)$ approach is inefficient for large inputs.
*   **Optimization:** Use a frequency map (e.g., `std::unordered_map<int, int>` or a frequency array if constraints permit). Iterate through the array once: for each number, add its current frequency to the total count and then increment its frequency. This reduces time complexity to $O(n)$.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. The code is concise and fits well within the standard class structure.
*   **Naming:** Moderate. `count` is a clear variable name, but could be more specific (e.g., `goodPairs`).
*   **Concrete Improvements:**
    *   Initialize `count` as `long long` if there were a risk of integer overflow (though unnecessary here given the problem constraints typically associated with this task).
    *   Use `size_t` for loop indices to match the type returned by `nums.size()`.
    *   Consider the $O(n)$ frequency-counting approach:
        ```cpp
        int numIdenticalPairs(vector<int>& nums) {
            unordered_map<int, int> counts;
            int total = 0;
            for (int num : nums) {
                total += counts[num]++;
            }
            return total;
        }
        ```

---

# Question Revision
### Revision Report: Number of Good Pairs

**Pattern:** Frequency Counting (Hash Map / Array)

**Brute Force:** 
Use nested loops to compare every pair $(i, j)$ where $i < j$. If $nums[i] == nums[j]$, increment the count.
*   **Time:** $O(n^2)$
*   **Space:** $O(1)$

**Optimal Approach:** 
Iterate through the array once while maintaining a frequency map of numbers seen so far. For each number, if it has appeared $k$ times previously, it can form $k$ new "good pairs" with the current instance. Add $k$ to the total count and increment the frequency.
*   **Time:** $O(n)$
*   **Space:** $O(n)$ (or $O(1)$ if the range of numbers is fixed, e.g., 1-100).

**The 'Aha' Moment:** 
Whenever a problem asks for the count of pairs based on a matching property, shifting from "finding pairs" to "counting occurrences and calculating combinations" reduces the complexity from quadratic to linear.

**Summary:** 
Don't search for pairs; count frequencies and add the current tally to your running total for every match found.

---