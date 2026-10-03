---
title: "Linked List Cycle"
slug: linked-list-cycle
date: "2026-10-03"
---

# My Solution
~~~cpp
class Solution {
public:
        bool ispossible(vector<int>& position, int m,int dis){
            int c=1;
            int lp=position[0];
            for(int i=0;i<position.size();i++){
                if(position[i]-lp>=dis){
                    c++;
                    lp=position[i];
                }
                if(c>=m)
                return true;
            }
            return false;
        }

    int maxDistance(vector<int>& position, int m) {
        sort(position.begin(),position.end());
            int low=0;
            int high=position.back()-position.front();
            int ans =0;
            while(low<=high){
                int mid=low+(high-low)/2;
                if(ispossible(position,m,mid)){
                    ans=mid;
                    low=mid+1;
                }
                else{
                    high=mid-1;
                }
            }
        
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Binary Search on Answer combined with a Greedy check function (`ispossible`).
- **Optimality**: Optimal. This is the standard approach for "maximize the minimum distance" problems.

## Complexity
- **Time Complexity**: $O(N \log N + N \log D)$, where $N$ is the number of positions and $D$ is the distance between the first and last element. $N \log N$ is for sorting, and $N \log D$ is for the binary search.
- **Space Complexity**: $O(1)$ (excluding the space required for sorting, which depends on the implementation, usually $O(\log N)$).

## Efficiency Feedback
- **Runtime**: The solution is efficient. The binary search range is well-defined.
- **Minor Optimization**: In `ispossible`, the loop starts at `i = 0`, but since `lp` is initialized to `position[0]`, the first iteration `position[0] - lp >= dis` will only be true if `dis == 0`. Starting the loop from `i = 1` would save $N$ iterations per check.

## Code Quality
- **Readability**: Moderate. The logic is clear, but the lack of consistent indentation and spacing makes it harder to scan.
- **Structure**: Good. The separation of the predicate function (`ispossible`) and the search logic is correct.
- **Naming**: Poor. 
    - `ispossible` is generic; `canPlace` or `checkDistance` would be better.
    - `c` should be `count`.
    - `lp` should be `lastPosition`.
    - `dis` should be `minDistance`.
- **Concrete Improvements**: 
    - Fix the indentation of the `if` blocks and function bodies.
    - Start the loop in `ispossible` from `i = 1`.
    - Change `int low = 0` to `int low = 1` as the minimum possible distance between two distinct points is typically 1.

---

# Question Revision
# Revision Report: Linked List Cycle

- **Pattern**: Two Pointers (Fast & Slow / Tortoise and Hare)
- **Brute Force**: Use a Hash Set to store every visited node. If you encounter a node already present in the set, a cycle exists. 
    - **Complexity**: $O(n)$ Time / $O(n)$ Space.
- **Optimal Approach**: Initialize two pointers at the head. The slow pointer moves 1 step and the fast pointer moves 2 steps. If there is a cycle, the fast pointer will eventually "lap" the slow pointer and they will meet at the same node. If the fast pointer reaches `null`, no cycle exists.
    - **Complexity**: $O(n)$ Time / $O(1)$ Space.
- **The 'Aha' Moment**: When the problem asks to detect a cycle in a linear structure without using extra space, think of two runners on a track.
- **Summary**: Use a fast and slow pointer; if they ever meet, the list is circular.

---