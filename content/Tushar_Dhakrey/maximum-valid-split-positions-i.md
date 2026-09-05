---
title: "Maximum Valid Split Positions I"
slug: maximum-valid-split-positions-i
date: "2026-08-29"
---

# My Solution
~~~java
class Solution {
    public int maxValidSplits(int[] nums) {
        int n = nums.length;
        int ans = 0;
        for(int remove=-1;remove<n;remove++){
            int[] arr = new int[n];
            int m = 0;
            for(int i=0;i<n;i++){
                if(i!=remove){
                    arr[m++]=nums[i];
                }
            }
            int[] pre = new int[m];
            pre[0] = arr[0];
            for(int i=1;i<m;i++){
                pre[i] = gcd(pre[i-1],arr[i]);
            }
            int[] suff = new int[m];
            suff[m-1]=arr[m-1];
            for(int i=m-2;i>=0;i--){
                suff[i] = gcd(suff[i+1],arr[i]);
            }
            int score = 0;
            for(int split = 0;split<m-1;split++){
                int leftgcd = pre[split];
                int rightgcd = suff[split+1];
                if(leftgcd==rightgcd){
                    score++;
                }
            }
            ans = Math.max(ans,score);
        }
        return ans;
    }
    int gcd(int a ,int b){
        while(b!=0){
            int temp = a%b;
            a = b;
            b = temp;
        }
        return a;
    }
}
~~~

# Submission Review
## Approach
*   **Technique**: Brute force simulation. It iterates through every possible index to remove, then calculates prefix/suffix GCDs for each resulting array to count valid splits.
*   **Optimal**: No. The algorithm recomputes GCD arrays from scratch for every removal, leading to redundant work.

## Complexity
*   **Time Complexity**: $O(N^2 \log(\max(nums)))$. The outer loop runs $N$ times, and inside, the GCD calculations and prefix/suffix passes take $O(N \log(\max(nums)))$.
*   **Space Complexity**: $O(N)$. It allocates multiple arrays of size $N$ within the loop.
*   **Bottleneck**: The nested $O(N)$ operations within the $O(N)$ removal loop create an $O(N^2)$ profile, which will likely TLE (Time Limit Exceeded) for $N > 5000$.

## Efficiency Feedback
*   **Redundancy**: The GCD operations are repetitive. You can optimize this by precomputing total GCDs or using a sliding window approach for GCDs. 
*   **Allocation**: Creating new arrays (`arr`, `pre`, `suff`) inside the loop triggers excessive garbage collection. These should be allocated once outside the loop or handled using an in-place/segmented logic.
*   **GCD Optimization**: If the range of values is small or if specific properties of GCD are exploited (e.g., the number of distinct prefix GCDs is $O(\log(\max(nums)))$), you could achieve $O(N \log(\max(nums)))$ or better.

## Code Quality
*   **Readability**: Good. The logic is straightforward and easy to follow.
*   **Structure**: Moderate. The heavy lifting is done inside the loop; separating the "score calculation" into a helper function would improve cleanliness.
*   **Naming**: Good. Variables like `pre`, `suff`, `ans`, and `score` are standard for this type of problem.
*   **Improvements**:
    *   Avoid array re-allocations inside the loop. Use two static arrays and handle the "missing" index logic during the GCD calculation pass to achieve $O(N)$ space.
    *   Consider a two-pointer or precomputed GCD approach to avoid the $O(N^2)$ complexity.
    *   `gcd` function can be marked `static` or `private`.

---

# Question Revision
### Revision Report: Maximum Valid Split Positions I

**Pattern:** Dynamic Programming / String Processing (Greedy + Prefix Sums)

**Brute Force:**
Iterate through every possible split position for the string, then verify each split individually using a hash set or frequency map to track unique characters.
*   **Time Complexity:** $O(n^2)$
*   **Space Complexity:** $O(n)$

**Optimal Approach:**
1.  Use a sliding window or two-pointer approach to identify all valid "split" indices where the number of unique characters in the left and right partitions are equal.
2.  Pre-calculate the number of unique characters for all prefixes and suffixes using frequency arrays (or hash maps).
3.  Iterate through the string once to count how many prefixes satisfy the condition and store these counts using a prefix sum array (or a running counter).
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(n)$

**The 'Aha' Moment:**
When a problem asks to compare properties of two partitions (left/right) at every possible split point, pre-calculating those properties into an array allows you to transform an $O(n)$ search into $O(1)$ lookups.

**Summary:**
Whenever you need to evaluate a property across all possible string splits, pre-process the left and right segments into auxiliary arrays to reduce your query time to constant.

---