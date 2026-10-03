---
title: "Transform Array Using Pair Operations"
slug: transform-array-using-pair-operations
date: "2026-09-26"
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
    
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* dummy=new ListNode(-1);
        ListNode* temp=dummy;
        ListNode* p=l1;
        ListNode* q=l2;
        int carry=0;
        int sum=0;
        while(p!=NULL && q!=NULL){
             int sum=p->val+q->val+carry;
             int data=sum%10;
             carry=sum/10;
             ListNode* node=new ListNode(data);
             temp->next=node;
             temp=temp->next;
             p=p->next;
             q=q->next;
        }
        while(p!=NULL){
            int sum=p->val+carry;
             int data=sum%10;
             carry=sum/10;
             ListNode* node=new ListNode(data);
             temp->next=node;
             temp=temp->next;
             p=p->next;
        }
        while(q!=NULL){
            int sum=q->val+carry;
             int data=sum%10;
             carry=sum/10;
             ListNode* node=new ListNode(data);
             temp->next=node;
             temp=temp->next;
             q=q->next;
        }
        if(carry){
            ListNode* node=new ListNode(carry);
            temp->next=node;
        }
        return dummy->next;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Linear traversal/Simulation. The code iterates through two linked lists, performing digit-by-digit addition with a carry.
- **Optimality**: Optimal. The problem requires visiting every node of both lists exactly once.

## Complexity
- **Time Complexity**: $O(\max(N, M))$, where $N$ and $M$ are the lengths of the two linked lists.
- **Space Complexity**: $O(\max(N, M))$ to store the resulting linked list.

## Efficiency Feedback
- **Runtime**: Optimal.
- **Memory**: The solution uses `new ListNode` for every digit. While necessary for the result, the memory management is handled by the caller (or the platform), but in a real-world scenario, this would lead to memory leaks as the `dummy` node is never deleted.
- **Optimization**: The three separate `while` loops can be consolidated into a single `while (p != NULL || q != NULL || carry != 0)` loop to reduce redundant logic.

## Code Quality
- **Readability**: Moderate. The logic is clear, but there is significant code duplication across the three loops.
- **Structure**: Moderate. The logic is repetitive. The pattern of calculating `sum`, `data`, and updating `temp` is repeated three times.
- **Naming**: Good. Variables like `p`, `q`, `carry`, and `dummy` are standard for this problem type.
- **Concrete Improvements**:
    1. **Consolidate Loops**: Merge the three `while` loops and the final `if(carry)` check into one loop.
    2. **Shadowing**: The variable `int sum` is declared at the top level and then re-declared inside every loop (`int sum = ...`), which is redundant and confusing.
    3. **Memory Leak**: The `dummy` node is allocated on the heap but never `deleted` before returning `dummy->next`.

---

# Question Revision
# Revision Report: Transform Array Using Pair Operations

- **Pattern**: Greedy / Two Pointers (Sorting)
- **Brute Force**: Try all possible pairs of indices $(i, j)$ in every possible order to see if the array can be transformed into the target. This leads to an exponential time complexity $O(n!)$ or high-degree polynomial.
- **Optimal Approach**: 
    - **Logic**: To minimize the elements efficiently, always pair the current smallest available number with the current largest available number. Sort the array and use two pointers (`left` and `right`). In each step, the operation results in $\max(nums[left], nums[right])$. By pairing the smallest with the largest, we "waste" the smallest element to preserve the largest, effectively simulating the transformation process.
    - **Time Complexity**: $O(n \log n)$ due to sorting.
    - **Space Complexity**: $O(1)$ or $O(\log n)$ depending on the sorting implementation.
- **The 'Aha' Moment**: The operation $\max(a, b)$ implies that the larger value always survives, suggesting that sorting the input allows us to predictably control which values are eliminated.
- **Summary**: Sort the array and use two pointers to pair the smallest and largest elements to greedily satisfy the transformation.

---