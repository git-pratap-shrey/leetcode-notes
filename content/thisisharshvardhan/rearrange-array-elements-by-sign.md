---
title: "Rearrange Array Elements by Sign"
slug: rearrange-array-elements-by-sign
date: "2026-04-11"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you wish to have reviewed.

---

# Question Revision
### Rearrange Array Elements by Sign

**Pattern:** Two Pointers

**Brute Force:**
Separate positive and negative integers into two independent lists, then iterate through both lists simultaneously to merge them into a final array in alternating order.

**Optimal Approach:**
Initialize a result array of size $n$ and two pointers: `pos = 0` and `neg = 1`. Traverse the input array once; if an element is positive, place it at `pos` and increment `pos` by 2; if negative, place it at `neg` and increment `neg` by 2.

- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$

**The 'Aha' Moment:**
The requirement to preserve relative order while interleaving two groups suggests using a pre-allocated array with fixed-step pointers ($\text{index} \pm 2$).

**Summary:**
Use two pointers starting at indices 0 and 1 to distribute positive and negative numbers into a new array in a single pass.

---