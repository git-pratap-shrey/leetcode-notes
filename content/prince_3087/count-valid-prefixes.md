---
title: "Count Valid Prefixes"
slug: count-valid-prefixes
date: "2026-08-01"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The **Code** section in your message was empty.

---

# Question Revision
### Revision Report: Count Valid Prefixes

**Pattern:** Prefix Sum / Hash Map (State Tracking)

**Brute Force:** 
Iterate through every possible prefix index $i$ from $0$ to $n-1$, and for each, traverse the prefix to verify if the validity condition is met.
- **Complexity:** $O(n^2)$ Time, $O(1)$ Space.

**Optimal Approach:** 
Maintain a running cumulative state (e.g., a sum, parity bitmask, or frequency counter) as you iterate through the string/array once. Store the frequency of each encountered state in a Hash Map. A prefix is valid if its current state matches a target value or has been seen before (depending on the specific validity condition).
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$

**The 'Aha' Moment:** 
Whenever a problem asks to count segments (prefixes/subarrays) satisfying a cumulative property, the solution is usually to transform the range query into a point lookup using a Prefix Map.

**Summary:** 
Use a hash map to store the frequency of cumulative states to convert $O(n^2)$ range checks into $O(1)$ state lookups.

---