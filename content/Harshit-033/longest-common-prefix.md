---
title: "Longest Common Prefix"
slug: longest-common-prefix
date: "2026-04-09"

---
---

# My Solution
~~~c


char* longestCommonPrefix(char** strs, int strsSize) {

    int len = strlen(strs[0]);
    char *ans = strs[0];

    for(int i = 1; i < strsSize; i++) {
        int j = 0;

        while(ans[j] && strs[i][j] && ans[j] == strs[i][j]) {
            j++;
        }

        ans[j] = '\0';
    }

    return ans;
}
~~~

# Submission Review
## Approach
- **Technique**: Horizontal scanning / In-place iterative comparison.
- **Optimality**: Optimal. It compares each character of the strings exactly as much as necessary to determine the prefix.

## Complexity
- **Time Complexity**: $O(S)$, where $S$ is the sum of all characters in all strings. In the worst case, every character is compared.
- **Space Complexity**: $O(1)$ (auxiliary space), as the solution modifies the input string pointer to store the result, avoiding extra allocations.

## Efficiency Feedback
- **Runtime**: High efficiency. Since the function terminates the prefix length early using `ans[j] = '\0'`, it prevents redundant comparisons once a mismatch is found.
- **Potential Issue**: The code modifies the input array `strs[0]`. While this saves memory, it violates the principle of immutability for input parameters. If the caller requires the original `strs[0]` later, this implementation will cause bugs.

## Code Quality
- **Readability**: Good. The logic is straightforward and concise.
- **Structure**: Moderate. The reliance on side-effect modifications to `strs[0]` makes the function dangerous for general use.
- **Naming**: Good. `ans` and `strs` are clear enough for this specific problem context.
- **Improvements**:
    - **Safety**: Allocate a new string (`malloc`) for the result if the original input must remain unchanged.
    - **Edge Case Handling**: The code assumes `strsSize > 0`. If `strsSize` is 0, `strs[0]` will trigger a segmentation fault or undefined behavior. Add a check: `if (strsSize == 0) return "";`.
    - **Optimization**: Use `const char**` for the input parameter to signal that the strings themselves should not be modified, though this would force you to allocate memory for the result.

---
---


# Question Revision
### Revision Report: Longest Common Prefix

**Pattern:** Horizontal Scanning / Vertical Scanning

**Brute Force:** Compare every possible prefix of the first string against all other strings, resulting in $O(S)$ time complexity where $S$ is the sum of all characters in all strings.

**Optimal Approach (Horizontal Scanning):**
1. Assume the first string is the prefix.
2. Iterate through the remaining strings, iteratively shortening the prefix using `indexOf()` until the current string starts with it.
3. If the prefix becomes empty, return `""`.
*   **Time Complexity:** $O(S)$, where $S$ is the sum of all characters in all strings.
*   **Space Complexity:** $O(1)$ (ignoring result string storage).

**The 'Aha' Moment:**
When the property you are searching for must be present in *all* elements, you can reduce the search space by progressively shrinking your candidate against each subsequent element.

**Summary:**
Think of the common prefix as a shrinking filter where each new string in the input either maintains or truncates the existing candidate.

---
