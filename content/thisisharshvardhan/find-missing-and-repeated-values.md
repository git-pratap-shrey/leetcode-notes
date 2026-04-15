---
title: "Find Missing and Repeated Values"
slug: find-missing-and-repeated-values
date: "2026-04-10"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<int> findMissingAndRepeatedValues(vector<vector<int>>& grid) {
        unordered_map<int,int> mp;
        int n = grid.size();
        int missing = 0, repeated = 0;

        for(int i = 0; i < n; i++){
            for(int j = 0; j < n; j++){
                mp[grid[i][j]]++;
            }
        }

        for(int i = 1; i <= n*n; i++){
            if(mp.find(i) == mp.end()){
                missing = i;
            }
            else if(mp[i] == 2){
                repeated = i;
            }
        }

        return {repeated, missing};
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Frequency counting using a hash map (`unordered_map`).
- **Optimality**: Suboptimal. While the time complexity is asymptotically optimal, the space complexity is higher than necessary. The problem can be solved in $O(1)$ extra space using mathematical formulas (sum and sum of squares) or $O(n^2)$ using a simple frequency array for better constant factors.

## Complexity
- **Time Complexity**: $O(n^2)$ — The code traverses the $n \times n$ grid once and then iterates through the range $1$ to $n^2$.
- **Space Complexity**: $O(n^2)$ — The `unordered_map` stores up to $n^2$ distinct elements.

## Efficiency Feedback
- **Overhead**: Using `unordered_map` introduces significant overhead due to hashing and dynamic memory allocation. Since the range of values is known and contiguous ($1$ to $n^2$), a `std::vector<int>` or a raw array would be significantly faster and more memory-efficient.
- **Search Cost**: `mp.find(i) == mp.end()` followed by `mp[i]` performs two hash lookups for the same key. A single lookup storing the result would be more efficient.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The separation between the counting phase and the identification phase is clear.
- **Naming**: Good. Variables `missing`, `repeated`, and `mp` are appropriate for this context.
- **Improvements**:
    - Replace `unordered_map<int, int>` with `vector<int> count(n * n + 1, 0)`.
    - Avoid double-lookup in the second loop; if using a map, use an iterator or check the value directly.

---

# Question Revision
### Find Missing and Repeated Values

**Pattern:** Math / Counting

**Brute Force:** 
Use a hash map or frequency array of size $n^2$ to count occurrences of every number in the grid. Iterate from $1$ to $n^2$; the number with count 2 is repeated, and the number with count 0 is missing.
- **Time:** $O(n^2)$
- **Space:** $O(n^2)$

**Optimal Approach:**
Use the properties of arithmetic series to solve for the two unknowns ($a$ = repeated, $b$ = missing).
1. Calculate the actual sum ($S_{act}$) and actual sum of squares ($Sq_{act}$) of all elements.
2. Calculate the expected sum ($S_{exp}$) and expected sum of squares ($Sq_{exp}$) for numbers $1$ to $n^2$.
3. Let $diffSum = S_{act} - S_{exp} = a - b$.
4. Let $diffSq = Sq_{act} - Sq_{exp} = a^2 - b^2$.
5. Since $a^2 - b^2 = (a - b)(a + b)$, we find $a + b = diffSq / diffSum$.
6. Solve the system of linear equations to find $a$ and $b$.
- **Time:** $O(n^2)$
- **Space:** $O(1)$

**The 'Aha' Moment:** 
The input contains a contiguous range of integers ($1$ to $n^2$), which allows using mathematical summation formulas to find missing/repeated values without extra space.

**Summary:** 
Solve for the repeated and missing values algebraically using the difference between actual and expected sums and sums of squares.

---