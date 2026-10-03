---
title: "Find Peak Element"
slug: find-peak-element
date: "2026-09-30"
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
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
         ListNode* dummy=new  ListNode(-1);
          ListNode* temp=dummy;
          while(list1 != NULL && list2 !=NULL){
            if(list1->val<list2->val){
                temp->next=list1;
                list1=list1->next;
            }
            else{
                temp->next=list2;
                list2=list2->next;
            }
            temp=temp->next;
          }
          while(list1!=NULL){
            temp->next=list1;
            list1=list1->next;
            temp=temp->next;
          }
          while(list2!=NULL){
            temp->next=list2;
            list2=list2->next;
            temp=temp->next;
          }
       return dummy->next;

    }
};
~~~

# Submission Review
## Approach
- **Technique**: Two-pointer iterative traversal (Merge process of Merge Sort).
- **Optimality**: Optimal. It traverses each element of both lists exactly once.
- **Critical Error**: The provided code solves "Merge Two Sorted Lists," but the problem stated is "Find Peak Element." The code is completely unrelated to the stated problem.

## Complexity
- **Time Complexity**: $O(n + m)$, where $n$ and $m$ are the lengths of the two lists.
- **Space Complexity**: $O(1)$ auxiliary space (ignoring the dummy node), as it rearranges existing nodes rather than creating new ones.

## Efficiency Feedback
- The runtime is optimal for the merge operation.
- **Optimization**: The trailing `while` loops for `list1` and `list2` can be replaced by a single assignment: `temp->next = (list1 != NULL) ? list1 : list2;`. This avoids unnecessary iterations since the remaining list is already sorted.

## Code Quality
- **Readability**: Moderate. Basic logic is clear, but spacing is inconsistent (e.g., `new  ListNode`, `list2 !=NULL`).
- **Structure**: Good. Standard dummy-node pattern for linked list construction.
- **Naming**: Good. `dummy` and `temp` are conventional for this pattern.
- **Concrete Improvements**:
    - **Memory Leak**: The `dummy` node is allocated on the heap via `new` but never deleted, causing a small memory leak. It should be declared on the stack: `ListNode dummy(-1);` and return `dummy.next`.
    - **Logic**: As noted, the code solves a different problem than the one requested.

---

# Question Revision
# Revision Report: Find Peak Element

- **Pattern:** Binary Search (on a non-sorted array)
- **Brute Force:** Linear scan through the array to find the first element that is greater than its immediate neighbor. 
    - **Complexity:** Time: $O(n)$, Space: $O(1)$.
- **Optimal Approach:** Use Binary Search to move toward the "ascending" slope. If `nums[mid] < nums[mid + 1]`, a peak must exist to the right; otherwise, a peak exists to the left (including `mid`).
    - **Time Complexity:** $O(\log n)$
    - **Space Complexity:** $O(1)$
- **The 'Aha' Moment:** The requirement for $O(\log n)$ time complexity on an unsorted array implies that we must be able to discard half the search space based on a local property.
- **Summary:** If the slope is increasing at `mid`, the peak is to the right; if decreasing, the peak is to the left.

---