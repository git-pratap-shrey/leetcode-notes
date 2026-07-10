---
title: "Count Subarrays With Majority Element I"
slug: count-subarrays-with-majority-element-i
date: "2026-06-25"

---

# My Solution
~~~
class
 Solution {
public:
    int countMajoritySubarrays(vector<int>& nums, int target) {
        int n = nums.size();
        int ans = 0;
        for (int i = 0; i < n; i++) {
            unordered_map<int, int> freq;
            for (int j = i; j < n; j++) {
                freq[nums[j]]++;
                int len = j - i + 1;
                if (freq[target] > len / 2){
                    ans++;
                }
            }
        }
        return ans;
    }
};
~~~

# Submission Review

## Approach

- **Technique:** Brute-force nested loops. It iterates through every possible subarray $[i, j]$ and maintains a frequency map of all elements to check the majority condition.
- **Optimality:** Not optimal. The problem can be transformed into a prefix sum problem (treating `target` as $+1$ and others as $-1$) and solved in $O(n \log n)$ or $O(n)$ using a Fenwick tree or a frequency array.

## Complexity

- **Time Complexity:** $O(n^2)$ — The nested loops visit every subarray, and `unordered_map` operations are $O(1)$ on average.
- **Space Complexity:** $O(n)$ — In the worst case, the map stores every unique element in the array.

## Efficiency Feedback

- **Bottleneck:** The $O(n^2)$ time complexity will fail for large input sizes (e.g., $n > 10^4$).
- **Major Inefficiency:** The use of an `unordered_map` is entirely unnecessary. The condition only depends on the frequency of the `target` element. Tracking the frequency of every other element in the subarray adds significant overhead.
- **Optimization:** Replace the `unordered_map` with a single integer counter `targetCount`.

## Code Quality

- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Good. Standard implementation.
- **Naming:** Good. Variables like `ans`, `freq`, and `len` are clear.
- **Concrete Improvement:** 
    ```cpp
    // Replace the map logic with:
    int targetCount = 0;
    for (int j = i; j < n; j++) {
        if (nums[j] == target) targetCount++;
        if (targetCount > (j - i + 1) / 2) ans++;
    }
    ```
    This removes the $O(n)$ space overhead and reduces the constant factor of the $O(n^2)$ runtime.

---

# Question Revision

#

## Revision Report: Count Subarrays With Majority Element I

**Pattern:** Prefix Sums + Fenwick Tree (Binary Indexed Tree)

**Brute Force:** 
Iterate through all possible subarrays $O(n^2)$, count frequencies of each element using a hash map, and check if any element's frequency exceeds $\text{length}/2$. 
**Complexity:** $O(n^3)$ or $O(n^2)$

**Optimal Approach:**
1. Iterate through each unique element $x$ present in the array.
2. Transform the array into a binary sequence: if $arr[i] == x$ then $+1$, else $-1$.
3. A subarray has $x$ as the majority element if the sum of its transformed values is $> 0$.
4. Calculate prefix sums of the transformed sequence. The problem reduces to counting pairs $(i, j)$ such that $PrefixSum[j] - PrefixSum[i] > 0$, where $j > i$.
5. Use a Fenwick Tree or Segment Tree to count these pairs efficiently.
**Complexity:** $O(U \cdot n \log n)$ time and $O(n)$ space, where $U$ is the number of unique elements.

**The 'Aha' Moment:** 
The condition "frequency $> \text{length}/2$" is mathematically equivalent to "sum $> 0$" if the target element is mapped to $+1$ and all others to $-1$.

**Summary:** 
Map the target element to $+1$ and others to $-1$, then count subarrays with a positive sum using prefix sums and a Fenwick Tree.

---
