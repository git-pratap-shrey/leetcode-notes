--- title: "Find All Anagrams in a String" slug: find-all-anagrams-in-a-string date: "2026-06-15" ---  # My Solution ~~~class Solution {
public:
    bool is_equal(int (&hashP)[26], int (&windowHash)[26]) {
        for (int i = 0; i < 26; i++) {
            if (hashP[i] != windowHash[i]) {
                return false;
            }
        }
        return true;
    }
    vector<int> findAnagrams(string s, string p) {
        int hashP[26] = {0};
        int windowHash[26] = {0};

        if (p.size() > s.size()) {
            return {};
        }
        int i;
        for (i = 0; i < p.size(); i++) {
            hashP[p[i] - 'a']++;
            windowHash[s[i] - 'a']++;
        }

        int j = 0;
        vector<int> solution;

        if (is_equal(hashP, windowHash)) {
            solution.push_back(j);
        }

        for (; i < s.size(); i++) {
            windowHash[s[j] - 'a']--;
            windowHash[s[i] - 'a']++;

            j++;

            if (is_equal(hashP, windowHash)) {
                solution.push_back(j);
            }
        }

        return solution;
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique**: Sliding Window with frequency arrays (fixed-size hash maps).
- **Optimality**: Optimal. The sliding window ensures each character in `s` is processed at most twice.

## Complexity
- **Time Complexity**: $O(26 \cdot |s|)$, which simplifies to $O(|s|)$. The constant factor 26 comes from the `is_equal` array comparison performed at each window shift.
- **Space Complexity**: $O(1)$ auxiliary space. The frequency arrays are fixed at size 26 regardless of the input size (excluding the output vector).

## Efficiency Feedback
- **Runtime**: The current implementation is efficient for the given constraints.
- **Optimization**: The $O(26)$ comparison can be reduced to $O(1)$ by maintaining a `matches` integer variable that tracks how many characters in the current window have the exact frequency required by `p`. When a character frequency reaches the target, `matches` increments; when it leaves the target, it decrements. This would eliminate the `is_equal` loop.

## Code Quality
- **Readability**: Good. The logic is linear and easy to follow.
- **Structure**: Good. The use of a helper function for array comparison keeps the main loop clean.
- **Naming**: Moderate. `hashP` and `windowHash` are descriptive enough, though `j` could be named `start` for better clarity.
- **Concrete Improvements**:
    - The use of `int (&hashP)[26]` (reference to array) is a professional touch that avoids array-to-pointer decay and unnecessary copying.
    - Ensure `s.size()` and `p.size()` are cast to `int` if working in environments where `size_t` (unsigned) might cause underflow/comparison warnings, though not an issue here due to the `p.size() > s.size()` guard.  ---  # Question Revision ### Find All Anagrams in a String

**Pattern:** Sliding Window + Frequency Map

**Brute Force:** 
Iterate through every possible substring of length `p` in `s`, sort the substring, and compare it to the sorted version of `p`.
- Time: $O(n \cdot m \log m)$ where $n = s.length, m = p.length$.

**Optimal Approach:**
Maintain a frequency map for `p` and a sliding window of size $m$ over `s`. Instead of re-calculating the window's map, increment the count of the character entering the window and decrement the count of the character leaving. Compare the two maps (or a `matches` counter) at each step.
- **Time:** $O(n)$
- **Space:** $O(1)$ (since the map size is constant at 26 characters)

**The 'Aha' Moment:** 
The requirement for a "fixed-length substring" combined with "character frequency" signals a sliding window with incremental map updates.

**Summary:** 
Slide a window of size `p.length()` across `s`, updating character counts at the boundaries to identify anagrams in linear time.  ---