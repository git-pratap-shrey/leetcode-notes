---
title: "Add Two Numbers"
slug: add-two-numbers
date: "2026-10-03"
---

# My Solution
~~~cpp
class Solution {
public:
    int countGoodRotations(vector<int>& nums) {
        int n=nums.size();
        int mid=n/2;
        long long sum1=0;long long sum2=0;
        for(int i=0;i<mid;i++){
            sum1+=nums[i];
            sum2+=nums[i+mid];
        }
        int count=0;
        if(sum1>sum2){
            count++;
        }
        for(int i=0;i<n-1;i++){
            sum1=sum1-nums[i]+nums[(i+mid)%n];
            sum2=sum2-nums[(i+mid)%n]+nums[i];
            if(sum1>sum2){
                count++;
            }
        }
        return count;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Sliding Window / Two-Pointer Sums. The code maintains the sum of two halves of the array and updates them incrementally as the array "rotates."
- **Optimality**: Optimal. It processes the array in linear time rather than recalculating sums for every rotation.
- **Correction Note**: The provided code solves a "Good Rotations" problem, **not** the "Add Two Numbers" problem mentioned in the prompt.

## Complexity
- **Time Complexity**: $O(n)$ where $n$ is the size of `nums`. It performs one initial pass to calculate sums and one pass to simulate rotations.
- **Space Complexity**: $O(1)$. Only a few scalar variables are used regardless of input size.

## Efficiency Feedback
- **Runtime**: High efficiency. The use of `long long` for sums prevents overflow during accumulation.
- **Optimizations**: The logic is already streamlined. The use of modulo `(i+mid)%n` is necessary and efficient for handling the wrap-around.

## Code Quality
- **Readability**: Moderate. Lack of spacing around operators (`sum1=sum1-nums[i]+nums[(i+mid)%n]`) makes it slightly dense.
- **Structure**: Good. The logic flow is linear and logical: initialize $\rightarrow$ check $\rightarrow$ slide.
- **Naming**: Moderate. `sum1` and `sum2` are generic; `leftSum` and `rightSum` would be more descriptive.
- **Concrete Improvements**:
    - Add whitespace around operators for better legibility.
    - Consolidate the `sum1 > sum2` check into a helper function or a more consistent loop structure to avoid repeating the `if` block twice.
    - Ensure the problem title matches the implementation to avoid confusion.

---

# Question Revision
# Revision Report: Add Two Numbers

- **Pattern:** Linked List / Simulation
- **Brute Force:** Convert both linked lists into integers, add them together, and convert the resulting sum back into a new linked list. (Risk: Integer overflow for very long lists).
- **Optimal Approach:** 
    - Iterate through both lists simultaneously using a `while` loop.
    - Maintain a `carry` variable to handle sums $\ge 10$.
    - Use a **Dummy Node** to simplify the construction of the result list.
    - Continue the loop as long as there is a node in either list OR a remaining carry.
    - **Time Complexity:** $O(\max(m, n))$ where $m$ and $n$ are the lengths of the two lists.
    - **Space Complexity:** $O(\max(m, n))$ to store the output list.
- **The 'Aha' Moment:** The digits are stored in reverse order, meaning the head of the list is the least significant digit, allowing for a direct linear traversal just like manual column addition.
- **Summary:** Use a dummy node and a carry variable to simulate grade-school addition while traversing two linked lists.

---