---
title: "Isomorphic Strings"
slug: isomorphic-strings
date: "2026-04-08"

---
---

# My Solution
~~~cpp
class Solution {
public:
    bool isIsomorphic(string s, string t) {
        
        int lens=s.size();
        int lent=t.size();

        if(lens!=lent) return false;


        unordered_map<char,int> mps;
        unordered_map<char,int> mpt;

        for(int i=0;i<lens;i++){
            if(mps.find(s[i])!=mps.end()){
                if(mpt.find(t[i])!=mpt.end()){
                    if(mps[s[i]]==mpt[t[i]]){
                        mps[s[i]]=i;
                        mpt[t[i]]=i;
                    }
                    else{
                        return false;
                    }

                }
                else{
                    return false;
                }
            }
            else{
                if(mpt.find(t[i])!=mpt.end()){
                    return false;
                }
                else{
                    mps[s[i]]=i;
                    mpt[t[i]]=i;
                }

            }

        }

        return true;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Mapping/Hashing. The solution tracks the last seen positions of characters in both strings to ensure a bijective (one-to-one) mapping between $s$ and $t$.
*   **Optimality:** It is functionally correct but suboptimal. The use of `std::unordered_map` adds unnecessary constant overhead for a fixed-size character set (ASCII).

## Complexity
*   **Time Complexity:** $O(N)$ on average, where $N$ is the length of the string.
*   **Space Complexity:** $O(K)$, where $K$ is the size of the character set (max 256 for extended ASCII). 

## Efficiency Feedback
*   **Bottleneck:** `std::unordered_map` involves hash computations and potential reallocations. 
*   **Optimization:** Since the input characters are standard (typically ASCII), use fixed-size integer arrays (e.g., `int mps[256] = {0};`) instead of `unordered_map`. This replaces heap allocations and hashing with direct memory access, significantly improving runtime and memory locality.
*   **Logic Simplification:** You do not need to store the index `i`. Storing the mapped character itself (or simply initializing the array with a sentinel value like -1) is sufficient.

## Code Quality
*   **Readability:** Moderate. The nested `if-else` blocks make the logic harder to follow than necessary.
*   **Structure:** Moderate. The logic is verbose; the bijection check can be implemented much more cleanly using two arrays.
*   **Naming:** Good. `mps` and `mpt` are clear in context.
*   **Concrete Improvements:**
    *   Replace `unordered_map<char, int>` with `vector<int> mps(256, -1)` and `vector<int> mpt(256, -1)`.
    *   Refactor the loop: instead of checking indices, map $s[i] \to t[i]$ and $t[i] \to s[i]$ simultaneously. If a mapping exists, verify it matches the current character; if not, create it.

```cpp
// Refactored example:
vector<int> mapS(256, -1), mapT(256, -1);
for (int i = 0; i < s.size(); ++i) {
    if (mapS[s[i]] != mapT[t[i]]) return false;
    mapS[s[i]] = i;
    mapT[t[i]] = i;
}
return true;
``` 
*(Note: Initializing with -1 handles the case where characters appear for the first time.)*

---
---


# Question Revision
### Revision Report: Isomorphic Strings

**Pattern:** Hash Mapping / Bijective Mapping

**Brute Force:** 
For every character in string `s`, perform a linear scan of string `t` to verify the mapping, or store all character permutations. This results in $O(n^2)$ time complexity.

**Optimal Approach:** 
Use two hash maps (or arrays of size 128/256) to store the mapping from `s[i]` to `t[i]` and `t[i]` to `s[i]` simultaneously. Iterate through both strings once; if a character already exists in a map, verify that its mapped partner matches the current character.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(k)$, where $k$ is the size of the character set (constant $O(1)$ for fixed alphabets).

**The 'Aha' Moment:**
The requirement for a one-to-one correspondence implies that a character's "identity" is locked as soon as it appears, necessitating a bidirectional check to prevent two different characters from mapping to the same target.

**Summary:** 
Use two maps to enforce a two-way bijective constraint whenever a problem requires a unique, one-to-one character mapping.

---
