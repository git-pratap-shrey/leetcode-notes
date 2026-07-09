--- title: "First Unique Character in a String" slug: first-unique-character-in-a-string date: "2026-06-08" ---  # My Solution ~~~class Solution {
public:
    int firstUniqChar(string s) {
        int ind=-1;
        unordered_map<char,int> mp;
        int len=s.size();
        for(int i=0;i<len;i++){
            mp[s[i]]+=1;
        }

        for(int i=0;i<len;i++){
            if(mp[s[i]]==1){
                return ind=i;
            }
        }

        
        return ind;
        
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique:** Two-pass hash map (frequency counting).
- **Optimality:** Optimal asymptotic time complexity. It correctly identifies the first unique character by decoupling the counting phase from the lookup phase.

## Complexity
- **Time Complexity:** $O(n)$, where $n$ is the length of the string. The string is traversed twice.
- **Space Complexity:** $O(1)$. Although an `unordered_map` is used, the number of unique keys is capped by the size of the character set (e.g., 26 for lowercase English or 256 for extended ASCII), making it constant regardless of input size.

## Efficiency Feedback
- **Bottleneck:** `unordered_map` introduces unnecessary hashing overhead and memory allocation for this specific problem.
- **Optimization:** Since the input consists of characters, using a fixed-size array `int freq[26]` (if lowercase only) or `int freq[256]` would significantly reduce runtime and memory overhead.

## Code Quality
- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Moderate. The variable `ind` is initialized and assigned but serves no real purpose since the function returns immediately upon finding the result.
- **Naming:** Moderate. `mp` is a generic abbreviation; `counts` or `freq` would be more descriptive.
- **Concrete Improvements:**
    - Replace `unordered_map<char, int>` with `int count[256] = {0};`.
    - Remove the `ind` variable and return `i` directly in the loop; return `-1` at the end.
    - Use `const string& s` in the function signature (if possible) to avoid potential copying, though not applicable in this specific LeetCode-style signature.  ---  # Question Revision ### First Unique Character in a String

**Pattern:** Frequency Map / Hashing

**Brute Force:** 
Use nested loops to compare each character with every other character in the string to check for duplicates.
- Time: $O(n^2)$
- Space: $O(1)$

**Optimal Approach:** 
1. **First Pass:** Traverse the string and store the frequency of each character in a hash map or an integer array of size 26.
2. **Second Pass:** Traverse the string again and return the index of the first character whose stored frequency is exactly 1.
- Time: $O(n)$
- Space: $O(1)$ (Fixed space for the alphabet regardless of input size)

**The 'Aha' Moment:** 
The requirement for "uniqueness" across the entire string implies that local information (like a sliding window) is insufficient; you must first aggregate global counts.

**Summary:** 
Count all character frequencies first, then re-scan the string to find the first character with a count of one.  ---