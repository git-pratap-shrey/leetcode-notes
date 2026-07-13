---
title: "Longest Balanced Substring After One Swap"
slug: longest-balanced-substring-after-one-swap
date: "2026-06-14"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation to receive a review based on the specified criteria.

---

# Question Revision
### Revision Report: Longest Balanced Substring After One Swap

**Pattern:** Prefix Sums + Sliding Window (Two-Pass)

**Brute Force:** 
Iterate through all possible pairs $(i, j)$ to swap, and for each resulting string, find the longest balanced substring using a stack or counter. 
Complexity: $O(n^3)$

**Optimal Approach:**
1. **Balance Tracking:** Treat `(` as $+1$ and `)` as $-1$. A substring is balanced if its total sum is $0$ and all its prefix sums are $\ge 0$.
2. **Swap Logic:** A swap of `)` at index $i$ and `(` at index $j$ ($i < j$) increases the prefix sum of all elements in the range $[i, j-1]$ by $2$.
3. **Two-Pass Scan:** 
   - **Left-to-Right:** Track the balance. When the balance becomes negative, identify the first `)` that caused the dip. A swap can potentially fix a dip of $-1$ if there is a corresponding `(` later in the string.
   - **Right-to-Left:** Perform the same logic in reverse to handle cases where the imbalance occurs at the end of the substring.
4. **Window Validation:** Use a hash map to store the first occurrence of each prefix sum. If the current prefix sum has been seen before and the minimum value in between is $\ge (\text{start\_balance} - 1)$, a single swap can validate the window.

**Complexity:**
- **Time:** $O(n)$
- **Space:** $O(n)$

**The 'Aha' Moment:** 
A single swap of `)` and `(` effectively "lifts" the prefix sum curve of the intervening segment by $2$ units.

**Summary:** 
Find the longest window with a net balance of $0$ where the minimum prefix sum is no lower than $-1$, as a single swap can resolve a single-unit dip.

---