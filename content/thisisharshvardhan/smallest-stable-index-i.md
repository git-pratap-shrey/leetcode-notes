---
title: "Smallest Stable Index I"
slug: smallest-stable-index-i
date: "2026-04-19"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The `Code:` section of your message was left empty.

---

# Question Revision
### Revision Report: Smallest Stable Index I

**Pattern:** Prefix Sum / Running Total

**Brute Force:** 
Iterate through every index $i$, and for each $i$, perform two separate linear scans (one to the left and one to the right) to count elements satisfying the stability condition.
*   **Time Complexity:** $O(n^2)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:**
Calculate the total count/sum of the array first. Iterate through the array once, maintaining a `left_count` variable. For any index $i$, the `right_count` can be derived instantly using the formula: $\text{right\_count} = \text{total\_count} - \text{left\_count} - 1$. Return the first index where $\text{left\_count} == \text{right\_count}$.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
The total sum/count is constant, so the right side is simply the remainder of the total minus the left side and the current element.

**Summary:** 
Use a single pass with a running total to find the first index where the left and right properties balance.

---