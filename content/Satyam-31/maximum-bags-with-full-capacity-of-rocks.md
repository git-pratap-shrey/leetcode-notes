---
title: "Maximum Bags With Full Capacity of Rocks"
slug: maximum-bags-with-full-capacity-of-rocks
date: "2026-02-20"

---
---

# My Solution
~~~cpp
class Solution {
public:
    int maximumBags(vector<int>& capacity, vector<int>& rocks, int additionalRocks) {
        vector<int>ans;
        int c=0;
        for(int i=0;i<rocks.size();i++){
          if(rocks[i]<capacity[i]){
            int n=capacity[i]-rocks[i];
            ans.push_back(n);
          }
          else if(rocks[i]==capacity[i]){
            c++;
          }
        }
        sort(ans.begin(),ans.end());
        
        for(int i=0;i<ans.size() ;i++){
           if(additionalRocks>=ans[i]){
            additionalRocks-=ans[i];
            c++;
           }
           else{
            break;
           }

        }
        return c;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Greedy. The approach calculates the remaining capacity for each bag, sorts them in ascending order to prioritize filling bags that require the fewest rocks, and fills them until `additionalRocks` are exhausted.
- **Optimality:** Optimal. Sorting is the necessary greedy strategy to maximize the total number of full bags.

## Complexity
- **Time Complexity:** $O(N \log N)$, where $N$ is the number of bags. This is dominated by the `std::sort` operation.
- **Space Complexity:** $O(N)$ due to the `ans` vector used to store the remaining capacities.

## Efficiency Feedback
- **Runtime:** The overhead of creating and populating the `ans` vector is minor.
- **Optimization:** You can perform an in-place modification of the `capacity` vector (converting it to a "remaining capacity" vector) to save $O(N)$ space, though this is negligible for typical competitive programming constraints.

## Code Quality
- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Good. The separation between identifying partially filled bags and fulfilling them is clear.
- **Naming:** Moderate. `ans` and `c` are poor variable names. `ans` should ideally be named `remaining_caps` or `needed_rocks`, and `c` should be named `full_bags_count`.
- **Concrete Improvements:**
    - Use `int` to `size_t` where appropriate (e.g., in loop iterators) to avoid compiler warnings.
    - Avoid re-allocating a new vector `ans`; you can directly store the `needed` values in a vector if you prefer, or simply modify the `rocks` vector in-place.
    - The `else if (rocks[i] == capacity[i])` check is correct, but the logic could be simplified by calculating `capacity[i] - rocks[i]` for every bag regardless, and then sorting them. Bags that are already full would contribute a `0` to the sorted list and would be handled naturally by the filling loop.

---
---


# Question Revision
### Revision Report: Maximum Bags With Full Capacity of Rocks

**Pattern:** Greedy

**Brute Force:** Calculate the capacity needed for every bag, store those values, and iterate through the bags repeatedly, picking the one with the smallest remaining capacity until no more rocks remain. 
*   **Complexity:** $O(n^2)$ due to nested sorting or repeated scans.

**Optimal Approach:** 
1. Calculate the required rocks for each bag (`capacity[i] - rocks[i]`) and store them in an array.
2. Sort the required rocks array in ascending order.
3. Iterate through the sorted array, subtracting each value from `additionalRocks` until you run out of rocks or a bag cannot be filled.
*   **Time Complexity:** $O(n \log n)$ due to sorting.
*   **Space Complexity:** $O(n)$ to store the difference array.

**The 'Aha' Moment:** Whenever you need to maximize the *count* of items satisfied by a limited resource, prioritizing the "cheapest" (smallest capacity gap) options first is the optimal greedy strategy.

**Summary:** Fill the bags with the smallest remaining capacity first to maximize the total number of full bags.

---
