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
*   **Technique:** Sliding window combined with a dual-TreeMap based balanced structure to maintain the sum of the $k-1$ smallest elements in a range of length $dist+1$.
*   **Optimality:** Optimal. The problem requires picking $k-1$ smallest elements from a sliding window of size $dist+1$. The use of `TreeMap` to track orderings and sums is the standard approach to maintain a dynamic order statistic in $O(\log N)$ time.

## Complexity
*   **Time Complexity:** $O(N \log N)$. Each element is added and removed from the `TreeMap` at most once per sliding window movement, with each operation taking $O(\log (\text{dist}))$.
*   **Space Complexity:** $O(N)$ or $O(dist)$ depending on the number of elements in the `TreeMap`, which is bounded by $dist+1$.

## Efficiency Feedback
*   **Bottleneck:** The overhead of `TreeMap` (object creation for nodes, tree balancing, and `Integer` boxing) is significant in Java. While $O(N \log N)$ is theoretically efficient, high constant factors from `java.util.TreeMap` can be slow compared to a Fenwick tree or segment tree if the coordinate space is compressed or small.
*   **Optimization:** If the values of `nums` are small or can be mapped to a smaller range, a `Fenwick tree` or `Segment Tree` over the values would be faster by avoiding object-heavy collections.

## Code Quality
*   **Readability:** Good. The logic for `rebalance`, `add`, and `remove` is cleanly partitioned.
*   **Structure:** Moderate. The `SmartWindow` class effectively encapsulates the state, but the manual management of `szLow` and `szHigh` is error-prone.
*   **Naming:** Good. Variable names like `szLow`, `sumLow`, and `rebalance` clearly communicate intent.
*   **Improvements:**
    *   **Encapsulation:** The fields in `SmartWindow` could be made `private` to ensure strict internal control.
    *   **Logic Simplification:** In `add(x)`, the `rebalance` call is slightly redundant because the logic already checks `low.lastKey()` and performs moves. While safe, it adds unnecessary calls to `rebalance` after simple additions.
    *   **Performance:** Replace `TreeMap<Integer, Integer>` with a primitive-based custom data structure (e.g., a two-heap system or indexed Fenwick tree) if memory or time limits are tight, as `Integer` object overhead is high.

---
---


# Question Revision
### Revision Report: Divide an Array Into Subarrays With Minimum Cost II

**Pattern:** Sliding Window + Data Structure (Balanced BST / Multiset)

**Brute Force:**
Iterate through all possible partition points using nested loops to find the minimum sum of the first element plus the $k-1$ smallest elements in the remaining sliding window. This results in $O(n^2 \cdot \log k)$ or $O(n^3)$ depending on implementation.

**Optimal Approach:**
Maintain a sliding window of size $k$ (from index `i+1` to `n-1`). Use two multisets (or a Fenwick tree/Segment tree): one to store the $k-1$ smallest elements in the window and another for the rest. As the window shifts, update the multisets and maintain their sums.
*   **Time Complexity:** $O(n \log n)$ using balanced BSTs or $O(n \log (\max(A)))$ with a Fenwick tree.
*   **Space Complexity:** $O(n)$ to store the elements.

**The 'Aha' Moment:**
When you need to maintain the sum of the "smallest $k$ elements" in a dynamic range, the problem transforms from simple sliding window to a **dynamic order statistics** problem, requiring a data structure that supports efficient insertion, deletion, and prefix-sum queries.

**Summary:**
Whenever you must track the sum of the $k$-smallest elements in a sliding window, replace the brute-force search with two multisets or a Fenwick tree to maintain the partitioned sums in $O(\log n)$ time.

---
