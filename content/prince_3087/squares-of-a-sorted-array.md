---
title: "Squares of a Sorted Array"
slug: squares-of-a-sorted-array
date: "2026-08-16"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<int> sortedSquares(vector<int>& nums) {
        int p = nums.size();
        vector<int> neg;
        vector<int> pos;
        for(int i=0;i<p;i++){
            if(nums[i]<0){
                neg.push_back(nums[i]);
            }
            else{
                pos.push_back(nums[i]);
            }
        }
        int i=0,j=0;
        int m = neg.size();
        int n = pos.size();
        vector<int> merge;
        int idx = 0;
        for(int i=0;i<m;i++){
            neg[i] = neg[i]*neg[i];
            
        }
        reverse(neg.begin(),neg.end());
        for(int j=0;j<n;j++){
            pos[j]= pos[j]*pos[j];
        }
        while(i<m && j<n){
            if(neg[i]<pos[j]){
                merge.push_back(neg[i]);
                // idx++;
                i++;
            }
            else{
                // merge[idx]=pos[j];
                merge.push_back(pos[j]);
                j++;
                // idx++;
            }

        }
        while(j<n){
            // merge[idx]=pos[j];
             merge.push_back(pos[j]);
            j++;
            // idx++;
        }
        while(i<m){
            // merge[idx]=neg[i];
            merge.push_back(neg[i]);
            i++;
            // idx++;
        }
        return merge;

    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Two-pointer merging of two pre-partitioned lists (negatives and positives).
*   **Optimality:** Suboptimal. While it achieves $O(N)$ time, it uses $O(N)$ extra space to store auxiliary `neg` and `pos` vectors, and requires multiple passes over the data. The standard optimal approach uses a single two-pointer sweep from both ends of the original array to fill the result in $O(N)$ time and $O(1)$ auxiliary space (excluding the result vector).

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of elements. The algorithm traverses the input array once to partition and once to merge.
*   **Space Complexity:** $O(N)$. The solution creates three auxiliary vectors (`neg`, `pos`, `merge`), each storing portions of the input data.

## Efficiency Feedback
*   **Redundancy:** The code performs multiple passes: one for partitioning, one for squaring `neg`, one for reversing `neg`, and one for squaring `pos`. This increases cache misses and overhead.
*   **Memory Overhead:** The use of `std::vector` for temporary storage (`neg`, `pos`) triggers multiple heap allocations. A single pre-allocated `vector<int> result(n)` would be more efficient.
*   **Optimization:** You can eliminate the `neg` and `pos` vectors entirely by using two pointers starting at `0` and `n-1` on the input array, comparing the absolute values, and filling a new vector from back to front.

## Code Quality
*   **Readability:** Moderate. The logic is clear but cluttered by dead code and repetitive loops.
*   **Structure:** Moderate. The logic is fragmented into many small `while` and `for` loops.
*   **Naming:** Moderate. `p`, `m`, `n` are generic. `merge` as a variable name is slightly confusing since it is a noun, but descriptive enough.
*   **Improvements:** 
    *   Remove commented-out code (e.g., `// idx++`).
    *   Avoid the `reverse()` call; by iterating through the `neg` array backwards, you get the squares in ascending order naturally.
    *   Consolidate the squaring logic into the initial partitioning loop to reduce passes.
    *   Follow the standard two-pointer approach to remove extra storage allocation.

---

# Question Revision
### Revision Report: Squares of a Sorted Array

**Pattern:** Two Pointers

**Brute Force:** Square every element in the array and then sort the resulting collection using a standard sorting algorithm.
*   **Time:** $O(n \log n)$
*   **Space:** $O(n)$ (depending on the sorting implementation).

**Optimal Approach:** Use two pointers starting at the extreme ends of the array. Since the array is sorted, the largest squared values must reside at either the far left (most negative) or the far right (most positive). Compare the squares at both pointers, place the larger value at the end of a result array, and move the corresponding pointer inward.
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**The 'Aha' Moment:** The combination of a pre-sorted input and the observation that squaring negative numbers mirrors the magnitude of positive numbers implies that the largest values are always pushed to the boundaries.

**Summary:** When an array is sorted but squares shift the relative magnitude to the edges, use two pointers to fill your result array from back to front.

---