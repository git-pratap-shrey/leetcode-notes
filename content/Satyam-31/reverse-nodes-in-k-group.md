---
title: "Reverse Nodes in k-Group"
slug: reverse-nodes-in-k-group
date: "2026-10-08"
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
    ListNode* reverseKGroup(ListNode* head, int k) {
      
        vector<int>a;
     
        ListNode* p =head;
        while(p!=NULL){
            
            a.push_back(p->val);
            p=p->next;
        }

        int n=a.size();
        int i=0;
        int j=i+k;
        while(j<=n){
            reverse(a.begin()+i,a.begin()+j);
            i=j;
            j=i+k;

        }
        ListNode* h=head;
        int m=0;
        while(h!=NULL){
            h->val=a[m++];
            h=h->next;

        }

        return head;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Value Transformation using an auxiliary array. The code extracts all node values into a `std::vector`, reverses the values in blocks of $k$, and then writes the values back into the original linked list.
- **Optimality**: **Not optimal**. The problem is designed to test linked list pointer manipulation. This approach modifies values rather than rearranging nodes, violating the implicit intent of "reversing nodes" and requiring extra memory.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes. The list is traversed three times (extraction, reversal of segments, and re-assignment).
- **Space Complexity**: $O(N)$ to store all node values in a vector.
- **Bottleneck**: The use of an auxiliary vector creates linear space overhead, whereas the optimal solution requires $O(1)$ extra space.

## Efficiency Feedback
- **Runtime**: Generally fast due to contiguous memory access in `std::vector`, but involves three full passes over the data.
- **Memory**: High. Storing $N$ integers in a vector is unnecessary.
- **Optimization**: Implement an in-place reversal using three pointers (`prev`, `curr`, `next`) to achieve $O(1)$ space complexity.

## Code Quality
- **Readability**: Moderate. The logic is straightforward, but the lack of spacing and inconsistent indentation makes it look cluttered.
- **Structure**: Moderate. The flow is linear and easy to follow, though it relies on a "cheat" method rather than solving the linked list problem.
- **Naming**: Poor. Variable names like `a`, `p`, `h`, and `m` are non-descriptive.
- **Concrete Improvements**:
    - Rename `a` to `values`, `p` to `current`, and `h` to `temp`.
    - Replace the value-swapping logic with node-pointer manipulation.
    - Improve indentation and add consistent spacing around operators (e.g., `p != NULL` instead of `p!=NULL`).

---

# Question Revision
# Revision Report: Reverse Nodes in k-Group

- **Pattern:** Linked List Manipulation / Iterative Reversal.
- **Brute Force:** Extract all node values into an array, reverse segments of size $k$, and rebuild the linked list from scratch.
- **Optimal Approach:** 
    - Use a **dummy node** to handle head changes.
    - Use a `count` pointer to check if $k$ nodes exist before attempting a reversal.
    - Implement a standard linked list reversal on the segment of $k$ nodes.
    - Carefully connect the `prev` group's end to the current group's new head, and the current group's new tail to the next group's start.
    - **Time Complexity:** $O(n)$ — each node is visited a constant number of times.
    - **Space Complexity:** $O(1)$ — reversal is done in-place.
- **The 'Aha' Moment:** The requirement to reverse *only* if $k$ nodes exist necessitates a "look-ahead" check before triggering the reversal logic.
- **Summary:** Check for $k$ nodes, reverse the segment in-place, and stitch the boundaries to the previous and next groups.

---