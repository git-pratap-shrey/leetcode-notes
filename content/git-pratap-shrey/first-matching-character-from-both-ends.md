---
title: "First Matching Character From Both Ends"
slug: first-matching-character-from-both-ends

---
---

# My Solution
~~~cpp
class Solution {
public:
    int firstMatchingIndex(string s) {
        for(int i = 0; i < (s.size() + 1)/ 2; i++){
            // cout<<i<<s.size()-i-1<<endl;
            if(s[i] == s[s.size()-i-1]){
                return i;
            }
        }


        return -1;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Linear iteration (two-pointer style).
*   **Optimality:** Optimal. It performs a single pass up to the midpoint, which is the necessary bound to check all symmetry constraints.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the length of the string. The loop runs at most $N/2$ times.
*   **Space Complexity:** $O(1)$, as it uses only a constant amount of extra space.

## Efficiency Feedback
*   The solution is efficient. 
*   **Optimization:** The loop condition `(s.size() + 1) / 2` correctly covers cases for both odd and even string lengths. Using `s.size()` (which is `size_t`) is correct, but beware that if `s` were empty, `s.size() - 1` could underflow if written incorrectly. Here, it is safe because the loop condition prevents execution for an empty string.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. Simple, clean implementation.
*   **Naming:** Moderate. `firstMatchingIndex` is descriptive, but `s` is a generic name (though standard in CP).
*   **Concrete Improvements:** 
    *   Add a check for empty input if necessary (though the current code handles it by returning -1).
    *   Remove the commented-out `cout` statement to keep the production code clean.
    *   Consider using `std::string_view` if passing strings by value to avoid unnecessary copying, though for this specific problem, `const string& s` would be the preferred signature.

```cpp
// Recommended signature for efficiency
int firstMatchingIndex(const string& s) {
    if (s.empty()) return -1;
    // ... rest of implementation
}
```

---
---


# Question Revision
### Revision Report: First Matching Character (Two Pointers)

**Pattern:** Two Pointers (Converging)

**Brute Force:**
Iterate through the string with a nested loop comparing every character $s[i]$ to every character $s[j]$ ($j > i$). 
*   **Time:** $O(n^2)$
*   **Space:** $O(1)$

**Optimal Approach:**
Initialize two pointers at opposite ends of the string (`left = 0`, `right = n - 1`). Move them toward the center simultaneously, checking for a character match. Since we need the *first* matching pair (closest to the outer edges), stop as soon as $s[left] == s[right]$.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:**
When a problem asks to compare elements based on their relative distance from the boundaries, moving inward from both ends eliminates the need for redundant inner-loop scans.

**Summary:**
Whenever you need to find a relationship between elements at the start and end of a sequence, use two pointers moving toward the center to prune the search space to linear time.

---
