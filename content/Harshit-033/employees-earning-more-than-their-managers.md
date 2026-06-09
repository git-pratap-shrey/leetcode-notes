---
title: "Employees Earning More Than Their Managers"
slug: employees-earning-more-than-their-managers
date: "2026-06-05"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the code snippet and the language used to proceed with the review.

---

# Question Revision
### Pattern: Self-Join

**Brute Force**
Iterate through every employee record and perform a secondary lookup in the same table to find the corresponding manager's salary for comparison.

**Optimal Approach**
Perform an `INNER JOIN` on the table with itself, linking the employee's `managerId` to the manager's `id`. Filter the joined rows where the employee's salary is greater than the manager's salary.

- **Time Complexity:** $O(n)$ (assuming indexes on `id`)
- **Space Complexity:** $O(1)$

**The 'Aha' Moment**
The problem defines a relationship (Employee $\rightarrow$ Manager) where both entities reside in the same table, signaling a Self-Join.

**Summary**
Use a self-join to treat a single table as two separate entities to compare related rows.

---