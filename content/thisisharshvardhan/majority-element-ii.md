---
title: "Majority Element II"
slug: majority-element-ii
date: "2026-04-15"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The `Code:` section in your message was empty.

---

# Question Revision
### Majority Element II

**Pattern:** Boyer-Moore Voting Algorithm (Extended)

**Brute Force:** Use a hash map to store the frequency of every element, then iterate through the map to collect keys with a count $> \lfloor n/3 \rfloor$.
- Time: $O(n)$
- Space: $O(n)$

**Optimal Approach:** 
Maintain two potential candidates and two corresponding counters. 
1. **Pass 1 (Voting):** Iterate through the array. If the element matches a candidate, increment its counter. If a counter is 0, assign the current element as the new candidate. If it matches neither and both counters are $> 0$, decrement both counters.
2. **Pass 2 (Verification):** Since the voting phase only finds *potential* candidates, iterate through the array again to count the actual occurrences of the two candidates to ensure they strictly exceed $n/3$.

- Time: $O(n)$
- Space: $O(1)$

**The 'Aha' Moment:** The requirement for $O(1)$ space combined with a "majority" threshold ($n/k$) is the signature for the Boyer-Moore Voting algorithm.

**Summary:** Use two counters to find two potential candidates, then verify their actual frequencies in a second pass.

---