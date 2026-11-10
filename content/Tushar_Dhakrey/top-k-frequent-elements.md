---
title: "Top K Frequent Elements"
slug: top-k-frequent-elements
date: "2026-11-02"
---

# My Solution
~~~java
class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        int max = 0;
        int min = 0;
        for(int num:nums){
            max = Math.max(max,num);
            min = Math.min(min,num);
        }
        int[] fre = new int[max-min+1];
        for(int num:nums){
            fre[num-min]++;
        }
        int[] ans = new int[k];
        int index = 0;
        while(index<k){
            int maxindex = -1;
            int maxfre = 0;
            for(int i=0;i<fre.length;i++){
                if(fre[i]>maxfre){
                    maxfre = fre[i];
                    maxindex = i;
                }
            }
            ans[index++] = maxindex + min;
            fre[maxindex] = 0;
        }
        return ans;
    }
}
~~~

# Submission Review
<thought>*   Problem: Top K Frequent Elements.
    *   Input: `int[] nums`, `int k`.
    *   Output: `int[] ans` (top $k$ frequent elements).
    *   Approach in code:
        1.  Find `max` and `min` of the input array to determine the range of numbers.
        2.  Use a frequency array `fre` of size `max - min + 1`.
        3.  Populate the frequency array.
        4.  Iteratively find the index with the maximum value in `fre`, add it to `ans`, and reset that frequency to 0. Repeat $k$ times.

    *   Finding max/min: $O(N)$.
    *   Frequency array size: $R = \text{max} - \text{min} + 1$.
    *   Frequency population: $O(N)$.
    *   Finding top $k$: $k$ iterations $\times$ $O(R)$ scan = $O(k \cdot R)$.
    *   Total Time: $O(N + k \cdot R)$.
    *   Is this optimal? No.
        *   Standard optimal: $O(N \log k)$ (Priority Queue) or $O(N)$ (Bucket Sort/Quickselect).
        *   The $O(k \cdot R)$ part is dangerous. If `nums = { -10^9, 10^9 }`, the frequency array size will cause an `OutOfMemoryError`. If $R$ is large, it's extremely slow.

    *   Space: $O(R)$.
    *   Similar to time, if the range of input values is large, this will fail.

    *   The approach is highly dependent on the range of values rather than the number of elements.
    *   The "Find Max" loop inside the while loop is $O(k \cdot R)$, which is inefficient.

    *   Readability: Moderate. Logical flow is easy to follow.
    *   Structure: Good. Simple linear flow.
    *   Naming: Poor. `fre` (frequency), `maxindex`, `maxfre` are okay but could be more descriptive. `ans` is common but generic.
    *   Bug potential: Memory overflow for large ranges.

    *   Use a `HashMap` for frequencies instead of an array to handle arbitrary ranges.
    *   Use a `PriorityQueue` or `Bucket Sort` for the Top K part to avoid $O(k \cdot R)$.</thought>## Approach
- **Technique**: Frequency array with iterative linear scanning.
- **Optimality**: **Not optimal**. The solution relies on the range of values ($max - min$) rather than the number of elements ($N$). It fails for large value ranges (causing `OutOfMemoryError`) and is inefficient for large ranges regardless of $N$.

## Complexity
- **Time Complexity**: $O(N + k \cdot R)$, where $N$ is the number of elements and $R$ is the range of values (`max - min + 1`).
- **Space Complexity**: $O(R)$ to store the frequency array.
- **Bottleneck**: The frequency array size $R$ can be up to $2 \cdot 10^9$ based on standard `int` limits, and the $O(k \cdot R)$ search loop is extremely slow for large ranges.

## Efficiency Feedback
- **Memory**: Using an array for frequencies is dangerous. If the input is `[0, 1000000000]`, the code attempts to allocate an array of size 1 billion, leading to a crash.
- **Runtime**: The nested loop to find the maximum frequency $k$ times results in redundant scans of the entire range $R$.
- **Suggested Optimization**: Use a `HashMap<Integer, Integer>` for frequencies and a `PriorityQueue` (Min-Heap) or Bucket Sort to find the top $k$ elements in $O(N \log k)$ or $O(N)$ time.

## Code Quality
- **Readability**: Moderate. The logic is straightforward, but lacks input validation.
- **Structure**: Good. Simple sequential flow.
- **Naming**: Moderate. `fre` is a lazy abbreviation for `frequency`; `ans` is generic.
- **Concrete Improvements**:
    - Replace `int[] fre` with `Map<Integer, Integer>`.
    - Replace the `while(index < k)` loop with a `PriorityQueue` or `Quickselect` algorithm.
    - Add a check for empty input arrays to avoid errors.

---

# Question Revision
<thought>
*   Problem: Top K Frequent Elements.
*   Role: Senior DSA Trainer mentoring a student.
*   Output format: Concise, high-signal Markdown.
*   Required sections: Pattern, Brute Force, Optimal Approach (Logic + Complexity), The 'Aha' Moment
*   Problem: Top K Frequent Elements.
*   Role: Senior DSA Trainer mentoring a student.
*   Output format: Concise, high-signal Markdown.
*   Required sections: Pattern, Brute Force, Optimal Approach (Logic + Complexity), The 'Aha' Moment (1 sentence), Summary (1 sentence).
*   Constraints: Use standard Big-O, no introductory pleasantries.

    *   *Input:* Array of integers, integer $k$.
    *   *Goal:* Return the $k$ most frequent elements.
    *   *Constraints:* Often requires better than $O(n \log n)$ (e.g., $O(n)$).

    *   *Pattern:* Frequency Map + Sorting/Heap/Bucket Sort.
    *   *Brute Force:* Count frequencies $\rightarrow$ Sort by frequency (descending) $\rightarrow$ Take top $k$. Time: $O(n \log n)$.
    *   *Optimal Approach 1 (Heap):* Frequency map $\rightarrow$ Min-Heap of size $k$. Time: $O(n \log k)$.
    *   *Optimal Approach 2 (Bucket Sort):* Frequency map $\rightarrow$ Create an array where index = frequency, value = list of elements. Iterate backwards. Time: $O(n)$.
    *   *Optimal Approach 3 (QuickSelect):* Frequency map $\rightarrow$ Partition based on frequency. Time: $O(n)$ average.

    *Decision:* Bucket Sort is the "gold standard" for $O(n)$ in this specific problem because the max frequency is capped at $n$.

    *   *Pattern:* Bucket Sort (or Min-Heap).
    *   *Brute Force:* Use a hash map to count frequencies, sort the unique elements by their counts in descending order, and return the first $k$. $O(n \log n)$.
    *   *Optimal Approach:*
        1.  Count frequencies using a Hash Map.
        2.  Create "buckets" (an array of lists) where the index represents the frequency.
        3.  Populate buckets with elements having that frequency.
        4.  Iterate from the end of the buckets array until $k$ elements are collected.
        *   Time: $O(n)$
        *   Space: $O(n)$
    *   *Aha Moment:* When the problem asks for "Top K" and the potential frequency range is bounded by the input size $n$, Bucket Sort can bypass the $O(\log n)$ sorting overhead.
    *   *Summary:* Map frequencies, place elements into buckets indexed by those frequencies, and collect from the highest index downwards.</thought>### Top K Frequent Elements

- **Pattern**: Bucket Sort / Frequency Mapping
- **Brute Force**: Count frequencies using a Hash Map, sort the unique elements by frequency in descending order, and return the first $k$. 
    - Time: $O(n \log n)$ | Space: $O(n)$
- **Optimal Approach**: 
    1. **Frequency Map**: Count occurrences of each element.
    2. **Bucket Array**: Create an array of lists where the `index` represents the `frequency` (from $0$ to $n$).
    3. **Populate**: Place each element into the list at `bucket[frequency]`.
    4. **Collect**: Traverse the bucket array from the end (highest frequency) downwards until $k$ elements are gathered.
    - Time: $O(n)$
    - Space: $O(n)$
- **The 'Aha' Moment**: Since the maximum possible frequency is limited by the input size $n$, you can use the frequency itself as an array index to avoid sorting.
- **Summary**: Use a map to count frequencies and a bucket array to group elements by those counts for linear-time retrieval.

---