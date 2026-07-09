--- title: "Find the Difference" slug: find-the-difference date: "2026-07-07" ---  # My Solution ~~~class Solution {
public:
    char findTheDifference(string s, string t) {
        int freq[26]={0};
        int freq2[26]={0};
        for(int i=0;i<s.size();i++){
            freq[s[i]-'a']++;
        }
        for(int i=0;i<t.size();i++){
            freq2[t[i]-'a']++;
        }
        for(int i=0;i<26;i++){
            if(freq[i]!=freq2[i]){
                return 'a'+i;
            }
        }
       return 'a';
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique**: Frequency Counting (Hash map using fixed-size arrays).
- **Optimality**: Optimal in terms of asymptotic time and space complexity, though slightly suboptimal in constant factors (uses two arrays and three passes instead of one array and two passes, or a single XOR pass).

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the length of string $s$. The code iterates through $s$, $t$, and then a constant-sized array of 26 elements.
- **Space Complexity**: $O(1)$. The memory used for the frequency arrays is fixed at 26 integers regardless of the input string size.

## Efficiency Feedback
- **Redundancy**: The use of two separate arrays (`freq` and `freq2`) is unnecessary. A single array could be used by incrementing for $s$ and decrementing for $t$.
- **Alternative**: An XOR-based approach or summing the ASCII values of both strings and subtracting them would be more memory-efficient and potentially faster by reducing cache misses and loop overhead.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. Standard linear flow.
- **Naming**: Moderate. `freq` and `freq2` are functional but generic.
- **Concrete Improvements**:
    - Consolidate the frequency arrays into one.
    - Use a range-based for loop (e.g., `for (char c : s)`) for cleaner syntax in C++.
    - Remove the redundant `return 'a';` at the end or change it to a throw/assertion, as the problem guarantees a difference exists.  ---  # Question Revision ### Find the Difference

**Pattern:** Bit Manipulation (XOR)

**Brute Force:** Sort both strings and compare characters index-by-index; the first mismatch or the remaining character in `t` is the result. Time: $O(n \log n)$, Space: $O(1)$ or $O(n)$.

**Optimal Approach:** 
Iterate through both strings and XOR every character. Since $x \oplus x = 0$ and $x \oplus 0 = x$, all characters present in both strings cancel each other out, leaving only the extra character.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The fact that `t` is an exact copy of `s` with exactly one additional character makes this a perfect candidate for XOR cancellation.

**Summary:** Use XOR to nullify all paired characters across both strings, isolating the single unmatched character.  ---