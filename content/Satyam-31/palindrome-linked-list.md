---
title: "Palindrome Linked List"
slug: palindrome-linked-list
date: "2026-04-22"
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
        vector<int> ans;
        ListNode* p=head;
        while(p){
            ans.push_back(p->val);
            p=p->next;
        }
        int i=0;
        int j=ans.size()-1;
        while(i<=j){
            if(ans[i] != ans[j]) return false;
            i++;
            j--;
        }
        return true;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Vector conversion followed by a two-pointer palindrome check.
- **Optimality**: Suboptimal. While time-optimal, it fails to achieve the $O(1)$ space complexity possible by reversing the second half of the linked list in place.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the linked list. The list is traversed once to populate the vector, and the vector is traversed once to verify the palindrome.
- **Space Complexity**: $O(N)$ to store the linked list values in a `std::vector`.

## Efficiency Feedback
- **Memory**: The $O(N)$ space overhead is the primary bottleneck. For very large lists, this could lead to unnecessary memory pressure or allocation overhead.
- **Optimization**: To achieve $O(1)$ space, use the "slow and fast pointer" technique to find the middle, reverse the second half of the list, and compare it with the first half.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The separation between data extraction and validation is clear.
- **Naming**: Moderate. `ans` is a poor name for a container holding the list values; `values` or `elements` would be more descriptive.
- **Improvements**:
    - Use `ans.reserve(n)` if the list length were known to avoid multiple reallocations.
    - Consider using `std::equal` with reverse iterators for a more idiomatic C++ palindrome check.

---

# Question Revision
### Palindrome Linked List

**Pattern:** Two Pointers (Fast & Slow) + Linked List Reversal

**Brute Force:** 
Copy the linked list values into an array and use a standard two-pointer approach to check for a palindrome.
- **Time:** $O(n)$
- **Space:** $O(n)$

**Optimal Approach:** 
1. Use a **fast and slow pointer** to locate the middle of the list.
2. **Reverse** the second half of the linked list in place.
3. Compare the nodes of the first half and the reversed second half sequentially.
4. (Optional) Reverse the second half again to restore the original list structure.

- **Time:** $O(n)$
- **Space:** $O(1)$

**The 'Aha' Moment:** Since singly linked lists cannot be traversed backward, you must reverse the second half to create a meeting point for a symmetric comparison.

**Summary:** Find the middle, reverse the second half, and compare it to the first half.

---