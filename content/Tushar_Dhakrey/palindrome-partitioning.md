---
title: "Palindrome Partitioning"
slug: palindrome-partitioning
date: "2026-03-26"

---
---

# My Solution
~~~java
class Solution {
    public List<List<String>> partition(String s) {
        List<List<String>> parti = new ArrayList<>();
        List<String> ds = new ArrayList<>();
        partitionpal(0,parti,ds,s);
        return parti;

    }
    public boolean ispalindrome(String s,int left,int right){
        while(left<right){
            if(s.charAt(left)!=s.charAt(right)){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
    public void partitionpal(int ind,List<List<String>> parti, List<String> ds, String s){
        int n=s.length();
        if(ind==s.length()){
            parti.add(new ArrayList<>(ds));
            return;
        }
        
        for(int i=ind;i<n;i++){
            if(ispalindrome(s,ind,i)){
                ds.add(s.substring(ind,i+1));
                partitionpal(i+1,parti,ds,s);
                ds.remove(ds.size()-1);
            }
        }
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Backtracking with recursion.
- **Optimality**: Optimal. This approach correctly explores all valid palindrome partitions using a standard backtracking pattern.

## Complexity
- **Time Complexity**: $O(N \cdot 2^N)$, where $N$ is the length of the string. In the worst case (e.g., "aaaaa"), there are $2^{N-1}$ possible partitions, and checking for palindromes takes $O(N)$.
- **Space Complexity**: $O(N)$ (ignoring the space required for the output list), due to the recursion stack depth and the temporary list `ds`.

## Efficiency Feedback
- **Runtime**: The current approach is efficient for typical constraints ($N \le 16$).
- **Optimization**: If $N$ were significantly larger, palindrome checking could be optimized to $O(1)$ by precomputing a 2D boolean DP table (e.g., `dp[i][j]` stores if `s[i...j]` is a palindrome). Given the constraints of the problem, the current $O(N)$ check is acceptable.

## Code Quality
- **Readability**: Good. The logic is straightforward and follows common competitive programming idioms.
- **Structure**: Good. The helper methods are clearly separated. 
- **Naming**: Moderate.
    - `parti` and `ds` are non-descriptive; `result` and `currentPartition` would be more standard.
    - `partitionpal` and `ispalindrome` should follow camelCase naming conventions (e.g., `partitionHelper` and `isPalindrome`).
- **Concrete Improvements**:
    - Add `import java.util.*;` to the top to ensure the code compiles in standard environments.
    - Consider using `StringBuilder` or substring-caching if strings were massive, though not necessary here.
    - The method `partitionpal` could be private to encapsulate the implementation.

---
---


# Question Revision
### Revision Report: Palindrome Partitioning

**Pattern:** Backtracking (DFS)

**Brute Force:** 
Generate all possible substrings of the input string, check if each is a palindrome, and recursively build partitions. This involves $O(2^n)$ possible ways to partition the string, with $O(n)$ palindrome verification for each, resulting in $O(n \cdot 2^n)$ complexity.

**Optimal Approach:**
Use backtracking to explore all partition boundaries, combined with **Dynamic Programming (Pre-computation)** to verify palindromes in $O(1)$.
*   **Logic:** Pre-calculate a 2D boolean table `isPal[i][j]` where `isPal[i][j]` is true if `s[i...j]` is a palindrome. Use this table inside your DFS function to avoid redundant string slicing and checking.
*   **Time Complexity:** $O(n \cdot 2^n)$ (where $n \cdot 2^n$ is the number of possible partitions, each taking $O(1)$ to check via pre-computed table).
*   **Space Complexity:** $O(n^2)$ for the DP table + $O(n)$ for the recursion stack.

**The 'Aha' Moment:**
When a problem asks for "all possible ways" to partition or segment a structure, it is a clear signal to use backtracking to explore the state space of boundaries.

**Summary:**
Whenever you need to generate all partitions of a set, use backtracking to place dividers and pre-calculate substring properties to prune your search.

---
