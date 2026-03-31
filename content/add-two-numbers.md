### Revision Report: Add Two Numbers

**Pattern:** Linked List Traversal / Simulation

**Brute Force:**
Convert both linked lists into integers (by traversing and multiplying by powers of 10), sum them, and create a new linked list from the resulting digits. This fails for large numbers that exceed integer overflow limits.

**Optimal Approach:**
Traverse both lists simultaneously from left to right (least significant digit first), adding digits along with a `carry` variable. Create new nodes for the sum modulo 10 and propagate the carry to the next position.
*   **Time Complexity:** $O(\max(N, M))$ where $N$ and $M$ are lengths of the lists.
*   **Space Complexity:** $O(\max(N, M))$ to store the result.

**The 'Aha' Moment:**
The digits are already stored in **reverse order**, which aligns perfectly with the standard manual addition algorithm that processes from right to left (the ones place).

**Summary:**
When digits are stored in reverse, treat the linked list as a stream and simulate grade-school addition using a single `carry` variable.
