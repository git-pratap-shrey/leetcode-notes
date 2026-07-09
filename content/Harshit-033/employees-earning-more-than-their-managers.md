--- title: "Employees Earning More Than Their Managers" slug: employees-earning-more-than-their-managers date: "2026-06-05" ---  # My Solution ~~~SELECT e.name AS Employee
FROM Employee e
JOIN Employee m
ON e.managerId = m.id
WHERE e.salary > m.salary; - mysql~~~  # Submission Review ## Approach
- **Technique**: Self-Join. The table is joined with itself to align each employee's record with their respective manager's record.
- **Optimality**: Optimal. This is the standard approach for querying hierarchical relationships within a single table.

## Complexity
- **Time Complexity**: $O(N)$ if `id` is indexed (Primary Key), as the join becomes a series of constant-time lookups. Without indexing, it would be $O(N^2)$.
- **Space Complexity**: $O(N)$ in the worst case to store the intermediate join result before filtering.

## Efficiency Feedback
- The use of an `INNER JOIN` is efficient here because it automatically filters out employees who do not have a manager (`managerId IS NULL`), avoiding the need for an explicit `IS NOT NULL` check.

## Code Quality
- **Readability**: Good. The query is concise and follows SQL standards.
- **Structure**: Good.
- **Naming**: Good. Using `e` and `m` as aliases clearly distinguishes between the Employee and Manager roles.
- **Improvements**: None needed for this specific logic.  ---  # Question Revision ### Revision Report: Employees Earning More Than Their Managers

**Pattern:** Self-Join

**Brute Force:** Use a correlated subquery for every row to fetch the manager's salary and compare it to the employee's salary.

**Optimal Approach:** Perform an `INNER JOIN` of the `Employee` table with itself, aliasing one instance as `emp` and the other as `mgr`, joining where `emp.managerId = mgr.id`. Filter results where `emp.salary > mgr.salary`.
- **Time Complexity:** $O(n)$ (assuming indexed IDs)
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** When a problem requires comparing a record to another record within the same table based on a hierarchical relationship (like manager/employee), use a self-join.

**Summary:** Treat a single table as two separate entities via aliases to compare rows based on a foreign-key relationship within the same dataset.  ---