--- title: "Combine Two Tables" slug: combine-two-tables date: "2026-06-05" ---  # My Solution ~~~SELECT p.firstName,p.lastName,a.city,a.state
FROM Person p
LEFT JOIN Address a
ON p.personId = a.personId; - mysql~~~  # Submission Review ## Approach
- **Technique**: SQL `LEFT JOIN`.
- **Optimality**: Optimal. A `LEFT JOIN` is the correct choice here to ensure all records from the `Person` table are retained even if there is no corresponding entry in the `Address` table.

## Complexity
- **Time Complexity**: $O(N \log M)$ or $O(N + M)$, where $N$ is the number of rows in `Person` and $M$ is the number of rows in `Address`. The exact complexity depends on whether `personId` is indexed (typically a Primary Key), which allows for efficient lookups.
- **Space Complexity**: $O(1)$ auxiliary space, excluding the memory required to store the result set.

## Efficiency Feedback
- The query is highly efficient. Using table aliases (`p`, `a`) minimizes the amount of text parsed and improves clarity.
- Performance is dependent on the database engine's indexing on `personId`; assuming it is the primary key for both tables, this is the fastest possible implementation.

## Code Quality
- **Readability**: Good. The logic is clear and follows standard SQL conventions.
- **Structure**: Good. The selection, join, and condition are logically ordered.
- **Naming**: Good. Aliases `p` and `a` are intuitive for `Person` and `Address`.
- **Improvements**: No improvements needed; the code is concise and correct.  ---  # Question Revision ### Combine Two Tables

**Pattern:** SQL Joins

**Brute Force:** Use an `INNER JOIN` to combine tables based on `personId`. This fails because it excludes people who do not have an entry in the `Address` table.

**Optimal Approach:** Use a `LEFT JOIN` to ensure all records from the `Person` table are retained, filling missing `Address` fields with `NULL`.
- **Time Complexity:** $O(n + m)$ where $n$ and $m$ are the number of rows in the two tables.
- **Space Complexity:** $O(1)$ additional space beyond the output result set.

**The 'Aha' Moment:** The requirement "If the address is missing, show null" is a direct signal to use a `LEFT JOIN` instead of an `INNER JOIN`.

**Summary:** Use `LEFT JOIN` to preserve all records from the left table regardless of whether a matching record exists in the right table.  ---