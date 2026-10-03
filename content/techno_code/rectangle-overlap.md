---
title: "Rectangle Overlap"
slug: rectangle-overlap
date: "2026-09-16"
---

# My Solution
~~~cpp
class Solution {
public:
    bool uniformArray(vector<int>& nums1) {
        return true;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Stub/Placeholder. The code provides a dummy function that always returns `true`.
- **Optimality:** Not optimal. It does not implement any logic to solve the "Rectangle Overlap" problem.

## Complexity
- **Time Complexity:** $O(1)$
- **Space Complexity:** $O(1)$
- **Bottleneck:** The code lacks implementation; it fails to perform any actual computation or check for overlaps.

## Efficiency Feedback
- The runtime is minimal because the code does nothing. It will fail all test cases that require actual logic.

## Code Quality
- **Readability:** Poor. The function name `uniformArray` and the parameter `vector<int>& nums1` are completely unrelated to a "Rectangle Overlap" problem.
- **Structure:** Poor. The class contains a method that does not align with the problem requirements.
- **Naming:** Poor. The naming is irrelevant to the problem context.
- **Improvements:** Completely rewrite the solution to accept rectangle coordinates and implement the overlap intersection logic.

---

# Question Revision
# Revision Report: Rectangle Overlap

- **Pattern:** Geometry / Coordinate Logic (Case Analysis)
- **Brute Force:** Check every possible integer coordinate point within both rectangles to see if any point is shared. Logic is inefficient as it depends on the size of the rectangles rather than their coordinates.
- **Optimal Approach:** Instead of checking for an overlap, identify the conditions where they **cannot** overlap. Two rectangles do not overlap if one is completely to the left, right, above, or below the other. The rectangles overlap if none of these "separation" conditions are true.
    - **Time Complexity:** $O(1)$
    - **Space Complexity:** $O(1)$
- **The 'Aha' Moment:** It is mathematically simpler to define the four scenarios where rectangles are separated than to define all the ways they can intersect.
- **Summary:** A rectangle overlap exists if and only if the maximum of the left edges is less than the minimum of the right edges, AND the maximum of the bottom edges is less than the minimum of the top edges.

---