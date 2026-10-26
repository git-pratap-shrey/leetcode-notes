---
title: "Rotting Oranges"
slug: rotting-oranges
date: "2026-10-20"
---

# My Solution
~~~cpp
class Solution {
public:
    bool in_range(int x, int i, int j){
        if(x >= i && x <= j){
            return true;
        }        
        else{
            return false;
        }
    }
    long long countSubarrays(vector<int>& nums, int minK, int maxK) {
        int i = 0, j = 0;
        long long ans = 0;
        while(i < nums.size() && j < nums.size()){
            while(i < nums.size() && !in_range(nums[i], minK, maxK)){
                i++;
            }
            
            j = i;
            
            while(j < nums.size() && in_range(nums[j], minK, maxK)){
                j++;
            }

            // cout<<i<<" "<<j<<endl;

            long long count = j - i;
            count = (count * (count+1));
            count /= 2;

            ans += count;

            i = j;
        }

        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Two-pointer / Sliding Window approach to identify contiguous segments of elements falling within the range `[minK, maxK]`.
- **Optimality**: The approach is **incorrect** for the problem "Count Subarrays With Bounded Integers" (which this code actually implements), and it is **completely unrelated** to the "Rotting Oranges" problem mentioned in the prompt.
- **Logic Error**: The code counts subarrays where *all* elements are between `minK` and `maxK`. It fails to count subarrays that contain at least one element in the range but also contain elements smaller than `minK` (as long as no element exceeds `maxK`).

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the size of the input vector. Each element is visited at most twice.
- **Space Complexity**: $O(1)$, as only a few integer variables are used.

## Efficiency Feedback
- The linear scan is efficient, but since the logic is fundamentally flawed for the bounded subarray problem, the efficiency is irrelevant.
- For the actual intended problem (Rotting Oranges), this logic provides no utility as that problem requires a Breadth-First Search (BFS) on a 2D grid.

## Code Quality
- **Readability**: Moderate. The logic is easy to follow, but the helper function `in_range` is unnecessarily verbose (could be a single return statement).
- **Structure**: Good. The use of a while-loop to segment the array is a standard pattern.
- **Naming**: Good. Variable names like `ans`, `minK`, and `maxK` are clear.
- **Improvements**:
    - Replace `in_range` logic with: `return x >= i && x <= j;`.
    - The `long long` cast for `count` is handled correctly to prevent overflow during the $(n \times (n+1))/2$ calculation.

**Final Note**: There is a complete mismatch between the problem title ("Rotting Oranges") and the provided code (which attempts to solve a subarray counting problem).

---

# Question Revision
# Revision Report: Rotting Oranges

- **Pattern**: Breadth-First Search (BFS) / Multi-Source BFS.
- **Brute Force**: Repeatedly scanning the entire grid to find fresh oranges adjacent to rotten ones and marking them rotten until no more changes occur. This would result in a highly inefficient $O((R \times C)^2)$ time complexity.
- **Optimal Approach**: 
    - **Logic**: Initialize a queue with all coordinates of initially rotten oranges and count total fresh oranges. Perform a level-order traversal: for each rotten orange, infect its 4-way neighbors. Each "level" of the BFS represents 1 minute. If the final count of fresh oranges is 0, return the time elapsed; otherwise, return -1.
    - **Time Complexity**: $O(R \times C)$ — each cell is visited at most once.
    - **Space Complexity**: $O(R \times C)$ — in the worst case, the queue holds all cells.
- **The 'Aha' Moment**: The problem asks for the *minimum time* for a process to spread uniformly from multiple starting points, which is a classic signal for Multi-Source BFS.
- **Summary**: Use Multi-Source BFS to simulate simultaneous spreading across a grid to find the shortest time to reach all target nodes.

---