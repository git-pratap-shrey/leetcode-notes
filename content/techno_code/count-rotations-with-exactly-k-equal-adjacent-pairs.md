---
title: "Count Rotations With Exactly K Equal Adjacent Pairs"
slug: count-rotations-with-exactly-k-equal-adjacent-pairs
date: "2026-09-06"
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
- **Optimality**: This is the optimal approach for this problem type (finding the maximum minimum distance), as the feasibility of the distance is monotonic.

## Complexity
- **Time Complexity**: $O(N \log N + N \log D)$, where $N$ is the number of positions and $D$ is the distance range (`position.back() - position.front()`). The $N \log N$ comes from sorting, and $N \log D$ from the binary search.
- **Space Complexity**: $O(1)$ or $O(N)$ depending on the sorting implementation's auxiliary space.

## Efficiency Feedback
- **Correctness Issue**: In `ispossible`, the loop starts from `i=0`. Since `lp` is initialized to `position[0]`, the first iteration `position[0] - lp` is always $0$. While not breaking the logic, it is redundant.
- **Runtime**: The complexity is optimal. The use of `low + (high - low) / 2` correctly prevents integer overflow.

## Code Quality
- **Readability**: Moderate. Lack of whitespace around operators and inconsistent indentation makes it harder to scan.
- **Structure**: Good. The separation of the check function (`ispossible`) and the binary search logic is standard and clean.
- **Naming**: Poor. 
    - `ispossible` should be `isPossible` (camelCase).
    - `c` $\rightarrow$ `count`
    - `lp` $\rightarrow$ `lastPosition`
    - `dis` $\rightarrow$ `minDistance`
- **Concrete Improvements**:
    - Change `for(int i=0; i<position.size(); i++)` to `for(int i=1; i<position.size(); i++)` in `ispossible` to avoid checking the first element against itself.
    - Add consistent spacing: `if (c >= m)` instead of `if(c>=m)`.

---

# Question Revision
# Revision Report: Count Rotations With Exactly K Equal Adjacent Pairs

### Pattern
**Sliding Window (Fixed-Size) / Circular Array Processing**

### Brute Force
For every possible rotation (total $n$), iterate through the array once to count pairs where `arr[i] == arr[i+1]`.
- **Time Complexity:** $O(n^2)$
- **Space Complexity:** $O(1)$

### Optimal Approach
1. **Initial State:** Calculate the number of adjacent equal pairs in the original array (indices $0$ to $n-2$).
2. **Circular Handling:** Treat the array as circular by checking the pair $(n-1, 0)$.
3. **Incremental Update:** As you rotate the array (shift the starting point from $i$ to $i+1$), you don't recount everything. Instead:
   - Subtract the contribution of the pair being "broken" at the front.
   - Add the contribution of the new pair being "formed" at the back.
4. **Counting:** After each shift, if the current count equals $K$, increment the result.

- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

### The 'Aha' Moment
The realization that rotating an array only changes **two** adjacent relationships (the wrap-around point), allowing for an $O(1)$ update rather than a full recount.

### Summary
Use a sliding window to incrementally update the count of equal adjacent pairs as the rotation point shifts across the circular array.

---