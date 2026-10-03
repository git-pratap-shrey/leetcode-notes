---
title: "Merge Two Sorted Lists"
slug: merge-two-sorted-lists
date: "2026-10-03"
---

# My Solution
~~~cpp
class Solution {
public:
    int missingMultiple(vector<int>& nums, int k) {
        unordered_set<int>s(nums.begin(),nums.end());
        int ans=k;
        while(s.count(ans)){
            ans+=k;
        }
        return ans;
    }
};

~~~

# Submission Review
## Approach
- **Technique:** Hashing (using `unordered_set`) and Linear Probing.
- **Optimality:** Optimal. The approach correctly finds the smallest multiple of $k$ not present in the input by checking multiples $k, 2k, 3k, \dots$ until a gap is found.

## Complexity
- **Time Complexity:** $O(N)$ to populate the set, where $N$ is the size of `nums`. The `while` loop runs at most $N+1$ times. Total: $O(N)$.
- **Space Complexity:** $O(N)$ to store the elements of `nums` in the `unordered_set`.

## Efficiency Feedback
- **Runtime:** The use of `unordered_set` provides average $O(1)$ lookup, making the overall runtime efficient.
- **Memory:** Memory usage is proportional to the input size. To reduce memory, one could sort the array and use binary search or two pointers, though this would increase time complexity to $O(N \log N)$.

## Code Quality
- **Readability:** Good. The logic is straightforward and concise.
- **Structure:** Good. The flow from set initialization to the search loop is logical.
- **Naming:** Moderate. `s` is a generic name for the set; `nums_set` would be more descriptive. `ans` is acceptable for a result variable.
- **Concrete Improvements:** 
    - Add `s.reserve(nums.size())` before populating the set to prevent multiple rehashes.
    - Change `unordered_set<int> s(nums.begin(), nums.end())` to use a custom hash if the input is known to contain adversarial cases (anti-hash tests) to avoid $O(N^2)$ worst-case complexity.

---

# Question Revision
# Revision Report: Merge Two Sorted Lists

- **Pattern:** Two Pointers / Dummy Node
- **Brute Force:** Extract all elements from both linked lists into an array, sort the array using a built-in sorting algorithm, and rebuild a new linked list from the sorted array.
- **Optimal Approach:** 
    - Initialize a **dummy node** to act as the starting point of the merged list.
    - Use a `current` pointer to track the end of the new list.
    - Compare the heads of the two lists; attach the node with the smaller value to `current` and move that list's head forward.
    - Once one list is exhausted, append the remaining part of the other list to `current`.
    - **Time Complexity:** $O(n + m)$ where $n$ and $m$ are the lengths of the two lists.
    - **Space Complexity:** $O(1)$ since we are rearranging existing nodes (excluding the output list).
- **The 'Aha' Moment:** When you see "two sorted" linear structures, the immediate intuition should be a two-pointer merge to maintain order without re-sorting.
- **Summary:** Use a dummy node and two pointers to stitch the smaller current elements into a new list.

---