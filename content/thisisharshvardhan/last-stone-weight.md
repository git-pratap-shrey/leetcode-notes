---
title: "Last Stone Weight"
slug: last-stone-weight
date: "2026-04-09"

---
---

# My Solution
~~~cpp
class Solution {
public:
    int lastStoneWeight(vector<int>& stones) {
        priority_queue<int> pq;
        for (int i=0;i<stones.size();i++){
            pq.push(stones[i]);
        }
        while(pq.size()>1){
            int x=pq.top();
            pq.pop();
            int y=pq.top();
            pq.pop();
            if (x>y) pq.push(x-y);
        }
        return pq.empty() ? 0 : pq.top();
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Max-Heap (Priority Queue).
*   **Optimality:** Optimal. Using a heap is the standard and most efficient way to repeatedly extract and compare the two largest values in a collection.

## Complexity
*   **Time Complexity:** $O(N \log N)$, where $N$ is the number of stones. Each insertion and extraction from the heap takes $O(\log N)$, and we perform these operations $N$ times.
*   **Space Complexity:** $O(N)$ to store the stones in the priority queue.

## Efficiency Feedback
*   **Performance:** The runtime is efficient for typical competitive programming constraints.
*   **Optimization:** You can initialize the priority queue using the range constructor: `priority_queue<int> pq(stones.begin(), stones.end());`. This is more idiomatic and performs the heap construction in $O(N)$ time (linear build) rather than $O(N \log N)$ via successive `push` calls.

## Code Quality
*   **Readability:** Good. The logic is concise and easy to follow.
*   **Structure:** Good. The standard `priority_queue` handles the logic cleanly.
*   **Naming:** Good. `x` and `y` are acceptable here as they represent generic values being extracted and compared.
*   **Concrete Improvements:**
    *   Use the range constructor to initialize the `priority_queue`.
    *   Consider using a `const vector<int>&` in the function signature if the input does not need to be modified.
    *   Use `size_t` or range-based for loops for cleaner iteration.

```cpp
// Suggested optimization:
int lastStoneWeight(vector<int>& stones) {
    priority_queue<int> pq(stones.begin(), stones.end());
    while (pq.size() > 1) {
        int x = pq.top(); pq.pop();
        int y = pq.top(); pq.pop();
        if (x != y) pq.push(x - y);
    }
    return pq.empty() ? 0 : pq.top();
}
```

---
---


# Question Revision
### Revision Report: Last Stone Weight

**Pattern:** Max-Heap (Priority Queue)

**Brute Force:** 
Continuously sort the entire array after every "smash" operation until zero or one stone remains.
*   **Time Complexity:** $O(n^2 \log n)$ 
*   **Space Complexity:** $O(1)$ (if modifying in-place)

**Optimal Approach:** 
Use a Max-Heap to store stone weights. In each iteration, extract the two largest elements, calculate the difference, and push the result back if it is greater than zero.
*   **Time Complexity:** $O(n \log n)$ (extracting and inserting into a heap of size $n$ takes $\log n$, performed $n$ times).
*   **Space Complexity:** $O(n)$ (to store elements in the heap).

**The 'Aha' Moment:** 
Whenever a problem requires repeatedly extracting the "largest" or "smallest" values from a dynamic set, a Priority Queue is the most efficient structure to maintain that ordering.

**Summary:** 
Use a Max-Heap whenever you need to repeatedly process and update the extreme values of a dataset.

---
