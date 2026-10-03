---
title: "Search in a Binary Search Tree"
slug: search-in-a-binary-search-tree
date: "2026-09-18"
---

# My Solution
~~~cpp
class Solution {
public:
    bool isAnagram(string s, string t) {
        unordered_map<char,int>mp;
        int s1=s.length();
        int t1=t.length();
        if(s1 != t1) return false;
        for(int i=0;i<s1;i++){
           char c1=s[i];
           char c2=t[i];
           mp[c1]++;
           mp[c2]--;
        }
        for(auto it:mp){
            if(it.second !=0) return false;
        }
        return true;

    }
};
~~~

# Submission Review
## Approach
- **Technique**: Frequency counting using a hash map (`unordered_map`).
- **Optimality**: Not applicable to the problem stated. The code provided solves **"Valid Anagram"**, whereas the problem title provided is **"Search in a Binary Search Tree"**. The solution completely ignores the requested problem.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the length of the strings.
- **Space Complexity**: $O(K)$, where $K$ is the size of the character set (alphabet).

## Efficiency Feedback
- **Bottleneck**: Using `unordered_map` for character counting is slower than using a fixed-size array `int count[26]` if the input is limited to lowercase English letters.
- **Memory**: Hash map overhead is higher than a primitive array.

## Code Quality
- **Readability**: Moderate. The logic is clear, but the solution is provided for the wrong problem.
- **Structure**: Good. The single-pass update (increment for `s`, decrement for `t`) is a concise way to handle anagram checks.
- **Naming**: Poor. Variables `s1` and `t1` are used for lengths; `n` or `len` would be more conventional. `mp` is a generic name for a map.
- **Concrete Improvements**:
    1. **Correct the Problem**: The code must be replaced entirely to implement a BST search algorithm.
    2. **Data Structure**: Replace `unordered_map<char, int>` with `vector<int>(26, 0)` for a significant performance boost in anagram detection.

---

# Question Revision
# Revision Report: Search in a Binary Search Tree

- **Pattern:** Binary Search / Tree Traversal
- **Brute Force:** Perform a full tree traversal (DFS or BFS) to visit every node until the target value is found.
- **Optimal Approach:** Leverage the BST property: if the target is less than the current node, move to the left child; if greater, move to the right. Continue until the node is found or a null pointer is reached.
    - **Time Complexity:** $O(h)$, where $h$ is the height of the tree ($O(\log n)$ for balanced, $O(n)$ for skewed).
    - **Space Complexity:** $O(1)$ for iterative, $O(h)$ for recursive due to call stack.
- **The 'Aha' Moment:** The phrase "Binary **Search** Tree" implies that the data is already sorted, allowing me to discard half the remaining tree at every step.
- **Summary:** Use the sorted property of the BST to navigate left or right, reducing the search space logarithmically.

---