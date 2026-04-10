---
title: "Palindrome Linked List"
slug: palindrome-linked-list
date: "2026-04-10"

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
class Solution {
public:
    bool isPalindrome(ListNode* head) {
        unordered_map<int,int> mp;

        struct ListNode* slow=head;
        struct ListNode* fast=head;
        int count=0;
        int len=0;

        while(fast!=NULL && fast->next!=NULL){
            mp[count]=slow->val;
            count++;
            len+=2;
            slow=slow->next;
            fast=fast->next->next;
        }
        if(fast==NULL) 
        {len--;}
        else{
            slow=slow->next;
            count++;
        }
        
        if(len==0) return true;

        while(slow!=NULL){
            if(mp[len-count]!=slow->val) return false;
            count++;
            slow=slow->next;
        }


        return true;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Two-pointer traversal combined with an `unordered_map` to store the first half of the linked list.
*   **Optimal:** No. The optimal approach uses $O(1)$ auxiliary space by reversing the second half of the linked list in-place. This solution uses $O(N)$ space.

## Complexity
*   **Time Complexity:** $O(N)$ on average (due to hash map insertions/lookups).
*   **Space Complexity:** $O(N)$ to store half the linked list in the `unordered_map`.

## Efficiency Feedback
*   **Bottleneck:** The use of `std::unordered_map` adds significant overhead due to hashing operations and potential collisions. A `std::vector<int>` or `std::stack<int>` would be more efficient for storing the sequence if extra space is permitted.
*   **Logic Flaw:** The length calculation (`len`) and indexing logic are fragile. Specifically, the manual calculation of `len` and `count` is prone to off-by-one errors depending on the parity of the list size.

## Code Quality
*   **Readability:** Moderate. The variable names and logic flow are somewhat confusing, making it difficult to verify correctness without tracing.
*   **Structure:** Poor. The logic is overly complex for a standard linked list problem. Using an `unordered_map` to simulate an array index is non-idiomatic C++.
*   **Naming:** Moderate. `count` and `len` are ambiguous given their roles in the algorithm.
*   **Concrete Improvements:**
    *   **Space Optimization:** Instead of a map, reverse the second half of the list in-place. This reduces space complexity to $O(1)$.
    *   **Data Structures:** If you must use extra space, a `std::vector<int>` is faster than an `std::unordered_map` for indexed access.
    *   **Redundancy:** The `if(len == 0)` check is unnecessary; the loop conditions naturally handle edge cases like empty lists.
    *   **Redundant Type Qualifiers:** `struct ListNode*` is unnecessary in C++; `ListNode*` is sufficient.

---
---


# Question Revision
### Revision Report: Palindrome Linked List

**Pattern:** Two Pointers / Linked List Manipulation (Fast & Slow Pointers)

**Brute Force:**
Convert the linked list into an array/list, then use two pointers to check if the array is a palindrome.
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**Optimal Approach:**
1. Use **Fast & Slow pointers** to find the midpoint of the list.
2. **Reverse** the second half of the linked list in-place.
3. Compare the first half and the reversed second half node-by-node.
4. (Optional) Reverse the second half back to restore the original list.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:**
When a problem requires bidirectional traversal on a singly linked list without using extra space, you must split the list and reverse the back half to turn it into a mirror image.

**Summary:** 
To check a palindrome in a singly linked list with $O(1)$ space, reach the middle, reverse the tail, and compare it against the head.

---
