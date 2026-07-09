--- title: "Find All Anagrams in a String" slug: find-all-anagrams-in-a-string date: "2026-06-09" ---  # My Solution ~~~class Solution {
public:
    vector<int> findAnagrams(string s, string p) {
        vector<int> ans;

        int n=s.size(),m=p.size();

        if(m>n) return ans;

        vector<int> f1(26,0),f2(26,0);

        for(int i=0;i<m;i++){
            f1[p[i]-'a']++;
            f2[s[i]-'a']++;
        }

        if(f1==f2) ans.push_back(0);

        for(int i=m;i<n;i++){
            f2[s[i]-'a']++;
            f2[s[i-m]-'a']--;

            if(f1==f2) ans.push_back(i-m+1);
        }

        return ans;
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique**: Sliding Window with Frequency Arrays.
- **Optimality**: Optimal. It processes the string $s$ in a single pass and uses a constant-sized frequency map for alphabet characters.

## Complexity
- **Time Complexity**: $O(n \cdot \Sigma)$, where $n$ is the length of string $s$ and $\Sigma$ is the size of the alphabet (26). The vector comparison `f1 == f2` takes $O(\Sigma)$ time and is performed $n - m + 1$ times.
- **Space Complexity**: $O(\Sigma)$ to store the frequency arrays `f1` and `f2`.

## Efficiency Feedback
- **Runtime**: The runtime is efficient. Since $\Sigma$ is small (26), the $O(26)$ comparison overhead is negligible.
- **Optimizations**: To further reduce the constant factor, one could maintain a `count` variable tracking how many unique characters in the current window match the frequencies in `p`, avoiding the full vector comparison at every step. However, for $\Sigma=26$, this is rarely necessary.

## Code Quality
- **Readability**: Good. The logic is concise and easy to follow.
- **Structure**: Good. Handles edge cases (e.g., `m > n`) early and follows a linear execution path.
- **Naming**: Moderate. `f1`, `f2`, `n`, and `m` are common in competitive programming but lack descriptiveness. Better names would be `p_freq`, `s_freq`, `s_len`, and `p_len`.
- **Improvements**: 
    - The current implementation relies on `std::vector`'s `operator==`, which is clean but abstracts the $O(26)$ loop.
    - Ensure the input strings only contain lowercase English letters as per the `'a'` offset assumption.  ---  # Question Revision ### Find All Anagrams in a String

**Pattern:** Sliding Window (Fixed Size) + Frequency Map

**Brute Force:** 
Extract every substring of length `p.length()`, sort the substring, and compare it to the sorted version of `p`.
- Time: $O(S \cdot P \log P)$
- Space: $O(P)$

**Optimal Approach:** 
Use a frequency map (array of size 26) to store counts of characters in `p`. Maintain a sliding window of size $|p|$ over `s`, updating the window's frequency map by incrementing the leading character and decrementing the trailing character. Compare the two maps at each step.
- Time: $O(n)$ where $n$ is the length of `s`.
- Space: $O(1)$ (constant space for the 26-character alphabet).

**The 'Aha' Moment:** 
The requirement for "anagrams" (character frequency) within a contiguous "string" (sequence) signals a fixed-size sliding window.

**Summary:** 
Use a fixed-size sliding window with a character count array to identify anagrams in linear time.  ---