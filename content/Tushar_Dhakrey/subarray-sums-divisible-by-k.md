---
title: "Subarray Sums Divisible by K"
slug: subarray-sums-divisible-by-k
date: "2026-10-01"
---

# My Solution
~~~java
class Solution {
    public int subarraysDivByK(int[] nums, int k) {
        HashMap<Integer,Integer> map = new HashMap<>();
        map.put(0,1);
        int prefixsum = 0;
        int count  =0;
        for(int num:nums){
            prefixsum += num;
            int need = ((prefixsum%k)+k)%k;
            if(map.containsKey(need)){
                count += map.get(need);
            }
            map.put(need,map.getOrDefault(need,0)+1);
        }
        return count;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Prefix Sums with a Hash Map (Frequency Map).
- **Optimality**: Optimal. It uses the property that if two prefix sums have the same remainder modulo $K$, the subarray between them is divisible by $K$.

## Complexity
- **Time Complexity**: $O(n)$ — Single pass through the array.
- **Space Complexity**: $O(\min(n, k))$ — The map stores at most $k$ unique remainders.

## Efficiency Feedback
- **Bottleneck**: Using `HashMap<Integer, Integer>` introduces boxing/unboxing overhead.
- **Optimization**: Since the number of possible remainders is bounded by $k$, an integer array `int[] map = new int[k]` would significantly reduce runtime and memory usage by avoiding object overhead.

## Code Quality
- **Readability**: Good. The logic is straightforward and follows standard patterns for this problem.
- **Structure**: Good. The flow is linear and clean.
- **Naming**: Moderate. `need` is slightly ambiguous; `remainder` would be more descriptive. `prefixsum` should ideally be `prefixSum` (camelCase).
- **Improvements**:
    - Replace `HashMap` with `int[]`.
    - Use camelCase for variable names to adhere to Java naming conventions.

---

# Question Revision
# Revision Report: Subarray Sums Divisible by K

### Pattern
**Prefix Sum + Hash Map (Remainder Tracking)**

### Brute Force
Iterate through every possible subarray $[i, j]$, calculate the sum, and check if `sum % k == 0`.
- **Time Complexity:** $O(n^2)$
- **Space Complexity:** $O(1)$

### Optimal Approach
Use a hash map to store the frequency of prefix sum remainders encountered so far. If we find the same remainder twice (at index $i$ and index $j$), it means the sum of the elements between $i$ and $j$ is a multiple of $k$.
- **Logic:** 
    1. Maintain a running `prefix_sum`.
    2. Calculate `rem = prefix_sum % k`. 
    3. **Crucial:** Handle negative remainders by normalizing them: `rem = (rem + k) % k`.
    4. If `rem` exists in the map, add the frequency to the total count.
    5. Update the map with the current `rem`.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(k)$ (to store at most $k$ distinct remainders)

### The 'Aha' Moment
The phrase **"subarray sum divisible by K"** suggests that we aren't looking for a specific target value, but a mathematical property (congruence), signaling the use of prefix sum remainders.

### Summary
When looking for subarray sums divisible by $K$, track the frequency of `prefix_sum % k` and count pairs with identical remainders.

---