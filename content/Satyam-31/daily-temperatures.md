--- title: "Daily Temperatures" slug: daily-temperatures date: "2026-06-18" ---  # My Solution ~~~ - ~~~  # Submission Review No code was provided for analysis. Please provide the implementation you would like me to review.  ---  # Question Revision ### Daily Temperatures

**Pattern:** Monotonic Stack

**Brute Force:** Use nested loops to scan every subsequent day for each element until a higher temperature is found.
- Time: $O(n^2)$
- Space: $O(1)$

**Optimal Approach:** Maintain a stack of indices representing temperatures in strictly decreasing order. As you iterate, if the current temperature is warmer than the temperature at the index on top of the stack, pop the index and calculate the difference between the current index and the popped index.
- Time: $O(n)$
- Space: $O(n)$

**The 'Aha' Moment:** The requirement to find the "next greater element" is the classic signature for a monotonic stack.

**Summary:** Use a monotonic decreasing stack to track indices of pending warmer days and resolve them as soon as a higher temperature is encountered.  ---