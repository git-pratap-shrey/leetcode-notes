---
title: "Longest Palindrome"
slug: longest-palindrome
date: "2026-09-07"
---

# My Solution
~~~cpp
class Solution {
public:
    int longestPalindrome(string s) {
        int arr[54]={0};
        int ans=0;
        bool hassOdd=false;
        for (int i=0;i<s.size();i++){
            if(s[i]>=97){
                arr[s[i]-'a']+=1;
            }
            else{
                arr[s[i]-'A'+27]+=1;
            }
            
        }
        for(int i: arr){
            ans+=(i/2)*2;
            if(i%2==1) {
                hassOdd=true;
            }

        }
        if(hassOdd){
            ans++;
        }
        
        return ans;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Frequency Counting (Greedy).
- **Optimality**: Optimal. It correctly identifies that any pair of identical characters can be placed symmetrically in a palindrome, and at most one single character can be placed in the center.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the length of the string. The code performs one pass over the string and one constant-time pass over the frequency array.
- **Space Complexity**: $O(1)$. The frequency array has a fixed size of 54 regardless of the input size.

## Efficiency Feedback
- **Runtime**: Very efficient due to the use of a fixed-size array instead of a hash map.
- **Memory**: Minimal. The memory overhead is negligible.
- **Minor Observation**: The array size (54) and the offset (`+27`) create an unused index at `arr[26]`. This does not affect performance but is slightly imprecise.

## Code Quality
- **Readability**: Moderate. The use of the magic number `97` instead of the character literal `'a'` makes the logic less intuitive.
- **Structure**: Good. The logic is linear and easy to follow.
- **Naming**: Moderate. `hassOdd` contains a typo (should be `hasOdd`). `arr` is a generic name; `freq` or `counts` would be more descriptive.
- **Concrete Improvements**:
    - Replace `97` with `'a'`.
    - Correct the typo `hassOdd` $\rightarrow$ `hasOdd`.
    - Use a size of 52 for the array and an offset of 26 for uppercase letters to eliminate the gap in indices.
    - Use `const int` or `std::vector` for the frequency array to avoid magic numbers for size.

---

# Question Revision
### Longest Palindrome

**Pattern:** Frequency Counting (Hash Map)

**Brute Force:** Generate all possible permutations of the input string and check each for the palindrome property, tracking the maximum length. Time: $O(n! \cdot n)$.

**Optimal Approach:** 
Count the frequency of each character. For every character count, add the largest even portion to the result (e.g., if a char appears 3 times, add 2). If any character had an odd frequency, add 1 to the final total to account for the unique center element.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(k)$ where $k$ is the size of the character set (effectively $O(1)$ for standard ASCII).

**The 'Aha' Moment:** A palindrome consists of pairs of characters with at most one single character in the middle.

**Summary:** Sum the even components of all character frequencies and add one if any odd frequency exists.

---