---
title: "Subsets II"
slug: subsets-ii
date: "2026-08-04"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the source code to receive a review based on the specified criteria.

---

# Question Revision
### Subsets II

**Pattern:** Backtracking (Combinatorial Search)

**Brute Force:** Generate all $2^n$ possible subsets using recursion, then store them in a Hash Set to filter out duplicates. 
- **Complexity:** $O(n \cdot 2^n)$ time and $O(n \cdot 2^n)$ space to store the set.

**Optimal Approach:** 
1. **Sort** the input array to bring duplicates together.
2. Use a recursive backtracking function to explore all combinations.
3. **Prune** the search tree: inside the loop, if the current element is the same as the previous element (`nums[i] == nums[i-1]`) and we are not at the start of the current recursive level (`i > start`), skip it.
- **Time Complexity:** $O(n \cdot 2^n)$ — there are $2^n$ subsets, and each takes $O(n)$ to copy into the result list.
- **Space Complexity:** $O(n)$ — to maintain the recursion stack and the current path.

**The 'Aha' Moment:** The requirement to avoid duplicate subsets when the input contains duplicates is a signal to **sort first** and then **skip adjacent identical elements** during the same recursive level.

**Summary:** Sort the array and skip identical elements at the same tree depth to prevent generating redundant combinations.

---