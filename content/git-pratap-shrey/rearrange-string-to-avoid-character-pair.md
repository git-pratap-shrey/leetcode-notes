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
        int freqArr[26];
    
        for(char c : s){
            freqArr[c - 'a']++;
        }    

        string answerString;
        bool flag = false;
        for(int i = 0; i < 26; i++){
            if(i == (x - 'a') || i == (y - 'a')){
                // cout<<"yes";
                continue;
            }
            if(freqArr[i] ){
                    answerString.push_back(i+'a');
                    freqArr[i]--;
                    i--;
            }
        }

       while(freqArr[y-'a']){
            answerString.push_back(y);
            freqArr[y-'a']--;
        }
        
        while(freqArr[x-'a']){
            answerString.push_back(x);
            freqArr[x-'a']--;
        }

        return answerString;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Greedy construction.
*   **Optimal:** No. The approach is fundamentally flawed. It constructs a string by grouping all non-`x`/non-`y` characters, then appending all `y`s, then all `x`s. This will almost certainly result in adjacent `x`s or adjacent `y`s if their counts are greater than 1, failing the problem's implicit requirement to avoid specific pairs (or constraints usually associated with this problem type).
*   **Correctness:** The code fails to initialize `freqArr` to zeros, leading to undefined behavior (garbage values).

## Complexity
*   **Time Complexity:** $O(N + \Sigma)$, where $N$ is the string length and $\Sigma = 26$.
*   **Space Complexity:** $O(N)$ to store the output string, plus $O(\Sigma)$ for the frequency array.

## Efficiency Feedback
*   **Runtime:** The algorithm is fast, but because the logic is incorrect, the performance is irrelevant.
*   **Bottleneck:** The manual frequency array initialization is missing; this is a critical bug.
*   **Logic error:** The logic fails to interleave the characters `x` and `y` or distribute them to avoid adjacencies. It simply blocks them into contiguous segments.

## Code Quality
*   **Readability:** Moderate. The code is short, but the logic is obfuscated by the incorrect approach.
*   **Structure:** Poor. The `i--` inside the `for` loop is a "hacky" way to simulate a `while` loop, which makes the control flow hard to follow.
*   **Naming:** Good. Variable names like `freqArr` and `answerString` are descriptive.
*   **Concrete Improvements:**
    1.  **Initialize `freqArr`:** Use `int freqArr[26] = {0};` or `std::vector<int> freqArr(26, 0);`.
    2.  **Logic:** If the goal is to avoid `xx` or `yy` (or `xy`/`yx`), use a priority queue to greedily pick the most frequent character that does not violate the adjacency rule.
    3.  **Boundary Checks:** Always check if a valid construction is even possible before attempting to build the string.

---

# Question Revision
### Revision Report: Rearrange String to Avoid Adjacent Duplicates

**Pattern:** Greedy + Max-Heap (Priority Queue)

**Brute Force:** 
Generate all permutations of the string ($O(n!)$) and validate each one until a valid arrangement is found.

**Optimal Approach:**
1. Count character frequencies.
2. Push all characters into a Max-Heap based on frequency.
3. Iteratively extract the most frequent character, append it to the result, and hold it in a temporary buffer until the next character can be safely placed (ensuring no two identical characters are adjacent).
4. **Complexity:** 
   * **Time:** $O(n \log k)$, where $n$ is the string length and $k$ is the alphabet size (max 26).
   * **Space:** $O(k)$ to store character frequencies in the heap.

**The 'Aha' Moment:**
When the problem forces you to place the most frequent elements first to prevent them from "bunching up" at the end, a Max-Heap is the natural tool to always provide the most urgent character.

**Summary:** 
Always prioritize the most frequent character using a Max-Heap to keep the "most dangerous" elements separated early.

---