---
title: "Reverse Words in a String"
slug: reverse-words-in-a-string
date: "2026-04-09"

---
---

# My Solution
~~~c
char* reverseWords(char* s) {
    int len = strlen(s);
    char* ans = (char*)malloc(sizeof(char) * (len + 1));
    
    int j=0;
    int count, k=0;

    for(int i=len-1; i>=0; i--) {

        if(s[i]== ' ') continue;

        count=0;

        while(i - count >= 0 && s[i - count] != ' ') {
            count++;
        }

        for(int x = i - count + 1; x <= i; x++) {
            ans[k] = s[x];
            k++;
        }

        ans[k] = ' ';
        k++;

        i = i - count + 1;
    }

    if(k > 0) k--;

    ans[k] = '\0';

    return ans;
}
~~~

# Submission Review
## Approach
*   **Technique**: Two-pointer iteration (reverse scan). The code scans the input string from right to left, identifies words by skipping spaces, and copies them to a newly allocated result buffer.
*   **Optimal**: No. While the logic is functionally correct in identifying words, it is suboptimal due to unnecessary heap allocation and redundant indexing.

## Complexity
*   **Time Complexity**: $O(N)$, where $N$ is the length of the string. Each character is visited a constant number of times.
*   **Space Complexity**: $O(N)$ for the allocated result string.

## Efficiency Feedback
*   **Redundant Work**: The index `i` is manually decremented (`i = i - count + 1`) inside the loop, while the `for` loop also performs `i--`. This logic is brittle and hard to follow.
*   **Memory**: The problem of reversing words can typically be solved in-place (if allowed) by reversing the entire string and then reversing individual words, which would reduce space complexity to $O(1)$. 

## Code Quality
*   **Readability**: Moderate. The nested loops and manual index manipulation make the control flow non-trivial to trace.
*   **Structure**: Moderate. The logic is monolithic; separating the word-extraction logic or using a standard "reverse whole, then reverse words" approach would be cleaner.
*   **Naming**: Moderate. Variable names like `k` and `x` are generic. `k` could be `write_ptr`, and `x` could be `word_char_idx`.
*   **Concrete Improvements**:
    *   **Logic Simplification**: Use the standard two-step reverse (reverse entire string, then reverse individual words) to eliminate manual indexing complexity and `malloc` if an in-place modification is permitted by the problem environment.
    *   **Safety**: Add a check for `malloc` returning `NULL` to ensure memory safety.
    *   **Loop Logic**: The `i = i - count + 1` line combined with the `for` loop decrement creates a risk of infinite loops if the logic is modified; a `while` loop is safer for this type of pointer manipulation.

---
---


# Question Revision
### Revision Report: Reverse Words in a String

**Pattern:** Two Pointers / String Manipulation

**Brute Force:**
1. Split the string into an array by spaces.
2. Filter out empty strings caused by multiple spaces.
3. Reverse the array.
4. Join the array with a single space.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(n)$ (for array storage)

**Optimal Approach:**
1. **Clean:** Convert to char array and perform an in-place "shift" to remove leading, trailing, and redundant internal spaces.
2. **Reverse Entire String:** Flip the entire active portion of the array.
3. **Reverse Individual Words:** Iterate through the array and reverse each word back to its original orientation.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$ (if the language allows mutable strings; otherwise $O(n)$ for string conversion).

**The 'Aha' Moment:**
When the problem asks to manipulate word order while ignoring variable whitespace, treat the string as a mutable character buffer and reverse the "macro" (entire string) followed by the "micro" (each word) components.

**Summary:** 
To reverse words in place, reverse the entire sequence first, then reverse the characters of each individual word to correct their internal order.

---
