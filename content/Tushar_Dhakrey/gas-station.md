---
title: "Gas Station"
slug: gas-station
date: "2026-10-22"
---

# My Solution
~~~java
class Solution {
    public int shortestSubarray(int[] nums, int k) {
        Deque<Integer> dq = new ArrayDeque<>();
        int n = nums.length;
        long[] prefix = new long[nums.length];
        int result = Integer.MAX_VALUE;
        int j=0;
        while(j<n){
            if(j==0){
                prefix[j]=nums[j];
            }
            else{
                prefix[j] = prefix[j-1]+nums[j];
            }
            if(prefix[j]>=k){
                result = Math.min(result,j+1);
            }
            while(!dq.isEmpty() && prefix[j]-prefix[dq.peekFirst()]>=k){
                result = Math.min(result,j-dq.peekFirst());
                dq.pollFirst();
            }
            while(!dq.isEmpty() && prefix[j]<=prefix[dq.peekLast()]){
                dq.pollLast();
            }
            dq.offerLast(j);
            j++;
        }
        return result==Integer.MAX_VALUE ? -1:result;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Monotonic Queue (Deque) using a Prefix Sum array.
- **Optimality**: Optimal. The approach ensures each index is pushed and popped from the deque at most once, maintaining a monotonically increasing prefix sum to find the shortest subarray.

## Complexity
- **Time Complexity**: $O(n)$ — Every element is processed at most twice (one push, one pop).
- **Space Complexity**: $O(n)$ — Required for the `prefix` array and the `Deque`.

## Efficiency Feedback
- **Runtime**: The logic is efficient. Using `long[]` for the prefix sum correctly prevents integer overflow.
- **Memory**: The `prefix` array could be replaced by a single `long` variable for the current sum if the deque stored the prefix values instead of indices, but the current $O(n)$ space is standard and acceptable.

## Code Quality
- **Readability**: Moderate. The logic is sound, but the `while(j < n)` loop is unconventional; a standard `for` loop would be cleaner.
- **Structure**: Moderate. The `if(j == 0)` check inside the loop is redundant; the prefix sum calculation can be simplified.
- **Naming**: Poor. `dq` is acceptable, but `j` is used as the primary iterator (usually `i`), and the method name `shortestSubarray` contradicts the problem title provided ("Gas Station"), although the code actually solves "Shortest Subarray with Sum at Least K".

**Concrete Improvements**:
1. Replace `while(j < n)` with `for (int i = 0; i < n; i++)`.
2. Initialize `prefix[0] = 0` and use a prefix array of size `n + 1` to eliminate the `if (prefix[j] >= k)` special case.
3. Rename `j` to `i` for standard iteration convention.

---

# Question Revision
# Revision Report: Gas Station

- **Pattern**: Greedy / Array Traversal
- **Brute Force**: Try every single gas station as a potential starting point. For each start, simulate the journey until you either complete the circuit or run out of gas.
    - **Complexity**: $O(n^2)$ Time | $O(1)$ Space.
- **Optimal Approach**: 
    - Track the `total_surplus` (sum of all gas minus all costs) and the `current_tank`.
    - Traverse the stations: add `gas[i] - cost[i]` to both trackers.
    - If `current_tank` drops below 0, it is impossible to have started at any station from the previous start point up to the current index. Reset `current_tank` to 0 and set the next station as the new potential starting point.
    - If `total_surplus` is non-negative at the end, the last recorded starting point is the valid answer.
    - **Complexity**: $O(n)$ Time | $O(1)$ Space.
- **The 'Aha' Moment**: If you cannot reach station $B$ from station $A$, then no station between $A$ and $B$ can reach $B$ either, allowing you to skip all intermediate stations as starting points.
- **Summary**: If total gas $\geq$ total cost, a solution exists; just reset your start point whenever your tank hits negative.

---