---
title: "Find The Original Array of Prefix Xor"
slug: find-the-original-array-of-prefix-xor
date: "2026-08-29"
---

# My Solution
~~~java
class Solution {
    public int[] findArray(int[] pref) {
        int n = pref.length;
        int[] arr = new int[n];
        arr[0] = pref[0];
        for(int i=0;i<n-1;i++){
            arr[i+1] = pref[i]^pref[i+1];
        }
        return arr;
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Mathematical derivation based on XOR properties. Given $pref[i] = arr[0] \oplus \dots \oplus arr[i]$, the inverse is $arr[i] = pref[i] \oplus pref[i-1]$ (for $i > 0$).
*   **Optimality:** Optimal. It performs a single linear pass over the input array with $O(1)$ auxiliary work per element.

## Complexity
*   **Time Complexity:** $O(n)$, where $n$ is the length of `pref`. The code iterates through the array exactly once.
*   **Space Complexity:** $O(n)$ to store the resulting `arr`. This is necessary as the output requires $n$ elements.

## Efficiency Feedback
*   **Runtime:** The implementation is highly efficient. It avoids unnecessary operations and relies on native bitwise XOR, which is a single-cycle CPU instruction.
*   **Memory:** Memory usage is minimal, confined to the output array allocation. No additional data structures are used.

## Code Quality
*   **Readability:** Good. The logic is concise and follows directly from the mathematical inverse of the prefix XOR operation.
*   **Structure:** Good. The logic is encapsulated well within the required method signature.
*   **Naming:** Good. `pref` and `arr` are standard naming conventions for prefix and result arrays.
*   **Improvements:** 
    *   The loop can be tightened to start from `i = 1` and iterate to `n-1` to avoid the manual initialization of `arr[0]` outside the loop, though the current approach is perfectly acceptable and arguably clearer.
    *   Example of loop tightening:
        ```java
        arr[0] = pref[0];
        for (int i = 1; i < n; i++) {
            arr[i] = pref[i] ^ pref[i - 1];
        }
        ```
    *   The current solution performs an extra check (`i < n-1`) and index calculation (`i+1`), whereas iterating directly through the target indices is slightly more idiomatic.

---

# Question Revision
### Revision Report: Find The Original Array of Prefix Xor

**Pattern:** Bitwise Manipulation / Prefix XOR Properties

**Brute Force:**
Iterate through the `pref` array and for each element, perform a reverse XOR operation by XORing the current prefix with all previous elements in the original array. This results in $O(n^2)$ time complexity.

**Optimal Approach:**
Leverage the property $pref[i] = A[0] \oplus A[1] \oplus \dots \oplus A[i]$. Since $pref[i-1] = A[0] \oplus \dots \oplus A[i-1]$, it follows that $A[i] = pref[i] \oplus pref[i-1]$. We reconstruct the array by XORing the current prefix with the previous prefix ($pref[0]$ is the original $A[0]$).
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$ (excluding output array)

**The 'Aha' Moment:**
Recognizing that the XOR operation is its own inverse ($a \oplus b \oplus b = a$) allows you to "undo" the prefix accumulation by XORing adjacent prefix values.

**Summary:** 
Whenever a prefix sum or prefix XOR is given, remember that the original element can be recovered by XORing or subtracting adjacent prefix values.

---