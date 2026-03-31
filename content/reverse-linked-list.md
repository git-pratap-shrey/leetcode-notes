### Revision Report: Reverse Linked List

**Pattern:** Iterative Pointer Manipulation

**Brute Force:**
Store all node values in an array, traverse the list again to overwrite values in reverse order, or create a new linked list by traversing the original in reverse.
*   **Complexity:** $O(n)$ time, $O(n)$ space.

**Optimal Approach:**
Use three pointers (`prev`, `curr`, `next`) to redirect the `next` reference of each node to its predecessor while iterating forward.
1. Initialize `prev = null`, `curr = head`.
2. Save the next node: `nextTemp = curr.next`.
3. Reverse the link: `curr.next = prev`.
4. Advance pointers: `prev = curr`, `curr = nextTemp`.
*   **Complexity:** $O(n)$ time, $O(1)$ space.

**The 'Aha' Moment:**
When you realize that reversing a list only requires changing the direction of the `next` pointer, you stop thinking about "moving the nodes" and start thinking about "reassigning the links."

**Summary:**
To reverse a linked list, use a temporary variable to hold the next node while you flip the current node's pointer to point backward.
