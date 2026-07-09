--- title: "Find the Index of the First Occurrence in a String" slug: find-the-index-of-the-first-occurrence-in-a-string date: "2026-06-10" ---  # My Solution ~~~class Solution {
public:
    int strStr(string haystack, string needle) {
        for(int i=0 ; i<haystack.size();i++){
            for(int j=0 ; j<needle.size();j++){
                if(haystack[i+j]!=needle[j]){
                    break;
                }
                else if(j==needle.size()-1){
                    return i;
                }
            }
        }
        return -1;

        
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique**: Brute-force string matching using nested loops.
- **Optimality**: Suboptimal. While it works for small inputs, algorithms like KMP (Knuth-Morris-Pratt) or Rabin-Karp offer linear time complexity $O(N + M)$.

## Complexity
- **Time Complexity**: $O(N \cdot M)$, where $N$ is the length of the `haystack` and $M$ is the length of the `needle`.
- **Space Complexity**: $O(1)$.
- **Bottleneck**: The nested loop re-scans the `haystack` from the next index whenever a mismatch occurs, ignoring information gained from previous character matches.

## Efficiency Feedback
- **Out-of-Bounds Risk**: The expression `haystack[i+j]` will access memory beyond the string boundary when `i + j >= haystack.size()`. The outer loop should terminate at `haystack.size() - needle.size()`.
- **Integer Underflow**: `needle.size() - 1` uses `size_t` (unsigned). If `needle` is an empty string, this results in an integer underflow, leading to a very large positive value and potential crashes or logic errors.

## Code Quality
- **Readability**: Moderate. The logic is straightforward, but the lack of boundary checks makes it fragile.
- **Structure**: Moderate. The logic is contained within a single function, but lacks edge-case handling (e.g., empty `needle`).
- **Naming**: Good. Uses standard naming conventions.
- **Improvements**:
    1. Change outer loop condition to `i <= (int)haystack.size() - (int)needle.size()`.
    2. Handle empty `needle` cases explicitly.
    3. Use `std::string::find()` for a highly optimized standard library implementation.  ---  # Question Revision ### Find the Index of the First Occurrence in a String

**Pattern:** String Matching / Sliding Window

**Brute Force:** 
Iterate through the `haystack` and, at each index, check if the substring of length `m` matches the `needle`.
- **Time:** $O(n \cdot m)$
- **Space:** $O(1)$

**Optimal Approach (KMP Algorithm):** 
Precompute a Longest Prefix Suffix (LPS) array for the `needle`. This allows the search pointer to skip characters in the `haystack` that have already been matched as a prefix of the `needle` during a mismatch.
- **Time:** $O(n + m)$
- **Space:** $O(m)$

**The 'Aha' Moment:** 
When a mismatch occurs after some characters have already matched, the `needle` itself contains the information needed to determine where the next potential match could start.

**Summary:** 
Use the KMP algorithm's LPS array to avoid redundant re-scans of the haystack.  ---