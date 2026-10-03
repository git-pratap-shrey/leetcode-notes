---
title: "Find the Prefix Common Array of Two Arrays"
slug: find-the-prefix-common-array-of-two-arrays
date: "2026-09-28"
---

# My Solution
~~~java
class Solution {
    public int[] rearrangeArray(int[] nums) {
        HashMap<Integer,Integer> map = new HashMap<>();
        for(int x: nums){
            map.put(x,map.getOrDefault(x,0)+1);
        }
        ArrayList<Integer> ans = new ArrayList<>();
        while(!map.isEmpty()){
            ArrayList<Integer> list = new ArrayList<>(map.keySet());
            Collections.sort(list);
            for(int x: list){
                ans.add(x);
                int fre = map.get(x);
                if(fre==1){
                    map.remove(x);
                }
                else{
                    map.put(x,fre-1);
                }
            }
        }
        return ans.stream().mapToInt(Integer::intValue).toArray();
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Frequency Map and Iterative Sorting. The code counts occurrences of each number and repeatedly sorts the unique keys to build the result array.
- **Correctness**: **Incorrect**. The code implements a "rearrange array" logic (interleaving sorted elements) rather than finding the "Prefix Common Array." It does not take two arrays as input nor does it calculate prefix commonality.

## Complexity
- **Time Complexity**: $O(K \cdot N \log N)$ where $N$ is the length of `nums` and $K$ is the maximum frequency of any element. In the worst case (all elements same), it is $O(N \cdot 1 \log 1)$, but if elements are distinct, it is $O(N \log N)$. However, the repeated creation of `ArrayList` and `Collections.sort` inside a `while` loop makes this highly inefficient.
- **Space Complexity**: $O(N)$ to store the `HashMap` and the `ArrayList`.

## Efficiency Feedback
- **Critical Flaw**: The logic is entirely unrelated to the "Prefix Common Array" problem.
- **Bottlenecks**: 
    - `new ArrayList<>(map.keySet())` and `Collections.sort(list)` are called inside a loop, leading to redundant sorting operations.
    - `ans.stream().mapToInt(...).toArray()` adds overhead compared to a standard primitive array.

## Code Quality
- **Readability**: Moderate. The logic is easy to follow, but it solves the wrong problem.
- **Structure**: Poor. The use of a `while` loop combined with `keySet` extraction and sorting is an inefficient way to handle frequency-based distribution.
- **Naming**: Poor. The method name `rearrangeArray` is generic; the variable `ans` is standard, but the logic lacks alignment with the requested problem.

**Concrete Improvements**: 
1. Rewrite the entire logic to actually address the "Prefix Common Array" problem (which typically requires two input arrays and a tracking mechanism for common elements).
2. Avoid using `Stream` for basic array conversion in performance-critical sections.

---

# Question Revision
# Revision Report: Find the Prefix Common Array of Two Arrays

- **Pattern:** Frequency Array / Hash Map (Counting)
- **Brute Force:** For every index $i$ from $0$ to $n-1$, create two sets containing elements from `common[0...i]` for both arrays. Find the size of the intersection of these two sets.
- **Optimal Approach:** 
    - Maintain a frequency array (or hash map) to track how many times each number has appeared across both arrays.
    - Iterate through both arrays simultaneously. Increment the count for `common1[i]` and `common2[i]`.
    - When a count reaches **2**, it means the number has appeared exactly once in both arrays, increasing the number of common elements.
    - **Time Complexity:** $O(n)$ — single pass through the arrays.
    - **Space Complexity:** $O(n)$ — to store the frequency of elements.
- **The 'Aha' Moment:** The problem asks for "prefix" commonality, meaning once an element becomes common, it stays common for all subsequent indices.
- **Summary:** Use a frequency counter to detect when an element's occurrence reaches 2 to increment the running total of common elements.

---