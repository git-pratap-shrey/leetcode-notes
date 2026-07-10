---
title: "Permutation in String"
slug: permutation-in-string
date: "2026-06-09"

---

# My Solution
~~~
class
 Solution {
public:
    bool checkInclusion(string s1, string s2) {
        int n=s1.size(),m=s2.size();

        if(n>m) return false;

        vector<int> f1(26,0),f2(26,0);

        for(char c:s1)
            f1[c-'a']++;

        for(int i=0;i<n;i++)
            f2[s2[i]-'a']++;

        if(f1==f2) return true;

        for(int i=n;i<m;i++){
            f2[s2[i]-'a']++;
            f2[s2[i-n]-'a']--;

            if(f1==f2)
                return true;
        }

        return false;
    }
};
~~~

# Submission Review

## Approach

- **Technique**: Sliding Window with Frequency Arrays.
- **Optimality**: Optimal. It processes the string $s2$ in a single pass, maintaining a constant-sized frequency map to track permutations.

## Complexity

- **Time Complexity**: $O(m)$, where $m$ is the length of $s2$. Although there is a vector comparison `f1 == f2` inside the loop, it compares exactly 26 elements, making it $O(26 \times m)$, which simplifies to $O(m)$.
- **Space Complexity**: $O(1)$. The space used by the two vectors is fixed at $26 \times 2$ integers regardless of the input size.

## Efficiency Feedback

- **Runtime**: Very efficient. The use of `std::vector` equality operator is concise and performant for small fixed sizes.
- **Memory**: Minimal. 
- **Potential Optimization**: While not necessary given the constraints, using a `count` variable to track how many characters currently match between `f1` and `f2` would eliminate the need to compare the entire 26-element array in every iteration, reducing the constant factor from 26 to 1.

## Code Quality

- **Readability**: Good. The logic is straightforward and follows a standard sliding window pattern.
- **Structure**: Good. The edge case (`n > m`) is handled immediately.
- **Naming**: Moderate. `f1` and `f2` are slightly generic; `countS1` and `windowCount` would be more descriptive.
- **Improvements**:
    - Use `const string&` in function signatures if this were a helper method to avoid potential copies (though not applicable to the provided LeetCode-style signature).
    - Use `std::array<int, 26>` instead of `std::vector<int>` to allocate memory on the stack rather than the heap.

---

# Question Revision

#

## Permutation in String

**Pattern:** Sliding Window (Fixed Size)

**Brute Force:** 
Generate all possible permutations of `s1` and check if any exist as a substring in `s2`. Alternatively, extract every substring of length `s1.length()` from `s2` and sort it to compare with the sorted version of `s1`.

**Optimal Approach:**
Maintain a frequency map (or an array of size 26) for `s1` and a sliding window of the same length across `s2`. As the window slides, increment the count for the character entering the window and decrement the count for the character leaving it. Compare the window's map to `s1`'s map at each step.

*   **Time Complexity:** $O(n)$, where $n$ is the length of `s2`. (Map comparison is $O(26)$, which is constant).
*   **Space Complexity:** $O(1)$, as the frequency array size is fixed regardless of input length.

**The 'Aha' Moment:** 
The keyword "permutation" combined with "substring" indicates that we need to find a contiguous block with identical character frequencies, regardless of order.

**Summary:** 
Use a fixed-size sliding window with a frequency map to track character counts across `s2`.

---
