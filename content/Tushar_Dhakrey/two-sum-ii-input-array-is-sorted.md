---
title: "Two Sum II - Input Array Is Sorted"
slug: two-sum-ii-input-array-is-sorted
date: "2026-09-30"
---

# My Solution
~~~java
class Solution {
    public int[] twoSum(int[] numbers, int target) {
        HashMap<Integer,Integer> map = new HashMap<>();
        for(int i=0;i<numbers.length;i++){
            int num = target-numbers[i];
            if(map.containsKey(num)){
                return new int[]{map.get(num),i+1};
            }
            map.put(numbers[i],i+1);
        }
        return new int[]{};
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Hash Map (One-pass).
- **Optimality**: **Suboptimal**. While correct, it ignores the "Input Array Is Sorted" constraint. The optimal approach for a sorted array is the **Two-Pointer technique**, which reduces space complexity from linear to constant.

## Complexity
- **Time Complexity**: $O(n)$ — The array is traversed once.
- **Space Complexity**: $O(n)$ — In the worst case, the map stores almost every element of the array.

## Efficiency Feedback
- **Memory Bottleneck**: The use of a `HashMap` introduces significant memory overhead. Since the array is already sorted, you can achieve the same time complexity with $O(1)$ space by using two pointers (one at the start, one at the end).
- **Runtime**: While $O(n)$, the constant factor for hashing and map lookups is higher than simple pointer increments/decrements.

## Code Quality
- **Readability**: Good. The logic is clear and standard for the Two Sum problem.
- **Structure**: Good. The loop and return statements are placed correctly.
- **Naming**: Good. Variable names (`map`, `num`, `numbers`, `target`) are descriptive.
- **Improvements**: 
    - Replace `HashMap` with a two-pointer approach to utilize the sorted property of the input.
    - The `return new int[]{};` is unreachable given the problem constraints (which usually guarantee a solution), but serves as a necessary safety return for the compiler.

---

# Question Revision
# Revision Report: Two Sum II - Input Array Is Sorted

- **Pattern:** Two Pointers
- **Brute Force:** Use nested loops to check every possible pair of elements to see if their sum equals the target.
- **Optimal Approach:** 
    - Initialize one pointer at the start (`left`) and one at the end (`right`) of the array.
    - Calculate the sum of elements at these pointers.
    - If the sum is too small, move the `left` pointer forward to increase the sum.
    - If the sum is too large, move the `right` pointer backward to decrease the sum.
    - **Time Complexity:** $O(n)$
    - **Space Complexity:** $O(1)$
- **The 'Aha' Moment:** The phrase **"Input Array Is Sorted"** is the primary signal to use Two Pointers to narrow down the search space.
- **Summary:** Use two pointers at opposite ends to converge on the target sum by leveraging the sorted nature of the array.

---