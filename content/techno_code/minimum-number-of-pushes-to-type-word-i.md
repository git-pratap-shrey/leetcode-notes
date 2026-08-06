---
title: "Minimum Number of Pushes to Type Word I"
slug: minimum-number-of-pushes-to-type-word-i
date: "2026-07-30"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. You have specified the problem name, but the code block is empty.

---

# Question Revision
### Minimum Number of Pushes to Type Word I

**Pattern:** Greedy / Frequency Map

**Brute Force:** 
Try every possible permutation of mapping the 26 alphabet characters to the 26 available slots across 7 keys. This results in a combinatorial explosion ($26!$), making it computationally infeasible.

**Optimal Approach:**
1. Count the frequency of each character in the word using a hash map or array.
2. Sort the frequencies in descending order.
3. Assign the first 4 most frequent characters to position 1 (cost 1), the next 4 to position 2 (cost 2), and so on.
4. Total cost = $\sum (\text{frequency}_i \times \lceil \frac{i+1}{4} \rceil)$.

*   **Time Complexity:** $O(n)$ to count characters, where $n$ is the word length. Sorting 26 frequencies is $O(1)$ constant time.
*   **Space Complexity:** $O(1)$ as the frequency array size is fixed at 26.

**The 'Aha' Moment:** 
To minimize a weighted sum, always pair the largest weights (highest frequencies) with the smallest costs (lowest key positions).

**Summary:** 
Sort character frequencies descending and greedily fill keyboard slots in batches of four to minimize total pushes.

---