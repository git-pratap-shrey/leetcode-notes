---
title: "Min Stack"
slug: min-stack
date: "2026-06-06"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review, including the programming language used.

---

# Question Revision
### Min Stack

**Pattern:** Auxiliary Data Structure (Parallel Stack)

**Brute Force:** 
Iterate through the entire stack to find the minimum element whenever `getMin()` is called.
- Time: $O(n)$ for `getMin()`
- Space: $O(1)$ additional space

**Optimal Approach:** 
Maintain a second stack (the `minStack`) that stores the minimum value corresponding to every state of the primary stack. When pushing a value, push the minimum of the new value and the current top of the `minStack` onto the `minStack`. When popping, pop from both.
- Time: $O(1)$ for all operations (`push`, `pop`, `top`, `getMin`)
- Space: $O(n)$ to store the history of minimums

**The 'Aha' Moment:** 
The requirement for $O(1)$ `getMin` despite elements being popped means the minimum must be tracked relative to the stack's current height.

**Summary:** 
Use a companion stack to synchronize and store the minimum element encountered up to each depth of the primary stack.

---