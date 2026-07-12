---
title: "Merge Strings Alternately"
slug: merge-strings-alternately
date: "2026-07-12"
---

# My Solution
~~~cpp
class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        int size1 = word1.size();
        int size2 = word2.size();
        int minSize = min(size1, size2);

        string answer;
        int i;
        for(i = 0; i < minSize; i++){
            answer.push_back(word1[i]);
            answer.push_back(word2[i]);
        }

        if(size1 > minSize){
            for(; i < size1; i++){
                answer.push_back(word1[i]);
            }
        }
        if(size2 > minSize){
            for(; i < size2; i++){
                answer.push_back(word2[i]);
            }
        }

        return answer;
    }  
};
~~~

# Submission Review
## Approach
*   **Technique:** Two-pointer/Iterative simulation.
*   **Optimality:** Optimal. The algorithm performs a single pass over both strings and constructs the result string linearly.

## Complexity
*   **Time Complexity:** $O(N + M)$, where $N$ and $M$ are lengths of `word1` and `word2`. Every character is visited exactly once.
*   **Space Complexity:** $O(N + M)$ to store the result string.

## Efficiency Feedback
*   **Performance:** The runtime is efficient. However, `answer.push_back()` may trigger multiple reallocations as the string grows.
*   **Optimization:** You can call `answer.reserve(word1.size() + word2.size())` before the loops to allocate memory once, preventing potential heap reallocations.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. Using a shared index `i` across loops is clever, though it can be slightly error-prone if refactored.
*   **Naming:** Good. `size1`, `size2`, and `minSize` are clear and descriptive.

### Concrete Improvements
1.  **Memory Allocation:** As mentioned, use `answer.reserve(...)` to improve performance.
2.  **Redundant Checks:** The second `if` block (`if(size2 > minSize)`) is safe, but technically `i` will only be less than `size2` if `size2 > size1`. The logic is correct, but could be simplified by using `append()` or `substr()` for the remaining suffix.

**Refined loop snippet:**
```cpp
string answer;
answer.reserve(word1.size() + word2.size());
// ... alternation loop ...
answer.append(word1.begin() + i, word1.end());
answer.append(word2.begin() + i, word2.end());
```
This reduces the manual iteration code and leverages standard library optimizations.

---

# Question Revision
### Revision Report: Merge Strings Alternately

**Pattern:** Two Pointers / Linear Scan

**Brute Force:** Create a new string by pre-allocating the total length, then loop through both strings simultaneously using two indices until the shorter one ends, finally appending the remainder of the longer string. 

**Optimal Approach:** Use a single loop that runs until both pointers reach the end of their respective strings. Inside, conditionally append characters from each string only if the pointer is within bounds.
*   **Time Complexity:** $O(n + m)$, where $n$ and $m$ are the lengths of the two strings.
*   **Space Complexity:** $O(n + m)$ to store the result string.

**The 'Aha' Moment:** The requirement to interleave elements from two collections at a consistent cadence is the classic trigger for a synchronized two-pointer traversal.

**Summary:** When merging sequences of varying lengths, synchronize your pointers in a single loop and use boundary checks to handle the remaining tail of the longer sequence.

---