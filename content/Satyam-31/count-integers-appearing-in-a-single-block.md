---
title: "Count Integers Appearing in a Single Block"
slug: count-integers-appearing-in-a-single-block
date: "2026-09-01"
---

# My Solution
~~~cpp
class Solution {
public:
    int maximumGap(string skill, string station) {
        int n=skill.size();
        int m=station.size();
        vector<int> left(n);
        int j=0;
        for(int i=0;i<n;i++){
            while(station[j]!=skill[i]){
                j++;
            }
            left[i]=j;
            j++;
        }

        vector<int>r(n);
        j=m-1;
        for(int i=n-1;i>=0;i--){
            while(station[j]!=skill[i]){
                j--;
            }
            r[i]=j;
            j--;
        }
        if(n==1){
            return 0;
        }
        int ans=0;
        for(int i=1;i<n;i++){
            ans=max(ans,r[i]-left[i-1]);
        }
        return ans;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Two-pass greedy search. The solution finds the first occurrence index of each character of `skill` in `station` (from left) and the last occurrence index (from right) to determine the range boundaries.
*   **Optimality:** Optimal. It correctly computes the required indices in $O(M)$ time, where $M$ is the length of `station`.

## Complexity
*   **Time Complexity:** $O(M)$, where $M$ is the length of `station`. The pointers `j` traverse the `station` string exactly once in each pass.
*   **Space Complexity:** $O(N)$, where $N$ is the length of `skill`, to store the `left` and `r` arrays.

## Efficiency Feedback
*   The logic is highly efficient. The use of two separate passes ensures minimal overhead.
*   **Safety Note:** The code assumes that `skill` is guaranteed to be a subsequence of `station`. If this is not guaranteed, the `while` loops will cause an **out-of-bounds access** (e.g., `j++` or `j--` exceeding array limits). Adding bounds checking (e.g., `j < m` or `j >= 0`) is recommended for robustness.

## Code Quality
*   **Readability:** Moderate. The logic is clear, but the variable names lack context.
*   **Structure:** Good. The separation of the left-pass and right-pass is clean.
*   **Naming:** Poor. Variables like `r`, `j`, `n`, and `m` are generic. `r` should be named `right` to match `left`.
*   **Concrete Improvements:**
    *   Rename `r` to `right`.
    *   Rename `n` and `m` to `skillLen` and `stationLen`.
    *   Add defensive checks: `if (j >= m)` or `if (j < 0)` inside the `while` loops to prevent crashes on invalid inputs.
    *   The `if(n==1)` check is strictly unnecessary because the loop `for(int i=1;i<n;i++)` will simply not execute if $n=1$, returning the initialized `ans=0` correctly.

---

# Question Revision
### Revision Report: Count Integers Appearing in a Single Block

**Pattern:** Sliding Window / Linear Scan

**Brute Force:**
Iterate through every possible subarray, count the frequency of each element, and verify if any element appears only once within that window.
*   **Time:** $O(n^2)$ or $O(n^3)$ depending on the frequency map implementation.
*   **Space:** $O(n)$

**Optimal Approach:**
Maintain a frequency map and a pointer to track the current "block." Iterate through the array once, updating counts; if an element's frequency exceeds 1, expand the left boundary of the window to discard the duplicate. Count elements that have a frequency of exactly 1 within the current valid range.
*   **Time:** $O(n)$
*   **Space:** $O(k)$, where $k$ is the size of the unique character/integer set.

**The 'Aha' Moment:**
When the problem constraints require processing sequential elements and checking for "uniqueness" within localized segments, a sliding window allows you to efficiently add and remove elements without re-scanning the entire range.

**Summary:**
Treat contiguous blocks as sliding windows to convert $O(n^2)$ frequency checks into $O(n)$ amortized updates using a hash map.

---