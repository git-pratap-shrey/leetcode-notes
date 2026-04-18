---
title: "Ransom Note"
slug: ransom-note
date: "2026-04-17"
---

# My Solution
~~~cpp
class Solution {
public:
    bool canConstruct(string ransomNote, string magazine) {
        unordered_map<char,int>f;
        for(int i=0;i<magazine.size();i++){
            f[magazine[i]]++;

        }
        for(int i=0;i<ransomNote.size();i++){
            if(f.find(ransomNote[i])==f.end()){
                return false;
            }
            f[ransomNote[i]]--;
            if(f[ransomNote[i]]==0){
                f.erase(ransomNote[i]);
            }
        }
        return true;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Frequency counting using a hash map (`unordered_map`).
- **Optimality**: Optimal asymptotically, as it processes each character of both strings exactly once.

## Complexity
- **Time Complexity**: $O(n + m)$, where $n$ is the length of `ransomNote` and $m$ is the length of `magazine`.
- **Space Complexity**: $O(k)$, where $k$ is the number of unique characters in `magazine` (maximum 26 for lowercase English letters).

## Efficiency Feedback
- **Constant Factor**: Using `std::unordered_map` introduces overhead due to hashing and dynamic memory allocation. Since the character set is typically limited (e.g., lowercase English letters), a fixed-size array `int count[26]` would be significantly faster and more memory-efficient.
- **Unnecessary Operations**: The `f.erase()` call is redundant. A simple check for `f[ransomNote[i]] == 0` before decrementing would achieve the same result without the cost of modifying the map's internal structure.

## Code Quality
- **Readability**: Moderate. The logic is straightforward, but the lack of whitespace and poor naming hinder clarity.
- **Structure**: Good. The flow is logical and returns early upon failure.
- **Naming**: Poor. The variable `f` is non-descriptive; a name like `charCounts` would be preferred.
- **Concrete Improvements**:
    - Replace `unordered_map<char, int>` with `int[26]` or `std::vector<int>(26)`.
    - Use range-based for loops (`for (char c : magazine)`) to improve readability and avoid index management.
    - Remove `f.erase()` and instead check if the count is zero before decrementing.

---

# Question Revision
### Ransom Note

**Pattern:** Frequency Map (Hash Table / Fixed Array)

**Brute Force:** 
Iterate through each character in `ransomNote`, search for it in `magazine`, and remove/mark the character as used if found. 
- **Time:** $O(n \cdot m)$
- **Space:** $O(1)$ or $O(m)$ depending on string mutability.

**Optimal Approach:** 
Use a frequency array of size 26 (for lowercase English letters) to store the counts of each character in `magazine`. Iterate through `ransomNote` and decrement the corresponding count; if any count drops below zero, the note cannot be constructed.
- **Time:** $O(n + m)$
- **Space:** $O(1)$ (fixed space for 26 characters regardless of input size).

**The 'Aha' Moment:** The constraint that each letter in the magazine can be used only once signals a need to track character quantities rather than just presence.

**Summary:** Count available characters in the magazine and ensure the ransom note's requirements do not exceed those counts.

---