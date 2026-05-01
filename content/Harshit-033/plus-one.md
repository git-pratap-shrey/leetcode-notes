---
title: "Plus One"
slug: plus-one
date: "2026-04-28"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        int s=digits.size()-1;
        
        while(s!=0 && digits[s]==9){
            digits[s]=0;
            s--;
        }
        if(s==0 && digits[s]==9){
            digits[s]=0;
            digits.insert(digits.begin(), 1);
        }
        else{
            digits[s]+=1;
        }
        
        return digits;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Iterative simulation of addition with carry.
- **Optimality**: Optimal. The problem requires visiting digits from least to most significant, resulting in a linear time complexity.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of digits. In the worst case (all digits are 9), the code traverses the vector once and performs a `vector::insert` at the beginning, which is also $O(N)$.
- **Space Complexity**: $O(1)$ auxiliary space if we ignore the output storage, as the modification is done in-place.

## Efficiency Feedback
- **Vector Insertion**: `digits.insert(digits.begin(), 1)` is $O(N)$ because it shifts all existing elements. While this doesn't change the overall asymptotic complexity, it is the most expensive operation in the code.
- **Redundancy**: The `if` condition `(s==0 && digits[s]==9)` repeats logic that could be integrated into the loop or handled more cleanly by initializing the loop to run until `s < 0`.

## Code Quality
- **Readability**: Moderate. The logic for handling the carry at the 0th index is split between the `while` loop and an `if` block, making the flow disjointed.
- **Structure**: Moderate. Using `s != 0` as a boundary condition forces the separate handling of the first element.
- **Naming**: Poor. The variable `s` is non-descriptive; `index` or `i` would be more conventional.
- **Concrete Improvements**:
    - Change the loop to `while (s >= 0 && digits[s] == 9)` to handle all digits uniformly.
    - Instead of `insert(begin, 1)`, if all digits are zeroed, one can simply `push_back(1)` and then `reverse` the vector, or create a new vector of size $N+1$ with the first element as 1.

---

# Question Revision
### Plus One

**Pattern:** Simulation / Mathematical Carry

**Brute Force:** Convert the array to a large integer, add one, and convert it back to an array. (Risk: Integer overflow for large input arrays).

**Optimal Approach:** 
Iterate from the end of the array toward the beginning. If a digit is `9`, set it to `0` and continue to the next digit. If a digit is less than `9`, increment it by one and return the array immediately. If the loop completes, it means all digits were `9`; create a new array of size $n+1$ with the first element as `1` and the rest as `0`.

*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(n)$ (worst case when a new array is required for a carry-out)

**The 'Aha' Moment:** The array size only increases if a carry cascades through every single digit, meaning the result will always be `1` followed by $n$ zeros.

**Summary:** Iterate backwards to handle carries and only prepend a `1` if the carry persists beyond the most significant digit.

---