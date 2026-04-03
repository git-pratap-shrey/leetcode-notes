---
title: "Single Element in a Sorted Array"
slug: single-element-in-a-sorted-array

---
---

# My Solution
~~~c
int singleNonDuplicate(int* nums, int numsSize) {
    if(numsSize==1){
        return nums[0];
    }
    if(nums[0]!=nums[1]){
        return nums[0];
    }
    if(nums[numsSize-1]!=nums[numsSize-2]){
        return nums[numsSize-1];
    }

    int left=1;
    int right=numsSize-2;
    int mid;
    while(left<=right){
        mid=(left+right)/2;
        if(nums[mid]!=nums[mid-1] && nums[mid]!=nums[mid+1]){
            return nums[mid];
        }

        

        if((nums[mid]==nums[mid+1] && mid%2!=0) || (nums[mid]==nums[mid-1] && mid%2==0)){
            right=mid-1;

        }
        else{
            left=mid+1;
        }

    }
    return 0;
}
~~~

# Submission Review
## Approach
- **Technique**: Binary Search.
- **Optimality**: Optimal. The solution leverages the property that the unique element divides the array into segments where the pattern of identical pairs is shifted, allowing $O(\log N)$ search.

## Complexity
- **Time Complexity**: $O(\log N)$ where $N$ is the number of elements.
- **Space Complexity**: $O(1)$, as it uses a constant amount of extra space.

## Efficiency Feedback
- **Runtime**: Highly efficient. The algorithm terminates as soon as the element is found, avoiding unnecessary passes.
- **Memory**: Minimal; the code uses iterative binary search rather than recursion, which is ideal for performance.

## Code Quality
- **Readability**: Good. The logic flow is straightforward and easy to follow.
- **Structure**: Good. Edge cases (single element, boundaries) are handled explicitly before entering the loop.
- **Naming**: Good. Variable names `left`, `right`, and `mid` are standard and appropriate.

### Concrete Improvements
1. **Integer Overflow**: In `mid = (left + right) / 2`, if `left + right` exceeds the range of a signed 32-bit integer, it will overflow. Use `mid = left + (right - left) / 2` to ensure safety.
2. **Redundant Logic**: The initial boundary checks (`nums[0] != nums[1]`, etc.) are correct but could be simplified or incorporated into the binary search range to reduce the number of `if` statements.
3. **Mid Calculation**: Since this is C, explicitly check for integer division behavior, although `(left + right) / 2` is safe for typical competitive programming constraints.
4. **Style**: The `if(numsSize == 1)` check is technically redundant if the binary search boundaries are initialized to `0` and `numsSize - 1`, as the loop would handle it naturally.

---
---


# Question Revision
### Revision Report: Single Element in a Sorted Array

**Pattern:** Binary Search (Index Manipulation)

**Brute Force:** 
Iterate through the array checking adjacent elements or use XOR to find the unique value.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**Optimal Approach:**
Since the array is sorted and pairs occur consecutively, every pair starts at an even index and ends at an odd index. By performing Binary Search on indices, we check if `arr[mid] == arr[mid ^ 1]`. If true, the single element lies to the right (move `low = mid + 1`); otherwise, it lies to the left (move `high = mid`).
*   **Time:** $O(\log n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:**
The constraint of a sorted array combined with the requirement for $O(\log n)$ time is a definitive signal to use Binary Search to prune half the search space based on parity properties.

**Summary:**
In a sorted array where all elements appear twice except one, use Binary Search with XOR-based parity checks to identify the first index where the "pair property" breaks.

---
