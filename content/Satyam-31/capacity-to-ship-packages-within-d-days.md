---
title: "Capacity To Ship Packages Within D Days"
slug: capacity-to-ship-packages-within-d-days
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
    ListNode* removeNthFromEnd(ListNode* head, int n) {
         ListNode* dummy=new ListNode(0);
          dummy->next=head;
           ListNode* fast=dummy;
            ListNode* slow=dummy;
            for(int i=0;i<n;i++){
                fast=fast->next;
            }

            while(fast->next != NULL){
                slow=slow->next;
                fast=fast->next;
            }

            slow->next=slow->next->next;
            return dummy->next;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Two-pointer (Fast and Slow) approach.
- **Optimality**: Optimal. It solves the problem in a single pass over the linked list.
- **Critical Error**: The code provided solves the problem **"Remove Nth Node From End of List"**, but the prompt identifies the problem as **"Capacity To Ship Packages Within D Days"**. The logic is entirely unrelated to the problem title.

## Complexity
- **Time Complexity**: $O(L)$, where $L$ is the length of the linked list. The list is traversed once.
- **Space Complexity**: $O(1)$. Only a constant amount of extra space is used for pointers.

## Efficiency Feedback
- The implementation is efficient for the "Remove Nth Node" problem. 
- **Memory Leak**: The `dummy` node is allocated on the heap using `new` but is never `deleted`, leading to a small memory leak.

## Code Quality
- **Readability**: Moderate. The logic is clear, but the indentation is inconsistent.
- **Structure**: Moderate. It lacks memory management (deletion of dummy node).
- **Naming**: Good. `fast`, `slow`, and `dummy` are standard conventions for this algorithm.
- **Concrete Improvements**:
    1. Use `ListNode dummy(0);` on the stack instead of `new ListNode(0)` to avoid manual memory management and leaks.
    2. Fix indentation for better maintainability.
    3. Ensure the problem title matches the implementation.

---

# Question Revision
# Revision Report: Capacity To Ship Packages Within D Days

- **Pattern:** Binary Search on Answer
- **Brute Force:** Start with the maximum single package weight as the initial capacity. Increment the capacity by 1 and simulate the shipping process until the total days required $\le D$.
- **Optimal Approach:** 
    - **Logic:** The search space for the capacity is defined by `low = max(weights)` (cannot be smaller than the heaviest item) and `high = sum(weights)` (worst case: ship everything in one day). Perform a binary search on this range. For each `mid` capacity, use a greedy helper function to count how many days are needed. If `days <= D`, the capacity is feasible; try a smaller capacity to find the minimum.
    - **Time Complexity:** $O(n \cdot \log(\text{sum} - \text{max}))$ where $n$ is the number of packages.
    - **Space Complexity:** $O(1)$.
- **The 'Aha' Moment:** When you need to find the "minimum possible maximum" (or vice versa) and the feasibility of a value is monotonic (if capacity $X$ works, $X+1$ also works).
- **Summary:** Use binary search on the range of possible capacities and a greedy check to verify if a specific capacity fits within $D$ days.

---