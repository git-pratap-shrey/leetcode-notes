---
title: "Longest Palindrome"
slug: longest-palindrome
date: "2026-04-17"
---

# My Solution
~~~cpp
class Solution {
public:
    int longestPalindrome(string s) {
        unordered_map<char,int>mp;
        for(int i=0;i<s.size();i++){
            mp[s[i]]++;
        }
        bool odd=false;
        int result =0;
        for(auto i:mp){
            int value = i.second;
            if(value%2==0){
                result = result+value;
            }
            else{
                odd =true;
            }
           
        }
        if(odd == false){
                return result;
            }
        for(auto i:mp){
            int value = i.second;
            if(value%2!=0){
                result = result+(value-1);
            }
            
        }
        return result+1;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Frequency Counting + Greedy.
- **Optimality:** The logic is optimal ($O(N)$), but the implementation is suboptimal due to redundant iterations and the use of a heavy data structure for a small key set.

## Complexity
- **Time Complexity:** $O(N)$, where $N$ is the length of the string. The code performs one pass over the string and up to two passes over the map.
- **Space Complexity:** $O(K)$, where $K$ is the number of unique characters (alphabet size).

## Efficiency Feedback
- **Redundant Loops:** The code iterates through the map twice—once to sum even frequencies and once to sum the "even part" of odd frequencies. This can be done in a single pass using `result += (value / 2) * 2`.
- **Data Structure:** Using `std::unordered_map` for character counts is slower than using a fixed-size array (e.g., `int count[128]`), as it involves hashing and heap allocations.
- **Conditional Logic:** The `if(odd == false)` block is unnecessary if the logic for odd frequencies is integrated into the primary loop.

## Code Quality
- **Readability:** Moderate. The logic is easy to follow, but the structure is fragmented.
- **Structure:** Poor. Splitting the summation of even and odd counts into two separate loops creates unnecessary complexity.
- **Naming:** Poor. 
    - `mp` is a generic name; `counts` or `freq` would be better.
    - `i` is used as the iterator for the map; since it represents a `std::pair`, `entry` or `pair` is more appropriate.
- **Concrete Improvements:**
    - Use `result += (value / 2) * 2` inside one loop.
    - Use a boolean flag or check if `result < s.size()` at the end to add the final `+1` for a central character.
    - Replace `unordered_map<char, int>` with `int freq[128] = {0}`.

---

# Question Revision
### Longest Palindrome

**Pattern:** Frequency Counting (Hash Map/Array)

**Brute Force:** Generate all possible permutations of the string and check each for the palindrome property.
- **Complexity:** $O(n! \cdot n)$

**Optimal Approach:** 
Count the occurrences of each character. For every character, the number of pairs that can be used is $\lfloor \text{count} / 2 \rfloor \times 2$. If any character has an odd frequency, one single character can be placed in the center of the palindrome.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$ (since the character set is fixed, e.g., 52 for English letters)

**The 'Aha' Moment:** A palindrome is simply a collection of pairs with at most one unpaired character in the middle.

**Summary:** Sum the largest even portion of every character's count and add one if any odd counts exist.

---