---
title: "Count Good Cyclic Rotations"
slug: count-good-cyclic-rotations
date: "2026-09-06"
---

# My Solution
~~~cpp
class Solution {
public:
    int countGoodRotations(vector<int>& nums) {
        long long right=0;
        long long left=0;
        int n=nums.size();
        for(int i=0;i<n/2;i++){
            left=left+nums[i];
        }
        for(int i=n/2;i<n;i++){
            right=right+nums[i];
        }

        int a=0;
        int b=n/2-1;
        int c=n/2;
        int d=n-1;
        int ans=0;
        if(left>right) ans++;
        for(int i=0;i<n-1;i++){
            d=a;
            b=c;
            left=left-nums[a]+nums[b];
            right=right-nums[c]+nums[d];
            if(left>right) ans++;
            if(a==n-1){
                a=0;
            }
            else{
                a++;
            }
            if(c==n-1){
                c=0;
            }
            else{
                c++;
            }
            
        }
        return ans;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Sliding Window / Two-Pointer Simulation.
- **Optimality**: Optimal. The solution processes the array in linear time and uses constant extra space, which is the theoretical minimum for this problem.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the size of the input vector. The code performs one initial pass to calculate sums and one loop of $n-1$ iterations.
- **Space Complexity**: $O(1)$. Only a few scalar variables are used regardless of the input size.

## Efficiency Feedback
- **Runtime**: The runtime is optimal.
- **Memory**: Memory usage is minimal.
- **Observation**: The use of `long long` for `left` and `right` sums is a correct choice to prevent integer overflow for large arrays.

## Code Quality
- **Readability**: **Poor**. 
    - Variable names (`a, b, c, d`) are non-descriptive and make it difficult to understand that they represent the boundaries of the two halves.
    - The logic for rotating pointers is unnecessarily verbose.
- **Structure**: **Moderate**. The flow is linear and logical, though the pointer update block is cluttered.
- **Naming**: **Poor**. `a, b, c, d` should be named based on their roles (e.g., `leftStart`, `rightStart`).

### Concrete Improvements
1. **Simplify Pointer Updates**: Replace the `if-else` blocks for incrementing `a` and `c` with the modulo operator:
   ```cpp
   a = (a + 1) % n;
   c = (c + 1) % n;
   ```
2. **Remove Redundant Variables**: Variables `b` and `d` are simply aliases for `c` and `a`. They can be removed entirely to simplify the expressions:
   ```cpp
   left = left - nums[a] + nums[c];
   right = right - nums[c] + nums[a];
   ```
3. **Refactor Variable Names**: Use names like `leftSum`, `rightSum`, `leftIdx`, and `rightIdx` to improve maintainability.

---

# Question Revision
### Count Good Cyclic Rotations

**Pattern:** Cyclic Shift Analysis

**Brute Force:** 
Generate all $n$ possible rotations and verify if each resulting array is sorted.
- **Time:** $O(n^2)$
- **Space:** $O(n)$ to store the rotated array.

**Optimal Approach:**
Treat the array as circular. A sorted array that has been cyclically shifted can have at most one point where the current element is greater than the next element ($arr[i] > arr[(i+1) \pmod n]$). 
1. Iterate through the array once.
2. Count every instance where $arr[i] > arr[(i+1) \pmod n]$.
3. If the count is $\le 1$, the array is a "good" rotation.
- **Time:** $O(n)$
- **Space:** $O(1)$

**The 'Aha' Moment:** 
A sorted array shifted cyclically retains its monotonic property everywhere except at exactly one "drop" point (the wrap-around).

**Summary:** 
Check if the circular array has $\le 1$ descent to determine if it is a rotation of a sorted sequence.

---