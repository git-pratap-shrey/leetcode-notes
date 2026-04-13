---
title: "Bulls and Cows"
slug: bulls-and-cows
date: "2026-04-13"

---
---

# My Solution
~~~cpp
class Solution {
public:
    string getHint(string secret, string guess) {
        int bull = 0;
        int cow = 0;
        unordered_map<char, int> mp_s, mp_g;

        for (int i = 0; i < secret.size(); i++) {
            if (secret[i] == guess[i]) {
                bull++;
            } else {
              
                mp_s[secret[i]]++;
                mp_g[guess[i]]++;
            }
        }
        for(auto it:mp_s){
            if(mp_g.count(it.first)){
                cow+=min(it.second,mp_g[it.first]);
            }
        }
        return to_string(bull) + "A" + to_string(cow) + "B";
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Frequency counting (Hashing).
*   **Optimal:** Yes. The approach separates exact matches (bulls) from non-matches, then calculates the intersection of digit frequencies for the remaining characters (cows). This is a standard linear-time approach.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the length of the string. The solution performs a single pass to categorize characters and a constant-time iteration over the hash maps (max 10 entries).
*   **Space Complexity:** $O(1)$, because the hash maps store at most 10 unique decimal digits regardless of input size.

## Efficiency Feedback
*   **Performance:** The use of `std::unordered_map` is technically $O(1)$ on average, but it introduces unnecessary overhead due to hashing. Since the input is restricted to digits '0'-'9', using a fixed-size integer array `int[10]` would be faster and more memory-efficient.
*   **Optimization:** Replace `unordered_map<char, int>` with `int secret_counts[10] = {0}` and `int guess_counts[10] = {0}`. This eliminates heap allocations and hashing overhead.

## Code Quality
*   **Readability:** Good. The logic is clear and follows a standard two-step validation process.
*   **Structure:** Good. Separation of concerns between counting bulls and counting cows is well-defined.
*   **Naming:** Good. Variable names (`bull`, `cow`, `mp_s`, `mp_g`) are intuitive in the context of the problem.
*   **Concrete Improvements:**
    *   **Data Structures:** As noted, switch to `int[10]` arrays to improve performance.
    *   **Looping:** In the second loop, iterating over the `secret` frequency array is sufficient. You can replace the `unordered_map` logic with:
      ```cpp
      for (int i = 0; i < 10; i++) {
          cow += min(secret_counts[i], guess_counts[i]);
      }
      ```
    *   **Efficiency:** The current solution performs two separate loops (one for string traversal, one for map traversal); this is already efficient, but the array optimization makes it cleaner.

---
---


# Question Revision
### Revision Report: Bulls and Cows

**Pattern:** Frequency Counting / Hash Map

**Brute Force:** 
Generate all possible permutations of the guess and compare them to the secret, or iterate through indices to find bulls, then perform a nested loop comparison to find cows, resulting in $O(n^2)$ time complexity.

**Optimal Approach:**
Use a frequency array (or Hash Map) of size 10 to track the counts of digits. 
1. Iterate through the string once: increment the count for digits in the secret and decrement for digits in the guess.
2. If `secret[i] == guess[i]`, increment `bulls`.
3. If `secret[i] != guess[i]`, update the frequency counts. 
4. Calculate `cows` by summing the absolute differences or by tracking how many unmatched digits in the guess exist in the secret.
*   **Time Complexity:** $O(n)$ where $n$ is the length of the string.
*   **Space Complexity:** $O(1)$ since the alphabet is fixed (digits 0-9).

**The 'Aha' Moment:**
When the problem requires tracking mismatched elements across two strings while ignoring specific positions (bulls), a dual-pass or frequency-counting strategy replaces nested searching.

**Summary:**
Whenever you need to match elements regardless of position while excluding already-matched indices, use a frequency counter to tally the "surplus" of digits in both strings.

---
