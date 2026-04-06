---
title: "Bulls and Cows"
slug: bulls-and-cows
date: "2026-04-05"

---
---

# My Solution
~~~cpp
class Solution {
public:
    string getHint(string secret, string guess) {
        unordered_map<char,int> s;
        int len=secret.size();
        int countr=0;
        int countw=0;
        for(int i=0;i<len;i++){
            if(secret[i]==guess[i]){
                countr++;
            }
            else{
                s[secret[i]]+=1;
            }
        }
        for(int i=0;i<len;i++){
           
            if(secret[i]!=guess[i]){
                if(s[guess[i]]>0){
                    countw++;
                    s[guess[i]]--;
                }

            }
        }
        
        return to_string(countr) + "A" + to_string(countw) + "B";
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Two-pass counting using an unordered map to track frequency differences of unmatched characters.
*   **Optimality:** Optimal. It performs a linear scan for "bulls" (A) and another for "cows" (B), resulting in an $O(N)$ solution.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the length of the string. Each character is processed a constant number of times.
*   **Space Complexity:** $O(1)$ (effectively). Although an `unordered_map` is used, the keys are restricted to digits '0'-'9', meaning the map size is bounded by a constant (max 10).

## Efficiency Feedback
*   **Performance:** Excellent. Using a fixed-size array (e.g., `int s[10]`) instead of `std::unordered_map` would be slightly faster by avoiding hashing overhead, though the current complexity class remains identical.
*   **Memory:** The `unordered_map` is technically $O(1)$ due to the limited character set, but an array would have a smaller constant factor and lower memory footprint.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. Two distinct loops separate the "bulls" logic from the "cows" logic clearly.
*   **Naming:** Moderate. `countr` (count right/bulls) and `countw` (count wrong position/cows) are somewhat ambiguous. Standard terminology ("bulls", "cows") or `numBulls` and `numCows` would be clearer.
*   **Concrete Improvements:**
    *   Replace `unordered_map<char, int>` with `int s[10] = {0}`. Since characters are digits, you can index them using `secret[i] - '0'`.
    *   The `secret` and `guess` lengths are assumed to be equal based on the loop logic; ensure this is guaranteed by the problem constraints.
    *   Consider using `std::string` formatting or `std::format` (if C++20 is available) for cleaner string construction.

---
---


# Question Revision
### Revision Report: Bulls and Cows

**Pattern:** Hash Map / Frequency Counting

**Brute Force:** Compare strings position by position to find bulls, then use nested loops or multiple passes to find cows by checking if each remaining secret character exists in the remaining guess characters, resulting in $O(n^2)$.

**Optimal Approach:**
1. Use an integer array (or hash map) of size 10 to track the frequency of digits.
2. Iterate through the strings once:
   - If `secret[i] == guess[i]`, increment `bulls`.
   - Otherwise, update the frequency map: increment for `secret[i]` and decrement for `guess[i]`.
   - Maintain a count of `cows` by tracking how many digits are "offset" between the two strings.
3. **Time Complexity:** $O(n)$ where $n$ is the length of the string.
4. **Space Complexity:** $O(1)$ (since the frequency array is fixed at size 10 regardless of input length).

**The 'Aha' Moment:** When the problem asks to categorize elements by their exact position versus their existence elsewhere, a single-pass frequency count allows you to balance both conditions simultaneously.

**Summary:** Whenever you need to track "correct position" vs "incorrect position" counts for the same set of characters, use a single frequency array to track the net balance of occurrences.

---
