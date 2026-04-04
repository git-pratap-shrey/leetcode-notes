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
- **Technique:** Sliding Window with two `TreeMap`s to maintain the sum of the $k-1$ smallest elements in the current window (a balanced multiset/frequency map approach).
- **Optimality:** Optimal. The problem requires dynamic maintenance of the sum of the smallest $k-1$ elements while sliding a window of size $dist+1$. Using `TreeMap` allows for $O(\log n)$ updates, which is standard for this type of problem.

## Complexity
- **Time Complexity:** $O(n \log n)$, where $n$ is the length of `nums`. Each element is added to and removed from the `TreeMap` exactly once, and each operation takes $O(\log n)$.
- **Space Complexity:** $O(n)$ to store elements in the `TreeMap`.

## Efficiency Feedback
- **Runtime:** `TreeMap` operations have a constant overhead and are significantly slower than a primitive-based heap or a Fenwick tree/Segment tree (if values are coordinate-compressed). However, given the constraints typical for this problem, $O(n \log n)$ is acceptable.
- **Memory:** `Integer` objects and `TreeMap.Entry` nodes create significant boxing/unboxing and object overhead compared to primitive array-based structures.
- **Specific Optimization:** If `nums[i]` values are within a small range, a Fenwick tree with coordinate compression would be faster. If not, consider a custom binary search tree or skip list to reduce object allocations.

## Code Quality
- **Readability:** Good. The `SmartWindow` class is well-encapsulated and separates the logic of maintaining the $k-1$ smallest elements from the main sliding window loop.
- **Structure:** Good. The `rebalance()` method is clean and handles the logic for keeping exactly $K$ elements in the `low` set effectively.
- **Naming:** Good. The class name `SmartWindow` and method names (`popLast`, `popFirst`, `addMap`) clearly convey their purpose.
- **Improvements:** 
    - The `rebalance` logic is called inside both `add` and `remove`. While safe, ensure the logic handles edge cases where `K=0` or `windowSize < K` (the current logic handles these via `Math.min(K, windowSize())`).
    - The `for` loop ranges: The logic `i <= 1 + dist` and `i + dist < n` is slightly non-intuitive; consider adding a comment explaining that the window represents the range `[i, i + dist]`.
    - Avoid `TreeMap` if performance is critical; replacing with two `PriorityQueue`s with lazy removal (using a "deleted" hash map) is often faster in Java due to reduced object creation.

---
---


# Question Revision
### Revision Report: Divide an Array Into Subarrays With Minimum Cost II

**Pattern:** Sliding Window + Two Ordered Sets (or Fenwick Tree/Segment Tree)

**Brute Force:** 
Iterate through all possible split points to partition the array into $k$ subarrays. This involves recursive backtracking or multi-dimensional DP with state $(index, subarrays\_left)$, leading to $O(n^k)$ complexity, which is infeasible given the constraints ($n \le 10^5$).

**Optimal Approach:**
1.  **Logic:** We must include `arr[0]` as the first element of the first subarray. We then need to choose $k-1$ additional elements from `arr[1...n-1]` to serve as the start of the remaining subarrays. To minimize the cost, we maintain a sliding window of size `dist` (the maximum distance between partition starts). We use two balanced BSTs (or two heaps/multisets) to track the smallest $k-1$ elements in the current window: one for the "smallest" elements and one for the rest.
2.  **Time Complexity:** $O(n \log n)$ due to operations on balanced BSTs or heaps.
3.  **Space Complexity:** $O(n)$ to store the window elements.

**The 'Aha' Moment:**
When a problem asks to select $k$ elements from a range while maintaining a sliding window constraint, it is a signal to use dual data structures to track the "top $k$" smallest elements dynamically.

**Summary:**
Maintain a sliding window of candidate indices using two balanced data structures to efficiently track the running sum of the smallest $k-1$ elements.

---
