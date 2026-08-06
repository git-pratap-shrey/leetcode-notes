---
title: "Count Commas in Range"
slug: count-commas-in-range
date: "2026-08-05"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. No code was included in your request.

---

# Question Revision
### Count Commas in Range

**Pattern:** Mathematical Counting / Digit-based Analysis

**Brute Force:** 
Iterate from $L$ to $R$, convert each integer to a formatted string, and count the comma characters.
*   **Time:** $O((R-L) \log_{10} R)$
*   **Space:** $O(\log_{10} R)$ for string conversion.

**Optimal Approach:** 
Instead of iterating through every number, group numbers by their digit length $d$. Any number with $d$ digits has exactly $\lfloor (d-1)/3 \rfloor$ commas. Calculate the intersection of the range $[L, R]$ with each power-of-10 bucket (e.g., $100 \dots 999$) and multiply the count of numbers in that bucket by the corresponding comma count.
*   **Time:** $O(\log_{10} R)$ (iterating through possible digit lengths).
*   **Space:** $O(1)$.

**The 'Aha' Moment:** 
The number of commas is a step function that depends solely on the total number of digits, not the value of the digits.

**Summary:** 
Sum the products of (count of numbers with $d$ digits) $\times$ (commas for length $d$) across all digit lengths in the range.

---