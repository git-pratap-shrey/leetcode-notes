---
title: "Kth Largest Element in a Stream"
slug: kth-largest-element-in-a-stream
date: "2026-08-21"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<int> findMissingElements(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        vector<int> missing;

        int expected = nums[0];
        for(int i = 0; i < nums.size(); i++){
            if(nums[i] != expected){
                missing.push_back(expected);
                i--;
            }
            expected++;
        }

        return missing;
    }
};


~~~

# Submission Review
## Approach
*   **Technique:** Greedy traversal with sorting. 
*   **Optimization:** This approach is **not optimal**. While it identifies gaps in a range, it is essentially a linear scan that forces a re-evaluation of indices (`i--`) when a gap is found, effectively simulating a search that could be achieved more efficiently. Note: The class name `Solution` and method `findMissingElements` do not align with the standard "Kth Largest Element in a Stream" problem, which typically requires a Min-Heap.

## Complexity
*   **Time Complexity:** $O(N \log N)$ due to `std::sort`. The loop traversal is $O(N + K)$, where $K$ is the number of missing elements.
*   **Space Complexity:** $O(K)$ to store the result, where $K$ is the number of missing elements.
*   **Bottleneck:** Sorting is the dominant factor. If the range of values is constrained, a Hash Set or Bitmask would be $O(N)$ time.

## Efficiency Feedback
*   **Redundancy:** The `i--` logic inside the `for` loop is dangerous and logically awkward. It creates a re-check mechanism that is essentially a `while` loop masquerading as a `for` loop.
*   **Alternative:** If the goal is to find missing numbers in a range $[min, max]$, you can simply use a `std::unordered_set` to store existing elements and iterate through the range once in $O(N)$ time.

## Code Quality
*   **Readability:** Moderate. The use of `i--` inside a `for` loop is non-idiomatic and makes the control flow hard to follow.
*   **Structure:** Poor. The logic relies on modifying the loop index to handle "catch-up" logic, which is prone to infinite loops if not handled perfectly.
*   **Naming:** Poor. The method name `findMissingElements` does not match the problem title "Kth Largest Element in a Stream".
*   **Improvements:**
    *   **Refactor the loop:** Use a `while` loop if you need to manage index increments manually based on conditions.
    *   **Boundary checking:** Add a check to ensure `nums` is not empty before accessing `nums[0]`, otherwise, it will crash on empty input.
    *   **Naming:** Rename the method to match the intended logic or the actual problem requirements.

*Note: The provided code does not solve "Kth Largest Element in a Stream"; it solves "Find Missing Elements in a Range".*

---

# Question Revision
### Revision Report: Kth Largest Element in a Stream

**Pattern:** Heap (Priority Queue)

**Brute Force:** Store all elements in an array and sort it every time `add()` is called. 
*   **Time:** $O(m \cdot n \log n)$, where $m$ is the number of calls and $n$ is the stream size.
*   **Space:** $O(n)$

**Optimal Approach:** Use a Min-Heap of size $k$. Keep the heap size constant by pushing new elements and popping the smallest if the heap exceeds $k$. The root of the Min-Heap is always the $k$-th largest element.
*   **Time:** $O(m \log k)$
*   **Space:** $O(k)$

**The 'Aha' Moment:** The requirement to maintain a dynamic set where you only ever need to know the relative order of the top $k$ elements—and can discard the rest—is the classic indicator for a bounded-size heap.

**Summary:** Whenever you need to track the "top $k$" of a flowing stream, use a Min-Heap of size $k$ to keep the $k$-th largest element pinned at the top.

---