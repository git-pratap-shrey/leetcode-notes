---
title: "Count Digit Appearances"
slug: count-digit-appearances
date: "2026-04-11"

---
---

# My Solution
~~~cpp
class Solution {
public:
    int countDigitOccurrences(vector<int>& nums, int digit) {
        int c=0;
        for(int i=0;i<nums.size();i++){
            int n=nums[i];
            if(n==0){
                if(digit==0) c++;
                continue;
            }
            while(n>0){
                int a=n%10;
                if(a==digit) c++;
                n=n/10;
            }
        }
        return c;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Brute-force digit extraction via arithmetic modulo operations.
*   **Optimality:** Optimal for the given approach. It iterates through every digit of every number exactly once.

## Complexity
*   **Time Complexity:** $O(N \cdot D)$, where $N$ is the size of the input vector and $D$ is the average number of digits in the integers (logarithmic relative to the value of the numbers).
*   **Space Complexity:** $O(1)$, as it uses a fixed amount of extra space regardless of input size.

## Efficiency Feedback
*   **Performance:** This is the most efficient way to process the numbers without converting them to strings. String conversion (e.g., `std::to_string`) would involve unnecessary heap allocations and overhead.
*   **Edge Cases:** The logic correctly handles the input `0` when `digit` is `0`, which is often a point of failure in digit counting problems.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. Simple loop-based structure.
*   **Naming:** Moderate. `c`, `n`, and `a` are excessively brief. Descriptive names like `count`, `currentNumber`, and `lastDigit` would improve maintainability.
*   **Concrete Improvements:**
    *   **Input Handling:** The logic fails if `nums[i]` is negative. Consider using `abs()` or handling the sign if the constraints allow negative integers.
    *   **Const Correctness:** The function signature should use `const vector<int>& nums` since the input array is not being modified.
    *   **Looping:** Use a range-based `for` loop (`for (int n : nums)`) to make the code cleaner and less error-prone.

```cpp
// Suggested Refinement
int countDigitOccurrences(const vector<int>& nums, int digit) {
    int count = 0;
    for (int n : nums) {
        n = std::abs(n); // Handle negatives
        if (n == 0 && digit == 0) {
            count++;
            continue;
        }
        while (n > 0) {
            if (n % 10 == digit) count++;
            n /= 10;
        }
    }
    return count;
}
```

---
---


# Question Revision
### Revision Report: Digit Count (Digit DP)

**Pattern:** Digit Dynamic Programming / Combinatorics (Mathematical Counting)

**Brute Force:** Iterate from $1$ to $n$, convert each number to a string/array, and count the occurrences of the target digit.  
*   **Time:** $O(n \log_{10} n)$  
*   **Space:** $O(\log n)$ to store digits.

**Optimal Approach:** Position-based counting. Calculate the frequency of a digit at each decimal place (units, tens, hundreds) by considering the prefix, current digit, and suffix. For a digit $d$ at position $i$, the count depends on the number of combinations possible for the digits to the left and right based on the values in $n$.
*   **Time:** $O(\log_{10} n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:** When the constraints on $n$ are large ($10^9$ or higher), you cannot iterate through numbers, so you must count digit contributions based on place value rather than checking individual integers.

**Summary:** Whenever you need to count occurrences across a range up to $n$ where $n$ is massive, abandon the loop and count digit positions using combinatorics.

---
