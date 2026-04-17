---
title: "Missing Number"
slug: missing-number
date: "2026-04-17"
---

# My Solution
~~~c
int missingNumber(int* nums, int numsSize) {
    int s = numsSize*(numsSize+1)/2;
    for(int i = 0; i < numsSize; i++){
        s -= nums[i];
    }
    return s;
}
~~~

# Submission Review
## Approach
- **Technique**: Mathematical Summation (Gauss's Formula). It calculates the expected sum of an arithmetic progression from $0$ to $n$ and subtracts the actual elements present in the array.
- **Optimality**: Optimal. It achieves the theoretical lower bound for both time and space.

## Complexity
- **Time Complexity**: $O(n)$ — a single pass through the input array.
- **Space Complexity**: $O(1)$ — uses a single scalar variable for the sum.

## Efficiency Feedback
- **Runtime/Memory**: Extremely efficient.
- **Potential Risk**: Integer Overflow. For large values of `numsSize`, the expression `numsSize * (numsSize + 1)` may exceed the maximum limit of a 32-bit signed `int` (approximately $2 \cdot 10^9$). If `numsSize` exceeds $\approx 46,340$, this will result in undefined behavior due to overflow. Using `long long` for the sum variable would mitigate this.

## Code Quality
- **Readability**: Good. The logic is concise and easy to follow.
- **Structure**: Good. The implementation is direct and lacks unnecessary overhead.
- **Naming**: Moderate. The variable `s` is too generic; a name like `expectedSum` or `diff` would be more descriptive.
- **Improvements**: 
    - Change `int s` to `long long s` to prevent overflow on larger inputs.
    - Use a more descriptive variable name than `s`.

---

# Question Revision
### Missing Number

**Pattern:** Mathematical / Bit Manipulation

**Brute Force:** Sort the array and iterate to find the first index `i` where `nums[i] != i`, or use a Hash Set to track seen numbers. $O(n \log n)$ or $O(n)$ time, $O(n)$ space.

**Optimal Approach (Summation):**
*   **Logic:** Calculate the expected sum of the sequence $[0, n]$ using the formula $\frac{n(n+1)}{2}$. Subtract the actual sum of the array elements from this expected sum to find the missing value.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**Alternative Optimal (XOR):**
*   **Logic:** XOR all integers from $0$ to $n$ and all elements in the array. Since $x \oplus x = 0$, all present numbers cancel out, leaving only the missing number.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The problem provides a fixed, contiguous range $[0, n]$, which implies that the total sum or XOR parity is predictable.

**Summary:** Find the discrepancy between the expected total (sum or XOR) of the range and the actual total of the array.

---