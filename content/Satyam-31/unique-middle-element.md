---
title: "Unique Middle Element"
slug: unique-middle-element
date: "2026-07-04"

---

# My Solution
~~~
class
 Solution {
public:
    bool isMiddleElementUnique(vector<int>& nums) {
        int n=nums.size();
        int a=nums[n/2];
        int c=0;
        for(int i=0;i<n;i++){
            if(nums[i]== a){
                c++;
            }
        }
        return c==1;
    }
};
~~~

# Submission Review

## Approach

- **Technique**: Linear Scan / Frequency Counting.
- **Optimality**: Optimal. To determine if an element is unique in an unsorted array, every element must be inspected at least once.

## Complexity

- **Time Complexity**: $O(n)$, where $n$ is the number of elements in `nums`.
- **Space Complexity**: $O(1)$, as only a few integer variables are used regardless of input size.

## Efficiency Feedback
- The solution is optimally efficient in both time and space. No further optimizations are possible for this logic.

## Code Quality

- **Readability**: Moderate. The logic is simple, but the naming is cryptic.
- **Structure**: Good. The function is concise and focused.
- **Naming**: Poor.
    - `a`: Should be `middleElement` or `target`.
    - `c`: Should be `count`.
    - `n`: Standard for size, but `size` or `length` is more descriptive.
- **Concrete Improvements**:
    - Replace single-letter variable names with descriptive ones to improve maintainability.
    - Use `const vector<int>& nums` in the function signature since the input is not modified.

---

# Question Revision

#

## Unique Middle Element (Linked List Midpoint)

**Pattern:** Two Pointers (Fast & Slow)

**Brute Force:** 
Traverse the entire structure to count the total number of elements $N$, then perform a second traversal to stop at index $N/2$. 
- Time: $O(n)$
- Space: $O(1)$

**Optimal Approach:** 
Initialize two pointers at the head. Move the `fast` pointer two steps and the `slow` pointer one step per iteration. When the `fast` pointer reaches the end, the `slow` pointer will be positioned at the middle element.
- Time: $O(n)$
- Space: $O(1)$

**The 'Aha' Moment:** 
The requirement to find a midpoint in a single pass without knowing the total length is the classic signal for the Fast & Slow pointer technique.

**Summary:** 
A pointer moving at double speed leaves a slower pointer at the exact middle of the sequence upon completion.

---
