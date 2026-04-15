---
title: "Majority Element"
slug: majority-element
date: "2026-04-11"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### Majority Element

**Pattern:** Boyer-Moore Voting Algorithm

**Brute Force:** Use a hash map to count frequencies of all elements and return the one with a count $> n/2$. 
- Time: $O(n)$
- Space: $O(n)$

**Optimal Approach:** Maintain a `candidate` and a `count`. Iterate through the array: if `count` is 0, assign the current element as the `candidate`. Increment `count` if the current element matches the `candidate`, otherwise decrement it. Because the majority element appears more than $n/2$ times, it will always remain as the candidate at the end.
- Time: $O(n)$
- Space: $O(1)$

**The 'Aha' Moment:** The guarantee that one element occupies more than half the array means it can "outvote" all other elements combined.

**Summary:** Use Boyer-Moore to cancel out opposing elements in linear time and constant space.

---