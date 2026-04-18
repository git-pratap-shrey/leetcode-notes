---
title: "Reverse Pairs"
slug: reverse-pairs
date: "2026-04-18"
---

# My Solution
~~~cpp
class Solution {
public:
    int mergeSort(vector<int>& nums, int low, int high) {
        if (low >= high) return 0;

        int mid = (low + high) / 2;
        int count = 0;

        count += mergeSort(nums, low, mid);
        count += mergeSort(nums, mid + 1, high);
        count += countPairs(nums, low, mid, high);
        merge(nums, low, mid, high);

        return count;
    }

    int countPairs(vector<int>& nums, int low, int mid, int high) {
        int right = mid + 1;
        int count = 0;

        for (int i = low; i <= mid; i++) {
            while (right <= high && (long long)nums[i] > 2LL * nums[right]) {
                right++;
            }
            count += (right - (mid + 1));
        }

        return count;
    }

    void merge(vector<int>& nums, int low, int mid, int high) {
        vector<int> temp;
        int left = low, right = mid + 1;

        while (left <= mid && right <= high) {
            if (nums[left] <= nums[right]) {
                temp.push_back(nums[left++]);
            } else {
                temp.push_back(nums[right++]);
            }
        }

        while (left <= mid) temp.push_back(nums[left++]);
        while (right <= high) temp.push_back(nums[right++]);

        for (int i = low; i <= high; i++) {
            nums[i] = temp[i - low];
        }
    }

    int reversePairs(vector<int>& nums) {
        return mergeSort(nums, 0, nums.size() - 1);
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Modified Merge Sort (Divide and Conquer).
- **Optimality**: Optimal. The problem requires counting pairs with a specific condition, and the $O(n \log n)$ complexity is the standard optimal approach for this problem.

## Complexity
- **Time Complexity**: $O(n \log n)$. The array is split logarithmically, and at each level, `countPairs` and `merge` both run in $O(n)$ time.
- **Space Complexity**: $O(n)$. A temporary vector is used during the merge process to store sorted elements.

## Efficiency Feedback
- **Memory Allocation**: The `merge` function declares `vector<int> temp` inside the loop. Frequent allocation and deallocation of vectors can lead to higher runtime overhead. 
- **Optimization**: Pre-allocating a single buffer vector of size $n$ in `reversePairs` and passing it by reference to `merge` would reduce allocation overhead.
- **Integer Overflow**: The code correctly handles potential overflow by casting to `long long` (`2LL * nums[right]`), which is critical for this problem.

## Code Quality
- **Readability**: Good. The logic is clean, and the separation of `countPairs` and `merge` makes the intention clear.
- **Structure**: Good. The recursive structure follows the standard Merge Sort template accurately.
- **Naming**: Good. Variable names (`low`, `mid`, `high`, `left`, `right`) are standard and descriptive.
- **Improvements**:
    - Change `int mid = (low + high) / 2;` to `int mid = low + (high - low) / 2;` to prevent potential integer overflow for extremely large indices.
    - Use `temp.reserve(high - low + 1);` if continuing to use local vectors to avoid multiple reallocations during `push_back`.

---

# Question Revision
### Reverse Pairs

**Pattern:** Divide and Conquer (Modified Merge Sort)

**Brute Force:** 
Nested loops to iterate through all pairs $(i, j)$ where $i < j$ and check if $nums[i] > 2 \cdot nums[j]$.
- Time: $O(n^2)$
- Space: $O(1)$

**Optimal Approach:** 
Utilize the merge step of Merge Sort. While the left and right subarrays are sorted, maintain a pointer `j` in the right subarray to count how many elements satisfy $nums[i] > 2 \cdot nums[j]$ for each $nums[i]$ in the left subarray. Because both halves are sorted, `j` only needs to move forward, ensuring linear time for the counting phase per merge level.
- Time: $O(n \log n)$
- Space: $O(n)$

**The 'Aha' Moment:** 
The requirement to count pairs $(i, j)$ with $i < j$ and a specific value relationship is a classic signal to use the inversion-counting logic of Merge Sort.

**Summary:** 
Count pairs during the merge phase of a Merge Sort to leverage sorted properties and reduce complexity from quadratic to linearithmic.

---