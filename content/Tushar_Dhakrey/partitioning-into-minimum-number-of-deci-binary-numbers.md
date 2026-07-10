---
title: "Partitioning Into Minimum Number Of Deci-Binary Numbers"
slug: partitioning-into-minimum-number-of-deci-binary-numbers
date: "2026-07-10"
---

# My Solution
~~~
class Solution {
    public int minPartitions(String n) {
        int max = 0;
        for(char ch : n.toCharArray()){
            max = Math.max(max, ch-'0');
        }
        return max;
    }
}
~~~  # Submission Review 

## Approach
- **Technique:** Greedy/Observation. The minimum number of deci-binary numbers required is equal to the maximum digit present in the string, as each deci-binary number can contribute at most 1 to any specific decimal position.
- **Optimality:** Optimal. This is the theoretical lower bound for the problem.

## Complexity
- **Time Complexity:** $O(L)$, where $L$ is the length of the string $n$. The string is traversed once.
- **Space Complexity:** $O(L)$. The use of `n.toCharArray()` allocates a new character array of size $L$.

## Efficiency Feedback
- **Memory Bottleneck:** The call to `toCharArray()` creates a copy of the input string. For extremely large inputs, this increases heap memory usage unnecessarily.
- **Optimization:** Using `n.charAt(i)` in a standard `for` loop would reduce space complexity to $O(1)$.

## Code Quality
- **Readability:** Good. The logic is straightforward and concise.
- **Structure:** Good. Simple linear flow.
- **Naming:** Moderate. `max` is acceptable, but `maxDigit` would be more descriptive.
- **Improvements:** 
    - Replace `n.toCharArray()` with `n.charAt(i)` to optimize space.
    - Consider adding a check for an empty string if the problem constraints allow it, though typically not required in competitive programming.

---

# Question Revision #

## Revision Report: Partitioning Into Minimum Number Of Deci-Binary Numbers

**Pattern:** Greedy / Observation

**Brute Force:** 
Iteratively subtract the largest possible deci-binary number from the total until it reaches zero, counting the iterations.

**Optimal Approach:**
The minimum number of deci-binary numbers required is equal to the maximum digit present in the input string. Since each deci-binary number can contribute at most a `1` to any specific decimal place, the digit with the highest value determines the lower bound for the total count.
- **Time Complexity:** $O(n)$ where $n$ is the length of the string.
- **Space Complexity:** $O(1)$.

**The 'Aha' Moment:** 
Realizing that a digit like '9' cannot be formed by fewer than nine $0/1$ digits regardless of what happens in other decimal positions.

**Summary:** 
The answer is simply the maximum digit in the string.

---
