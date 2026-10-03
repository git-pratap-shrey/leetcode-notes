---
title: "Rearrange Array by Removing Distinct Values"
slug: rearrange-array-by-removing-distinct-values
date: "2026-09-27"
---

# My Solution
~~~java
class Solution {
    public int reversePairs(int[] nums) {
        return mergesort(nums,0,nums.length-1);
    }
    public int mergesort(int[] nums,int left,int right){
        if(left>=right) return 0;
        int mid = left + (right-left)/2;
        int count = mergesort(nums,left,mid);
        count += mergesort(nums,mid+1,right);
        int j = mid+1;
        for(int i=left;i<=mid;i++){
            while(j<=right && (long)nums[i]>2L*nums[j]){
                j++;
            }
            count += j-(mid+1);
        }
        merge(nums,left,mid,right);
        return count;
    }
    public void merge(int[] nums, int left, int mid, int right){
        int[] temp = new int[right-left+1];
        int i = left;
        int j = mid+1;
        int k = 0;
        while(i<=mid && j<=right){
            if(nums[i]<=nums[j]){
                temp[k++]=nums[i++];
            }
            else{
                temp[k++] = nums[j++];
            }
        }
        while(i<=mid){
            temp[k++]=nums[i++];
        }
        while(j<=right){
            temp[k++] = nums[j++];
        }
        for(int x=0;x<temp.length;x++){
            nums[left+x]=temp[x];
        }
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Divide and Conquer using a modified **Merge Sort**. It counts pairs $(i, j)$ such that $i < j$ and $nums[i] > 2 \cdot nums[j]$ during the merge step.
- **Optimality**: Yes, this is the optimal approach for this problem, achieving the same time complexity as the sorting process itself.

## Complexity
- **Time Complexity**: $O(n \log n)$, where $n$ is the length of the array. The array is split logarithmically, and each level of recursion performs linear work for counting and merging.
- **Space Complexity**: $O(n)$ due to the temporary array used during the `merge` process.

## Efficiency Feedback
- **Performance**: The use of `(long)` casting prevents integer overflow when calculating `2L * nums[j]`, which is critical for correctness.
- **Optimization**: The current implementation allocates a new `temp` array in every `merge` call. Allocating a single auxiliary array of size $n$ at the start and passing it through the recursive calls would reduce garbage collection overhead and memory allocation time.

## Code Quality
- **Readability**: Good. The logic follows the standard Merge Sort pattern, making it easy to trace.
- **Structure**: Good. The separation of `mergesort` (counting/splitting) and `merge` (sorting) is clean.
- **Naming**: Moderate. While `i`, `j`, and `k` are standard for loops, the method name `reversePairs` is consistent with common problem titles, but the class logic specifically solves "Reverse Pairs" rather than the "Rearrange Array by Removing Distinct Values" mentioned in the prompt (note: the code solves a completely different problem than the provided prompt title).
- **Improvements**: 
    - Pass a pre-allocated temporary array to `merge` to optimize memory.
    - Use a more descriptive name for the `mergesort` method (e.g., `countAndSort`) as it does more than just sorting.

---

# Question Revision
# Revision Report: Rearrange Array by Removing Distinct Values

- **Pattern:** Two Pointers (In-place Modification)
- **Brute Force:** Create a new array or list. Iterate through the original array, using a Hash Set to keep track of seen values. Only append elements to the new list if they have appeared more than once.
- **Optimal Approach:** Use a Hash Map to count frequencies first. Then, use a **slow pointer** (`write_index`) and a **fast pointer** (`read_index`). Traverse the array; if the element at `read_index` has a frequency $> 1$, copy it to `write_index` and increment the slow pointer.
    - **Time Complexity:** $O(n)$ — Two linear passes (one for counting, one for rearranging).
    - **Space Complexity:** $O(k)$ — Where $k$ is the number of unique elements stored in the map.
- **The 'Aha' Moment:** When a problem asks to "rearrange" or "remove" elements "in-place," it is a strong signal to use the Two Pointers technique to overwrite the existing array.
- **Summary:** Count frequencies first, then use a slow pointer to filter and shift only the non-distinct elements to the front.

---