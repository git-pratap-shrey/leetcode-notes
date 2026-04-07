---
title: "Isomorphic Strings"
slug: isomorphic-strings
date: "2026-03-18"

---
---

# My Solution
~~~cpp
class Solution {
public:
    bool isIsomorphic(string s, string t) {
        unordered_map<char,char>mp1,mp2;
        for(int i=0;i<s.size();i++){
            if(mp1.count(s[i]) && mp1[s[i]] !=t[i]) return false;
            if(mp2.count(t[i]) && mp2[t[i]] !=s[i]) return false;
           mp1[s[i]]=t[i];
           mp2[t[i]]=s[i];
        }
        return true;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Hash mapping (bijective mapping). The code ensures that each character in `s` maps to a unique character in `t` and vice versa.
*   **Optimality:** Optimal. It validates the bijection in a single pass.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the length of the strings. Each character is processed once.
*   **Space Complexity:** $O(K)$, where $K$ is the size of the character set (at most 256 for ASCII). Since $K$ is constant, this is effectively $O(1)$.

## Efficiency Feedback
*   **Performance:** `unordered_map` is technically $O(1)$ on average, but incurs overhead due to hashing and potential collisions. 
*   **Optimization:** Since the input is constrained to ASCII, replacing `unordered_map<char, char>` with fixed-size arrays (`char map[256] = {0}`) would significantly improve performance by avoiding heap allocations and hashing logic.

## Code Quality
*   **Readability:** Good. The logic is concise and easy to follow.
*   **Structure:** Good. Using two maps effectively enforces the bijection constraint.
*   **Naming:** Moderate. `mp1` and `mp2` are functional but could be more descriptive (e.g., `sToT` and `tToS`).
*   **Concrete Improvements:**
    *   Initialize `mp1` and `mp2` with a size or use `std::vector<int>`/arrays to replace `unordered_map`.
    *   Add a check to return `false` immediately if `s.size() != t.size()` (though the problem usually guarantees equal length, it is good defensive practice).
    *   The current implementation creates the mapping even if it already exists; while logically safe, `mp1[s[i]] = t[i]` is redundant if `mp1.count(s[i])` is true. You can optimize by only setting the map if the key does not exist.

---
---


# Question Revision
### Revision Report: Isomorphic Strings

**Pattern:** Hash Mapping (Bi-directional Mapping)

**Brute Force:**
Compare every character in string `s` to `t`. For each new character pair, verify if the mapping is consistent across all indices. This results in $O(n^2)$ time due to repeated scans or nested checks.

**Optimal Approach:**
Maintain two hash maps (or arrays of size 128/256) to track `s -> t` and `t -> s` mappings simultaneously. Iterate through both strings once; if a character has been mapped to a different value previously, return `false`.
*   **Time Complexity:** $O(n)$, where $n$ is the length of the string.
*   **Space Complexity:** $O(k)$, where $k$ is the size of the character set (constant $O(1)$ for fixed alphabets like ASCII).

**The 'Aha' Moment:**
The requirement for a *bijective* (one-to-one) relationship means that not only must every character in `s` map to a unique character in `t`, but no two characters in `s` can map to the same character in `t`.

**Summary:**
Always use two frequency maps when enforcing a one-to-one symmetry constraint between two distinct sequences.

---
