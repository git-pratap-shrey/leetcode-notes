---
title: "Evaluate Boolean Binary Tree"
slug: evaluate-boolean-binary-tree
date: "2026-08-18"
---

# My Solution
~~~cpp
class Solution {
public:

    bool isAvailable(unordered_set<int>& seats, int seat) {
        return seats.find(seat) == seats.end();
    }

    int maxNumberOfFamilies(int n, vector<vector<int>>& reservedSeats) {

        unordered_map<int,unordered_set<int>> mp;

        for(auto &x:reservedSeats) {
            mp[x[0]].insert(x[1]);
        }

        int ans=(n-mp.size())*2;

        for(auto &p:mp) {

            unordered_set<int>& seats=p.second;

            bool groupA=isAvailable(seats,2) && isAvailable(seats,3) && isAvailable(seats,4) && isAvailable(seats,5);

            bool groupB=isAvailable(seats,4) && isAvailable(seats,5) && isAvailable(seats,6) &&isAvailable(seats,7);

            bool groupC=isAvailable(seats,6) &&isAvailable(seats,7) &&isAvailable(seats,8)&&isAvailable(seats,9);

            if(groupA &&groupC)
                ans+=2;
            else if(groupA || groupB || groupC)
                ans++;
        }

        return ans;
    }
};
~~~

# Submission Review
## Approach
* **Technique:** Greedy simulation using a hash map to group reserved seats by row.
* **Optimality:** Optimal. It correctly identifies the three possible 4-seat placements per row and uses a greedy logic to maximize the count. The logic covers rows with reservations efficiently and handles rows without reservations in $O(1)$ via multiplication.

## Complexity
* **Time Complexity:** $O(R)$, where $R$ is the number of reserved seats. Iterating over the map and performing set lookups for each reserved row takes linear time relative to the input size.
* **Space Complexity:** $O(R)$ to store the reserved seats in the map and nested sets.

## Efficiency Feedback
* **Bottleneck:** Using `std::unordered_map<int, std::unordered_set<int>>` incurs significant overhead due to multiple memory allocations and hashing.
* **Optimization:** Since seats are restricted to columns 1–10, you can use a **bitmask** (integer) to represent each row's reservation state. This would replace the `unordered_set` with a single `int` per row, drastically reducing memory usage and constant-time overhead.

## Code Quality
* **Readability:** Good. The logic for `groupA`, `groupB`, and `groupC` is clear and maps directly to the problem requirements.
* **Structure:** Good. Separation of the `isAvailable` helper is appropriate.
* **Naming:** Moderate. `groupA`, `groupB`, and `groupC` are somewhat descriptive, but could be more explicit (e.g., `leftGroup`, `middleGroup`, `rightGroup`).
* **Concrete Improvements:** 
    * Replace `unordered_set<int>` with a `uint16_t` bitmask. This eliminates heap allocations for the sets.
    * Use `std::unordered_map<int, int>` to store bitmasks, or even a sorted `std::vector<std::pair<int, int>>` if $R$ is small, to improve cache locality.
    * The problem name mentioned ("Evaluate Boolean Binary Tree") does not match the provided code (which solves "Cinema Seat Allocation"). Ensure consistency in future submissions.

---

# Question Revision
### Revision Report: Evaluate Boolean Binary Tree

**Pattern:** Tree Recursion (Post-order Traversal / Divide and Conquer)

**Brute Force:**
Convert the tree into a representation (like a list) and repeatedly scan for leaves to evaluate until a single value remains. This is inefficient due to redundant tree traversals, leading to $O(n^2)$ time.

**Optimal Approach:**
Use a recursive post-order traversal. Since the value of an internal node depends entirely on its children, evaluate the left and right subtrees first, then apply the logic gate (OR for `2`, AND for `3`) to the results.
*   **Time Complexity:** $O(n)$, where $n$ is the number of nodes, as each node is visited exactly once.
*   **Space Complexity:** $O(h)$, where $h$ is the height of the tree, representing the recursion stack depth.

**The 'Aha' Moment:**
The problem defines internal nodes purely as operators for their children's values, signaling that the result of a parent is strictly a functional composition of its evaluated descendants.

**Summary:**
When a node's value is derived from its children, recursively solve the subproblems bottom-up using a post-order traversal.

---