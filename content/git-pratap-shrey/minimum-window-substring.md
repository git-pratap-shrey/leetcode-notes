---
title: "Minimum Window Substring"
slug: minimum-window-substring
date: "2026-09-30"
---

# My Solution
~~~cpp
class Solution {
public:
    bool recursiveDfs(int s, vector<int>* adj, vector<bool>& visited, vector<bool>& safe, vector<int>& order){
        for(int u : adj[s]){
            if(safe[u]){
                continue;
            }
            if(visited[u]){
                return false;
            }
            visited[u] = true;
            if(!recursiveDfs(u, adj, visited, safe, order)){
                return false;
            }
            visited[u] = false;
        }

        if(!safe[s]){
            // cout<<s<<" ";
            order.push_back(s);
            safe[s] = true;
        }
        return true;
    }
    
    vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites) {
        vector<int> adj[numCourses];
        for(auto p : prerequisites){
            adj[p[0]].push_back(p[1]);    
        }
        
        vector<bool> visited(numCourses);
        vector<bool> safe(numCourses);
        vector<int> order;
        
        
        for(int i = 0; i < numCourses; i++){
            visited[i] = true;
            if(!recursiveDfs(i, adj, visited, safe, order)){
                // cout<<"cycle"; 
                return {};
            }
            visited[i] = false;
            if(!safe[i]){
                // cout<<i<<" ";
                order.push_back(i);
                safe[i] = true;
            
            }
            // cout<<endl<<endl;
        }
        
        return order;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Depth-First Search (DFS) with cycle detection and topological sorting.
- **Optimality**: **Incorrect.** The code is solving "Course Schedule II" (Topological Sort), but the problem prompt asks for "Minimum Window Substring." Furthermore, the cycle detection logic is flawed because it resets `visited[u] = false` (backtracking), which leads to exponential time complexity in DAGs and fails to properly memoize visited nodes.

## Complexity
- **Time Complexity**: $O(2^V)$ in the worst case. Because `visited` is reset to `false` after the recursive call, the algorithm may visit the same node multiple times via different paths rather than marking it as processed.
- **Space Complexity**: $O(V + E)$ to store the adjacency list and the recursion stack.

## Efficiency Feedback
- **Exponential Runtime**: The backtracking approach (`visited[u] = false`) transforms a linear-time topological sort into an exhaustive path search.
- **Redundancy**: The logic checks `!safe[i]` and pushes to `order` both inside the recursive function and in the main loop, which is redundant and potentially leads to incorrect ordering.

## Code Quality
- **Readability**: Moderate. The code follows standard indentation and structure.
- **Structure**: Poor. It attempts to solve a Graph problem while being labeled as a String problem. The recursive logic for cycle detection is mixed with the logic for ordering.
- **Naming**: Good. Variable names like `adj`, `visited`, and `safe` are standard for graph problems.
- **Concrete Improvements**:
    1. **Correct Problem**: Implement a sliding window algorithm for "Minimum Window Substring."
    2. **Fix Cycle Detection**: Use a three-state coloring system (0: unvisited, 1: visiting, 2: visited) to detect cycles in $O(V+E)$ time.
    3. **Remove Backtracking**: Stop resetting `visited[u] = false` to ensure each node is processed only once.

---

# Question Revision
# Revision Report: Minimum Window Substring

### Pattern
**Sliding Window** (Variable Size)

### Brute Force
Iterate through all possible substrings of the input string $s$. For each substring, check if it contains all characters of string $t$ using a frequency map. Keep track of the minimum length found.
- **Complexity:** $O(n^3)$ where $n$ is the length of $s$.

### Optimal Approach
Use two pointers (`left` and `right`) to represent a window.
1. **Expand:** Move `right` to include characters until the window is "valid" (contains all characters of $t$ with required frequencies).
2. **Contract:** Once valid, move `left` to shrink the window from the left as much as possible while maintaining validity to find the minimum length.
3. **Repeat:** Continue expanding and contracting until `right` reaches the end of the string.

**Complexity:**
- **Time:** $O(n + m)$ where $n$ is the length of $s$ and $m$ is the length of $t$. Each pointer visits each character at most once.
- **Space:** $O(K)$ where $K$ is the size of the character set (e.g., 52 for English letters), which is effectively $O(1)$.

### The 'Aha' Moment
The request for the **"minimum window"** containing **"all characters"** of another string immediately signals a sliding window approach to find a contiguous range.

### Summary
Expand `right` to satisfy the condition, then contract `left` to optimize the length.

---