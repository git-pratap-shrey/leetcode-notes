---
title: "Count the Number of Vowel Strings in Range"
slug: count-the-number-of-vowel-strings-in-range

---
---

# My Solution
~~~java
class Solution {
    public int vowelStrings(String[] words, int left, int right) {
        int count = 0;
        for(int i=left;i<=right;i++){
            char s = words[i].charAt(0);
            char e = words[i].charAt(words[i].length()-1);
            //if(s=='a'||s=='e'||s=='o'||s=='i'||s=='u'){
            //    if(e=='a'||e=='e'||e=='o'||e=='i'||e=='u'){
            //        count++;
            //    }
            //}
            if((s=='a'||s=='e'||s=='i'||s=='o'||s=='u') && (e=='a'||e=='e'||e=='i'||e=='o'||e=='u')){

                count++;
            }
       
        }
        return count;
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Linear iteration (Brute force).
*   **Optimality:** Optimal. The problem requires checking each word in the given range $[left, right]$ at least once. Since each check is $O(1)$, the overall approach is $O(N)$ where $N$ is the number of elements in the range.

## Complexity
*   **Time Complexity:** $O(R - L)$, where $R$ is `right` and $L$ is `left`. Each word check involves accessing the first and last characters, which is $O(1)$.
*   **Space Complexity:** $O(1)$, as it uses a constant amount of extra space.

## Efficiency Feedback
*   **Runtime:** Highly efficient. Accessing characters by index in Java is an $O(1)$ operation.
*   **Optimization:** The boolean condition is clear. To improve readability and potentially micro-optimize, you could encapsulate the vowel check into a helper method or use a `Set` (though a helper method is faster).

## Code Quality
*   **Readability:** Moderate. The inline boolean logic for vowels is verbose and repetitive.
*   **Structure:** Good. The loop correctly handles the boundaries defined by `left` and `right`.
*   **Naming:** Good. Variable names (`words`, `left`, `right`, `count`, `s`, `e`) are intuitive within the context of the problem.
*   **Improvements:**
    *   **Helper Method:** Extract `isVowel(char c)` to remove repetition and make the main logic cleaner.
    *   **Dead Code:** Remove the commented-out `if` blocks to keep the codebase clean.
    *   **Robustness:** While not required by the problem constraints, ensure `words[i]` is not null if the input source is untrusted.

**Suggested Refactor:**
```java
private boolean isVowel(char c) {
    return "aeiou".indexOf(c) != -1;
}

public int vowelStrings(String[] words, int left, int right) {
    int count = 0;
    for (int i = left; i <= right; i++) {
        String word = words[i];
        if (isVowel(word.charAt(0)) && isVowel(word.charAt(word.length() - 1))) {
            count++;
        }
    }
    return count;
}
```

---
---


# Question Revision
### Revision Report: Count Vowel Strings in Range

**Pattern:** Linear Scan / Iteration

**Brute Force:** Iterate through the entire array, check if each word starts and ends with a vowel, and increment a counter if the index falls within $[left, right]$.
*   **Time:** $O(n \cdot m)$ where $n$ is array length and $m$ is max word length.
*   **Space:** $O(1)$.

**Optimal Approach:** 
Directly iterate only through the indices from `left` to `right`. For each word, extract the first and last characters and check them against a set of vowels (`{'a', 'e', 'i', 'o', 'u'}`).
*   **Time:** $O((right - left) \cdot m) \approx O(n \cdot m)$.
*   **Space:** $O(1)$ (using a constant-sized lookup table/set).

**The 'Aha' Moment:**
When the problem defines a specific range $[left, right]$, simply constrain your loop boundaries to those indices instead of processing the entire collection.

**Summary:**
Constraints are not obstacles; they are your loop boundaries, so restrict your iteration range immediately to save cycles.

---
