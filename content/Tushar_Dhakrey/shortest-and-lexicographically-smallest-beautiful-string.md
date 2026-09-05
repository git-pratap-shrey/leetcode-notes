---
title: "Shortest and Lexicographically Smallest Beautiful String"
slug: shortest-and-lexicographically-smallest-beautiful-string
date: "2026-08-27"
---

# My Solution
~~~java
class Solution {
    public String shortestBeautifulSubstring(String s, int k) {
        int left = 0;
        int ones = 0;
        String ans = "";
        for(int right=0;right<s.length();right++){
            if(s.charAt(right)=='1'){
                ones++;
            }
            while(ones==k){
                while(left<=right && s.charAt(left)=='0'){
                    left++;
                }
                String current = s.substring(left,right+1);
                if(ans.equals("") || current.length()<ans.length() || (current.length()==ans.length() && current.compareTo(ans)<0)){
                    ans = current;
                }
                ones--;
                left++;
            }
        }
        return ans;
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Sliding Window with two pointers.
*   **Optimality:** Optimal. The algorithm correctly maintains the smallest window containing exactly $k$ ones and updates the result based on length and lexicographical order.

## Complexity
*   **Time Complexity:** $O(n^2)$ in the worst case. While the sliding window pointers $left$ and $right$ traverse the string in $O(n)$, the `ans.equals` and `current.compareTo` operations, combined with `substring` creation, can take $O(n)$ per valid window found.
*   **Space Complexity:** $O(n)$ to store the `current` substring and the `ans` string.

## Efficiency Feedback
*   **Bottleneck:** String manipulation. Creating a new `substring` object every time `ones == k` is redundant. Comparing strings using `compareTo` is $O(n)$.
*   **Optimization:** Instead of extracting the substring, store the `bestStart` and `bestLength` indices. Only perform the lexicographical comparison if the current window length is less than or equal to the best length found. This avoids unnecessary object allocation inside the loop.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. Uses a standard two-pointer sliding window pattern.
*   **Naming:** Good. `left`, `right`, `ones`, and `ans` are standard, descriptive names for this algorithm.

**Concrete Improvements:**
1.  **Avoid String Allocation:** Replace `ans` (String) with `int bestStart = -1` and `int bestLen = Integer.MAX_VALUE`.
2.  **Comparison Logic:** Only update when `currentLen < bestLen` or `(currentLen == bestLen && s.substring(left, right + 1).compareTo(s.substring(bestStart, bestStart + bestLen)) < 0)`.
3.  **Refactor Loop:** The inner `while` loop logic is slightly repetitive; it can be cleaned up by calculating `currentLength` and performing the update before incrementing `left` and decrementing `ones`.

---

# Question Revision
### Revision Report: Shortest and Lexicographically Smallest Beautiful String

**Pattern:** Sliding Window (Variable Size)

**Brute Force:** Generate all possible substrings, count the number of '1's in each, check if the count equals `k`, and track the shortest and lexicographically smallest result. 
*Complexity:* $O(n^2)$ time, $O(1)$ space.

**Optimal Approach:** 
1. Maintain a window `[left, right]` that expands to include exactly `k` ones.
2. Once the window contains `k` ones, shrink it from the `left` as much as possible while maintaining exactly `k` ones to find the shortest length.
3. Compare valid windows by length first, then lexicographical order. 
*Complexity:* $O(n)$ time (each index visited at most twice), $O(1)$ space (excluding result string).

**The 'Aha' Moment:** The requirement to find the "shortest" substring while maintaining a count of specific elements is a classic signal that the window size must be dynamic, shifting boundaries to satisfy the constraint efficiently.

**Summary:** When seeking the shortest substring satisfying a count constraint, use a sliding window to shrink the left boundary immediately after the count threshold is met.

---