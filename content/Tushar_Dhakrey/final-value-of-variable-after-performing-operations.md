---
title: "Final Value of Variable After Performing Operations"
slug: final-value-of-variable-after-performing-operations
date: "2026-07-11"
---

# My Solution
~~~java
class Solution {
    public int finalValueAfterOperations(String[] operations) {
        int ans = 0;
        int n = operations.length;
        for(int i=0;i<n;i++){
            if(operations[i].equals("--X") || operations[i].equals("X--")){
                ans -= 1;
            }
            else{
                ans += 1;
            }
        }
        return ans;
    }
}
~~~

# Submission Review
## Approach
- **Technique:** Simple iteration and conditional logic (Greedy).
- **Optimality:** Optimal. The problem requires inspecting every operation exactly once to determine the final state of the variable.

## Complexity
- **Time Complexity:** $O(n)$, where $n$ is the number of operations, as we perform a constant time string check for each element.
- **Space Complexity:** $O(1)$, as we only use a single integer accumulator.

## Efficiency Feedback
- The current implementation is efficient. 
- **Optimization:** In Java, `String.equals()` is slightly slower than inspecting a specific character. Since all operations that increment the value contain a `+` character (e.g., `++X`, `X++`) and decrement operations contain a `-`, you could check `operations[i].charAt(1) == '+'` to determine the increment/decrement, reducing the number of string comparisons.

## Code Quality
- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Good. The method follows standard competitive programming patterns for Java.
- **Naming:** Good. The variable names `ans` and `operations` clearly convey their purpose.
- **Improvements:**
    - The `n` variable is redundant; you can iterate using an enhanced for-loop (`for (String op : operations)`) to make the code cleaner.
    - As mentioned in efficiency, checking a single character at index 1 is more performant than performing full string equality checks.

```java
// Suggested cleaner version:
public int finalValueAfterOperations(String[] operations) {
    int ans = 0;
    for (String op : operations) {
        if (op.charAt(1) == '+') {
            ans++;
        } else {
            ans--;
        }
    }
    return ans;
}
```

---

# Question Revision
### Revision Report: Final Value of Variable After Performing Operations

**Pattern:** Iterative Simulation / State Tracking

**Brute Force:**
Store the operations in an array and iterate through them one by one. Use a conditional `if/else` block to increment or decrement an integer variable based on the presence of `+` or `-` in the string.

**Optimal Approach:**
Observe that the middle character of each string determines the operation: `++X` and `X++` both increment, while `--X` and `X--` both decrement. Simply check the middle character (index 1) of each string to update the result.
*   **Time Complexity:** $O(n)$, where $n$ is the number of operations.
*   **Space Complexity:** $O(1)$, as we only maintain a single integer counter.

**The 'Aha' Moment:**
Since every valid operation string has the operator in the middle index, checking `s[1]` allows you to identify the intent without parsing the entire string.

**Summary:**
When string patterns have fixed positions for operators, use index-based lookups to skip redundant parsing and perform constant-time updates.

---