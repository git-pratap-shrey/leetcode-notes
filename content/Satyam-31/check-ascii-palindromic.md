---
title: "Check ASCII Palindromic"
slug: check-ascii-palindromic
date: "2026-08-24"
---

# My Solution
~~~cpp
class Solution {
public:
    int minPenalty(int period, vector<int>& lights, vector<int>& arrivalTime) {
        int m=*max_element(lights.begin(),lights.end());
        int ans=0;
        for(int t:arrivalTime){
            int r=t%period;
            int w;
            if(r<m){
                w=0;
            }
            else{
                w=period-r;
            }
            ans=max(ans,w);
        }
        return ans;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Greedy/Direct Simulation.
*   **Optimal:** No. The solution assumes a simple modulo-based wait calculation, but it ignores the constraints of the problem (which usually involves minimizing a cumulative penalty or identifying a specific time point). The provided logic only calculates the *maximum* individual wait time across all arrivals, which rarely solves a "min penalty" objective.

## Complexity
*   **Time Complexity:** $O(N + L)$, where $N$ is the number of arrival times and $L$ is the number of lights.
*   **Space Complexity:** $O(1)$ (excluding input storage).

## Efficiency Feedback
*   **Bottleneck:** The logic is fundamentally flawed for a minimization problem. Even if the logic were correct for the problem's intent, it performs redundant `max_element` calls and iteration.
*   **Potential Improvement:** If this were a sliding window or binary search problem (common for "min penalty" tasks), the current linear scan would be replaced by sorting or prefix sums.

## Code Quality
*   **Readability:** Moderate. The code is compact but lacks comments explaining the intent behind the `w` calculation.
*   **Structure:** Poor. The logic is tightly coupled; it fails to account for cases where the arrival might occur during a light duration rather than just a period-based interval.
*   **Naming:** Poor. Variables `r`, `w`, and `m` are non-descriptive and violate clean coding practices.
*   **Concrete Improvements:**
    *   Rename `r` to `remainder`, `w` to `penalty`, and `m` to `maxLightDuration`.
    *   Ensure the logic handles the specific constraints of the problem (e.g., if a light is active, is the penalty 0 or is the wait time different?).
    *   Separate the calculation of the light duration from the arrival loop if possible.

---

# Question Revision
### Revision Report: Check ASCII Palindromic

**Pattern:** Two Pointers

**Brute Force:** 
Generate the reversed string, compare it to the original, and return equality.
*   **Time:** $O(n)$
*   **Space:** $O(n)$ (for the reversed string)

**Optimal Approach:**
Use two pointers starting at both ends of the string. Compare characters at `left` and `right` indices, moving inward until `left >= right`. If any characters mismatch, return `false`.
*   **Time:** $O(n)$
*   **Space:** $O(1)$ (in-place comparison)

**The 'Aha' Moment:**
The request for palindromic symmetry implies that outer elements must match inner elements, which is the textbook condition for a convergent two-pointer approach.

**Summary:**
Whenever a problem requires verifying symmetric properties, compare elements from both ends moving toward the center to achieve $O(1)$ space.

---