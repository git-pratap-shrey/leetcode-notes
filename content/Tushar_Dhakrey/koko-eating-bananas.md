---
title: "Koko Eating Bananas"
slug: koko-eating-bananas
date: "2026-06-01"
---

# My Solution
~~~

~~~

# Submission Review
## Approach
- **Technique**: Binary Search on the answer. 
- **Optimality**: Optimal. Since the time taken to eat bananas is monotonically decreasing as eating speed $k$ increases, binary search allows finding the minimum viable $k$ in logarithmic time relative to the maximum pile size.

## Complexity
- **Time Complexity**: $O(n \cdot \log(\max(\text{piles})))$, where $n$ is the number of piles. Each step of the binary search iterates through the entire piles array.
- **Space Complexity**: $O(1)$. Only a few integer variables are used regardless of input size.

## Efficiency Feedback
- **Ceiling Calculation**: The use of `(pile + mid - 1) // mid` is an efficient integer-only implementation of `ceil(pile / mid)`, avoiding floating-point overhead and precision errors.
- **Search Space**: The search range $[1, \max(\text{piles})]$ is the tightest possible range for the answer.

## Code Quality
- **Readability**: Good. The logic is straightforward and follows standard binary search patterns.
- **Structure**: Good. The solution is concise and focused.
- **Naming**: Good. Variables like `left`, `right`, and `hours_spent` clearly describe their purpose.
- **Improvements**: No meaningful improvements needed; the implementation is clean and idiomatic.

---

# Question Revision
### Koko Eating Bananas

**Pattern:** Binary Search (on Answer Space)

**Brute Force:** Linear search for the eating speed $k$ starting from 1 up to the maximum pile size, checking each $k$ until the total hours spent is $\le h$.

**Optimal Approach:** Binary search for the minimum $k$ in the range $[1, \max(\text{piles})]$. For each candidate speed $k$, calculate the total hours required: $\sum \lceil \text{pile} / k \rceil$. If the total hours $\le h$, the speed is feasible; try a smaller $k$ to find the minimum. Otherwise, increase $k$.
- **Time Complexity:** $O(n \log m)$, where $n$ is the number of piles and $m$ is the maximum number of bananas in a single pile.
- **Space Complexity:** $O(1)$.

**The 'Aha' Moment:** The feasibility of finishing within $h$ hours is monotonic—if Koko can finish at speed $k$, she can also finish at any speed $> k$.

**Summary:** Use binary search to find the minimum feasible eating speed within the range of 1 to the largest pile.

---