---
title: "Find Median from Data Stream"
slug: find-median-from-data-stream
date: "2026-04-10"

---
---

# My Solution
~~~cpp
class MedianFinder {
public:
        priority_queue<int> maxHeap;
        priority_queue<int,vector<int>,greater<int>> minHeap;
        double median;
    MedianFinder() {
        median=0;

    }
    
    void addNum(int num) {
        if (maxHeap.size()==minHeap.size()){
            if (num>median){
                minHeap.push(num);
                median=minHeap.top();
            }
            else {
                maxHeap.push(num);
                median=maxHeap.top();
            }
        }
        else if (maxHeap.size()==minHeap.size()+1){
            if (num>median){
                minHeap.push(num);
                
            }
            else {
                int ele=maxHeap.top();
                maxHeap.pop();
                minHeap.push(ele);
                maxHeap.push(num);
            }
            median=(minHeap.top()+maxHeap.top())/2.0;
        }
        else {
            if (num>median){
                int ele=minHeap.top();
                minHeap.pop();
                maxHeap.push(ele);
                minHeap.push(num);
            }
            else {
                maxHeap.push(num);
            }
            median=(minHeap.top()+maxHeap.top())/2.0;
        }
    }


    
    double findMedian() {
        return median;
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder* obj = new MedianFinder();
 * obj->addNum(num);
 * double param_2 = obj->findMedian();
 */
~~~

# Submission Review
## Approach
*   **Technique:** Two-heap pattern (Max-Heap for the lower half, Min-Heap for the upper half).
*   **Optimal:** Yes. This is the standard approach for dynamic median finding.

## Complexity
*   **Time Complexity:** $O(\log N)$ per `addNum` call; $O(1)$ per `findMedian` call.
*   **Space Complexity:** $O(N)$ to store $N$ elements in the two heaps.

## Efficiency Feedback
*   **Bottleneck:** The logic uses an auxiliary `median` variable, which is updated inside `addNum`. While this keeps `findMedian` at $O(1)$, it complicates the branching logic significantly.
*   **Optimization:** You can remove the `median` member variable. Simply re-calculate the median in `findMedian` by checking the relative sizes of the heaps:
    *   If `maxHeap.size() > minHeap.size()`, return `maxHeap.top()`.
    *   If sizes are equal, return `(maxHeap.top() + minHeap.top()) / 2.0`.
    *   This eliminates the risk of maintaining an inconsistent state between `median` and the heap contents.

## Code Quality
*   **Readability:** Moderate. The `if-else` chains are deeply nested and rely on state updates (`median=...`) that make the code difficult to trace.
*   **Structure:** Poor. The state management is fragile. For instance, in the `maxHeap.size() == minHeap.size() + 1` branch, `median` is updated differently than in the base case, leading to redundant logic.
*   **Naming:** Good. `maxHeap` and `minHeap` clearly describe their purposes.
*   **Improvements:**
    *   **Balance logic:** Simplify the balance constraint. Always push to `maxHeap` first, then move the top of `maxHeap` to `minHeap`. If `minHeap` becomes larger than `maxHeap`, move the top of `minHeap` back to `maxHeap`. This ensures `maxHeap.size()` is always equal to or one greater than `minHeap.size()`, drastically reducing the `if-else` complexity.
    *   **Encapsulation:** Keep the `priority_queue` members `private` to follow standard C++ encapsulation practices.

---
---


# Question Revision
### Revision Report: Find Median from Data Stream

**Pattern:** Two Heaps (Max-Heap & Min-Heap)

**Brute Force:**
Store all incoming numbers in a dynamic list, sort the list on every `findMedian()` call, and return the middle element(s).
*   **Time:** $O(n \log n)$ per query.
*   **Space:** $O(n)$.

**Optimal Approach:**
Maintain two heaps: a **Max-Heap** to store the smaller half of the numbers and a **Min-Heap** to store the larger half. Balance the heaps so that their size difference is at most 1.
*   **`addNum()`:** $O(\log n)$ to push into a heap and potentially rebalance.
*   **`findMedian()`:** $O(1)$ to peek at the roots of the heaps.
*   **Space:** $O(n)$ to store $n$ elements.

**The 'Aha' Moment:**
When a problem asks for a dynamic aggregate (like median or range) and you realize the data only needs to be partially ordered rather than fully sorted, you should immediately think of a heap-based partition.

**Summary:**
Keep the lower half in a Max-Heap and the upper half in a Min-Heap to access the middle elements in constant time while maintaining logarithmic insertion.

---
