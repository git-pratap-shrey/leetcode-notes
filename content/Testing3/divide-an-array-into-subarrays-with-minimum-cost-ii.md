---
title: "Divide an Array Into Subarrays With Minimum Cost II"
slug: divide-an-array-into-subarrays-with-minimum-cost-ii

---
---

# My Solution
~~~java
class Solution {
    static class SmartWindow {
        int K;
        TreeMap<Integer, Integer> low = new TreeMap<>();
        TreeMap<Integer, Integer> high = new TreeMap<>();
        long sumLow = 0;
        int szLow = 0, szHigh = 0;
        SmartWindow(int k){
            this.K = k;
        }
        int windowSize(){
            return szLow + szHigh;
        }
        private void addMap(TreeMap<Integer, Integer> mp, int x){
            mp.put(x, mp.getOrDefault(x, 0) + 1);
        }
        private boolean removeMap(TreeMap<Integer, Integer> mp, int x){
            Integer c = mp.get(x);
            if (c == null) return false;
            if (c == 1) mp.remove(x);
            else mp.put(x, c - 1);
            return true;
        }
        private int popLast(TreeMap<Integer, Integer> mp){
            int x = mp.lastKey();
            removeMap(mp, x);
            return x;
        }
        private int popFirst(TreeMap<Integer, Integer> mp){
            int x = mp.firstKey();
            removeMap(mp, x);
            return x;
        }
        void rebalance(){
            int need = Math.min(K, windowSize());
            while(szLow > need){
                int x = popLast(low);
                szLow --;
                sumLow -= x;
                addMap(high, x);
                szHigh ++;
            }
            while(szLow < need && szHigh > 0){
                int x = popFirst(high);
                szHigh --;
                addMap(low, x);
                szLow ++;
                sumLow += x;
            }
        }
        void add(int x){
            if(szLow == 0){
                addMap(low, x);
                szLow ++;
                sumLow += x;
            }
            else{
                int mxLow = low.lastKey();
                if(x <= mxLow){
                    addMap(low, x);
                    szLow ++;
                    sumLow += x;
                }
                else {
                    addMap(high, x);
                    szHigh ++;
                }
            }
            rebalance();
        }
        void remove(int x){
            if(removeMap(low, x)){
                szLow --;
                sumLow -= x;
            }
            else if(removeMap(high, x)){
                szHigh --;
            }
            rebalance();
        }
        long query(){
            return sumLow;
        }
    }

    public long minimumCost(int[] nums, int k, int dist) {
        int n = nums.length;
        k -= 1;
        SmartWindow window = new SmartWindow(k);

        for(int i = 1; i <= 1 + dist; i ++){
            window.add(nums[i]);
        }
        long ans = window.query();

        for(int i = 2; i + dist < n; i ++){
            window.remove(nums[i - 1]);
            window.add(nums[i + dist]);
            ans = Math.min(ans, window.query());
        }
        return ans + nums[0];
    }
}
~~~

# Submission Review
## Approach
*   **Technique**: Sliding window with a dual-TreeMap structure to maintain the $k-1$ smallest elements in a dynamic range.
*   **Optimality**: Optimal. The problem requires selecting the $k-1$ smallest values in a sliding window of size $dist+1$. Using two balanced BSTs (or TreeMaps) allows for $O(\log n)$ insertions, deletions, and queries, which is the standard optimal approach for this type of constrained selection problem.

## Complexity
*   **Time Complexity**: $O(n \log (\text{dist}))$. Each of the $n$ elements is added and removed from the TreeMaps at most once, and each `TreeMap` operation takes logarithmic time relative to the window size.
*   **Space Complexity**: $O(\text{dist})$. The `SmartWindow` stores at most $dist+1$ elements across its maps.

## Efficiency Feedback
*   **Overhead**: `TreeMap` in Java involves significant object overhead due to node allocation and the heavy nature of `Integer` objects. While $O(n \log n)$ is asymptotically optimal, the constant factor is high compared to using a `PriorityQueue` with lazy removal or a Fenwick tree (if values are coordinate-compressed).
*   **Rebalancing**: The `rebalance` logic is correct and handles the transition between the `low` and `high` sets efficiently.

## Code Quality
*   **Readability**: Good. The logic for managing two sets (one for the smallest $k-1$ elements and one for the rest) is clearly encapsulated in `SmartWindow`.
*   **Structure**: Good. The `SmartWindow` class effectively hides the complexity of the sliding window management from the main `minimumCost` method.
*   **Naming**: Good. Variable names like `szLow`, `sumLow`, and `rebalance` are intuitive and descriptive.

### Concrete Improvements
1.  **Memory Optimization**: If the range of values in `nums` is small (e.g., $10^5$), consider using two `Fenwick trees` or `Segment Trees` to store frequencies of values. This avoids `TreeMap` object overhead and could be faster in practice.
2.  **Edge Case Safety**: The current loop `for(int i = 2; i + dist < n; i ++)` might miss cases where $n$ is small relative to $dist$. Ensure the loop bounds strictly adhere to the constraints: if $n$ is exactly the window size, the loop condition must still produce the correct initial calculation.
3.  **Encapsulation**: The `SmartWindow` fields are package-private; keeping them `private` and exposing only necessary methods is better practice.
4.  **Java Utility**: Since `TreeMap` operations are frequent, ensure the JVM is warmed up or consider if a `java.util.PriorityQueue` with lazy removal (storing "deleted" elements in a separate `HashMap`) could be faster, as `TreeMap` node balancing is more expensive than `PriorityQueue` heapify operations.

---
---


# Question Revision
### Revision Report: Divide an Array Into Subarrays With Minimum Cost II

**Pattern:** Sliding Window + Two Ordered Sets (or Fenwick Tree/Segment Tree)

**Brute Force:** 
Iterate through all possible split points to partition the array into $k$ subarrays. This involves recursive backtracking or dynamic programming with $O(n^k)$ complexity, which is prohibitive for large $n$.

**Optimal Approach:**
Maintain a sliding window of size `dist` (from index $i$ to $i+dist$) to identify the two smallest elements in the current range (excluding the first element). Use two balanced BSTs (or multisets) to store the elements currently in the window: one for the "smallest" element and one for the remaining "k-2" elements. As the window slides, update the sets in $O(\log n)$ and retrieve the minimums to calculate the cost.
*   **Time Complexity:** $O(n \log n)$
*   **Space Complexity:** $O(n)$

**The 'Aha' Moment:**
When the problem restricts the range of the second and third subarrays (distance constraint), it shifts from a global DP problem to a sliding window problem where you need a dynamic data structure to track the "top $k$" elements.

**Summary:**
Whenever you need to track the sum of the smallest elements within a shifting range, use two balanced multisets to efficiently maintain the partition boundaries.

---
