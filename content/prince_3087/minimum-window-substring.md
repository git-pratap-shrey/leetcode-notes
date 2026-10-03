---
title: "Minimum Window Substring"
slug: minimum-window-substring
date: "2026-09-13"
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
    // Reverse a l-list.
    ListNode* reverseList(ListNode* head) {
        if(!head){
            return NULL;
        }
        ListNode* ptr2 = head->next;        
        ListNode* ptr1 = head;

        while(ptr2){
            head->next = ptr2->next;
            ptr2->next = ptr1;

            ptr1 = ptr2;

            ptr2 = head->next;
        }

        return ptr1;
    }
    
    // 2nd middle if even.
    ListNode* middleNode(ListNode* head) { 
        ListNode* fast = head,* slow = head;

        while(fast){
            if(!fast->next){
                break;
            }
            fast = fast->next->next;
            slow = slow->next;
        }

        return slow;
    }
    
    void reorderList(ListNode* head) {
        ListNode* middle = middleNode(head);
        ListNode* ptr2 = reverseList(middle->next);
        middle->next = NULL;

        ListNode* ptr1 = head;
        
        while(ptr2 && ptr1){
            // cout<<ptr1->val<<" "<<ptr2->val<<endl;
            ListNode* temp = ptr2->next;
            ptr2->next = ptr1->next;
            ptr1->next = ptr2;

            ptr1 = ptr2->next;
            ptr2 = temp;
        }
    }
};
~~~

# Submission Review
## Approach
- **Technique**: The code implements a three-step linked list manipulation: finding the middle node (Slow/Fast pointers), reversing the second half of the list, and merging the two halves in an alternating pattern.
- **Optimality**: This is the optimal approach for the **Reorder List** problem (though the prompt incorrectly labels the problem as "Minimum Window Substring"). It achieves the result in a single pass for each phase.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes. Finding the middle, reversing, and merging each take linear time.
- **Space Complexity**: $O(1)$. The operations are performed in-place.

## Efficiency Feedback
- **Runtime**: The implementation is efficient.
- **Observation**: In `reverseList`, the pointer manipulation is slightly unconventional (using `head->next` to track the remaining list), but it functions correctly.
- **Observation**: The `middleNode` logic correctly identifies the second middle node for even-length lists, which is necessary for the split.

## Code Quality
- **Readability**: Moderate. The logic in `reverseList` is non-standard, making it harder to follow than the classic three-pointer reverse.
- **Structure**: Good. The solution is modularized into helper functions.
- **Naming**: Moderate. `ptr1` and `ptr2` are generic; names like `curr` and `next` or `left` and `right` would be more descriptive.
- **Critical Error**: The provided code is a solution for **"Reorder List"**, but the prompt identifies the problem as **"Minimum Window Substring"**. The code does not address the problem stated in the prompt title.

## Concrete Improvements
1. **Standardize Reverse**: Use a standard three-pointer reverse for better maintainability:
   ```cpp
   ListNode *prev = nullptr, *curr = head;
   while (curr) {
       ListNode* next = curr->next;
       curr->next = prev;
       prev = curr;
       curr = next;
   }
   return prev;
   ```
2. **Null Check**: The `if(!head)` check in `reverseList` is good, but `middleNode` assumes `head` is not null; adding a guard there would increase robustness.

---

# Question Revision
# Revision Report: Minimum Window Substring

- **Pattern:** Sliding Window (Two Pointers)
- **Brute Force:** Generate all possible substrings of the input string $S$, check if each contains all characters of $T$ using a frequency map, and track the minimum length.
- **Optimal Approach:** 
    - Use two pointers (`left`, `right`) to create a window. 
    - Expand `right` until the window contains all required characters from $T$ (tracked via a `needed` count and frequency map).
    - Once the window is valid, contract `left` to shrink the window as much as possible while maintaining validity.
    - Update the minimum length whenever a smaller valid window is found.
    - **Time Complexity:** $O(S + T)$ — Each character is visited at most twice.
    - **Space Complexity:** $O(K)$ — Where $K$ is the size of the character set (e.g., 52 for English letters).
- **The 'Aha' Moment:** When asked for the "minimum/longest substring" that satisfies a specific character requirement, it is a classic trigger for the Sliding Window pattern.
- **Summary:** Expand the right pointer to find a valid window, then contract the left pointer to minimize it.

---