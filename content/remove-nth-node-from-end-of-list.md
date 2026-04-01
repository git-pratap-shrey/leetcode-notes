### Revision Report: Remove Nth Node From End of List

**Pattern:** Two Pointers (Fast & Slow)

**Brute Force:**
1. Traverse the entire list to calculate its total length $L$.
2. Calculate the target index from the start: $L - n$.
3. Traverse the list a second time to reach the $(L - n - 1)^{th}$ node and update its `next` pointer to skip the target node.
4. **Complexity:** Time $O(L)$, Space $O(1)$.

**Optimal Approach:**
1. Initialize two pointers (`fast` and `slow`) at a dummy node pointing to the head.
2. Advance the `fast` pointer $n+1$ steps ahead to create a gap of $n$ between them.
3. Move both pointers simultaneously until `fast` reaches the end.
4. The `slow` pointer will now rest exactly at the node *preceding* the one to be removed.
5. **Complexity:** Time $O(L)$, Space $O(1)$ (One-pass).

**The 'Aha' Moment:**
When a problem asks for the "Nth from the end" without knowing the list length, use a fixed-gap pointer offset to find the target in a single pass.

**Summary:**
Use a "lead" pointer to create a $N$-node buffer so the trailing pointer naturally halts at the removal point.
