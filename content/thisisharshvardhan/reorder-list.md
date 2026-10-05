---
title: "Reorder List"
slug: reorder-list
date: "2026-10-05"
---

# My Solution
~~~cpp
class Solution {
public:
    ListNode* reverse(ListNode* head){
        ListNode* prev=NULL;
        ListNode* curr=head;

        while(curr!=NULL){
            ListNode* next=curr->next;
            curr->next=prev;
            prev=curr;
            curr=next;
        }

        return prev;
    }

    void reorderList(ListNode* head) {
        if(head==NULL || head->next==NULL)
            return;

        vector<int> v;
        ListNode* temp=head;
        while(temp!=NULL){
            v.push_back(temp->val);
            temp=temp->next;
        }
        ListNode* dummy=new ListNode(-1);
        ListNode* temp2=dummy;
        int left=0;
        int right=v.size()-1;
        while(left<=right){
            temp2->next=new ListNode(v[left]);
            temp2=temp2->next;
            left++;
            if(left<=right){
                temp2->next=new ListNode(v[right]);
                temp2=temp2->next;
                right--; }
        }
        head->val=dummy->next->val;
        ListNode* p=head;
        ListNode* q=dummy->next->next;
        while(q!=NULL){
            p->next=q;
            p=p->next;
            q=q->next;
        }
        p->next=NULL;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Vector-based reconstruction. The code extracts all values into a `std::vector`, builds a completely new linked list using two pointers (`left` and `right`) to alternate values, and then copies these new nodes back into the original list structure.
- **Optimality**: **Not optimal**. The problem can be solved in-place by finding the middle (slow/fast pointers), reversing the second half, and merging the two halves. This solution uses unnecessary auxiliary space and creates redundant objects.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes. The list is traversed multiple times (to populate the vector, to build the dummy list, and to relink the original list).
- **Space Complexity**: $O(N)$. It stores all values in a vector and allocates $N$ new `ListNode` objects.

## Efficiency Feedback
- **Memory Leak**: The code performs `new ListNode(...)` inside a loop but never deletes the old nodes or the dummy list, causing a significant memory leak.
- **Redundancy**: The `reverse` helper function is defined but never called, adding dead code to the solution.
- **Overhead**: Creating new nodes instead of rearranging existing pointers makes the solution slower and more memory-intensive than the in-place approach.

## Code Quality
- **Readability**: Moderate. The logic is straightforward, but the flow is disjointed.
- **Structure**: Poor. It mixes value-copying with node-relinking and includes an unused helper function.
- **Naming**: Moderate. `v`, `temp`, `temp2`, `p`, and `q` are generic; more descriptive names (e.g., `values`, `current`, `reorderedHead`) would improve clarity.

**Concrete Improvements**:
1. Remove the unused `reverse` function.
2. Implement the in-place approach: `Fast/Slow Pointer` $\rightarrow$ `Reverse Second Half` $\rightarrow$ `Merge`.
3. If sticking to the vector approach, modify existing node values (`head->val = v[i]`) instead of allocating new `ListNode` objects to avoid memory leaks.

---

# Question Revision
# Revision Report: Reorder List

- **Pattern:** Two Pointers + Linked List Manipulation
- **Brute Force:** Copy the linked list values into an array. Use two pointers (start and end) to pick elements and rebuild the list by modifying the `next` pointers. 
    - **Complexity:** $O(n)$ time, $O(n)$ space.
- **Optimal Approach:** 
    1. **Find Middle:** Use a slow/fast pointer approach to locate the center of the list.
    2. **Reverse Second Half:** Reverse the second half of the list in-place.
    3. **Merge:** Interleave nodes from the first half and the reversed second half.
    - **Time Complexity:** $O(n)$
    - **Space Complexity:** $O(1)$
- **The 'Aha' Moment:** When you need to process a list from both ends (start and end) but it's a singly linked list, you must reverse the second half to gain "backward" traversal.
- **Summary:** Find middle, reverse the second half, and zipper-merge the two halves together.

---