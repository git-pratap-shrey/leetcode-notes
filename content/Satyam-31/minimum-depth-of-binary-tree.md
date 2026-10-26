---
title: "Minimum Depth of Binary Tree"
slug: minimum-depth-of-binary-tree
date: "2026-10-23"
---

# My Solution
~~~cpp
class Solution {
public:
    int countMagicalPairs(string s) {
        int n =s.size();
        int ans=0;
        for(int j =0;j<n-1;j++){
            int leftCnt[27]={0};
            int rightCnt[27]={0};

            int freq[26]={0};
            int dis=0;
            for(int i =j;i>=0;i--){
                if(freq[s[i]-'a']==0)dis++;
                freq[s[i]-'a']++;
                leftCnt[dis]++;  
            }
            memset(freq,0,sizeof(freq));
            dis=0;
            for(int k=j+1;k<n;k++){
                if(freq[s[k]-'a']==0)dis++;
                freq[s[k]-'a']++;
                rightCnt[dis]++;      
            }

            for(int d=1;d<=26;d++){
                ans+=leftCnt[d]*rightCnt[d];
            }  
            
        }
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: The code uses a **Brute Force / Sliding Window** approach by iterating through every possible split point `j` in the string and counting distinct characters to the left and right.
- **Optimality**: **Not Optimal**. It recomputes the distinct character counts for every split point, leading to redundant calculations.

## Complexity
- **Time Complexity**: $O(n^2)$
  - The outer loop runs $n$ times.
  - Inside, two inner loops iterate through the string (one backwards from $j$, one forwards from $j+1$), each taking $O(n)$.
- **Space Complexity**: $O(1)$ 
  - It uses fixed-size arrays (`leftCnt`, `rightCnt`, `freq`) of size 26 or 27 regardless of input size $n$.

## Efficiency Feedback
- **Bottleneck**: The nested loop structure results in quadratic time complexity. For a string of length $10^5$, this will result in a Time Limit Exceeded (TLE) error.
- **Optimization**: The logic could potentially be optimized using a prefix/suffix frequency array or a sliding window approach if the problem allows, though the current implementation explicitly recalculates counts $O(n)$ times.
- **Critical Note**: The provided code solves a problem called "Magical Pairs" (counting pairs with equal distinct characters), but the prompt labels the problem as "Minimum Depth of Binary Tree." The code is completely unrelated to the prompt's problem statement.

## Code Quality
- **Readability**: Moderate. The logic is straightforward, but the lack of comments and the mismatch between the problem title and the code make it confusing.
- **Structure**: Moderate. The use of `memset` is efficient for resetting arrays, but the logic is repetitive.
- **Naming**: Poor. `s`, `n`, `ans`, `dis` are generic. `countMagicalPairs` describes the function, but the variable `dis` should be `distinctCount`.
- **Concrete Improvements**:
    - Remove `memset` and instead declare the `freq` array inside the loops or use `std::fill`.
    - Ensure the solution matches the actual problem being solved.

---

# Question Revision
# Revision Report: Minimum Depth of Binary Tree

- **Pattern:** Tree Traversal (BFS / DFS)
- **Brute Force:** Use DFS to visit every single node in the tree and track the minimum depth encountered at any leaf node.
- **Optimal Approach:** Use **Breadth-First Search (BFS)**. Since BFS explores the tree level by level, the first time you encounter a leaf node (a node where `left == null && right == null`), that node's depth is guaranteed to be the minimum depth.
    - **Time Complexity:** $O(n)$ — in the worst case (a skewed tree), we visit all nodes.
    - **Space Complexity:** $O(n)$ — to store the queue for the widest level of the tree.
- **The 'Aha' Moment:** The goal is to find the *shortest* path to a leaf, and BFS is always more efficient than DFS for finding the shortest path in an unweighted graph/tree.
- **Summary:** Use BFS to find the first leaf node and return its level immediately to avoid traversing the entire tree.

---