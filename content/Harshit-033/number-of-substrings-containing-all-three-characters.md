---
title: "Number of Substrings Containing All Three Characters"
slug: number-of-substrings-containing-all-three-characters
date: "2026-04-15"
---

# My Solution
~~~cpp
class Solution {
public:
    int numberOfSubstrings(string s) {
        int len=s.size();

        int i=0;
        int j=0;

        int count=0;
        long long ans=0;
        unordered_map<char,int> mp;

        while(true){

            while(j<len && count!=3){
                if(mp.find(s[j])!=mp.end()){
                    if(mp[s[j]]==0){
                        count++;
                    }
                    mp[s[j]]+=1;
                }
                else{
                    mp[s[j]]+=1;
                    count++;
                }

                if(j==len-1 || count==3){
                    break;
                }
                j++;
            }

            if(count==3)
                ans = ans + (len - j);

            while((j-i+1)>=3 && count==3){
                
               
                mp[s[i]] -= 1;
                if(mp[s[i]] == 0){
                    count--;
                }
                i++;

                if(count==3){
                    ans = ans + (len - j);
                }
            }

            if(j>=len-1){
                break;
            }

            j++;
        }

        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Two-pointer / Sliding Window.
- **Optimality**: Optimal. The algorithm processes each character of the string at most twice (once by pointer `j` and once by pointer `i`), resulting in linear time complexity.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the length of the string.
- **Space Complexity**: $O(1)$. Although an `unordered_map` is used, it stores a maximum of 3 distinct keys ('a', 'b', 'c'), making the space constant regardless of input size.

## Efficiency Feedback
- **Map Overhead**: Using `std::unordered_map<char, int>` is inefficient for a fixed set of characters. A simple integer array `int count[3]` or `int count[128]` would provide significantly faster access times.
- **Redundant Lookups**: The code performs `mp.find()` followed by `mp[s[j]]`. In C++, `operator[]` on a map automatically inserts a default value if the key is missing, making the `find` check unnecessary.
- **Type Mismatch**: `ans` is declared as `long long` to prevent overflow during calculation, but the function return type is `int`. While the result for $n=5 \cdot 10^4$ typically fits in a 32-bit signed integer, this is a risky inconsistency.

## Code Quality
- **Readability**: Moderate. The use of `while(true)` with multiple `break` conditions and nested `while` loops makes the control flow harder to trace than a standard `for` or `while(j < len)` loop.
- **Structure**: Moderate. The logic for incrementing `j` is fragmented; it happens both inside the inner `while` loop and at the end of the outer loop, which is prone to off-by-one errors.
- **Naming**: Good. `i`, `j`, `len`, and `ans` are standard for this pattern.
- **Concrete Improvements**:
    1. Replace `unordered_map` with `int freq[3]`.
    2. Simplify the outer loop to `while (j < len)`.
    3. Remove the redundant `(j-i+1) >= 3` check, as `count == 3` already guarantees the window size is at least 3.
    4. Consolidate the `ans` additions to occur only when a valid window is identified.

---

# Question Revision
### Revision Report: Number of Substrings Containing All Three Characters

**Pattern:** Sliding Window (Two Pointers)

**Brute Force:** 
Iterate through all possible starting and ending positions to check every substring for the presence of 'a', 'b', and 'c'.
- **Complexity:** $O(n^2)$

**Optimal Approach:** 
Use two pointers (`left`, `right`) to maintain a window. Expand `right` until the window contains at least one of each character ('a', 'b', 'c'). Once valid, every substring starting at `left` and ending at any index from `right` to the end of the string is also valid. Add `n - right` to the total count, then increment `left` to find the next smallest valid window.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$ (fixed-size character map/array)

**The 'Aha' Moment:** 
The "at least" requirement creates a monotonic property: once a window is valid, adding any characters to the right preserves validity.

**Summary:** 
Find the smallest valid window and add the remaining length of the string to the total count for each valid starting position.

---