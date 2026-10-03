---
title: "Reverse Linked List"
slug: reverse-linked-list
date: "2026-10-02"
---

# My Solution
~~~cpp
class Solution {
public:
    string minWindow(string s, string t) {
        unordered_map<char, int> need, window;

        for (char c : t)
            need[c]++;

        int left = 0;
        int have = 0;
        int required = need.size();

        int bestLen = INT_MAX;
        int bestStart = 0;

        for (int right = 0; right < s.size(); right++) {
            char c = s[right];
            window[c]++;

            // This character requirement is now satisfied
            if (need.count(c) &&
                window[c] == need[c]) {
                have++;
            }

            // Current window is valid
            while (have == required) {

                // Update answer
                if (right - left + 1 < bestLen) {
                    bestLen = right - left + 1;
                    bestStart = left;
                }

                // Remove left character
                char x = s[left];
                window[x]--;

                if (need.count(x) &&
                    window[x] < need[x]) {
                    have--;
                }

                left++;
            }
        }

        if (bestLen == INT_MAX)
            return "";

        return s.substr(bestStart, bestLen);
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Sliding Window (Two Pointers) using frequency maps.
- **Optimality:** Optimal. The sliding window ensures each character is visited at most twice, and the hash map provides efficient lookups.

**Note:** There is a critical discrepancy between the provided problem title ("Reverse Linked List") and the provided code, which implements "Minimum Window Substring." The analysis below focuses on the provided code.

## Complexity
- **Time Complexity:** $O(N + M)$, where $N$ is the length of string `s` and $M$ is the length of string `t`. Each pointer (`left`, `right`) traverses the string `s` once.
- **Space Complexity:** $O(K)$, where $K$ is the number of unique characters in the alphabet (effectively $O(1)$ if the character set is limited, e.g., ASCII).

## Efficiency Feedback
- **Map Overhead:** Using `std::unordered_map` introduces hashing overhead. For character-based problems, using a fixed-size array `int[128]` or `int[256]` would significantly reduce runtime and memory overhead.
- **Substring Operation:** `s.substr` is called only once at the end, which is efficient.

## Code Quality
- **Readability:** Good. The logic is clear, and comments appropriately mark the window movement stages.
- **Structure:** Good. The flow from initialization $\rightarrow$ expansion $\rightarrow$ contraction $\rightarrow$ result is logical.
- **Naming:** Good. Variable names like `have`, `required`, `bestLen`, and `bestStart` clearly convey their purpose.

**Concrete Improvements:**
1. **Replace Maps:** Change `unordered_map<char, int>` to `vector<int>(128, 0)` to avoid heap allocations and hashing.
2. **Input Validation:** While not strictly necessary for competitive programming, adding a check for `s.empty()` or `t.empty()` would improve robustness.

---

# Question Revision
# Revision Report: Reverse Linked List

- **Pattern**: Two Pointers (Iterative) / Recursion.
- **Brute Force**: Copy the values of the linked list into an array/stack, reverse the array, and then overwrite the original linked list nodes with the reversed values.
- **Optimal Approach**: 
    - **Logic**: Use two pointers (`prev` initialized to `null` and `curr` initialized to `head`). Iterate through the list; in each step, save the `next` node, flip the `curr.next` pointer to point to `prev`, then move `prev` and `curr` one step forward.
    - **Time Complexity**: $O(n)$ — each node is visited once.
    - **Space Complexity**: $O(1)$ — only pointer references are used.
- **The 'Aha' Moment**: The need to change the direction of a one-way pointer requires a temporary variable to "remember" the rest of the list before breaking the current link.
- **Summary**: Reverse a linked list by flipping the `next` pointer of each node to its predecessor while traversing once.

---