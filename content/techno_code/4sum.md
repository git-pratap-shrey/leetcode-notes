---
title: "4Sum"
slug: 4sum
date: "2026-04-16"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<vector<int>> fourSum(vector<int>& nums, int target) {
        int n = nums.size();
        set<vector<int>> st;

        for(int i = 0; i < n; i++) {
            for(int j = i + 1; j < n; j++) {
                set<long long> hashset;

                for(int k = j + 1; k < n; k++) {
                    long long sum = (long long)nums[i] + nums[j] + nums[k];
                    long long fourth = target - sum;

                    if(hashset.find(fourth) != hashset.end()) {
                        vector<int> temp = {nums[i], nums[j], nums[k], (int)fourth};
                        sort(temp.begin(), temp.end());
                        st.insert(temp);
                    }
                    hashset.insert(nums[k]);
                }
            }
        }

        return vector<vector<int>>(st.begin(), st.end());
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Brute-force nested loops with a set-based lookup for the fourth element and a set to handle duplicate quadruplets.
- **Optimality**: Suboptimal. The standard optimal approach is sorting the array and using the two-pointer technique, which avoids the overhead of sets and achieves better average-case performance.

## Complexity
- **Time Complexity**: $O(n^3 \log n)$. The three nested loops provide $O(n^3)$, and the `std::set` operations (both for `hashset` and `st`) introduce logarithmic factors. Sorting the 4-element vector is $O(1)$.
- **Space Complexity**: $O(m + n)$, where $m$ is the number of unique quadruplets stored in `st` and $n$ is the space used by `hashset`.

## Efficiency Feedback
- **Set vs. Unordered Set**: The code uses `std::set` for `hashset`, which is implemented as a balanced BST ($O(\log n)$). Replacing it with `std::unordered_set` would reduce lookup time to $O(1)$ on average.
- **Duplicate Handling**: Using `std::set<vector<int>>` to ensure uniqueness is highly inefficient. Sorting the input array at the start and skipping identical elements using `while` loops would eliminate the need for this set entirely.
- **Redundant Sorting**: Sorting every valid quadruplet found before inserting it into the set adds unnecessary overhead.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Moderate. While the nested structure is clear, the logic relies on heavy container overhead rather than algorithmic optimization.
- **Naming**: Good. Variable names like `hashset`, `temp`, and `fourth` are descriptive.
- **Concrete Improvements**:
    1. Sort `nums` at the beginning.
    2. Replace the inner `set` and `hashset` with two-pointer logic to reduce time and space complexity.
    3. Replace `std::set` with `std::unordered_set` if a hash-based approach is preferred over two-pointers.
    4. Use `long long` for the `target` subtraction/sum calculation to prevent overflow (already partially handled for `sum`, but `target` should be cast if it were larger).

---

# Question Revision
### 4Sum Revision Report

**Pattern:** Sorting + Two Pointers (Nested)

**Brute Force:** Use four nested loops to iterate through every possible combination of quadruplets.  
**Complexity:** $O(n^4)$

**Optimal Approach:** 
1. Sort the array to enable two-pointer convergence and duplicate skipping.
2. Use two nested loops to fix the first two elements ($i$ and $j$).
3. For the remaining range, use two pointers (`left` and `right`) to find the remaining two elements that sum to `target - (nums[i] + nums[j])`.
4. Skip identical adjacent elements at every pointer level to ensure unique quadruplets.

**Complexity:** 
- **Time:** $O(n^3)$
- **Space:** $O(1)$ or $O(n)$ depending on the sorting implementation.

**The 'Aha' Moment:** Sorting the array allows us to fix $k-2$ elements and reduce the problem to a 2Sum problem, which is solved in linear time using two pointers.

**Summary:** Solve $k$-Sum by recursively reducing it to $(k-1)$-Sum until it becomes a 2Sum problem on a sorted array.

---