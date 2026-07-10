--- title: "Subsequence After One Replacement" slug: subsequence-after-one-replacement date: "2026-07-05" ---  # My Solution ~~~class Solution {
public:
    bool canMakeSubsequence(string s, string t) {
       int n=s.size(),m=t.size();
        const int INF=1e9;
        vector<int>L(n+1,INF);
        L[0]=0;
        int j=0;
        for(int i=0;i<n;i++){
            while(j<m && t[j]!=s[i])j++;
            if(j==m) break;
            L[i+1]=j+1;
            j++;
        }
        if(L[n] !=INF) return true;
        vector<int>R(n+1,INF);
        R[n]=0;
         j=m-1;
        for(int i=n-1;i>=0;i--){
            while(j>=0 && t[j] != s[i]) j--;
            if(j<0) break;
            R[i]=m-j;
            j--;
        }
        for(int i=0;i<n;i++){
            if(L[i]==INF || R[i+1]==INF) continue;
            if(L[i]+1+R[i+1]<=m)
                return true;
        }
        return false;
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique**: Two-pointer approach with Prefix and Suffix precomputation.
- **Optimality**: Optimal. The algorithm pre-calculates the leftmost possible positions for every prefix of `s` and the rightmost possible positions for every suffix of `s` in `t`. This allows it to evaluate the possibility of replacing any single character in $O(1)$ time.

## Complexity
- **Time Complexity**: $O(n + m)$, where $n$ is the length of `s` and $m$ is the length of `t`. Each string is traversed a constant number of times.
- **Space Complexity**: $O(n)$ to store the `L` and `R` arrays.

## Efficiency Feedback
- **Runtime**: Very efficient. The use of early exit (`if(L[n] != INF) return true;`) handles cases where `s` is already a subsequence without needing the suffix pass or final loop.
- **Memory**: Minimal overhead. Using `std::vector<int>` for `L` and `R` is appropriate for the given constraints.

## Code Quality
- **Readability**: Moderate. The code is dense with minimal whitespace between logic blocks, making it slightly harder to scan.
- **Structure**: Good. The logic flows linearly: Prefix pass $\rightarrow$ Suffice pass $\rightarrow$ Combination check.
- **Naming**: Moderate. `L` and `R` are common shorthand in competitive programming for "Left" and "Right" bounds, but `prefixMinIdx` and `suffixMinLen` would be more descriptive for software engineering standards.

### Concrete Improvements
1. **Consistency**: The loop for `L` uses `L[i+1]` while the loop for `R` uses `R[i]`. While logically correct, aligning the indexing style would improve maintainability.
2. **Formatting**: Adding newline separators between the three main logic phases would improve readability.
3. **Constants**: `INF` is set to `1e9`; while sufficient here, using `m + 1` would be more precise as no valid index/length can exceed the size of `t`.  ---  # Question Revision ### Revision Report: Subsequence After One Replacement

**Pattern:** Combinatorics / Dynamic Programming

**Brute Force:**
Iterate through every index $i$ and every possible character $c \in \{'a' \dots 'z'\}$. For each replacement, calculate the number of distinct subsequences using the standard DP approach.
Complexity: $O(26 \cdot n^2)$

**Optimal Approach:**
1. Calculate the total distinct subsequences of the original string using DP: $dp[i] = 2 \cdot dp[i-1] - dp[last[S[i]] - 1]$.
2. Instead of re-calculating for every replacement, compute the **delta** (the number of new unique subsequences created minus those lost).
3. Use precomputed prefix and suffix counts of characters to determine how many subsequences are uniquely formed by placing character $c$ at index $i$.
4. Iterate through all $n \times 26$ possibilities and track the maximum/total count.

**Complexity:**
- **Time:** $O(n \cdot \Sigma)$ where $\Sigma$ is the alphabet size (26).
- **Space:** $O(n)$ or $O(\Sigma)$ depending on precomputation storage.

**The 'Aha' Moment:**
The "one replacement" constraint signals that you should calculate a baseline result and then find the marginal gain (delta) for each possible change rather than recomputing from scratch.

**Summary:**
Compute the baseline distinct subsequences and use prefix/suffix counts to efficiently calculate the delta for every potential character replacement.  ---