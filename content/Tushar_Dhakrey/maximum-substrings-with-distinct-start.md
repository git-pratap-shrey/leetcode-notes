---
title: "Maximum Substrings With Distinct Start"
slug: maximum-substrings-with-distinct-start
date: "2026-07-09"
---

# My Solution
~~~
java
class Solution {
    public int maxDistinct(String s) {
        long count = s.chars().distinct().count();
        return (int)count;
    }
}
~~~

# Submission Review

## Approach
*   **Technique:** Set-based counting. 
*   **Correctness:** The provided code counts the total number of **unique characters** present in the string. If the problem asks for the maximum number of substrings with distinct starts (or any interpretation involving grouping), this solution is **incorrect**. It simply calculates the alphabet cardinality of the input string.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the length of the string, due to the stream traversal required for `distinct().count()`.
*   **Space Complexity:** $O(K)$, where $K$ is the size of the character set (e.g., 256 for extended ASCII), used by the internal hash set or boolean array to track seen characters.

## Efficiency Feedback
*   The approach is highly efficient for its current logic. However, since the logic does not solve a typical competitive programming problem related to "substrings," efficiency is moot.
*   **Optimization:** Using `s.chars()` is idiomatic but slightly slower than a primitive `for` loop over a `char[]` array due to stream overhead.

## Code Quality
*   **Readability:** Good. The code is concise and utilizes modern Java Streams.
*   **Structure:** Good. It is encapsulated within the expected class and method signature.
*   **Naming:** Good. The method name `maxDistinct` is clear, though it currently describes a character count rather than a substring algorithm.
*   **Concrete Improvements:** 
    *   If the goal is to count unique characters, this is sufficient.
    *   If the goal is to solve a complex substring problem (e.g., "Max number of substrings with distinct characters"), the entire implementation must be replaced with a Sliding Window or Two-Pointer approach.
    *   Avoid casting `long` to `int` without confirming the character set constraints; while safe for standard strings, it's a potential risk for very large custom encodings.

---

# Question Revision

#

## Revision Report: Maximum Substrings With Distinct Start

**Pattern:** Sliding Window (Variable Size)

**Brute Force:** 
Iterate through every possible starting position $i$ and extend a secondary pointer $j$ until a duplicate character is encountered, tracking the maximum window size. 
*   **Time Complexity:** $O(n^2)$
*   **Space Complexity:** $O(min(n, m))$ where $m$ is the character set size.

**Optimal Approach:** 
Use a hash map (or frequency array) to store the last seen index of each character. Maintain a `start` pointer that jumps forward to `last_seen[char] + 1` whenever a duplicate is detected, ensuring the window only contains distinct characters.
*   **Time Complexity:** $O(n)$ (Each element is visited once).
*   **Space Complexity:** $O(min(n, m))$ to store character indices.

**The 'Aha' Moment:**
When the problem asks for the "longest" subarray or substring satisfying a condition involving unique elements, the constraints necessitate a sliding window where the `start` pointer only moves forward to shrink the window's invalid portion.

**Summary:** 
Whenever you see "longest substring" with a constraint on element uniqueness, map the last positions of characters to keep your sliding window valid in a single pass.

---