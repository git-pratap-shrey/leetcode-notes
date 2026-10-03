---
title: "Linked List Cycle II"
slug: linked-list-cycle-ii
date: "2026-10-03"
---

# My Solution
~~~cpp
class Solution {
public:
        bool ispossible(vector<int>& nums, int maxOperations,int max){
            int op=0;
            for(int i=0;i<nums.size();i++){
                op+=(nums[i]-1)/max;
            
            if(op>maxOperations)
            return false;
            }
            return true;
        }
    int minimumSize(vector<int>& nums, int maxOperations) {
        int low=1;
        int high=*max_element(nums.begin(),nums.end());
        int ans =0;
        while(low<=high){
            int mid =low+(high-low)/2;
            if(ispossible(nums,maxOperations,mid)){
                ans=mid;
                high=mid-1;
            }
            else{
                low=mid+1;
            }

        }
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Binary Search on the Answer (range $[1, \max(nums)]$) combined with a greedy check function.
- **Correctness**: The solution is **incorrect** for the problem "Linked List Cycle II" (which requires detecting a cycle in a linked list). However, the code provided is a solution for a completely different problem (likely "Minimum Size of the Largest Element after Operations").
- **Optimality**: For the problem the code *actually* solves, the binary search approach is optimal.

## Complexity
- **Time Complexity**: $O(N \log(\max(nums)))$, where $N$ is the size of the input array.
- **Space Complexity**: $O(1)$ beyond the input storage.

## Efficiency Feedback
- The runtime is efficient for the array problem.
- The `ispossible` check function iterates through the array and returns `false` as soon as `op` exceeds `maxOperations`, which is an effective early-exit optimization.

## Code Quality
- **Readability**: Moderate. The logic is clear, but there is a critical mismatch between the problem title ("Linked List Cycle II") and the implementation.
- **Structure**: Good. The separation of the helper function `ispossible` and the main search logic is appropriate.
- **Naming**: Poor. 
    - `ispossible` should follow camelCase or snake_case (`isPossible`).
    - `max` is used as a variable name, which clashes with the `std::max` function in the C++ standard library (though it works here due to scope).
    - `op` is slightly ambiguous (could be `totalOperations`).
- **Improvements**: 
    - Replace `max` with `mid` or `targetSize` in the `ispossible` function to avoid confusion with the `std::max` utility.
    - Ensure the code matches the intended problem statement.

---

# Question Revision
# Revision Report: Linked List Cycle II

- **Pattern:** Two Pointers (Fast & Slow / Floyd's Cycle-Finding Algorithm)

- **Brute Force:** Use a **Hash Set** to store every visited node. If you encounter a node already present in the set, that node is the start of the cycle.
    - **Complexity:** $O(n)$ Time, $O(n)$ Space.

- **Optimal Approach:** 
    1. **Detect Cycle:** Use a `slow` pointer (1 step) and a `fast` pointer (2 steps). If they meet, a cycle exists.
    2. **Find Entrance:** Reset one pointer to the `head` of the list and keep the other at the meeting point. Move both pointers one step at a time; the node where they meet again is the entrance to the cycle.
    - **Complexity:** $O(n)$ Time, $O(1)$ Space.

- **The 'Aha' Moment:** Whenever a problem asks for the *start* or *length* of a cycle in a linked list without allowing extra space, Floyd's Two-Pointer algorithm is the required tool.

- **Summary:** Use fast/slow pointers to detect the loop, then reset one to head and move both at speed 1 to find the collision point at the cycle's entrance.

---