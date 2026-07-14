---
title: "Kth Smallest Number in Multiplication Table"
slug: kth-smallest-number-in-multiplication-table
date: "2026-06-09"
---

# My Solution
~~~cpp
class Solution {
public:
    int fun(int m , int n , int guess){
        int row = m-1 , column =0;
        int count =0;
        while(row>=0 && column<n){
            if((row+1)*(column+1)<=guess){
                count = count+row+1;
                column ++;
            }
            else{
                row --;
            }
        }
        return count;
    }
    
    int findKthNumber(int m, int n, int k) {
        int low = 1;
        int high = m * n;
        int res = 0;
        while(low<=high){
            int guess = (low+high)/2;
            int ans = fun(m , n , guess);
            if(ans < k){
                low = guess +1;
            }
            else{
                res = guess;
                high = guess -1;
            }
        }
        return res;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Binary Search on the Answer combined with a Two-Pointer counting method.
- **Optimality**: Optimal. Binary searching the value range is the standard efficient approach for "Kth smallest" problems in implicit matrices.

## Complexity
- **Time Complexity**: $O((m + n) \log(m \cdot n))$. The binary search runs for $\log(m \cdot n)$ iterations, and each call to `fun` takes $O(m + n)$ time.
- **Space Complexity**: $O(1)$. No additional data structures are used.

## Efficiency Feedback
- **Counting Logic**: The two-pointer approach in `fun` is efficient, but it can be simplified to $O(\min(m, n))$ by iterating through one dimension and calculating the count for each row using `min(n, guess / i)`.
- **Integer Overflow Risk**: 
    - `int high = m * n;` will overflow if $m \times n > 2^{31}-1$.
    - `int guess = (low + high) / 2;` can overflow if the sum exceeds the `int` limit.
    - `int count` may overflow if $m \times n$ exceeds the `int` limit.
    - *Note: If constraints are within $30,000 \times 30,000$, it barely fits, but for larger constraints, `long long` is required.*

## Code Quality
- **Readability**: Moderate. The logic is clear, but the naming is generic.
- **Structure**: Good. Logic is properly separated into a helper function and a driver function.
- **Naming**: Poor. 
    - `fun` is non-descriptive; `countLessEqual` would be better.
    - `ans` inside `findKthNumber` actually stores a count, not the final answer.
- **Concrete Improvements**:
    - Use `long long` for `low`, `high`, `guess`, and `count` to prevent overflow.
    - Use `int guess = low + (high - low) / 2;` to prevent addition overflow.
    - Replace the two-pointer `while` loop with a simple `for` loop: 
      `for(int i = 1; i <= m; ++i) count += min(n, guess / i);`
      This reduces complexity from $O(m+n)$ to $O(m)$.

---

# Question Revision
### Kth Smallest Number in Multiplication Table

**Pattern:** Binary Search on Answer (Value Range)

**Brute Force:** 
Generate all $m \times n$ products, store them in a list, sort the list, and return the element at index $k-1$.
- **Time:** $O(mn \log(mn))$
- **Space:** $O(mn)$

**Optimal Approach:**
Perform binary search on the range of possible values $[1, m \times n]$. For a candidate value `mid`, calculate how many numbers in the table are $\le mid$ by summing $\min(n, \lfloor mid/i \rfloor)$ for each row $i$ from $1$ to $m$. If the count is $\ge k$, `mid` could be the answer; otherwise, search higher.
- **Time:** $O(m \log(m \cdot n))$
- **Space:** $O(1)$

**The 'Aha' Moment:** 
When the search space is too large to materialize but the "count of elements $\le X$" function is monotonic and efficient to compute, binary search on the value range is the solution.

**Summary:** Use binary search on the value range and a row-by-row counting formula to find the $k$-th element in a virtual sorted grid.

---