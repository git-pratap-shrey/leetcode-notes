---
title: "Minimum Number of Operations to Move All Balls to Each Box"
slug: minimum-number-of-operations-to-move-all-balls-to-each-box
date: "2026-08-22"
---

# My Solution
~~~java
class Solution {
    public int[] minOperations(String boxes) {
        int n = boxes.length();
        int[] moves = new int[n];
        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                if(boxes.charAt(j)=='1'){
                    moves[i] += Math.abs(i-j);
                }
            }
        }
        return moves;
        
    }
}
~~~

# Submission Review
## Approach
* **Technique:** Brute force. It iterates through every index and calculates the distance to every other index containing a '1'.
* **Optimality:** Not optimal. The problem can be solved in $O(n)$ time using a two-pass prefix sum approach.

## Complexity
* **Time Complexity:** $O(n^2)$, where $n$ is the length of the string. The nested loops perform a calculation for each pair of indices.
* **Space Complexity:** $O(1)$ extra space (excluding the result array).

## Efficiency Feedback
* **Bottleneck:** The nested $O(n^2)$ traversal is inefficient for large constraints. 
* **Optimization:** You can optimize this to $O(n)$ by maintaining a running count of balls encountered so far and the total operations required. In the first pass (left-to-right), calculate operations for all balls to the left; in the second pass (right-to-left), calculate operations for all balls to the right.

## Code Quality
* **Readability:** Good. The logic is straightforward and easy to follow.
* **Structure:** Good. Simple, functional structure suitable for small inputs.
* **Naming:** Good. `moves` and `boxes` are descriptive.
* **Concrete Improvements:** 
    * To achieve $O(n)$ complexity:
        1. Perform a left-to-right pass: keep a counter of balls seen so far (`count`) and the `currentSum` of moves. At each index, `moves[i] += currentSum`, then update `currentSum += count`.
        2. Perform a right-to-left pass similarly to account for balls on the right.
    * Use `toCharArray()` once at the start if the string is very long to avoid repetitive `charAt()` calls (though JIT optimization often mitigates this).

---

# Question Revision
### Revision Report: Minimum Number of Operations to Move All Balls to Each Box

**Pattern:** Prefix Sums / Mathematical Optimization

**Brute Force:** 
For each box $i$, iterate through every other box $j$. If $boxes[j] == '1'$, add $|i - j|$ to the total count for position $i$. 
*   **Time Complexity:** $O(n^2)$
*   **Space Complexity:** $O(1)$ (excluding output array)

**Optimal Approach:**
Observe that the total moves for box $i$ can be derived from box $i-1$. By calculating the number of balls to the left and right, we can update the cost in $O(1)$ transitions. Perform two passes: 
1. **Left-to-Right:** Track `count` of balls encountered so far and `moves` required to shift them to the current position.
2. **Right-to-Left:** Perform the same logic in reverse and add to the existing results.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$ (excluding output array)

**The 'Aha' Moment:**
When a problem asks for a value based on the relative distance to *all* other elements, realize that your result for index $i$ is mathematically dependent on your result for $i-1$.

**Summary:** 
Whenever a global calculation depends on linear offsets, use two passes to accumulate state rather than recomputing the distance from scratch.

---