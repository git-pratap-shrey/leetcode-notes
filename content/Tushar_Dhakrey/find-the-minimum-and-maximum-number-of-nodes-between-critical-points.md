---
title: "Find the Minimum and Maximum Number of Nodes Between Critical Points"
slug: find-the-minimum-and-maximum-number-of-nodes-between-critical-points
date: "2026-08-31"
---

# My Solution
~~~java
class Solution {
    static final long MOD = 1_000_000_007L;
    public int sumDecoded(long[] nums) {
        long ans  =0;
        for(long num: nums){
            int width = (int)(num%10);
            long d = num/10;
            int digits = 0;
            long temp = d;
            while(temp>0){
                digits++;
                temp /= 10;
            }
            int ydigits = digits-width;
            long power = 1;
            for(int i=0;i<ydigits;i++){
                power*=10;
            }
            long x = d/power;
            long y = d%power;
            long decode = powMod(x,y);
            ans = (ans+decode)%MOD;
        }
        return (int)ans;
    }
    private long powMod(long x, long y){
        long result = 1;
        x %= MOD;
        while(y>0){
            if((y&1)==1){
                result = (result*x)%MOD;
            }
            x = (x*x)%MOD;
            y /= 2;
        }
        return result;
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Mathematical simulation/Modular Exponentiation.
*   **Optimal:** No. The code appears to be solving a "Decoded Message" problem (calculating powers based on parsed digits), which is completely unrelated to the problem title ("Find the Minimum and Maximum Number of Nodes Between Critical Points").

## Complexity
*   **Time Complexity:** $O(N \cdot (\log_{10}(D) + \log(Y)))$, where $N$ is the number of elements and $D$ is the decoded value.
*   **Space Complexity:** $O(1)$.
*   **Bottleneck:** The manual digit counting loop and the repeated modular exponentiation are sufficient for the provided logic, but the logic itself is disconnected from the problem statement.

## Efficiency Feedback
*   **Redundancy:** The calculation of `digits` via a `while` loop is inefficient; using `Math.log10()` or `String.valueOf(d).length()` is cleaner, though `Math` functions can be slower.
*   **Safety:** The problem states the input is `long[]`, but assumes `num/10` fits within `long` and `power` (derived from `ydigits`) does not overflow `long`. If `ydigits` is large, `power` will overflow.

## Code Quality
*   **Readability:** Poor. The code logic bears no relation to the requested problem ("Minimum and Maximum Number of Nodes Between Critical Points").
*   **Structure:** Moderate. The modular exponentiation helper is correctly implemented using the binary exponentiation algorithm.
*   **Naming:** Poor. The method `sumDecoded` and variable names like `ydigits` are cryptic and do not follow standard Java conventions for the problem described in the prompt.
*   **Improvements:** 
    *   **Mismatch:** Address the actual problem (Critical Points in a Linked List). To find critical points, you must traverse the list once, track the indices of local maxima/minima, and store them in a list or track the `first`, `last`, and `prev` critical indices.
    *   **Logic:** The current solution solves a base-$10$ parsing problem, not a linked list traversal. It should be replaced entirely.

---

# Question Revision
### Revision Report: Find Minimum and Maximum Number of Nodes Between Critical Points

**Pattern:** Linked List Traversal / Linear Scan

**Brute Force:**
Store all node values in an array, iterate through indices $1$ to $n-2$ to identify local maxima/minima (where `curr > prev && curr > next` or `curr < prev && curr < next`), then compute distances between all identified indices. 
*   **Complexity:** $O(n)$ time, $O(n)$ space.

**Optimal Approach:**
Traverse the list once while maintaining a pointer to the `first` critical index and the `prev` (most recently seen) critical index. 
1. Identify critical points on the fly by comparing `curr` with its `prev` and `next` nodes.
2. Update the `min_dist` by calculating `curr_index - prev_index` and the `max_dist` by calculating `curr_index - first_index`.
3. Stop when the list ends.
*   **Complexity:** $O(n)$ time, $O(1)$ space.

**The 'Aha' Moment:**
The problem defines critical points based strictly on immediate neighbors, signaling that a single pass with a sliding window of three nodes is sufficient to identify all necessary state without storing the entire list.

**Summary:** 
Whenever a condition depends on immediate neighbors, perform a single-pass traversal while tracking only the first and last occurrence of the state to save space.

---