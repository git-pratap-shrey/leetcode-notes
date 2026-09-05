---
title: "Employees Earning More Than Their Managers"
slug: employees-earning-more-than-their-managers
date: "2026-08-18"
---

# My Solution
~~~mysql
# Write your MySQL query statement below
SELECT e1.name AS Employee 
FROM Employee e1
JOIN Employee e2 ON e1.managerId=e2.id
WHERE e1.salary>e2.salary;
~~~

# Submission Review
## Approach
- **Technique**: Self-join. The table is joined with itself to associate each employee (`e1`) with their respective manager (`e2`) via the `managerId` and `id` columns.
- **Optimality**: Optimal. A join is the most direct way to compare values across two rows in the same table based on a foreign key relationship.

## Complexity
- **Time Complexity**: $O(N)$ if `id` is indexed (Primary Key), as the join becomes a series of constant-time lookups. Without an index, it would be $O(N^2)$.
- **Space Complexity**: $O(1)$ auxiliary space beyond the memory required to store the result set.

## Efficiency Feedback
- The runtime is minimal because it leverages the relational nature of SQL.
- No further optimizations are needed for this specific logic.

## Code Quality
- **Readability**: Good. The query is concise and standard.
- **Structure**: Good. Follows standard SQL syntax.
- **Naming**: Moderate. While `e1` and `e2` are common in competitive programming, using aliases like `emp` and `mgr` would improve clarity for maintainability.
- **Improvement**: Change aliases for better intent:
  ```sql
  SELECT emp.name AS Employee 
  FROM Employee emp
  JOIN Employee mgr ON emp.managerId = mgr.id
  WHERE emp.salary > mgr.salary;
  ```

---

# Question Revision
### Revision Report: Employees Earning More Than Their Managers

**Pattern:** Self-Join

**Brute Force:**
Iterate through every employee, then for each one, perform a separate scan of the table to find the manager's salary and compare the two.

**Optimal Approach:**
Join the `Employee` table to itself using aliases (e.g., `emp` and `mgr`). Map `emp.managerId` to `mgr.id` to align each employee with their respective manager in a single row, then filter where `emp.salary > mgr.salary`.

- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
When a table contains a column (`managerId`) that references its own primary key (`id`), it is a direct signal to use a Self-Join.

**Summary:**
Use table aliasing to treat a single table as two distinct entities to compare related rows.

---