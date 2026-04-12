---
title: "Angles of a Triangle"
slug: angles-of-a-triangle
date: "2026-04-12"

---
---

# My Solution
~~~cpp
class Solution {
public:
    vector<double> internalAngles(vector<int>& sides) {

        

        double a = sides[0], b = sides[1], c = sides[2];

        if (a + b <= c || a + c <= b || b + c <= a) {
            return {};
        }

        double A = acos((b*b + c*c - a*a) / (2*b*c)) * 180.0 / M_PI;
        double B = acos((a*a + c*c - b*b) / (2*a*c)) * 180.0 / M_PI;
        double C = acos((a*a + b*b - c*c) / (2*a*b)) * 180.0 / M_PI;

        vector<double> ans = {A, B, C};
        sort(ans.begin(), ans.end());

        return ans;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Law of Cosines.
*   **Optimal:** Yes. The approach directly applies the Law of Cosines to solve for the angles of a triangle given its side lengths, which is the standard mathematical method.

## Complexity
*   **Time Complexity:** $O(1)$. The operations are a constant number of arithmetic and trigonometric calculations.
*   **Space Complexity:** $O(1)$. Only a fixed-size vector is returned.

## Efficiency Feedback
*   **Performance:** The code is highly efficient. The use of standard library math functions (`acos`, `M_PI`) is sufficient for double-precision calculations.
*   **Numerical Stability:** The triangle inequality check `(a + b <= c)` is correct for identifying degenerate or invalid triangles. However, in floating-point arithmetic, very small differences (epsilon) might lead to precision issues, though this is negligible for standard competitive programming input constraints.

## Code Quality
*   **Readability:** Good. The logic is straightforward and follows standard mathematical notation.
*   **Structure:** Good. The logic flow is clean, with an early exit for invalid inputs.
*   **Naming:** Good. `a`, `b`, `c` correspond to side lengths, and `A`, `B`, `C` correspond to their respective opposite angles.
*   **Concrete Improvements:**
    *   **Include Header:** Ensure `<cmath>` and `<algorithm>` are included for `acos`, `M_PI`, and `sort`.
    *   **Sorting:** The requirement to return angles in sorted order is handled correctly by `std::sort`.
    *   **Precision:** If specific rounding (e.g., to 5 decimal places) is required by the problem statement, consider using `fixed` and `setprecision` if outputting, or `round()` if the internal values must be strictly formatted.

---
---


# Question Revision
### Revision Report: Angles of a Triangle

**Pattern:** Geometry / Fundamental Constraints

**Brute Force:** Calculate the missing angle by subtracting the two known angles from $180^\circ$ and use a conditional check to ensure all angles are positive and sum to $180^\circ$. 

**Optimal Approach:** 
Direct arithmetic calculation: `angle3 = 180 - (angle1 + angle2)`.
*   **Time Complexity:** $O(1)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
The realization that the sum of interior angles in a triangle is a geometric invariant ($180^\circ$) transforms a variable-finding problem into a simple algebraic equation.

**Summary:** 
When constrained by a fixed geometric property, reduce the problem to basic algebra rather than complex conditional logic.

---
