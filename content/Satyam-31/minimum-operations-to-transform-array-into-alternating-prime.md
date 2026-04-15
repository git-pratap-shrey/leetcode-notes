---
title: "Minimum Operations to Transform Array into Alternating Prime"
slug: minimum-operations-to-transform-array-into-alternating-prime
date: "2026-04-15"
---

# My Solution
~~~cpp
class Solution {
public:
    bool isPrime(int n)
    {
        if(n<=1) return false;
        for(int i=2;i*i<=n;i++)
        {
            if(n%i==0) return false;
        }
        return true;
    }
    int minOperations(vector<int>& nums) 
    {
        int ans=0;
        for(int i=0;i<nums.size();i++)
        {
            if(i%2==0)
            {
                while(!isPrime(nums[i]))
                {
                    ans++;
                    nums[i]++;
                }
            }
            else
            {
                while(isPrime(nums[i]))
                {
                    ans++;
                    nums[i]++;
                }
            }
        }
        return ans;
    }

};
~~~

# Submission Review
## Approach
- **Technique**: Greedy. The code iterates through the array and increments each element one by one until the required condition (prime for even indices, composite for odd indices) is met.
- **Optimality**: Optimal, assuming the only permitted operation is incrementing the value by 1. It finds the nearest valid integer $\ge$ the current value.

## Complexity
- **Time Complexity**: $O(N \cdot G \cdot \sqrt{V})$, where $N$ is the array size, $G$ is the maximum gap between consecutive primes, and $V$ is the maximum value in the array.
- **Space Complexity**: $O(1)$ additional space.

## Efficiency Feedback
- **Runtime**: Generally efficient because prime gaps are small relative to $V$.
- **Potential Bottleneck**: The `isPrime` function is called repeatedly inside the `while` loop. While $G$ is small, checking primality via trial division $\mathcal{O}(\sqrt{V})$ for every increment is slightly redundant. 
- **Optimization**: For the non-prime case (`i % 2 != 0`), the loop typically terminates in 1 iteration since composite numbers are ubiquitous.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The helper function `isPrime` is appropriately separated.
- **Naming**: Moderate. `ans` is generic; `totalOperations` would be more descriptive.
- **Concrete Improvements**:
    - **Type Safety**: `i` is declared as `int`, but `nums.size()` returns `size_t`. This may cause compiler warnings regarding signed/unsigned comparisons.
    - **`isPrime` Optimization**: The `isPrime` function could be optimized by handling 2 as a special case and incrementing the loop by 2 (`i += 2`) to skip even numbers.
    - **Const Correctness**: The `nums` vector is passed by reference and modified. If the original array must be preserved, a copy should be used.

---

# Question Revision
### Revision Report: Minimum Operations to Transform Array into Alternating Prime

**Pattern:** Frequency Map / Greedy

**Brute Force:**
Iterate through all possible pairs of primes $(p_1, p_2)$ within the given value range. For each pair, calculate the cost to transform the array into $p_1, p_2, p_1, p_2...$ and track the minimum operations.

**Optimal Approach:**
1. **Split & Count:** Divide the array into two groups: even indices and odd indices. Use two hash maps to store the frequency of existing primes in each group.
2. **Identify Candidates:** Find the top two most frequent primes for both the even and odd groups.
3. **Resolve Collisions:** 
   - If the most frequent prime in the even group $\neq$ the most frequent in the odd group, use both.
   - If they are the same, compare the sum of frequencies for (Top1 Even + Top2 Odd) vs (Top2 Even + Top1 Odd) and pick the maximum.
4. **Calculate:** $\text{Operations} = \text{Total Elements} - (\text{Frequency of chosen } p_1 + \text{Frequency of chosen } p_2)$.

**Complexity:**
- **Time:** $O(n)$ to traverse the array and populate frequency maps.
- **Space:** $O(k)$ where $k$ is the number of distinct primes in the input.

**The 'Aha' Moment:**
The "alternating" requirement decouples the array into two independent sets (even and odd indices), reducing the problem to finding the most frequent elements in each set.

**Summary:**
Maximize the total occurrences of two distinct primes by picking the top two candidates for even and odd positions and resolving any collisions.

---