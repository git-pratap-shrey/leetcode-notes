---
title: "Minimum Value of Merged Integers"
slug: minimum-value-of-merged-integers
date: "2026-11-01"
---

# My Solution
~~~java
class Solution {
    public int minMergedInteger(int[] nums) {
        int n = nums.length;
        String[] str = new String[n];
        for(int i=0;i<n;i++){
            str[i] = String.valueOf(nums[i]);
        }
        int min = Integer.MAX_VALUE;
        for(int i=0;i<n-1;i+=2){
            int comb = Integer.parseInt(str[i]+str[i+1]);
            min = Math.min(min,comb);
        }
        return min;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Iterative concatenation of adjacent elements.
- **Optimality**: **Not optimal/Incorrect**. The code only checks pairs at indices $(0,1), (2,3), \dots$ (incrementing by `i += 2`). It fails to check all possible adjacent pairs $(i, i+1)$, such as $(1,2), (3,4)$, etc.

## Complexity
- **Time Complexity**: $O(n)$ where $n$ is the length of the array.
- **Space Complexity**: $O(n)$ to store the array of strings.
- **Bottleneck**: The logic is fundamentally flawed as it skips half of the possible adjacent combinations.

## Efficiency Feedback
- **Memory**: High. Converting every integer to a string in a separate array before processing is unnecessary.
- **Runtime**: The string concatenation and `Integer.parseInt` operations are slower than mathematical concatenation (e.g., $nums[i] \cdot 10^{\text{digits of } nums[i+1]} + nums[i+1]$).
- **Optimization**: Use a single loop with `i++` to check all adjacent pairs and calculate the merged value mathematically.

## Code Quality
- **Readability**: Moderate. The intent is clear, but the logic is wrong.
- **Structure**: Poor. The loop increment `i += 2` creates a logical error.
- **Naming**: Good. Variable names like `min` and `comb` are appropriate.
- **Concrete Improvements**:
    1. Change `i += 2` to `i++` to evaluate all adjacent pairs.
    2. Remove the `String[] str` array; convert integers to strings on the fly or use math.
    3. Handle potential `NumberFormatException` if the merged integer exceeds `Integer.MAX_VALUE` (though problem constraints usually define this).

---

# Question Revision
# Revision Report: Minimum Value of Merged Integers

### Pattern
**Greedy + Monotonic Stack**

### Brute Force
Try all possible permutations of merging the numbers. For each permutation, evaluate the resulting integer and track the minimum. Since the number of permutations is $n!$, this is computationally impossible for $n=100$.

### Optimal Approach
The goal is to minimize the number lexicographically. To do this, we want smaller digits to appear as early as possible.
1. **Stack-based Merging**: Use a stack to maintain the current sequence of merged integers. 
2. **Comparison Logic**: When considering a new integer $S_i$, compare it with the top of the stack $S_{top}$. If $S_{top} + S_i < S_i + S_{top}$ (string concatenation), the current $S_i$ is "stronger" and should be merged with $S_{top}$ to push smaller values forward.
3. **Iterative Merging**: Repeat the comparison and merging process with the stack top until the stack is empty or the condition is no longer met.
4. **Final Join**: Concatenate all remaining elements in the stack.

**Complexity:**
- **Time**: $O(N \cdot L)$ where $N$ is the number of strings and $L$ is the average length of strings (due to string concatenation/comparison).
- **Space**: $O(N \cdot L)$ to store the stack.

### The 'Aha' Moment
The requirement to minimize the concatenated result suggests a custom sorting/comparison rule ($A+B < B+A$) combined with a stack to handle the "merging" dependency.

### Summary
Use a monotonic stack with a concatenation comparison ($S_{top} + S_i < S_i + S_{top}$) to greedily move smaller lexicographical values to the front.

---