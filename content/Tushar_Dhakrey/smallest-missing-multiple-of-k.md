---
title: "Smallest Missing Multiple of K"
slug: smallest-missing-multiple-of-k
date: "2026-08-25"
---

# My Solution
~~~java
class Solution {
    public int missingMultiple(int[] nums, int k) {
        HashSet<Integer> set = new HashSet<>();
        for(int num:nums){
            set.add(num);
        }
        for(int i=k; ;i+=k){
            if(!set.contains(i)){
                return i;
            }
        }
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Brute force search using a `HashSet` for O(1) average lookup.
*   **Optimality:** Optimal. Since we are looking for the smallest missing multiple of $k$, we must check $k, 2k, 3k, \dots$ until we find one not present in the input.

## Complexity
*   **Time Complexity:** $O(N + M)$, where $N$ is the number of elements in `nums` and $M$ is the multiple of $k$ that is missing. The `HashSet` construction takes $O(N)$, and the search loop runs $M/k$ times.
*   **Space Complexity:** $O(N)$ to store the elements of `nums` in the `HashSet`.

## Efficiency Feedback
*   **Runtime:** The use of `HashSet` is appropriate. The loop terminates as soon as the first missing multiple is found, which is efficient.
*   **Memory:** If the input array contains a large range of values, the `HashSet` consumes $O(N)$ memory. Since the problem doesn't specify constraints on $N$, this is the standard trade-off for time efficiency.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. Simple, self-contained method.
*   **Naming:** Good. The variable names `nums`, `k`, `set`, and `i` are standard and clear in this context.
*   **Concrete Improvements:** 
    *   The `HashSet` constructor can be initialized with an initial capacity (e.g., `new HashSet<>(nums.length)`) to avoid internal resizing overhead if $N$ is large.
    *   Consider adding an input validation check for $k > 0$ to prevent an infinite loop if $k=0$ or $k < 0$ (depending on problem constraints).

---

# Question Revision
### Revision Report: Smallest Missing Multiple of K

**Pattern:** Modular Arithmetic / BFS on Graph (or Number Theory)

**Brute Force:** 
Iterate through multiples of $K$ ($K, 2K, 3K, \dots$) and check if each exists in the set/array.
*   **Time:** $O(N \cdot M)$ where $M$ is the index of the missing multiple.
*   **Space:** $O(N)$ for lookups.

**Optimal Approach:**
Treat the remainders of numbers modulo $K$ as nodes in a graph. Use BFS or a bitmask/set to track reachable remainders. If you need the smallest integer, treat it as a shortest-path problem on a DAG or use a modular equivalence property to find the first $x$ such that $x \pmod K$ hasn't been "seen" in the sequence. 
*   **Time:** $O(K)$ 
*   **Space:** $O(K)$

**The 'Aha' Moment:**
When a problem asks for the "smallest" value involving divisibility or multiples, the state space is constrained by the modulus $K$, allowing you to map infinite integers to $K$ distinct remainder buckets.

**Summary:** 
Whenever a problem involves finding a missing multiple of $K$, ignore the magnitude of the numbers and focus on the cycle of remainders $[0, K-1]$.

---