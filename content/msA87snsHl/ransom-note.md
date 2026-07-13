---
title: "Ransom Note"
slug: ransom-note
date: "2026-06-28"
---

# My Solution
~~~java
class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        int[] freq = new int [26];
        
        if ( magazine.length() < ransomNote.length()){
            return false;
        }
        for( int i = 0; i < magazine.length(); i++){
            freq[magazine.charAt(i) - 'a']++;
            if ( i < ransomNote.length()){
                freq[ransomNote.charAt(i) - 'a']--;
            }
            
        }
        for( int i = 0; i < ransomNote.length(); i++){
            if( freq[ransomNote.charAt(i) - 'a'] < 0){
                return false;
            }
        }
        return true;

    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Frequency counting using a fixed-size array (Hash map surrogate).
*   **Optimal:** No. The approach is logically flawed. It attempts to process both strings in a single loop that assumes `magazine` and `ransomNote` are of comparable lengths or have specific index-alignment requirements, which is not the case for this problem.

## Complexity
*   **Time Complexity:** $O(N + M)$, where $N$ is the length of the magazine and $M$ is the length of the ransom note.
*   **Space Complexity:** $O(1)$ (constant space for the 26-character array).

## Efficiency Feedback
*   **Bottleneck:** The logic inside the `for` loop is incorrect. You are decrementing `freq` for `ransomNote` characters only up to the length of `ransomNote`, but since the loop runs for the length of `magazine`, the indices for `ransomNote` will go out of bounds if `magazine.length() > ransomNote.length()`. 
*   **Correction:** You should iterate over `magazine` to populate a frequency count, then iterate over `ransomNote` to decrement the counts. If any count drops below zero, return `false`.

## Code Quality
*   **Readability:** Moderate. The code is clean but the logic is confusing due to the attempt to combine two distinct counting passes into one loop.
*   **Structure:** Poor. The loop condition `i < ransomNote.length()` inside a loop bounded by `magazine.length()` causes an `ArrayIndexOutOfBoundsException` when the magazine is longer than the ransom note.
*   **Naming:** Good. `freq` is standard and clear.

### Concrete Improvements
Separate the logic into two distinct passes:
1.  **First pass:** Iterate through the `magazine` to increment counts in `freq`.
2.  **Second pass:** Iterate through the `ransomNote` to decrement counts. If a count goes below zero, return `false`.
3.  **Return:** `true` if the loop finishes successfully.

```java
public boolean canConstruct(String ransomNote, String magazine) {
    int[] freq = new int[26];
    for (char c : magazine.toCharArray()) {
        freq[c - 'a']++;
    }
    for (char c : ransomNote.toCharArray()) {
        if (--freq[c - 'a'] < 0) return false;
    }
    return true;
}
```

---

# Question Revision
### Revision Report: Ransom Note

**Pattern:** Frequency Counting (Hash Map / Array)

**Brute Force:** For every character in the `ransomNote`, iterate through the `magazine` string to find and "remove" (or mark) a matching character.
*   **Time Complexity:** $O(m \cdot n)$ where $m$ is the length of the note and $n$ is the length of the magazine.
*   **Space Complexity:** $O(1)$ (or $O(n)$ if string modification is required).

**Optimal Approach:** Use a frequency map (or a fixed-size integer array of size 26 for lowercase English letters) to count occurrences of each character in the `magazine`, then decrement counts based on the `ransomNote`.
*   **Time Complexity:** $O(m + n)$ where $m$ and $n$ are the lengths of the strings.
*   **Space Complexity:** $O(1)$ (since the alphabet size is constant at 26).

**The 'Aha' Moment:** Whenever a problem asks if one set of items can be constructed using another, treat it as a resource availability check by counting the frequency of each unique element.

**Summary:** If you need to "form" something from a limited supply, use a frequency array to track your inventory before consuming it.

---