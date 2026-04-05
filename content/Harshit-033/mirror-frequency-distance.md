---
title: "Mirror Frequency Distance"
slug: mirror-frequency-distance

---
---

# My Solution
~~~c
int mirrorFrequency(char* s) {
    int hass[257];
    int len=strlen(s);
    for(int i=0;i<len;i++){
        hass[s[i]]+=1;
    }
    int count=0;
    for(int i=0;i<257;i++){
        if(i>=48 && i<=57){
            count=count+abs(hass[i]-hass[57-(i-48)]);
            hass[i]=0;
            hass[57-(i-48)]=0;
        }

        if(i>=65 && i<=90){
            count=count+abs(hass[i]-hass[90-(i-65)]);
            hass[i]=0;
            hass[90-(i-65)]=0;
            
            
            
        }

        if(i>=97 && i<=122){
            count=count+abs(hass[i]-hass[122-(i-97)]);
            hass[i]=0;
            hass[122-(i-97)]=0;
            
            
        }
    }

    return count;
    
}
~~~

# Submission Review
## Approach
*   **Technique:** Frequency hashing (counting sort approach).
*   **Optimal:** Yes, the algorithm processes the string in $O(N)$ and the fixed-size character set in $O(1)$, which is optimal for frequency-based character matching.

## Complexity
*   **Time Complexity:** $O(N + C)$, where $N$ is the string length and $C=256$ (constant size of the frequency array).
*   **Space Complexity:** $O(1)$, as the frequency array size is fixed regardless of input size.

## Efficiency Feedback
*   **Bug:** The `hass` array is **uninitialized**. In C, local arrays contain garbage values. Accessing `hass[s[i]] += 1` results in Undefined Behavior. You must initialize it using `memset(hass, 0, sizeof(hass))` or by declaring `int hass[257] = {0};`.
*   **Efficiency:** The current structure iterates through 257 indices but performs logic inside nested conditions. The logic effectively double-counts because it resets values to 0; however, the `abs()` logic is technically correct for pairs, though it re-calculates the same distance for symmetric pairs (e.g., 'A' and 'Z' will be computed when `i` reaches 'A', and then again when `i` reaches 'Z', adding the same difference twice).

## Code Quality
*   **Readability:** Moderate. The hardcoded magic numbers (48, 57, 65, etc.) make the code difficult to maintain and verify.
*   **Structure:** Poor. The logic is fragmented into three `if` blocks that perform redundant work.
*   **Naming:** Moderate. `hass` is a non-standard name; `freq` or `counts` would be clearer.

### Concrete Improvements
1.  **Initialize Array:** Use `int hass[257] = {0};`.
2.  **Simplify Logic:** Use a helper function or a loop that iterates up to the midpoint of each character group (e.g., `'A' + ('Z'-i)`) to avoid redundant calculation and double-counting.
3.  **Use Constants:** Define ASCII ranges as constants (e.g., `'0'`, `'9'`, `'A'`, `'Z'`, `'a'`, `'z'`) instead of raw integers.
4.  **Avoid Double Counting:** To avoid the current bug where you calculate the distance for `(i, mirror)` and later `(mirror, i)`, use a `visited` flag or structure the loop to only iterate through the first half of the range.

**Refined Loop Example:**
```c
for (int i = 0; i <= (90 - 65) / 2; i++) { // For uppercase
    count += abs(hass[65 + i] - hass[90 - i]);
}
```

---
---


# Question Revision
### Revision Report: Mirror Frequency Distance

**Pattern:** Two Pointers / Sliding Window (Frequency Balancing)

**Brute Force:** Generate all possible subarrays, calculate the frequency of each element, and verify if the distribution is perfectly mirrored (symmetric), resulting in $O(n^2)$ or $O(n^3)$ complexity depending on frequency verification.

**Optimal Approach:**
Utilize two pointers to maintain a sliding window while tracking element frequencies in a hash map. If the problem requires finding the smallest/largest distance where a mirror property holds, maintain a frequency state and shrink/expand the window when the balance is violated.
*   **Time Complexity:** $O(n)$ where $n$ is the number of elements.
*   **Space Complexity:** $O(k)$ where $k$ is the number of unique elements (alphabet size).

**The 'Aha' Moment:**
When a problem asks for a property that depends on the symmetry or balance of relative frequencies within a variable-length segment, the sliding window pattern allows you to update state in $O(1)$ without re-scanning the entire subarray.

**Summary:**
Whenever you need to validate a frequency-based constraint across varying subarrays, use two pointers to incrementally update your state rather than recalculating from scratch.

---
