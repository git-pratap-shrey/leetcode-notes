---
title: "Count Rotations With Exactly K Equal Adjacent Pairs"
slug: count-rotations-with-exactly-k-equal-adjacent-pairs
date: "2026-09-06"
---

# My Solution
~~~cpp
class Solution {
public:
    int countRotations(string s, int k) {
        int n=s.size();
        int c=0;
        for(int i=0;i<n;i++){
            if(s[i]==s[(i+1)%n]){
                c++;
            }
        }
        if(k==c-1){
            return c;
        }
        else if(k==c){
            return n-c;
        }
        else{
            return 0;
        }
    }
};
~~~

# Submission Review
## Approach
- **Technique**: The solution attempts a counting-based approach by calculating total adjacent equal pairs in a circular string and using conditional logic to determine the number of rotations.
- **Correctness**: **Incorrect**. The logic `if(k==c-1)` and `if(k==c)` is fundamentally flawed. The number of adjacent equal pairs in a string is invariant under rotation except when the wrap-around pair `(s[n-1], s[0])` changes. The code fails to simulate rotations or correctly track how moving the starting index affects the count of equal adjacent pairs.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the length of the string.
- **Space Complexity**: $O(1)$.

## Efficiency Feedback
- The time and space complexity are optimal for a linear scan, but the logic does not solve the problem.
- To fix this, the solution would need to track the number of equal adjacent pairs and update that count in $O(1)$ as the string rotates, checking the condition for each of the $n$ possible rotations.

## Code Quality
- **Readability**: Moderate. The code is short, but the logic is opaque and lacks comments.
- **Structure**: Good. Basic class structure is followed.
- **Naming**: Poor. Variables `c` and `s` are generic; `c` should be `totalPairs` or similar.
- **Concrete Improvements**:
    1. Implement a sliding window or incremental update: calculate initial pairs, then for each rotation $i$, subtract the contribution of the pair being broken and add the contribution of the new pair being formed.
    2. Replace the arbitrary `if(k==c-1)` logic with a loop that iterates through all $n$ rotations and increments a counter whenever the current equal-pair count equals $k$.

---

# Question Revision
# Revision Report: Count Rotations With Exactly K Equal Adjacent Pairs

### Pattern
**Sliding Window / Linear Scan** (with Circular Array handling)

### Brute Force
For every possible rotation (0 to $n-1$), construct the rotated array and iterate through it to count pairs where `arr[i] == arr[i+1]`.
- **Complexity:** $O(n^2)$ time, $O(n)$ space.

### Optimal Approach
Instead of rotating the array, realize that a rotation only changes **one** adjacency relationship: the connection between the last and first elements.
1. **Initial Count:** Calculate the number of equal adjacent pairs in the original array $arr[0 \dots n-1]$.
2. **Circular Wrap:** Check if $arr[n-1] == arr[0]$ to include the wrap-around pair.
3. **Sliding Transition:** As you "rotate" the array, you remove the pair $(arr[i], arr[i+1])$ and add the pair $(arr[i], arr[i-1])$ (conceptually shifting the boundary).
4. **Observation:** In a full rotation cycle, the total number of adjacent equal pairs remains **constant** regardless of the rotation point, because you are simply shifting the "break" point in a circle.
5. **Logic:** If the total count of equal pairs in the circular arrangement is exactly $K$, then all $n$ rotations satisfy the condition. If not, 0 rotations satisfy it.
- **Complexity:** $O(n)$ time, $O(1)$ space.

### The 'Aha' Moment
The realization that rotating an array is just shifting the "cut" point of a circular ring, meaning the set of adjacent pairs remains identical for all rotations.

### Summary
Rotations of a circular array preserve the total count of adjacent equal pairs; if the circular count equals $K$, all $n$ rotations are valid.

---