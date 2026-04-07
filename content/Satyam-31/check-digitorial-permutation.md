---
title: "Check Digitorial Permutation"
slug: check-digitorial-permutation
date: "2026-02-24"

---
---

# My Solution
~~~cpp
class Solution {
public:
int f(int a){
    int t=1;
    for(int i=1;i<=a;i++){
        t*=i;
    }
    return t;
}
    bool isDigitorialPermutation(int n) {
        unordered_map<int,int>mp1;
         unordered_map<int,int>mp2;

        int m=n;
        int sum=0;
        while(m>0){
            int a=m%10;
            mp1[a]++;
            int r=f(a);
            sum+=r;
            m=m/10;
        }
        if(sum==n) return true;
       while(sum>0){
        mp2[sum%10]++;
        sum=sum/10;
       }
       if(mp1.size() != mp2.size())
            return false;

       
        for(auto it : mp1){
            if(mp2[it.first] != it.second)
                return false;
        }

       return true;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Digit extraction and factorial computation.
*   **Optimal:** **No**. 
    *   The problem asks to check if the sum of factorials of the digits of $n$ is a permutation of the digits of $n$. 
    *   The implementation is flawed because it treats `sum` and `n` as distinct objects to compare, but the problem logic is inconsistently handled (e.g., checking `sum == n` first, then checking for permutation).
    *   The factorial function `f(a)` uses an iterative loop for every digit, which is redundant for small fixed inputs (0-9).

## Complexity
*   **Time Complexity:** $O(D \cdot \max(digit))$, where $D$ is the number of digits in $n$. Since digits are 0-9, this is effectively $O(D)$.
*   **Space Complexity:** $O(1)$, as the `unordered_map` stores at most 10 unique digits.

## Efficiency Feedback
*   **Bottleneck:** The function `f(a)` recomputes factorials repeatedly. Since there are only 10 possible inputs (0-9), use a static lookup table (array) to provide $O(1)$ constant time access.
*   **Data Structures:** `unordered_map` is overkill for digit frequency counting. A fixed-size array `int count[10]` is faster and uses less memory.

## Code Quality
*   **Readability:** **Moderate**. Logic flow is fragmented by early returns and unclear variable naming.
*   **Structure:** **Poor**. The logic to check for a permutation is separated from the sum calculation, and the early check `if(sum==n) return true;` is likely incorrect if the problem specifically requires a digit permutation (a number is a permutation of itself, but the logic should be unified).
*   **Naming:** **Poor**. Variables like `m`, `t`, `mp1`, and `mp2` are non-descriptive. 
*   **Concrete Improvements:**
    1.  **Lookup Table:** Replace `f(int a)` with `const int factorials[] = {1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880};`.
    2.  **Frequency Array:** Use `int counts[10] = {0};` instead of `unordered_map`. Increment for digits in $n$, decrement for digits in $sum$. Finally, verify if all entries in `counts` are 0.
    3.  **Correctness:** Remove the `sum == n` check unless the problem explicitly defines equality as a form of permutation (which it usually does, but it makes the code logic redundant). Ensure the digit count logic accounts for leading zeros if `sum` is smaller than `n`.

---
---


# Question Revision
### Revision Report: Check Digitorial Permutation

**Pattern:** Frequency Counting (Hash Map / Array)

**Brute Force:** 
Generate all possible permutations of the input number and check if each is a digitorial (the product of a sequence of integers starting from 1). This is $O(n!)$ as the number of permutations grows factorially with the number of digits.

**Optimal Approach:**
1. Calculate the target digitorial product using a sliding window or iterative multiplication until the product matches the length of the input.
2. Convert both the input number and the current digitorial candidate into frequency maps (or sorted digit strings) to verify if they contain the exact same digits.
3. **Complexity:** $O(d)$, where $d$ is the number of digits, as digit counting and comparison are linear relative to the input size.

**The 'Aha' Moment:**
When the problem asks to verify if two numbers contain the same digits regardless of order, the "permutation" keyword is a signal to abandon positional comparison in favor of digit frequency equality.

**Summary:** 
Whenever a problem involves digit rearrangement, normalize the data using a sorted string or a character frequency map to reduce the search space from $O(n!)$ to $O(n)$.

---
