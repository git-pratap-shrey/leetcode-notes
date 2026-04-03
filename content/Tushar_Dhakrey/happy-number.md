---
title: "Happy Number"
slug: happy-number

---
---

# My Solution
~~~java
class Solution {
    public boolean isHappy(int n) {
        int slow = n;
        int fast = n;
        do{
            slow = findsquare(slow);
            fast = findsquare(findsquare(fast));
        }while(slow != fast);
        if(slow==1){
            return true;
        }
        return false;
    }
    private int findsquare(int number){
        int ans = 0;
        while(number>0){
            int rem = number%10;
            ans += rem*rem;
            number /= 10;
        }
        return ans;
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Floyd’s Cycle-Finding Algorithm (Tortoise and Hare).
*   **Optimality:** Optimal. It detects cycles in the sequence of digit-square sums without requiring $O(N)$ extra space for a `HashSet`.

## Complexity
*   **Time Complexity:** $O(\log n)$. The number of digits reduces rapidly, and the sequence enters a cycle or hits 1 very quickly (the maximum sum for a 3-digit number like 999 is 243, limiting the state space).
*   **Space Complexity:** $O(1)$. It uses constant extra space, which is an improvement over the $O(\log n)$ space required for a hash-based approach.

## Efficiency Feedback
*   **Performance:** Excellent. By avoiding object allocation (like a `HashSet<Integer>`), this implementation minimizes GC pressure and maximizes cache locality.
*   **Constraint Handling:** The approach handles the nature of the problem (infinite cycles) efficiently by utilizing the properties of functional graphs.

## Code Quality
*   **Readability:** Good. The logic is straightforward and standard for this algorithm.
*   **Structure:** Good. Modular design with the `findsquare` helper method keeps the main loop clean.
*   **Naming:** Moderate. `findsquare` is slightly misleading; `getSumOfSquares` would be more accurate as it sums the squares of the digits rather than finding the square of the number itself.
*   **Concrete Improvements:**
    *   **Simplification:** The `if` block at the end can be reduced to a single line: `return slow == 1;`.
    *   **Encapsulation:** The helper method `findsquare` could be marked `static` since it does not rely on instance state.

---
---


# Question Revision
### Revision Report: Happy Number

**Pattern:** Two Pointers (Cycle Detection)

**Brute Force:** Calculate the sum of squares of digits repeatedly. Use a `HashSet` to store every result encountered to detect infinite loops.
*   **Time:** $O(\log n)$ per number (number of digits grows logarithmically).
*   **Space:** $O(\log n)$ to store history in the set.

**Optimal Approach:** Use Floyd’s Cycle-Finding Algorithm ("Tortoise and Hare"). Assign a `slow` pointer to the result and a `fast` pointer to the result of the result. If they meet at 1, it’s a happy number; if they meet elsewhere, a cycle exists.
*   **Time:** $O(\log n)$ (constant factor overhead, but effectively logarithmic).
*   **Space:** $O(1)$ (no extra memory needed for tracking history).

**The 'Aha' Moment:** The problem implies an infinite sequence of transformations, and the possibility of a repeating loop is a classic signal to use cycle detection.

**Summary:** Whenever a sequence of operations could result in a repeating state, use two pointers to detect a cycle in constant space.

---
