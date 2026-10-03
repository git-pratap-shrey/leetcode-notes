---
title: "Middle of the Linked List"
slug: middle-of-the-linked-list
date: "2026-10-03"
---

# My Solution
~~~cpp
class Solution {
public:
    int countCommas(int n) {
        return max(0,n-999);
    }
};
~~~

# Submission Review
## Approach
- **Technique**: None. The code implements a mathematical subtraction function (`countCommas`) that has no relation to the problem "Middle of the Linked List."
- **Optimality**: Not applicable. The solution is completely incorrect as it fails to address the problem requirements.

## Complexity
- **Time Complexity**: $O(1)$
- **Space Complexity**: $O(1)$
- **Bottleneck**: The logic is irrelevant to the problem; it does not traverse a linked list or find a middle element.

## Efficiency Feedback
- The runtime and memory are low because the code performs a single integer operation, but it provides a logically wrong answer for the given problem.

## Code Quality
- **Readability**: Poor. The function name `countCommas` and its logic are unrelated to the problem title.
- **Structure**: Poor. It lacks the necessary logic to handle `ListNode` structures or pointer manipulation.
- **Naming**: Poor. The method name does not describe any operation relevant to finding the middle of a list.
- **Improvements**: Complete rewrite required. Implement the "Slow and Fast Pointer" (Tortoise and Hare) algorithm to find the middle node of a linked list.

---

# Question Revision
# Revision Report: Middle of the Linked List

- **Pattern:** Two Pointers (Fast & Slow)
- **Brute Force:** 
    - Traverse the entire list once to count the total number of nodes ($N$).
    - Traverse a second time from the head and stop at index $\lfloor N/2 \rfloor$.
- **Optimal Approach:** 
    - Initialize two pointers, `slow` and `fast`, at the head.
    - Move `slow` by one step and `fast` by two steps in each iteration.
    - When `fast` reaches the end (null) or the last node, `slow` will be exactly at the middle.
    - **Time Complexity:** $O(n)$
    - **Space Complexity:** $O(1)$
- **The 'Aha' Moment:** Whenever you need to find a specific relative position (middle, cycle detection, or k-th from end) in a singly linked list without knowing the length, use two pointers moving at different speeds.
- **Summary:** Use a fast pointer (2x) and a slow pointer (1x) to find the midpoint of a linked list in a single pass.

---