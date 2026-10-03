---
title: "Longest Subarray Divisible by K with At Most One Negation I"
slug: longest-subarray-divisible-by-k-with-at-most-one-negation-i
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
    ListNode* reversell(ListNode*head){
        ListNode* prev=NULL;
        ListNode* curr=head;
        ListNode* next;
        while(curr != NULL){
            next=curr->next;
            curr->next=prev;
            prev=curr;
            curr=next;
        }
        return prev;
    }
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* dummy=new ListNode(-1);
        ListNode* temp=dummy;
        ListNode* p=reversell(l1);
        ListNode* q=reversell(l2);
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
        return reversell(dummy->next);
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Linked List manipulation. The code reverses two input linked lists, performs element-wise addition with carry propagation, and reverses the result back.
- **Optimality:** The logic is standard for "Add Two Numbers" where lists are most-significant-digit first. However, the solution is **completely irrelevant** to the stated problem ("Longest Subarray Divisible by K with At Most One Negation I"). The code solves a different problem entirely.

## Complexity
- **Time Complexity:** $O(N + M)$, where $N$ and $M$ are the lengths of the two linked lists. Each list is traversed a constant number of times.
- **Space Complexity:** $O(\max(N, M))$ to store the resulting linked list.

## Efficiency Feedback
- **Memory Overhead:** The use of `new ListNode` for every digit is standard for this problem, but the dummy node is not deleted, leading to a minor memory leak.
- **Redundancy:** The three separate `while` loops for $p$, $q$, and both can be consolidated into one `while(p || q || carry)` loop to reduce code duplication.

## Code Quality
- **Readability:** Moderate. The logic is easy to follow, but the disconnect between the problem title and the implementation is jarring.
- **Structure:** Moderate. It uses a helper function for reversal, which is good, but contains repetitive logic in the addition loops.
- **Naming:** Moderate. `reversell` is a typo (should be `reverseList`), and `temp`, `p`, `q` are generic but acceptable in this context.
- **Concrete Improvements:**
    1. **Correctness:** The code solves a linked list addition problem, not the subarray divisibility problem.
    2. **Refactoring:** Combine the three addition loops into a single loop:
       ```cpp
       while (p || q || carry) {
           int sum = (p ? p->val : 0) + (q ? q->val : 0) + carry;
           carry = sum / 10;
           temp->next = new ListNode(sum % 10);
           temp = temp->next;
           if (p) p = p->next;
           if (q) q = q->next;
       }
       ```
    3. **Memory:** Delete the `dummy` node before returning to avoid a leak.

---

# Question Revision
# Revision Report: Longest Subarray Divisible by K with At Most One Negation

### Pattern
**Prefix Sums + Hash Map (Remainder Tracking)**

### Brute Force
Iterate through all possible subarrays $(i, j)$. For each subarray, check if it is divisible by $K$ as-is, or if flipping the sign of exactly one element makes it divisible.
- **Complexity:** $O(n^3)$ or $O(n^2)$ with optimization.

### Optimal Approach
1. **Prefix Sums:** Maintain a running prefix sum $S_i \pmod K$.
2. **State Tracking:** Use a Hash Map to store the first occurrence of each remainder. To handle the "at most one negation," we track two states:
    - **State 0:** No elements negated yet.
    - **State 1:** One element negated.
3. **The Negation Logic:** If we negate an element $x$, the sum changes by $-2x$. Thus, for a subarray from $i+1$ to $j$ to be divisible by $K$ after negating $x$, we need:
   $(S_j - S_i - 2x) \equiv 0 \pmod K \implies S_i \equiv (S_j - 2x) \pmod K$.
4. **Execution:** Traverse the array, updating the prefix sum and checking the map for the required complement remainder to maximize $j - i$.

**Complexity:**
- **Time:** $O(n)$ — Single pass through the array.
- **Space:** $O(K)$ — To store the first occurrence of each possible remainder modulo $K$.

### The 'Aha' Moment
The phrase "divisible by $K$" combined with "subarray" almost always signals using **Prefix Sums modulo $K$** to transform a range sum problem into a point-lookup problem.

### Summary
Use a Hash Map to store the first index of prefix sum remainders, treating a single negation as a specific offset $(-2x)$ to the required remainder.

---