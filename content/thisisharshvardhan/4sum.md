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
- **Technique**: Three nested loops combined with a Hash Set (to find the 4th element) and a `std::set` (to handle duplicate quadruplets).
- **Optimality**: Suboptimal. The optimal approach for 4Sum is $O(n^3)$ using sorting and the two-pointer technique. This implementation incurs additional logarithmic overhead due to the use of `std::set`.

## Complexity
- **Time Complexity**: $O(n^3 \log n)$
    - Three nested loops provide $O(n^3)$.
    - Inside the innermost loop, `std::set::find` and `std::set::insert` take $O(\log n)$.
    - `st.insert(temp)` takes $O(\log (\text{number of quadruplets}))$, which in the worst case is $O(\log n^3) = O(\log n)$.
- **Space Complexity**: $O(n^3)$
    - The `std::set<vector<int>>` can store up to $O(n^3)$ unique quadruplets in the worst case.
    - The internal `hashset` takes $O(n)$ space per iteration of the second loop.

## Efficiency Feedback
- **Set vs Unordered Set**: The variable `hashset` is declared as `std::set`, which is implemented as a Red-Black Tree ($O(\log n)$). Using `std::unordered_set` would reduce this to $O(1)$ average time.
- **Duplicate Handling**: Using a `std::set<vector<int>>` to filter duplicates is expensive. Sorting the input array at the start and skipping identical adjacent elements using `while` loops would eliminate the need for the outer set and the $O(n \log n)$ sorting of each quadruplet.
- **Memory Overhead**: Storing all valid quadruplets in a set before moving them to a vector doubles the memory requirement for the result.

## Code Quality
- **Readability**: Moderate. The logic is easy to follow, but the naming is slightly misleading (`hashset` is not actually a hash set; it is a balanced BST).
- **Structure**: Good. The nested loop structure is clean and the use of `long long` correctly prevents integer overflow.
- **Naming**: Moderate. `st` and `temp` are overly generic.
- **Concrete Improvements**:
    1. Replace `std::set<long long> hashset` with `std::unordered_set<long long>`.
    2. Sort `nums` at the beginning and use a two-pointer approach for the last two elements to achieve $O(n^3)$ time and $O(1)$ extra space (excluding output).
    3. Remove the `std::set<vector<int>>` by implementing duplicate skipping logic.

---

# Question Revision
### LeetCode 18: 4Sum

**Pattern:** Two Pointers / Sorting

**Brute Force:** Use four nested loops to check every possible combination of four elements. 
- **Time:** $O(n^4)$
- **Space:** $O(1)$

**Optimal Approach:** 
1. Sort the array to enable the two-pointer technique and easy duplicate skipping.
2. Use two nested loops to fix the first two elements ($i$ and $j$).
3. For each pair, use two pointers (`left` and `right`) to find the remaining two elements that complete the `target` sum.
4. Skip identical elements at each level ($i, j, left, right$) to avoid duplicate quadruplets.
- **Time:** $O(n^3)$
- **Space:** $O(1)$ (excluding output storage)

**The 'Aha' Moment:** The requirement for unique combinations in a sorted array indicates that we can reduce the search space for the final two elements from $O(n^2)$ to $O(n)$ using two pointers.

**Summary:** Solve $k$-sum problems by iteratively reducing them to a 2-sum problem using nested loops and two pointers on a sorted array.

---