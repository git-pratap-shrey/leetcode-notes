---
title: "Intersection of Two Linked Lists"
slug: intersection-of-two-linked-lists
date: "2026-10-03"
---

# My Solution
~~~cpp
class Solution {
public:
    bool uniformArray(vector<int>& nums1) {
        return true;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Stub/Placeholder implementation.
- **Optimality:** Not optimal. The code does not implement the logic for the "Intersection of Two Linked Lists" problem. Instead, it defines a method `uniformArray` that always returns `true`, regardless of input.

## Complexity
- **Time Complexity:** $O(1)$
- **Space Complexity:** $O(1)$
- **Bottleneck:** The solution is logically incorrect as it fails to address the problem requirements.

## Efficiency Feedback
- The runtime is minimal because the code performs no actual computation or traversal of linked lists.

## Code Quality
- **Readability:** Poor. The method name (`uniformArray`) and the parameter type (`vector<int>`) are unrelated to the problem of intersecting linked lists.
- **Structure:** Poor. The class contains a method that does not match the required signature for the problem.
- **Naming:** Poor. The naming does not reflect the problem's intent.
- **Improvements:** 
    - Implement the actual intersection logic (e.g., using two pointers or a hash set).
    - Change the method signature to accept two linked list heads (`ListNode *headA, ListNode *headB`).
    - Remove the irrelevant `uniformArray` logic.

---

# Question Revision
# Revision Report: Intersection of Two Linked Lists

- **Pattern:** Two Pointers (Synchronized Traversal)
- **Brute Force:** Use a Hash Set to store all node references of the first list, then traverse the second list to find the first node that already exists in the set.
- **Optimal Approach:** 
    - Initialize two pointers, `pA` and `pB`, at the heads of the lists.
    - Traverse both lists. When a pointer reaches the end (`null`), redirect it to the head of the *opposite* list.
    - If they intersect, the pointers will meet at the intersection node after at most $m + n$ steps because they both travel the same total distance ($a + b + c$).
    - **Time Complexity:** $O(m + n)$
    - **Space Complexity:** $O(1)$
- **The 'Aha' Moment:** Since the lists have different lengths, switching heads effectively offsets the length difference, forcing both pointers to synchronize their distance from the intersection.
- **Summary:** Neutralize the length difference by having each pointer traverse both paths ($A \to B$ and $B \to A$) to meet at the intersection.

---