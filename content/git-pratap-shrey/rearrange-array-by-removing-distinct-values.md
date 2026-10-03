---
title: "Rearrange Array by Removing Distinct Values"
slug: rearrange-array-by-removing-distinct-values
date: "2026-09-27"
---

# My Solution
~~~cpp
class Solution {
public:
    int countSpecialIntegers(vector<int>& nums) {
        int n = nums.size();
        unordered_map<int, vector<int>>mp;
        for(int i = 0;i < n;i++){
            mp[nums[i]].push_back(i);
        }
        int sol = 0;
        for(auto it : mp){
            if(it.second.size() >= 3){
                bool flag = true;
                n = it.second.size();
                int d1 = abs(it.second[1] - it.second[0]);
                for(int i = 1; i < n;i++){
                    if(abs(it.second[i] - it.second[i-1]) != d1){
                        flag = false;
                        break;
                    }
                }
                if(flag){
                    sol++;
                }
            }
        }
        return sol;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Frequency mapping using a Hash Map (`unordered_map`) to store the indices of each unique element, followed by a linear scan of those indices to check for a constant difference (Arithmetic Progression).
- **Optimality**: **Incorrect/Suboptimal**. The solution does not solve a "Rearrange Array" problem; instead, it counts how many unique integers appear at least 3 times with equidistant spacing in the original array. Without the problem statement, the logic seems highly specific and likely fails to address general "rearranging" or "removing" requirements.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the size of the input array. The code iterates through the array once to populate the map and then iterates through the indices of each unique element once.
- **Space Complexity**: $O(N)$ to store the indices of all elements in the `unordered_map`.

## Efficiency Feedback
- **Memory Overhead**: Using `vector<int>` as the value in `unordered_map` creates significant overhead due to multiple heap allocations. If only the distance needs checking, a more memory-efficient structure or a sorted approach could be used.
- **Bottleneck**: The primary bottleneck is the memory fragmentation caused by storing vectors inside a map for every unique element.

## Code Quality
- **Readability**: **Moderate**. The logic is simple, but the variable `n` is shadowed (redeclared/reassigned), which is confusing.
- **Structure**: **Poor**. 
    - Shadowing: `int n = nums.size();` is redefined inside the loop as `n = it.second.size();`, destroying the original size of the input array.
    - Logic Error: The loop `for(int i = 1; i < n; i++)` uses the modified `n`, which happens to work for the inner loop but is dangerous practice.
- **Naming**: **Poor**. 
    - `sol` is vague; `specialCount` would be more descriptive.
    - `mp` is generic.
    - `it` is standard for iterators, but `entry` or `pair` is clearer.

**Concrete Improvements**:
1. Avoid shadowing the variable `n`. Use a separate variable like `count` or `sz` for the size of the index vector.
2. Use `const auto& it` in the range-based for loop to avoid copying the `vector<int>` on every iteration.
3. Check if the map lookup can be replaced by sorting the array if memory is a constraint.

---

# Question Revision
# Revision Report: Rearrange Array by Removing Distinct Values

- **Pattern**: Two Pointers (Read/Write)
- **Brute Force**: Use a hash set to identify distinct values, then iterate through the array again to copy only the non-distinct (duplicate) values into a new temporary list.
- **Optimal Approach**: 
    - Use a frequency map (Hash Map) to count occurrences of each element.
    - Maintain a `write` pointer starting at index 0.
    - Iterate through the array with a `read` pointer; if the frequency of the current element is $> 1$, write it to the `write` pointer position and increment `write`.
    - **Time Complexity**: $O(n)$ to traverse the array twice.
    - **Space Complexity**: $O(n)$ to store the frequency map.
- **The 'Aha' Moment**: The requirement to modify the array "in-place" or maintain order while filtering based on a property (distinctness) signals the Two Pointers pattern.
- **Summary**: Filter elements in-place by using a frequency map to determine "keep" criteria and a write pointer to overwrite the original array.

---