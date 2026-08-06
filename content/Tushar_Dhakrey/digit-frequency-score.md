---
title: "Digit Frequency Score"
slug: digit-frequency-score
date: "2026-07-22"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The code section in your request is currently empty.

---

# Question Revision
### Digit Frequency Score

**Pattern:** Hashing / Frequency Map

**Brute Force:** 
For each number in the array, iterate through every other number in the array to count occurrences of its digits.
- **Complexity:** $O(N^2 \cdot K)$ where $N$ is the number of elements and $K$ is the average number of digits.

**Optimal Approach:**
1. **Pre-calculate:** Iterate through all numbers once to build a global frequency array of size 10, storing the total occurrences of each digit ($0-9$).
2. **Score Calculation:** Iterate through the numbers again; for each digit in the current number, add its global frequency from the map to the total score.
- **Time Complexity:** $O(N \cdot K)$
- **Space Complexity:** $O(1)$ (The frequency map is constant size 10).

**The 'Aha' Moment:** 
Realizing that the frequency of a digit is global across the entire dataset allows me to decouple the counting phase from the scoring phase.

**Summary:** 
Use a global frequency map to pre-count all digits, then map each number's digits to these counts to calculate the score in linear time.

---