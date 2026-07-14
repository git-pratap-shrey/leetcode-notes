---
title: "Minimum Element After Replacement With Digit Sum"
slug: minimum-element-after-replacement-with-digit-sum
date: "2026-05-29"
---

# My Solution
~~~c
int sum(int x){
    int m;
    int s=0;
    while(x!=0){
        m=x%10;
        s=s+m;
        x=x/10;
    }
    return s;
}

int minElement(int* nums, int numsSize) {
    int curr;
    int min=INT_MAX;
    for(int i=0;i<numsSize;i++){
        curr=sum(nums[i]);
        min=(min>curr)?curr:min;
        
    }
    return min;
    
}
~~~

# Submission Review
## Approach
- **Technique:** Iterative scan with a helper function to compute the digit sum of each element.
- **Optimality:** Optimal. Each element must be visited once, and the digit sum is the required transformation.

## Complexity
- **Time Complexity:** $O(n \cdot \log_{10}(m))$, where $n$ is `numsSize` and $m$ is the maximum value in `nums`. The logarithmic factor comes from the number of digits in each integer.
- **Space Complexity:** $O(1)$.

## Efficiency Feedback
- The runtime is optimal.
- Memory usage is minimal.
- No meaningful optimizations are possible as the bottleneck is the required traversal of the input array.

## Code Quality
- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Good. Logic is properly decoupled between the digit sum calculation and the minimum search.
- **Naming:** Moderate. `sum` is a generic name; `digitSum` would be more descriptive. `min` is acceptable but often overlaps with macro/function names in larger C projects.
- **Concrete Improvements:**
    - **Missing Header:** The code uses `INT_MAX` but does not include `<limits.h>`, which will cause a compilation error.
    - **Const Correctness:** The input array `int* nums` should be marked as `const int* nums` to indicate it is not modified.
    - **Input Handling:** The code assumes `x` is non-negative. If negative numbers are possible, `abs(x)` should be used inside the `sum` function.

---

# Question Revision
### Revision Report: Minimum Element After Replacement With Digit Sum

**Pattern:** Simulation / Greedy

**Brute Force:**
Iteratively replace every element in the array with its digit sum until no further reductions are possible for any element, then identify the minimum/maximum as required.

**Optimal Approach:**
Since the digit sum of a number reduces its magnitude exponentially (e.g., $10^9 \to 81 \to 9$), the process converges to a stable value (digital root) in very few steps. For each element, simulate the digit sum replacement until the value stabilizes or satisfies the problem's termination condition.

*   **Time Complexity:** $O(n \cdot \log_{10}(\max(A)))$ — Each number is processed a constant number of times ($\approx 3$ times for $10^9$).
*   **Space Complexity:** $O(1)$ — Only a few variables are used for summation.

**The 'Aha' Moment:**
The rapid convergence of digit sums means that regardless of the input size, any number becomes a single digit almost immediately, turning a potentially complex optimization into a simple simulation.

**Summary:**
Exploit the logarithmic shrinkage of digit sums to simulate replacements until convergence.

---