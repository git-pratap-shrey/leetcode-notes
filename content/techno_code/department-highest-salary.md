---
title: "Department Highest Salary"
slug: department-highest-salary
date: "2026-08-18"
---

# My Solution
~~~mysql
# Write your MySQL query statement below
SELECT d.name AS Department,
        e.name AS Employee ,
        e.salary AS Salary
        
FROM Employee e
JOIN Department d ON e.departmentId=d.id
WHERE  e.salary= (
         SELECT MAX(salary)
         FROM Employee
         WHERE departmentId=e.departmentId
         );
         
~~~

# Submission Review
## Approach
- **Technique:** Correlated Subquery.
- **Optimality:** Suboptimal for large datasets. While logically correct, it executes the inner `MAX(salary)` query for every row processed in the outer query.

## Complexity
- **Time Complexity:** $O(N^2)$ in the worst case without indexing; $O(N \log N)$ if `departmentId` and `salary` are indexed.
- **Space Complexity:** $O(M)$, where $M$ is the number of employees sharing the top salary in their respective departments.

## Efficiency Feedback
- **Bottleneck:** The correlated subquery is the primary performance hit. In MySQL 8.0+, this is more efficiently handled using window functions.
- **Optimization:** Use `RANK()` or `DENSE_RANK()` over a partition of `departmentId` to identify the highest earners in a single scan.
  ```sql
  SELECT Department, Employee, Salary
  FROM (
      SELECT d.name AS Department, e.name AS Employee, e.salary AS Salary,
             RANK() OVER (PARTITION BY e.departmentId ORDER BY e.salary DESC) as rnk
      FROM Employee e
      JOIN Department d ON e.departmentId = d.id
  ) t
  WHERE rnk = 1;
  ```

## Code Quality
- **Readability:** Good. The intent is clear and the SQL is standard.
- **Structure:** Good. The use of aliases (`e`, `d`) makes the query concise.
- **Naming:** Good. Aliases match the required output columns.
- **Improvements:**
    - Consider using explicit `INNER JOIN` instead of just `JOIN` for clarity.
    - Indentation is slightly inconsistent but does not affect logic.

---

# Question Revision
### Department Highest Salary

**Pattern:** SQL Filtering with Aggregation (Subquery/Join)

**Brute Force:** Iterate through every employee and perform a separate scan of the `Employee` table to check if anyone in the same department has a higher salary.

**Optimal Approach:** 
1. Use a subquery with `GROUP BY departmentId` to identify the `MAX(salary)` for each department.
2. Perform an `INNER JOIN` between the `Employee` table and this subquery on both `departmentId` and `salary` to retrieve only those who hit the maximum.
3. Join with the `Department` table to get the department name.

- **Time Complexity:** $O(E \log E)$ or $O(E)$ depending on the database engine's join implementation (where $E$ is the number of employees).
- **Space Complexity:** $O(D)$ to store the intermediate grouped max salaries (where $D$ is the number of departments).

**The 'Aha' Moment:** When you need to return non-aggregated columns (Employee Name) alongside an aggregated value (Max Salary), you cannot simply use `GROUP BY`; you must join the table back to a grouped result set.

**Summary:** Filter employees by joining the main table against a subquery of `MAX(salary)` grouped by `departmentId`.

---