---
title: "Sum of GCD of Formed Pairs"
slug: sum-of-gcd-of-formed-pairs
date: "2026-07-17"
---

# My Solution
~~~cpp
class Solution {
public:
    int calc_gcd(int a, int b){
        if(b == 0){
            return a;
        }
        return calc_gcd(b, a % b);
    }
    long long gcdSum(vector<int>& nums) {
        int max_num = nums[0];
        int n = nums.size();

        vector<int> prefixGcd(n);
        prefixGcd[0] = nums[0];

        for(int i = 1; i <n; i++){
            max_num = max(max_num, nums[i]);
            prefixGcd[i] = calc_gcd(max_num, nums[i]);
        }

        sort(prefixGcd.begin(), prefixGcd.end());

        long long int sum = 0;
        for(int i = 0; i < n/2; i++){
            sum += calc_gcd(prefixGcd[n-1-i], prefixGcd[i]);
        }

        return sum;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Heuristic/Greedy. The code computes a modified GCD for each element based on the running maximum, sorts these values, and pairs the smallest with the largest.
- **Optimality**: **Suboptimal/Incorrect**. The logic `prefixGcd[i] = calc_gcd(max_num, nums[i])` does not follow any standard mathematical property for maximizing or calculating the sum of GCDs of pairs. Furthermore, pairing sorted elements from opposite ends is a strategy typically used for minimizing/maximizing sums of absolute differences, not GCDs.

## Complexity
- **Time Complexity**: $O(n \log n + n \log(\max(nums)))$
    - Building `prefixGcd`: $O(n \log(\max(nums)))$
    - Sorting: $O(n \log n)$
    - Final pairing loop: $O(n \log(\max(nums)))$
- **Space Complexity**: $O(n)$ to store the `prefixGcd` vector.

## Efficiency Feedback
- **Bottleneck**: The sorting step $O(n \log n)$ dominates the time complexity.
- **Redundancy**: The `calc_gcd` function is a manual implementation of the Euclidean algorithm; using `std::gcd` (available in `<numeric>` since C++17) would be more idiomatic and potentially better optimized by the compiler.

## Code Quality
- **Readability**: Moderate. The logic is easy to follow, but the intent is unclear.
- **Structure**: Good. The logic is split logically between pre-processing, sorting, and aggregation.
- **Naming**: Poor. 
    - `prefixGcd` is a misnomer; a true prefix GCD would be $GCD(prefixGcd[i-1], nums[i])$. This is actually a "running-max-GCD".
- **Concrete Improvements**:
    - Replace `calc_gcd` with `std::gcd`.
    - Use `std::max_element` or a more standard approach if the goal is to find the global maximum rather than a running maximum.
    - If the problem objective is to maximize the sum of GCDs, this approach is mathematically unsound and should be replaced with a frequency-based counting approach or a divisor-based greedy strategy.

---

# Question Revision
### Sum of GCD of Formed Pairs

**Pattern:** Frequency Array / Mathematical Inclusion-Exclusion

**Brute Force:**
Iterate through all possible pairs $(i, j)$ using nested loops and calculate $\text{gcd}(a_i, a_j)$ for each.
- **Time:** $O(n^2 \log(\max(A)))$
- **Space:** $O(1)$

**Optimal Approach:**
Instead of iterating over pairs, iterate over all possible GCD values $g$ from $\max(A)$ down to 1.
1. Use a frequency array to count occurrences of each number in the input.
2. For each $g$, count how many elements in the array are multiples of $g$ (by stepping through $g, 2g, 3g \dots$).
3. Calculate the total pairs that can be formed by these multiples: $\text{pairs} = \frac{count \times (count - 1)}{2}$.
4. Since this count includes pairs where the GCD is a multiple of $g$ (e.g., $2g, 3g$), subtract the pre-calculated pair counts for all multiples of $g$.
5. The remaining pairs have exactly $g$ as their GCD. Multiply this count by $g$ and add to the total.

- **Time:** $O(M \log M)$ where $M$ is the maximum value in the array (based on the Harmonic series $\sum_{i=1}^{M} \frac{M}{i} \approx M \ln M$).
- **Space:** $O(M)$ to store frequencies and GCD counts.

**The 'Aha' Moment:**
When the number of elements $n$ is too large for $O(n^2)$ but the values in the array are bounded, pivot from iterating over indices to iterating over possible divisors.

**Summary:**
Count multiples for each possible GCD in reverse order and use subtraction to isolate pairs with that exact GCD.

---