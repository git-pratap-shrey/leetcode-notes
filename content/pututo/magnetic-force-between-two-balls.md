---
title: "Magnetic Force Between Two Balls"
slug: magnetic-force-between-two-balls
date: "2026-09-09"
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
- **Technique:** Binary Search on Answer combined with a Greedy check function.
- **Optimality:** Optimal. The problem asks to maximize a minimum distance (a classic "max-min" pattern), and the search space is monotonic.

## Complexity
- **Time Complexity:** $O(N \log N + N \log D)$, where $N$ is the number of positions and $D$ is the range of positions (`position.back() - position.front()`).
    - $O(N \log N)$ for sorting.
    - $O(N \log D)$ for binary search ($O(\log D)$ iterations, each calling `ispossible` which is $O(N)$).
- **Space Complexity:** $O(1)$ or $O(\log N)$ depending on the `std::sort` implementation.

## Efficiency Feedback
- **Runtime:** Efficient. The constraints typical for this problem are handled well by this complexity.
- **Optimizations:** 
    - In `ispossible`, the loop starts at `i=0`. Since `lp` is initialized to `position[0]`, the loop can start at `i=1` to save one iteration.
    - The `if(c >= m)` check inside the loop is a good early-exit optimization.

## Code Quality
- **Readability:** Moderate. The logic is clear, but the lack of consistent spacing and indentation makes it slightly harder to scan.
- **Structure:** Good. The separation of the validation logic (`ispossible`) from the search logic (`maxDistance`) is a best practice.
- **Naming:** Poor. 
    - `ispossible` should be `isPossible` (CamelCase) or `canPlace`.
    - `c` should be `count`.
    - `lp` should be `lastPosition`.
    - `dis` should be `minDistance`.
- **Concrete Improvements:**
    - Change `low=0` to `low=1` since the minimum possible distance between two distinct positions is 1.
    - Fix the indentation in the `ispossible` function for better readability.

---

# Question Revision
# Revision Report: Magnetic Force Between Two Balls

- **Pattern:** Binary Search on Answer.
- **Brute Force:** Try every possible distance $d$ from $1$ up to the maximum possible distance (position of last ball minus first ball). For each $d$, check if $m$ balls can be placed. 
- **Optimal Approach:** 
    - **Logic:** The answer space is monotonic: if it's possible to place balls with a minimum distance $d$, it is also possible for any distance $< d$. 
    - Perform a binary search on the distance range $[1, \text{max\_pos} - \text{min\_pos}]$. 
    - For a midpoint `mid`, use a greedy helper function to count how many balls can be placed such that each is at least `mid` distance apart. If the count $\ge m$, the distance is feasible; try a larger distance.
    - **Complexity:** 
        - Time: $O(n \log n + n \log (\text{max\_dist}))$, where $n \log n$ is for sorting positions and $n \log (\text{max\_dist})$ is for binary search.
        - Space: $O(1)$ or $O(n)$ depending on the sorting implementation.
- **The 'Aha' Moment:** When the problem asks to "maximize the minimum" (or minimize the maximum) of a value, it is a classic signal for Binary Search on Answer.
- **Summary:** Sort the positions and binary search for the largest distance that allows $m$ balls to be placed greedily.

---