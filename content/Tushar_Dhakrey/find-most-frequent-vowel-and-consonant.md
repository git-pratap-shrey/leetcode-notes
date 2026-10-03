---
title: "Find Most Frequent Vowel and Consonant"
slug: find-most-frequent-vowel-and-consonant
date: "2026-10-03"
---

# My Solution
~~~java
class Solution {
    public int maxFreqSum(String s) {
        HashMap<Character,Integer> map = new HashMap<>();
        for(char c:s.toCharArray()){
              map.put(c,map.getOrDefault(c,0)+1);
        }
        int vowel=0;
        int consonants=0;
        for(char c='a';c<='z';c++){
            if(isvow(c)){
                vowel = Math.max(vowel,map.getOrDefault(c,0));
            }
            else{
                consonants = Math.max(consonants,map.getOrDefault(c,0));
            }
        }
        return vowel + consonants;
        
    }
    private boolean isvow(char c){
        return c=='a' || c=='e' || c=='i' || c=='o' || c=='u';
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Frequency Map (Hashing) and Linear Scanning.
- **Optimality**: Optimal. The solution iterates through the string once and then a fixed-size alphabet range.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the length of the string. The alphabet scan is $O(26)$, which is constant.
- **Space Complexity**: $O(1)$. While a `HashMap` is used, it stores a maximum of 26-52 unique characters regardless of input size.

## Efficiency Feedback
- **Runtime**: Efficient, but the use of `HashMap<Character, Integer>` involves boxing/unboxing overhead.
- **Optimization**: Replacing the `HashMap` with a fixed-size integer array `int[26]` would reduce memory overhead and improve speed.

## Code Quality
- **Readability**: Moderate. The logic is simple, but `isvow` is a non-standard abbreviation.
- **Structure**: Good. Helper method is used to separate vowel logic from the main loop.
- **Naming**: Moderate. `isvow` should be `isVowel`; `vowel` and `consonants` should be `maxVowelFreq` and `maxConsonantFreq` for clarity.
- **Concrete Improvements**:
    - Change `HashMap` to `int[] freq = new int[26]`.
    - Handle uppercase characters (the current code only iterates `'a'` to `'z'`, ignoring uppercase letters in the string).
    - Use a `String` of vowels (`"aeiou"`) and `.indexOf(c)` for a more concise `isVowel` check.

---

# Question Revision
# Revision Report: Find Most Frequent Vowel and Consonant

### Pattern
**Frequency Map / Hashing**

### Brute Force
Iterate through the string and for every single character, perform a second pass through the string to count its occurrences. Track the maximums for vowels and consonants separately.
- **Time Complexity:** $O(n^2)$
- **Space Complexity:** $O(1)$

### Optimal Approach
1. Initialize two hash maps (or fixed-size arrays of size 26) to store counts for vowels and consonants.
2. Traverse the string once:
   - If the character is a vowel, increment its count in the vowel map.
   - If the character is a consonant, increment its count in the consonant map.
3. Iterate through the maps to find the character with the highest frequency. In case of ties, follow the problem's tie-breaking rule (e.g., lexicographically smallest).
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$ (since the alphabet size is constant)

### The 'Aha' Moment
The requirement to find the "most frequent" element is a direct signal to use a frequency map to trade space for time.

### Summary
Use two frequency maps to count vowels and consonants in a single pass, then extract the maximums.

---