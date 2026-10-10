---
title: "Rotate List"
slug: rotate-list
date: "2026-10-08"
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
    ListNode* rotateRight(ListNode* head, int k) {
        if (head == NULL || head->next == NULL) return head;

        ListNode* p = head;
        int c = 1;
        while (p->next != NULL) {      
            c++;
            p = p->next;
        }

        k = k % c;
        if (k == 0) return head;

        ListNode* h = head;
        for (int i = 1; i < c - k; i++) {   
            h = h->next;
        }

        ListNode* newhead = h->next;
        h->next = NULL;     
        p->next = head;     

        return newhead;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Linked List Manipulation. The solution calculates the length of the list, makes it circular by connecting the tail to the head, and then breaks the circle at the $(n-k)$-th node.
- **Optimality**: Optimal. It requires a linear scan to determine length and a partial scan to find the pivot point.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes. The list is traversed at most twice.
- **Space Complexity**: $O(1)$. Only a few pointer variables are used regardless of input size.

## Efficiency Feedback
- **Runtime**: Very efficient. The use of `k % c` prevents unnecessary rotations when $k \ge N$.
- **Memory**: Minimal footprint as it performs in-place pointer redirection.

## Code Quality
- **Readability**: Good. The logic is straightforward and follows a logical sequence.
- **Structure**: Good. Edge cases (empty list, single node, $k=0$) are handled at the start.
- **Naming**: Moderate. Variable names are overly terse:
    - `c` $\rightarrow$ `length`
    - `p` $\rightarrow$ `tail`
    - `h` $\rightarrow$ `pivot` or `newTail`
- **Improvements**: 
    - Consider using `nullptr` consistently instead of `NULL` for modern C++ standards.
    - The loop `for (int i = 1; i < c - k; i++)` is correct but requires careful indexing; descriptive naming for the loop boundary would improve maintainability.

---

# Question Revision
# Revision Report: Rotate List

- **Pattern:** Linked List Manipulation (Circular Connection)
- **Brute Force:** 
    - Perform the rotation $k$ times. In each iteration, find the second-to-last node, set it to `null`, and move the original last node to the head. 
    - **Complexity:** $O(k \times n)$ time.
- **Optimal Approach:** 
    1. **Calculate Length:** Traverse the list to find the length $n$ and get a reference to the tail.
    2. **Normalize $k$:** Since rotating $n$ times results in the same list, use $k = k \pmod n$. If $k=0$, return the head.
    3. **Make it Circular:** Connect the tail to the head to form a ring.
    4. **Find New Breakpoint:** The new tail is located at position $(n - k)$ from the start. Move $n-k$ steps from the old head.
    5. **Break the Ring:** Set the `next` of the new tail as the new head, then set the new tail's `next` to `null`.
    - **Time Complexity:** $O(n)$
    - **Space Complexity:** $O(1)$
- **The 'Aha' Moment:** The realization that rotating a list is simply breaking a circular linked list at a specific offset $(n - k)$.
- **Summary:** Turn the list into a circle, move $n-k$ steps, and break the connection to establish the new head and tail.

---