---
title: "Reverse Words in a String III"
slug: reverse-words-in-a-string-iii
date: "2026-06-13"

---

# My Solution
~~~
class
 Solution {
public:
    string reverseWords(string s) {
        int i = 0;
        int j = 0;
        char temp;

        for(int k = 0; k < s.size(); k++){
            if(s[k] == ' ' || k == s.size()-1){
                //reverse word
                if(k != s.size()-1){
                    j--;
                }
                // cout<<i<<" "<<j<<endl;

                while(i < j){
                    temp = s[i];
                    s[i] = s[j];
                    s[j] = temp;

                    i++;
                    j--;
                }

                i = k+1;
                j = k;
            }
            j++;
        }

        return s;
    }
};
~~~

# Submission Review

## Approach

- **Technique**: Two-pointer in-place reversal.
- **Optimality**: Optimal. It processes the string in a single pass and modifies it in place, achieving the best possible time and space complexity for this problem.

## Complexity

- **Time Complexity**: $O(N)$, where $N$ is the length of the string. Each character is visited at most twice (once by the loop pointer `k` and once during the reversal process).
- **Space Complexity**: $O(1)$. No additional data structures are used regardless of input size; the modification is performed directly on the input string.

## Efficiency Feedback

- **Runtime**: Very efficient.
- **Memory**: Minimal footprint.
- **Optimization**: The current logic for updating `j` (incrementing at the end of the loop and decrementing inside the conditional) is slightly convoluted. Using `std::reverse(s.begin() + i, s.begin() + k)` would be more idiomatic in C++ and potentially better optimized by the compiler.

## Code Quality

- **Readability**: Moderate. The index tracking for `j` is unintuitive, making it harder to verify correctness at a glance.
- **Structure**: Good. The logic is contained within a single loop.
- **Naming**: Moderate. `i`, `j`, and `k` are standard for indices, but `i` and `j` serve as word boundaries while `k` serves as the iterator; more descriptive names (e.g., `wordStart`, `wordEnd`) would improve clarity.

#

## Concrete Improvements
1. **Remove Dead Code**: Remove the commented-out `cout` statement.
2. **Use Standard Library**: Replace the manual `while` loop swap with `std::swap(s[i], s[j])` or `std::reverse`.
3. **Type Safety**: `s.size()` returns `size_t` (unsigned). Comparing it with `int k` can trigger compiler warnings. Use `size_t` or `int n = s.size()`.
4. **Simplify Indexing**: Instead of manually incrementing/decrementing `j`, simply use `k` as the boundary marker.

**Refined logic suggestion:**
```cpp
for (int k = 0; k < s.size(); k++) {
    if (k == s.size() - 1 || s[k] == ' ') {
        int end = (s[k] == ' ') ? k - 1 : k;
        while (i < end) std::swap(s[i++], s[end--]);
        i = k + 1;
    }
}
```

---

# Question Revision

#

## Reverse Words in a String III

**Pattern:** Two Pointers

**Brute Force:** Split the string into a list of words using a delimiter, reverse each word using a built-in function, and join the list back into a string.

**Optimal Approach:** 
Convert the string to a mutable character array. Use two pointers to identify the `start` and `end` indices of each word. Once a word boundary is found (a space or the end of the string), perform an in-place swap of characters from `start` to `end - 1`.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$ (to store the character array/result string)

**The 'Aha' Moment:** The requirement to reverse *individual words* while preserving *overall word order* signals the need to isolate word boundaries and perform localized reversals.

**Summary:** Identify word boundaries using pointers and reverse the characters within those specific ranges.

---
