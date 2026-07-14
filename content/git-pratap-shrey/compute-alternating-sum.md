---
title: "Compute Alternating Sum"
slug: compute-alternating-sum
date: "2026-07-14"
---

# My Solution
~~~cpp
class Solution {
public:
    int alternatingSum(vector<int>& nums) {
        bool flag = true;
        int sum = 0;

        for(int _ : nums){
            if(flag){
                sum += _;
            }
            else{
                sum -= _;
            }

            flag = !flag;
        }

        return sum;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Single-pass iterative traversal using a toggle boolean.
- **Optimality**: Optimal. The problem requires visiting every element once to compute the sum.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the size of the input vector.
- **Space Complexity**: $O(1)$, as it uses a constant amount of extra space regardless of input size.

## Efficiency Feedback
- The implementation is maximally efficient for this problem. No further optimizations are required.

## Code Quality
- **Readability**: Good. The logic is simple and easy to follow.
- **Structure**: Good. Standard iterative approach.
- **Naming**: Poor. Using `_` as the iterator variable name is unconventional and non-descriptive for a value that is actively used in a calculation; typically, `_` denotes an unused variable. `flag` is overly generic.
- **Concrete Improvements**:
    - Replace `_` with a descriptive name like `val` or `num`.
    - Replace `flag` with a more descriptive name like `isPositive` or `shouldAdd`.

---

# Question Revision
### Revision Report: Compute Alternating Sum

**Pattern:** Linear Scan / Simulation

**Brute Force:** Iterate through the collection, maintaining a boolean flag or counter to track whether the current element should be added or subtracted, updating the total sum at each step.

**Optimal Approach:**
*   **Logic:** Traverse the array once. Use the index parity (`index % 2`) or a sign multiplier (`sign *= -1`) to determine the operation for the current element.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The word "alternating" signals a state flip that occurs exactly once per iteration.

**Summary:** Iterate through the sequence once, toggling the operator between addition and subtraction based on the current index.

---