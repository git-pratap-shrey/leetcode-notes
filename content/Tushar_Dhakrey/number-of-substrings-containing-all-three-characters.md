--- title: "Number of Substrings Containing All Three Characters" slug: number-of-substrings-containing-all-three-characters date: "2026-07-02" ---  # My Solution ~~~class Solution {
    public int numberOfSubstrings(String s) {
        int n = s.length();
        int a =-1;
        int b =-1;
        int c=-1;
        int ans = 0;
        for(int i=0;i<n;i++){
            char ch = s.charAt(i);
            if(ch=='a') a=i;
            else if(ch=='b') b=i;
            else if(ch=='c') c=i;
            ans += Math.min(a,Math.min(b,c))+1;
        }
        return ans;
    }
} - java~~~  # Submission Review ## Approach
- **Technique**: Sliding Window / Two-Pointer variation (Last-Seen Index Tracking).
- **Optimality**: Optimal. It calculates the number of valid substrings ending at each index $i$ in a single pass by tracking the rightmost occurrence of each required character.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the length of the string. The string is traversed exactly once.
- **Space Complexity**: $O(1)$. Only a constant amount of extra space is used regardless of input size.

## Efficiency Feedback
- **Runtime**: Highly efficient. The use of `Math.min` and basic integer arithmetic ensures minimal overhead.
- **Memory**: Minimal memory footprint.
- **Optimization**: No meaningful optimizations available; the current logic is already at the theoretical lower bound for time and space.

## Code Quality
- **Readability**: Good. The logic is concise and easy to follow.
- **Structure**: Good. The flow is linear and avoids unnecessary nesting.
- **Naming**: Moderate. While `a`, `b`, and `c` are intuitive given the problem context, `lastA`, `lastB`, and `lastC` would more explicitly describe their purpose as index trackers.
- **Concrete Improvements**:
    - Use more descriptive variable names (e.g., `lastA` instead of `a`).
    - The `if-else if` chain is appropriate here since a character cannot be more than one of 'a', 'b', or 'c'.  ---  # Question Revision ### Number of Substrings Containing All Three Characters

**Pattern:** Sliding Window (Two Pointers)

**Brute Force:**
Iterate through all possible substring pairs $(i, j)$ and check if the substring contains at least one 'a', 'b', and 'c'. 
Complexity: $O(n^3)$ or $O(n^2)$ with a frequency map.

**Optimal Approach:**
Expand a `right` pointer to find the smallest window containing all three characters. Once valid, every substring starting at `left` and ending anywhere from `right` to $n-1$ is also valid. Add `n - right` to the total count, then increment `left` to find the next smallest valid window.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$ (fixed alphabet size)

**The 'Aha' Moment:**
The "at least" constraint implies monotonicity: if a substring is valid, any larger substring containing it is also guaranteed to be valid.

**Summary:**
Find the minimum valid window and add the remaining string length to the total for every valid `left` pointer.  ---