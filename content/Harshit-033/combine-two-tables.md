---
title: "Combine Two Tables"
slug: combine-two-tables
date: "2026-06-05"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation to receive a review.

---

# Question Revision
### Pattern: SQL Join (Outer Join)

**Brute Force:**
Using an `INNER JOIN` to link `Person` and `Address` on `personId`. This is incorrect because it excludes anyone without an associated address.

**Optimal Approach:**
Perform a `LEFT JOIN` starting from the `Person` table. This ensures all records from the "left" table are retained, filling in `NULL` values for the "right" table where no match exists.

- **Time Complexity:** $O(n + m)$ where $n$ and $m$ are the number of rows in the tables (assuming indexed join keys).
- **Space Complexity:** $O(1)$ beyond the output storage.

**The 'Aha' Moment:**
The requirement to show `null` if the address is missing is the direct signal to use a `LEFT JOIN` instead of an `INNER JOIN`.

**Summary:**
Use `LEFT JOIN` when you must preserve all records from the primary table regardless of whether matching data exists in the joined table.

---