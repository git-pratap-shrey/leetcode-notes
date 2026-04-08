---
title: "Rotate String"
slug: rotate-string
date: "2026-04-08"

---
---

# My Solution
~~~c
bool rotateString(char* s, char* goal) {
    int lens=strlen(s);
    int leng=strlen(goal);
    if(lens!=leng) return false;

    char check[2*lens];

    for(int i=0;i<2*lens;i++){
        check[i]=s[i%lens];

    }

    for(int i=0;i<lens;i++){
        int j=0;
        while(j<leng && check[i+j]==goal[j]){
            j++;
        }

        if(j==leng) return true;
    }

    return false;
    
}
~~~

# Submission Review
## Approach
*   **Technique:** Brute-force pattern matching on a doubled string concatenation.
*   **Optimal:** Yes, the logic correctly identifies if `goal` is a rotation of `s` by searching for it within `s + s`.

## Complexity
*   **Time Complexity:** $O(N^2)$, where $N$ is the length of the string. The nested loops perform up to $N \times N$ comparisons.
*   **Space Complexity:** $O(N)$, used to store the doubled string `check`.

## Efficiency Feedback
*   **Bottleneck:** The manual search (`while` loop) is $O(N^2)$. While this passes for typical constraints, it can be improved to $O(N)$ using built-in library functions like `strstr` or advanced algorithms like KMP.
*   **Optimization:** You can replace the manual search with `strstr(check, goal)` to leverage highly optimized C standard library implementations.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Moderate. The use of a VLA (Variable Length Array) `char check[2*lens]` is technically a C99 feature; while often supported, it can lead to stack overflow on very large inputs.
*   **Naming:** Good. Variable names (`lens`, `leng`, `check`) are descriptive enough for this context.

**Concrete Improvements:**
1.  **Safety:** Avoid VLA if `lens` can be very large. Use dynamic allocation (`malloc`) or a fixed-size buffer if the problem constraints are known.
2.  **Edge Cases:** For an empty string, the current logic returns `true` (if `s` and `goal` are both empty, `lens` is 0). Confirm if this aligns with the problem's definition of an empty string rotation.
3.  **Refactoring:**
    ```c
    // Replace manual loop with:
    char *concat = malloc(2 * lens + 1);
    sprintf(concat, "%s%s", s, s);
    bool result = (strstr(concat, goal) != NULL);
    free(concat);
    return result;
    ```

---
---


# Question Revision
### Revision Report: Rotate String

**Pattern:** String Concatenation / Search

**Brute Force:** Generate every possible rotation of string `A` by shifting characters one by one and comparing each result to string `B`.
*   **Time Complexity:** $O(n^2)$
*   **Space Complexity:** $O(n)$

**Optimal Approach:** Concatenate string `A` with itself (`A + A`). If `B` is a valid rotation of `A`, it must exist as a substring within the doubled string, provided `len(A) == len(B)`.
*   **Time Complexity:** $O(n)$ (assuming efficient substring search)
*   **Space Complexity:** $O(n)$

**The 'Aha' Moment:** Whenever a problem involves cyclic shifts or circular arrangements, doubling the string creates a linear space containing every possible rotation as a continuous substring.

**Summary:** To check for cyclic rotations, look for the target string inside the original string concatenated with itself.

---
