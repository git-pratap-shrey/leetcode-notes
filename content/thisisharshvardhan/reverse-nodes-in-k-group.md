---
title: "Reverse Nodes in k-Group"
slug: reverse-nodes-in-k-group
date: "2026-10-09"
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
        if(!head|| k==1) return head;
        ListNode* curr=head;
        int count=0;
        while(curr != NULL){
           count++;
           curr=curr->next;
        }

        if(count<k) return head;
  
    ListNode* prev=NULL;
    ListNode* currNode=head;
    ListNode* next=NULL;

    for(int i=0;i<k;i++){
        next=currNode->next;
            currNode->next=prev;
            prev=currNode;
            currNode=next;
    }
 
   head->next=reverseKGroup(currNode,k);
   return prev;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Recursive divide-and-conquer. The code reverses the first $k$ nodes and recursively calls the function for the remaining list.
- **Optimality**: Optimal in terms of time complexity, though the recursive approach uses more stack space than an iterative one.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the number of nodes. Each node is visited twice (once for counting the length and once for reversing).
- **Space Complexity**: $O(n/k)$ due to the recursion stack depth.

## Efficiency Feedback
- **Redundant Traversal**: The code counts the total length of the remaining list (`while(curr != NULL)`) at every recursive step. This increases the constant factor of the time complexity. 
- **Optimization**: Instead of counting the whole list, only check if $k$ nodes exist before attempting the reversal.

## Code Quality
- **Readability**: Moderate. The logic is straightforward, but the indentation is inconsistent (e.g., the `for` loop and `while` loop blocks).
- **Structure**: Good. The base cases are handled correctly at the start.
- **Naming**: Moderate. `currNode` and `next` are clear, but `next` is a keyword in some contexts (though valid as a variable in C++), and `count` is generic.

### Concrete Improvements
1. **Avoid Full List Scan**: Replace the `while(curr != NULL)` loop with a loop that only runs $k$ times. If it reaches `NULL` before $k$, return `head` immediately.
2. **Formatting**: Fix indentation for the `for` loop and `while` block to follow standard C++ style guidelines.
3. **Consistency**: Ensure consistent spacing around operators and keywords.

---

# Question Revision
# Revision Report: Reverse Nodes in k-Group

- **Pattern**: Linked List Manipulation (Iterative Reversal + Dummy Node)
- **Brute Force**: Extract all node values into an array, reverse segments of size $k$ in the array, and then write the values back into the original linked list nodes.
- **Optimal Approach**: 
    - Use a **dummy node** to handle head changes and a `groupPrev` pointer to track the node before the segment to be reversed.
    - For each segment, first verify if $k$ nodes exist.
    - If they do, perform a standard in-place linked list reversal for those $k$ nodes.
    - Connect the `groupPrev` to the new head of the reversed segment and the tail of the reversed segment to the next group's start.
    - **Time Complexity**: $O(n)$ — each node is visited a constant number of times.
    - **Space Complexity**: $O(1)$ — reversal is done in-place.
- **The 'Aha' Moment**: The requirement to leave the remaining nodes untouched if they are fewer than $k$ implies a "look-ahead" step before initiating each reversal.
- **Summary**: Use a dummy node and a look-ahead check to perform iterative in-place reversals on segments of size $k$.

---