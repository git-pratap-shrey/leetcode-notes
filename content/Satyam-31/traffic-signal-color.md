---
title: "Traffic Signal Color"
slug: traffic-signal-color
date: "2026-04-11"

---
---

# My Solution
~~~cpp
class Solution {
public:
    string trafficSignal(int timer) {
        if(timer==0) return "Green";
        if(timer==30) return "Orange";
        if(timer>30 && timer<=90) return "Red";

        return "Invalid";
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Simple conditional branching (if-else logic).
*   **Optimality:** Optimal for the logic provided. The time complexity is $O(1)$ and space complexity is $O(1)$.

## Complexity
*   **Time Complexity:** $O(1)$ - Constant number of comparisons.
*   **Space Complexity:** $O(1)$ - No additional data structures used.

## Efficiency Feedback
*   **Runtime/Memory:** Extremely efficient. There is no scope for optimization in terms of algorithmic performance.
*   **Edge Cases:** The current implementation fails to account for negative `timer` values (which are caught by the "Invalid" return, which is correct), but it is worth ensuring whether the problem constraints guarantee non-negative input.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. Using a clean return structure is appropriate for this simple logic.
*   **Naming:** Good. `trafficSignal` and `timer` are descriptive and standard.
*   **Concrete Improvements:**
    *   **Consistency:** If the timer logic follows a cycle (e.g., repeating every 90 seconds), consider using the modulo operator (`timer % 90`). As currently written, the function only handles a static range of [0, 90].
    *   **Style:** Using an `if-else if-else` chain instead of multiple `if` statements followed by a final `return` is generally cleaner and idiomatic in C++, though the compiler will optimize both to the same assembly.

```cpp
// Suggested refactor for minor stylistic improvement
string trafficSignal(int timer) {
    if (timer == 0) return "Green";
    if (timer == 30) return "Orange";
    if (timer > 30 && timer <= 90) return "Red";
    return "Invalid";
}
```

---
---


# Question Revision
### Revision Report: Traffic Signal Color (Cyclic State)

**Pattern:** Modular Arithmetic / State Machine

**Brute Force:**
Store the sequence in a list and iterate using an index pointer that resets to 0 upon reaching the list length. 
*   **Time Complexity:** $O(n)$ for $n$ operations.
*   **Space Complexity:** $O(1)$ (fixed sequence storage).

**Optimal Approach:**
Use the modulo operator (`%`) to map the current state or time step to the circular sequence index. By calculating `index = (current_step + offset) % total_states`, you eliminate the need for conditional `if/else` logic or manual index resets.
*   **Time Complexity:** $O(1)$ per query.
*   **Space Complexity:** $O(1)$.

**The 'Aha' Moment:**
Whenever a process repeats in a fixed, recurring cycle of length $K$, the modulo operator is the direct mathematical substitute for conditional branching.

**Summary:**
Use the modulo operator to wrap indices when dealing with periodic, repeating sequences to avoid manual bound checking.

---
