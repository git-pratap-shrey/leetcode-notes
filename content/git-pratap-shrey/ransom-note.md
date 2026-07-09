--- title: "Ransom Note" slug: ransom-note date: "2026-06-10" ---  # My Solution ~~~class Solution {
public:
    bool canConstruct(string ransomNote, string magazine) {
        int hash[26] = {0};

        for(char m : magazine){
            hash[m - 'a']++;
        }

        for(char r : ransomNote){
            if(hash[r - 'a'] == 0){
                return false;
            }
            else{
                hash[r - 'a']--;
            }
        }

        return true;
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique**: Frequency Array (Counting).
- **Optimality**: Optimal. It uses a fixed-size array to track character counts, ensuring the minimum possible time and space complexity for this problem.

## Complexity
- **Time Complexity**: $O(n + m)$, where $n$ is the length of `ransomNote` and $m$ is the length of `magazine`. Each string is traversed exactly once.
- **Space Complexity**: $O(1)$. The `hash` array size is constant (26), regardless of the input size.

## Efficiency Feedback
- **Performance**: Runtime and memory usage are minimal due to the use of a stack-allocated array instead of a `std::unordered_map`.
- **Optimization**: No meaningful optimizations are required. A minor optimization would be to return `false` immediately if `ransomNote.length() > magazine.length()`, though this doesn't change the asymptotic complexity.

## Code Quality
- **Readability**: Good. The logic is straightforward and concise.
- **Structure**: Good. The flow from counting to verification is logical.
- **Naming**: Moderate. 
    - `hash` is a slightly misleading name; `counts` or `freq` would be more accurate as this is a frequency array, not a hash table.
    - `m` and `r` are acceptable for short loops, though `char_m` or `char_r` would be more explicit.
- **Improvements**:
    - Change `int hash[26]` to `int freq[26]` for better semantic clarity.  ---  # Question Revision ### Ransom Note

**Pattern:** Frequency Map / Hash Table

**Brute Force:** 
Iterate through each character in `ransomNote`. For every character, search for it in `magazine`. If found, remove it from `magazine` to prevent reuse; if not found, return `false`.

**Optimal Approach:** 
Create a frequency array (size 26) or hash map to store the counts of every character in `magazine`. Iterate through `ransomNote`, decrementing the count for each character encountered. If any count drops below zero, the note cannot be constructed.

*   **Time Complexity:** $O(m + n)$ where $m$ and $n$ are the lengths of the two strings.
*   **Space Complexity:** $O(1)$ as the character set is limited to 26 lowercase English letters.

**The 'Aha' Moment:** 
The constraint that each letter in the magazine can only be used once transforms the problem from a simple search into an inventory management (counting) problem.

**Summary:** 
Verify that the character frequency requirements of the ransom note are a subset of the magazine's character frequencies.  ---