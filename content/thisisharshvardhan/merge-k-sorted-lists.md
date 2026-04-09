---
title: "Merge k Sorted Lists"
slug: merge-k-sorted-lists
date: "2026-04-09"

---
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

class compare{
public:
    bool operator()(ListNode* a, ListNode* b){
        return a->val > b->val;
    }
};

class Solution {
public:
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        priority_queue<ListNode* , vector<ListNode*> , compare> pq;
        ListNode* head = NULL;
        ListNode* tail = NULL;
        int rows=lists.size();

        for (int i=0;i<rows;i++){
            ListNode* temp = lists[i];
            if (temp){
                pq.push(temp);
            }
        }

        while(!pq.empty()){
            ListNode* front = pq.top();
            pq.pop();

            if (head==NULL && tail==NULL){
                head=front;
                tail=front;

            }
            else {
                tail->next=front;
                tail=front;
            }
            if (tail->next) pq.push(tail->next);
        }
        return head;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Min-Heap (Priority Queue) to maintain the smallest available node among the $k$ lists.
*   **Optimality:** Optimal. Using a heap to perform a $k$-way merge is the standard, efficient approach.

## Complexity
*   **Time Complexity:** $O(N \log k)$, where $N$ is the total number of nodes across all lists and $k$ is the number of lists. Each node is pushed and popped from the heap exactly once.
*   **Space Complexity:** $O(k)$ to store at most one node from each of the $k$ lists in the priority queue.

## Efficiency Feedback
*   **Runtime:** The implementation is highly efficient. The heap size is strictly bounded by $k$, making the logarithmic factor small.
*   **Memory:** Memory usage is minimal and optimal for this algorithm.

## Code Quality
*   **Readability:** Good. The logic is straightforward and follows standard competitive programming idioms.
*   **Structure:** Good. The `compare` struct is cleanly defined outside the `Solution` class. 
*   **Naming:** Moderate. `rows` is a misleading name for `lists.size()` since the input is a vector of lists, not a 2D matrix; `numLists` or `k` would be clearer.
*   **Concrete Improvements:**
    *   **Dummy Node:** Use a "dummy" head node to simplify the logic for initializing the result list. This removes the `if (head==NULL && tail==NULL)` conditional check inside every loop iteration.
    *   **Naming:** Rename `rows` to `k` or `numLists`.
    *   **Const correctness:** The parameter `vector<ListNode*>& lists` could be `const vector<ListNode*>&` to indicate the input is not modified (though in this case, you are rearranging existing nodes).

### Suggested Refactor (Snippet)
```cpp
ListNode* mergeKLists(vector<ListNode*>& lists) {
    priority_queue<ListNode*, vector<ListNode*>, compare> pq;
    for (auto list : lists) {
        if (list) pq.push(list);
    }
    
    ListNode dummy(0);
    ListNode* tail = &dummy;
    
    while (!pq.empty()) {
        ListNode* top = pq.top();
        pq.pop();
        
        tail->next = top;
        tail = tail->next;
        
        if (top->next) pq.push(top->next);
    }
    return dummy.next;
}
```

---
---


# Question Revision
### Revision Report: Merge k Sorted Lists

**Pattern:** Divide and Conquer / Min-Heap

**Brute Force:**
Collect all elements into a single array, sort them, and reconstruct the list.
*   **Time:** $O(N \log N)$, where $N$ is the total number of nodes.
*   **Space:** $O(N)$ to store all values.

**Optimal Approach:**
Use a **Min-Heap (Priority Queue)** to store the heads of all $k$ lists. Repeatedly extract the minimum, add it to the result, and push the next element from that specific list into the heap. Alternatively, use **Divide and Conquer** (pairwise merging) to reduce the merge operation tree.
*   **Time:** $O(N \log k)$, where $k$ is the number of lists.
*   **Space:** $O(k)$ for the heap.

**The 'Aha' Moment:**
When you see multiple sorted inputs that need to be merged, realize that you only ever need to compare the "heads" of each list, making a Min-Heap the natural structure to maintain the smallest available candidate.

**Summary:**
Whenever you must select the smallest element from $k$ sorted sources, use a Min-Heap to transform a global sorting problem into a local comparison problem.

---
