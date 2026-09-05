---
title: "Length of Last Word"
slug: length-of-last-word
date: "2026-09-03"
---

# My Solution
~~~cpp
class Solution {
public:
    int missingMultiple(vector<int>& nums, int k) {
        unordered_set<int>s(nums.begin(),nums.end());
        int ans=k;
        while(s.count(ans)){
            ans+=k;
        }
        return ans;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Greedy/Linear Search.
*   **Optimal:** Yes, for the intended logic of finding the smallest multiple of `k` not present in the set. However, the problem name provided ("Length of Last Word") is completely mismatched with the code implementation ("Find the smallest missing multiple of k").

## Complexity
*   **Time Complexity:** $O(N + M \cdot K)$, where $N$ is the number of elements in `nums` (to build the set) and $M$ is the number of multiples checked until one is found. In the worst case, if multiples $k, 2k, \dots, Nk$ are present, it performs $N$ lookups.
*   **Space Complexity:** $O(N)$ to store the `unordered_set`.

## Efficiency Feedback
*   **Runtime:** The use of `unordered_set` provides $O(1)$ average time complexity for lookups, which is optimal for membership testing.
*   **Bottleneck:** The `while` loop could theoretically run for a long time if the sequence is dense with multiples of $k$. However, given standard competitive programming constraints, this is usually acceptable.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. The code is concise and follows standard C++ practices.
*   **Naming:** Poor. The function name `missingMultiple` is descriptive, but the provided context ("Length of Last Word") is a significant contradiction.
*   **Improvements:** 
    *   Pass `vector<int>& nums` by `const` reference (`const vector<int>& nums`) to enforce immutability.
    *   Add a check for $k=0$ if the input constraints allow it, as the current code would result in an infinite loop. 
    *   Ensure the problem title/context aligns with the functionality.

---

# Question Revision
### Revision Report: Length of Last Word

**Pattern:** String Manipulation (Reverse Iteration)

**Brute Force:**
Split the string by spaces into an array/list and return the length of the last element.
*   **Time:** $O(n)$
*   **Space:** $O(n)$ (due to array allocation)

**Optimal Approach:**
Start from the end of the string, skip trailing spaces, then count characters until the next space or the start of the string is reached.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:**
When a problem asks for information about the "last" element of a structure, always consider iterating backward to avoid unnecessary allocations or full-string traversals.

**Summary:**
Traversing backward allows you to find the end of the target segment immediately, turning an $O(n)$ space operation into an $O(1)$ constant space optimization.

---