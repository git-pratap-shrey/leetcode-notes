---
title: "Rank Transform of an Array"
slug: rank-transform-of-an-array
date: "2026-07-12"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<int> arrayRankTransform(vector<int>& arr) {
        if(arr.size() == 0){
            return {};
        }
        vector<int> indexArr(arr.size());
        for(int i = 0; i < arr.size(); i++){
            indexArr[i] = i;
        }

        sort(indexArr.begin(), indexArr.end(), [&](int i, int j) { return arr[i] < arr[j]; });

        int rank = 1;
        int previous = arr[indexArr[0]];
        arr[indexArr[0]] = rank;
        for(int i = 1; i < arr.size(); i++){
            // cout<<arr[indexArr[i]]<<" "<<previous<<"->";
            if(arr[indexArr[i]] == previous){
                // cout<<"y";
                arr[indexArr[i]] = rank;
            }
            else{
                rank++;
                previous = arr[indexArr[i]];
                arr[indexArr[i]] = rank;
            }
        }

        return arr;
    }
};
~~~

# Submission Review
## Approach
*   **Technique**: Indirect sorting using an index array and a single-pass rank assignment.
*   **Optimality**: Suboptimal. While the logic is correct, it is unnecessarily complex. A more standard and idiomatic approach involves copying the array, sorting the copy, removing duplicates (`std::unique`), and using `std::lower_bound` to replace values with their ranks. The current approach uses $O(N)$ extra space for `indexArr` and performs index-based manipulation, which increases overhead.

## Complexity
*   **Time Complexity**: $O(N \log N)$ due to sorting.
*   **Space Complexity**: $O(N)$ to store `indexArr`.

## Efficiency Feedback
*   **Bottleneck**: Sorting an `indexArr` and performing indirect lookups via `arr[indexArr[i]]` is cache-unfriendly compared to sorting a direct copy of the data. 
*   **Optimization**: Using a `std::vector` copy, sorting it, and using `std::unique` to remove duplicates allows for a cleaner implementation. You can then replace original elements using `std::lower_bound` to find the rank (index + 1) in the sorted unique array. This avoids the manual loop for rank assignment.

## Code Quality
*   **Readability**: **Moderate**. The logic is clear, but the index-based approach obscures the intent compared to standard library algorithms.
*   **Structure**: **Moderate**. The manual handling of `rank` and `previous` variables is error-prone. The logic handles empty arrays correctly, which is good.
*   **Naming**: **Good**. Variable names like `indexArr` and `rank` clearly reflect their purpose.
*   **Improvements**:
    *   **Remove commented code**: The `// cout` statements should be removed before final submission.
    *   **Simplify**: Consider the `std::unique` approach for cleaner code:
      ```cpp
      vector<int> sorted = arr;
      sort(sorted.begin(), sorted.end());
      sorted.erase(unique(sorted.begin(), sorted.end()), sorted.end());
      for (int &x : arr) {
          x = lower_bound(sorted.begin(), sorted.end(), x) - sorted.begin() + 1;
      }
      ```
    *   **Safety**: The `if(arr.size() == 0)` check is unnecessary; the loop logic would naturally handle an empty vector correctly.

---

# Question Revision
### Revision Report: Rank Transform of an Array

**Pattern:** Sorting + Hash Map (Coordinate Compression)

**Brute Force:** 
For each element, count how many unique elements are smaller than it by iterating through the entire array.  
**Complexity:** $O(n^2)$ time, $O(1)$ space.

**Optimal Approach:**
1. Create a sorted copy of the unique elements of the array.
2. Use a hash map to map each unique value to its index (1-based rank).
3. Transform the original array by replacing each element with its mapped rank.  
**Complexity:** $O(n \log n)$ time (due to sorting), $O(n)$ space (for the map and sorted copy).

**The 'Aha' Moment:**
When the relative order (rank) matters more than the actual magnitude of the numbers, transforming values into their ordinal positions via a sorted lookup is the standard technique.

**Summary:** 
Whenever you need to map relative values to dense ranks, sort the unique elements and cache their index in a hash map for $O(1)$ lookup.

---