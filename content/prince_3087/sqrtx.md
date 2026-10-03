---
title: "Sqrt(x)"
slug: sqrtx
date: "2026-09-16"
---

# My Solution
~~~cpp
/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* next;
    Node* random;
    
    Node(int _val) {
        val = _val;
        next = NULL;
        random = NULL;
    }
};
*/

class Solution {
public:
    Node* copyRandomList(Node* head) {
        Node* ptr = head;
        Node* newHead = NULL;
        Node* newPtr = NULL;
        
        unordered_map<Node*, Node*> mp;
        mp[NULL] = NULL;
        while(ptr){
            Node* temp = new Node(ptr->val);

            if(!newHead){
                newHead = temp;
                newPtr = newHead;
            }
            else{
                newPtr->next = temp;
                newPtr = newPtr->next;
            }
            mp[ptr] = newPtr;
            ptr = ptr->next;
        }

        ptr = head;
        newPtr = newHead;

        while(ptr){
            newPtr->random = mp[ptr->random];
            ptr = ptr->next;
            newPtr = newPtr->next;
        }

        return newHead;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Hash Map-based deep copy. The solution uses a two-pass approach: the first pass creates a copy of the nodes and maps original nodes to their clones; the second pass assigns the `random` pointers using the map.
- **Optimality**: Suboptimal in terms of space. While the time complexity is optimal, the space complexity can be reduced to $O(1)$ (excluding the output list) by weaving the cloned nodes into the original list.

## Complexity
- **Time Complexity**: $O(N)$ where $N$ is the number of nodes. The list is traversed twice.
- **Space Complexity**: $O(N)$ to store the mapping of original nodes to cloned nodes in the `unordered_map`.

## Efficiency Feedback
- **Memory Usage**: The `unordered_map` creates significant overhead. For very large lists, this may lead to high memory consumption compared to the interweaving approach.
- **Optimization**: To achieve $O(1)$ auxiliary space, the original nodes could be modified to point to their clones (`ptr->next = clone`), allowing `random` pointers to be set without a map.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The separation of node creation and pointer assignment is clean.
- **Naming**: Moderate. `ptr` and `newPtr` are generic; `current` and `copyCurrent` would be more descriptive.
- **Concrete Improvements**:
    - **Problem Mismatch**: The provided problem title is "Sqrt(x)", but the code implements "Copy List with Random Pointer".
    - **Redundancy**: The check `if(!newHead)` inside the loop is executed for every node; initializing `newHead` and `newPtr` before the loop or using a dummy node would simplify the logic.
    - **Const Correctness**: The function signature is fixed by the platform, but internal pointers could be handled more robustly.

---

# Question Revision
# Revision Report: Sqrt(x)

- **Pattern:** Binary Search (Search Space Reduction)
- **Brute Force:** Iterate from $0$ up to $x$. The first integer $i$ where $(i+1)^2 > x$ is the floor of the square root.
- **Optimal Approach:** 
    - Perform a binary search on the range $[0, x]$.
    - Calculate `mid = left + (right - left) / 2`.
    - If `mid * mid == x`, return `mid`.
    - If `mid * mid < x`, move `left = mid + 1` (and track `mid` as a potential answer).
    - If `mid * mid > x`, move `right = mid - 1`.
    - **Time Complexity:** $O(\log n)$
    - **Space Complexity:** $O(1)$
- **The 'Aha' Moment:** The search space $[0, x]$ is sorted, and the property $f(i) = i^2$ is monotonically increasing, making it ideal for binary search.
- **Summary:** To find the floor of a root, binary search for the largest integer whose square does not exceed $x$.

---