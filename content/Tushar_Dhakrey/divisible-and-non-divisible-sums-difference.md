---
title: "Divisible and Non-divisible Sums Difference"
slug: divisible-and-non-divisible-sums-difference
date: "2026-09-01"
---

# My Solution
~~~java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public int[] nodesBetweenCriticalPoints(ListNode head) {
        int[] ans = {-1,-1};
        ListNode prev = head;
        ListNode curr = head.next;
        int min = Integer.MAX_VALUE;
        int last = -1;
        int first = -1;
        int position = 1;
        while(curr.next!=null){
            if((curr.val>prev.val && curr.val>curr.next.val) || (curr.val<prev.val && curr.val<curr.next.val)){
                if(first==-1){
                    first = position;
                }
                else{
                    min = Math.min(min,position-last);
                }
                last = position;
            }
            prev = curr;
            curr = curr.next;
            position++;

        }
        if(first==last){
            return ans;
        }
        ans[0] = min;
        ans[1] = last-first;
        return ans;
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Iterative traversal (one pass) tracking local extrema (critical points).
*   **Optimality:** This is optimal ($O(N)$ time, $O(1)$ auxiliary space).

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the linked list. The algorithm visits each node exactly once.
*   **Space Complexity:** $O(1)$, as only a constant number of variables are used regardless of input size.

## Efficiency Feedback
*   **Performance:** The runtime is highly efficient for the problem constraints.
*   **Logic:** The use of `first`, `last`, and `position` pointers correctly calculates the distances between critical points without storing their indices in an array, saving space.

## Code Quality
*   **Readability:** Good. The logic flow is linear and easy to follow.
*   **Structure:** Good. The structure is standard for linked-list iteration in Java.
*   **Naming:** Moderate. While clear, variables like `first` and `last` could be renamed to `firstCriticalIndex` and `lastCriticalIndex` to improve clarity.
*   **Concrete Improvements:**
    *   **Boundary Handling:** The code correctly handles the case where fewer than two critical points exist via the `if(first==last)` check.
    *   **Style:** Consider adding a null check for `head` or `head.next` at the start to ensure robustness (though the problem constraints typically imply a valid list).
    *   **Clarity:** The variable `position` increments correctly to represent the index of the `curr` node. Using a comment to clarify that the first node is 0-indexed or 1-indexed (based on the problem's interpretation) would improve maintainability.

---

# Question Revision
### Revision Report: Divisible and Non-divisible Sums Difference

**Pattern:** Mathematical Optimization / Prefix Sum properties.

**Brute Force:** Iterate from 1 to $n$, check `i % m == 0` for every number, and maintain two separate running sums to subtract at the end.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**Optimal Approach:** Use the arithmetic series sum formula. Calculate the total sum of the range $[1, n]$ using $S = \frac{n(n+1)}{2}$. Identify the sum of multiples of $m$ ($sum\_divisible$) by calculating the sum of the sequence $m, 2m, \dots, km$ (where $k = \lfloor n/m \rfloor$). The result is $(S - sum\_divisible) - sum\_divisible$, which simplifies to $S - 2(sum\_divisible)$.
*   **Time:** $O(1)$
*   **Space:** $O(1)$

**The 'Aha' Moment:** Whenever you see a requirement to calculate sums over a large linear range based on divisibility, treat it as a mathematical series problem rather than a simulation task.

**Summary:** For range-based divisibility sums, use the arithmetic series formula $O(1)$ instead of iterating $O(n)$ elements.

---