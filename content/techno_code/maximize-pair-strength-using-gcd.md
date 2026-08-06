---
title: "Maximize Pair Strength Using GCD"
slug: maximize-pair-strength-using-gcd
date: "2026-08-02"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The "Code" section in your request was empty. Once provided, I will analyze it according to the required criteria.

---

# Question Revision
### Revision Report: Maximize Pair Strength Using GCD

**Pattern**: Divisor Iteration / Frequency Mapping

**Brute Force**: Iterate through all possible pairs $(i, j)$, calculate $\text{gcd}(nums[i], nums[j]) \times (nums[i] + nums[j])$, and track the maximum. 
- **Complexity**: $O(n^2 \log(\min(a, b)))$

**Optimal Approach**: 
1. Since the GCD of any pair must be a divisor of both numbers, iterate through every number in the array and find all its divisors in $O(\sqrt{V})$ time.
2. Use a hash map to store the two largest numbers encountered for each divisor.
3. For every divisor $g$ that appears at least twice, calculate the strength using the two largest associated numbers: $g \times (max_1 + max_2)$.
- **Time Complexity**: $O(n \sqrt{V})$, where $V$ is the maximum value in $nums$.
- **Space Complexity**: $O(n \cdot d)$, where $d$ is the average number of divisors.

**The 'Aha' Moment**: The GCD is always a divisor of the numbers involved, so instead of searching for pairs, we can group all numbers by their divisors and only consider the largest two for each potential GCD.

**Summary**: Group numbers by their divisors and maximize $g \times (max_1 + max_2)$ across all shared divisors.

---