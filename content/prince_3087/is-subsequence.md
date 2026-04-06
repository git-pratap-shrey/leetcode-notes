---
title: "Is Subsequence"
slug: is-subsequence
date: "2026-04-02"

---
---

# My Solution
~~~cpp
class Solution {
public:
    bool isSubsequence(string s, string t) {
        int i=0;
        
        int count =0;
        
        for(int j=0;j<t.size();j++){
            if(s[i]==t[j]){
                i++;
                count++;
            }
            // else{
            //     j++;
            // }
        }
        if(count == s.size()){
            return true;
        }
        else {
            return false;
        }
        
    }
};
~~~

# Submission Review
## Approach
* **Technique:** Two-pointer (greedy) approach.
* **Optimality:** Optimal. It traverses the string `t` exactly once to find characters of `s` in sequence.

## Complexity
* **Time Complexity:** $O(n)$, where $n$ is the length of string `t`.
* **Space Complexity:** $O(1)$, as it uses a constant amount of extra space.

## Efficiency Feedback
* The logic is efficient. However, there is a potential **out-of-bounds access**: if `s` is not empty, `s[i]` will be accessed when `i == s.size()`, leading to undefined behavior once the subsequence is fully found.
* **Optimization:** Add a check to return `true` immediately when `i == s.size()` inside the loop to avoid unnecessary iterations and potential memory safety issues.

## Code Quality
* **Readability:** Moderate. The intent is clear, but the code lacks early-exit logic.
* **Structure:** Moderate. The unused `count` variable is redundant; comparing `i` against `s.size()` is sufficient.
* **Naming:** Poor. `i` and `j` are standard for indices, but `count` is misleading as it tracks index progression, not a frequency.
* **Concrete Improvements:**
    * Remove the `count` variable entirely.
    * Use `i == s.size()` as the exit condition.
    * Handle the edge case where `s` is empty (should return `true`).

### Suggested Refinement:
```cpp
class Solution {
public:
    bool isSubsequence(string s, string t) {
        if (s.empty()) return true;
        int i = 0;
        for (char c : t) {
            if (s[i] == c) {
                i++;
                if (i == s.size()) return true;
            }
        }
        return false;
    }
};
```

---
---


# Question Revision
### Revision Report: Is Subsequence

**Pattern:** Two Pointers (Greedy)

**Brute Force:** 
Generate all possible subsequences of the target string ($O(2^n)$) and check for matches, or use nested loops with index tracking.

**Optimal Approach:**
Use two pointers, `i` for `s` and `j` for `t`. Iterate through `t` once; if `t[j]` matches `s[i]`, increment `i`. If `i` reaches the length of `s`, the subsequence is found.
*   **Time Complexity:** $O(n)$, where $n$ is the length of `t`.
*   **Space Complexity:** $O(1)$.

**The 'Aha' Moment:**
The relative order requirement implies that once a character is matched, you never need to look back, allowing a single linear pass.

**Summary:** 
When order matters but skipping elements is allowed, walk one pointer through the container and move the second pointer only upon a match.

---
