---
title: "Merge k Sorted Lists"
slug: merge-k-sorted-lists
date: "2026-10-06"
---

# My Solution
~~~cpp
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        vector<int> a;
        for (int i = 0; i < lists.size(); i++) {
            ListNode* curr = lists[i];
            while (curr != NULL) {
                a.push_back(curr->val);
                curr = curr->next;
            }
        }
        sort(a.begin(), a.end());

        ListNode dummy;
        ListNode* p = &dummy;
        for (int x : a) {
            p->next = new ListNode(x);
            p = p->next;
        }
        return dummy.next;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Brute-force collection and sorting. The solution extracts all values into a dynamic array, sorts them, and rebuilds a new linked list.
- **Optimality**: Not optimal. It ignores the fact that the input lists are already sorted, failing to utilize a Min-Priority Queue or Divide and Conquer approach.

## Complexity
- **Time Complexity**: $O(N \log N)$, where $N$ is the total number of nodes across all $k$ lists. This is dominated by the sorting step.
- **Space Complexity**: $O(N)$ to store the values in the vector and create new nodes for the result list.
- **Bottleneck**: The `sort()` function treats the data as unsorted, missing the $O(N \log k)$ potential of a priority queue.

## Efficiency Feedback
- **Runtime**: High compared to optimal solutions because it sorts all $N$ elements instead of merging $k$ sorted streams.
- **Memory**: High. It allocates entirely new `ListNode` objects for every element instead of rearranging existing pointers, effectively doubling the memory usage for the nodes.

## Code Quality
- **Readability**: Good. The logic is simple and linear.
- **Structure**: Moderate. The use of a dummy node is correct, but the approach is naive.
- **Naming**: Moderate. `a` and `p` are non-descriptive variable names.
- **Concrete Improvements**:
    1. Use a `std::priority_queue` to merge the lists in $O(N \log k)$ time.
    2. Relink existing `ListNode` pointers instead of using `new ListNode(x)` to reduce memory overhead and avoid memory leaks (as the original nodes are never deleted).

---

# Question Revision
# Revision Report: Merge k Sorted Lists

- **Pattern:** Heap / Priority Queue (K-Way Merge)
- **Brute Force:** Collect all elements from all $k$ lists into a single array, sort the array, and then reconstruct a new linked list.
    - **Time Complexity:** $O(N \log N)$ where $N$ is the total number of elements.
    - **Space Complexity:** $O(N)$ to store the array.
- **Optimal Approach:** Use a Min-Heap to keep track of the smallest current element across all $k$ lists. Initially, push the head of every list into the heap. Repeatedly extract the minimum element, attach it to the result list, and push the next node from that specific list into the heap.
    - **Time Complexity:** $O(N \log k)$ because each of the $N$ elements is pushed and popped from a heap of size $k$.
    - **Space Complexity:** $O(k)$ to maintain the heap.
- **The 'Aha' Moment:** When you need to find the global minimum across multiple sorted sequences repeatedly, a Min-Heap is the optimal tool.
- **Summary:** Use a Min-Heap of size $k$ to efficiently pick the smallest head among all lists until all nodes are merged.

---