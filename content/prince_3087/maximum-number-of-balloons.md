---
title: "Maximum Number of Balloons"
slug: maximum-number-of-balloons
date: "2026-04-17"
---

# My Solution
~~~cpp
class Solution {
public:
    int maxNumberOfBalloons(string text) {
        unordered_map<char,int>have;
        int result = INT_MAX;
        for(int i=0;i<text.size();i++){
            have[text[i]]++;
        }
        unordered_map<char,int>need;
        need['b']=1;
        need['a']=1;
        need['l']=2;
        need['o']=2;
        need['n']=1;
        for(auto i:need){
            char c = i.first;
            int fneed = i.second;
            int fhave= have[c];
            int times = fhave/fneed;
            result = min(result,times);
        }
        return result;




        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Frequency counting using hash maps.
- **Optimality**: Optimal. The problem requires counting specific character occurrences to determine the limiting factor, which is exactly what this approach does.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the length of the input string `text`. The string is traversed once, and the second loop runs for a constant number of characters (5 unique letters in "balloon").
- **Space Complexity**: $O(1)$. While `unordered_map` is used, the number of unique characters stored is capped by the alphabet size (constant).

## Efficiency Feedback
- **Map Overhead**: Using `unordered_map` for character counting introduces unnecessary hashing overhead. A fixed-size array `int count[26]` would be faster and more memory-efficient.
- **Redundant Initialization**: The `need` map is reconstructed on every function call. Defining it as a `static` constant or using a simple array would improve performance.

## Code Quality
- **Readability**: Moderate. The logic is easy to follow, but the formatting is inconsistent (excessive trailing whitespace/newlines).
- **Structure**: Good. The separation between counting available characters and calculating the result is logical.
- **Naming**: Good. Variables like `fneed` (frequency needed) and `fhave` (frequency have) are intuitive.
- **Improvements**:
    - Replace `unordered_map` with `std::vector<int>(26, 0)` or `int[26]`.
    - Use a range-based for loop for the input string: `for (char c : text)`.
    - Remove trailing empty lines at the end of the function.

---

# Question Revision
### Maximum Number of Balloons

**Pattern:** Frequency Map (Counting)

**Brute Force:** Iteratively scan the string to find all required characters of "balloon," marking them as used until a full word can no longer be formed.

**Optimal Approach:**
1. Count occurrences of the characters `b`, `a`, `l`, `o`, and `n` in the input string.
2. Adjust counts for characters that appear multiple times in the target word: divide the counts of `l` and `o` by 2.
3. The result is the minimum value among the adjusted counts.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The total number of words is limited by the "bottleneck" character—the one with the lowest relative frequency compared to its requirement in the target word.

**Summary:** Use a frequency map to find the limiting character based on the required counts for "balloon."

---