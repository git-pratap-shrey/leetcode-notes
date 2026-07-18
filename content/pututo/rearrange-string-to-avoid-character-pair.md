---
title: "Rearrange String to Avoid Character Pair"
slug: rearrange-string-to-avoid-character-pair
date: "2026-07-18"
---

# My Solution
~~~cpp
class Solution {
public:
    string rearrangeString(string s, char x, char y) {
        int n=s.size();
        int freq[26]={0};
        for(int i=0;i<n;i++){
            freq[s[i]-'a']++;
        }
        if(freq[y-'a']>0 && freq[x-'a']>0 ){
            int k=0;
            while(freq[y-'a']!=0&&freq[x-'a']!=0){
                s[k]=y;
                freq[y-'a']--;
                s[n-k-1]=x;
                freq[x-'a']--;
                k++;
            } 
            for(int i=k;i<n-k;i++){
            for(int j=0;j<26;j++){
               if(freq[j]>0){
                    freq[j]--;
                    s[i]=j+'a';
                    break;
               }
            }
        }
        }
        return s;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Greedy construction. The code attempts to place all instances of `y` at the beginning and `x` at the end of the string, then fills the remaining middle portion with the remaining characters in lexicographical order.
*   **Optimality:** **Suboptimal/Incorrect.** The logic fails to account for the actual constraint (usually avoiding adjacent occurrences of specific pairs). It blindly overwrites characters in `s` regardless of their initial positions, leading to potential data loss, and does not check if a valid arrangement is even possible.

## Complexity
*   **Time Complexity:** $O(N \cdot \Sigma)$, where $N$ is the length of the string and $\Sigma = 26$. The nested loop for filling the middle section is efficient enough, but the overall logic is flawed.
*   **Space Complexity:** $O(1)$ (constant auxiliary space for the frequency array).

## Efficiency Feedback
*   **Bottleneck:** The algorithm assumes a specific greedy placement that does not guarantee satisfying the "avoid pair" constraint.
*   **Optimization:** Before attempting any placement, you must verify if a valid rearrangement is possible using frequency counts. The current approach overwrites `s` without verifying if the original characters are still accounted for correctly.

## Code Quality
*   **Readability:** **Poor.** The logic for filling the string is convoluted and performs modifications directly on the input string `s` in a way that overwrites data unpredictably.
*   **Structure:** **Poor.** The `if` condition wraps the entire logic; if the condition is false, the code returns the unmodified string, which is likely incorrect behavior.
*   **Naming:** **Moderate.** Variables are standard, but the logic lacks descriptive helper methods.
*   **Concrete Improvements:**
    *   **Validation:** First check if the character counts allow for a solution.
    *   **Data Integrity:** Use a new string for the result rather than overwriting `s` while iterating.
    *   **Edge Cases:** Handle cases where `x` and `y` are the same character, or where counts are insufficient to separate them.
    *   **Correctness:** If the goal is to prevent `xy` or `yx` patterns, you should use a priority queue to place characters greedily based on remaining frequency and the last placed character.

---

# Question Revision
### Revision Report: Rearrange String to Avoid Character Pair

**Pattern:** Greedy + Priority Queue (Max-Heap)

**Brute Force:**
Generate all possible permutations of the string and validate if any adjacent characters are identical. This results in $O(n!)$ time complexity, which is infeasible for large inputs.

**Optimal Approach:**
Use a Max-Heap to always pick the most frequent available character that is not the same as the previous one. If the most frequent character cannot be placed (because it is the same as the previous), try the second most frequent. If no characters can be placed, return an empty string. 
*   **Time Complexity:** $O(n \log k)$, where $n$ is the string length and $k$ is the alphabet size (fixed at 26).
*   **Space Complexity:** $O(k)$ to store character frequencies.

**The 'Aha' Moment:**
When the problem constraints require satisfying local adjacency conditions based on global frequency counts, prioritize the most frequent elements first to prevent them from "clumping" together at the end.

**Summary:**
Always prioritize the most frequent character using a Max-Heap to ensure it has enough "breathing room" to be separated by other characters.

---