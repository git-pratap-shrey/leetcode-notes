---
title: "Rearrange String to Avoid Character Pair"
slug: rearrange-string-to-avoid-character-pair
date: "2026-07-18"
---

# My Solution
~~~java
class Solution {
    public String rearrangeString(String s, char x, char y) {
        int n = s.length();
        int countx = 0;
        int county = 0;
        StringBuilder sb = new StringBuilder();
        for(char ch: s.toCharArray()){
            if(ch == x){
                countx++;
            }
            else if(ch == y){
                county++;
            }
            else{
                sb.append(ch);
            }
        }
        StringBuilder ans = new StringBuilder();
        while(county-->0){
            ans.append(y);
        }
        ans.append(sb);
        while(countx-->0){
            ans.append(x);
        }
        return ans.toString();
        
        
        
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Greedy construction.
*   **Correctness:** **Incorrect.** The provided code isolates all instances of `x` and `y` and places all `y`s at the beginning and all `x`s at the end. This fails to account for existing characters in the string that might already form the pair `xy` or `yx` when the characters are rearranged. Furthermore, it does not guarantee that placing all `y`s together and all `x`s together won't create the forbidden pair at the boundaries (e.g., if the string only contains `x` and `y`).

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the length of the string, as it performs a single pass to count and a series of appends to build the result.
*   **Space Complexity:** $O(N)$ to store the `StringBuilder` results.

## Efficiency Feedback
*   The logic is computationally efficient ($O(N)$) but algorithmically flawed for the problem constraints.
*   The approach essentially treats `x` and `y` as "moveable" objects and ignores the original relative positions of other characters, which might lead to invalid strings if the original string structure matters or if the forbidden pair already exists.

## Code Quality
*   **Readability:** Good. The logic is simple and easy to follow.
*   **Structure:** Moderate. While clean, it fails to handle the constraints of the problem (e.g., checking if a valid arrangement is even possible).
*   **Naming:** Good. `countx`, `county`, and `sb` are standard and descriptive enough for this context.
*   **Concrete Improvements:**
    *   **Validation:** Add logic to check if it is actually possible to rearrange the string without creating the forbidden pair (e.g., if the frequency of `x` and `y` combined with other characters makes avoidance impossible).
    *   **Interleaving:** Instead of dumping all `x`s and `y`s at the ends, consider a placement strategy that interleaves `x` and `y` with the other characters to maintain the "avoid pair" constraint.
    *   **Edge Cases:** The current solution does not handle scenarios where the input string itself already contains the forbidden pair and requires a more complex shuffle than simply grouping identical characters.

---

# Question Revision
### Revision Report: Rearrange String to Avoid Character Pair

**Pattern:** Greedy + Max-Priority Queue (Frequency Counting)

**Brute Force:** 
Generate all permutations of the string ($O(n!)$) and check each for adjacent identical characters until a valid one is found.

**Optimal Approach:**
1. Count character frequencies.
2. Push all characters into a Max-Heap based on frequency.
3. Extract the most frequent character, append it to the result, and temporarily hold it while picking the next most frequent character to ensure separation.
4. Re-insert the held character back into the heap once it is no longer the "previous" character.
*   **Time Complexity:** $O(n \log k)$, where $n$ is string length and $k$ is the alphabet size.
*   **Space Complexity:** $O(k)$ to store character frequencies.

**The 'Aha' Moment:**
When the problem constraints impose a "no two adjacent" rule based on frequency, it is a signal to prioritize placing the most frequent characters first to avoid running out of "buffers" later.

**Summary:**
Always greedily place the most frequent remaining character first, using a cooldown buffer to prevent immediate reuse.

---