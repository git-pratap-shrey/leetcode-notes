---
title: "Majority Element"
slug: majority-element

---
---

# My Solution
~~~java
class Solution {
    public int majorityElement(int[] nums) {
        int n=nums.length,res=0;
        int mc=n/2;
        Map<Integer,Integer> fr=new HashMap<>();
        for(int i:nums){
            fr.put(i,fr.getOrDefault(i,0)+1);
        }
        for(Map.Entry<Integer,Integer> entry:fr.entrySet()){
            if(mc<entry.getValue()){
                mc=entry.getValue();
                res=entry.getKey();
            }
        }return res;
    }
}
~~~

# Submission Review
## Approach
* **Technique:** Hash Map frequency counting.
* **Optimality:** Suboptimal. While correct, it uses $O(n)$ space. The optimal approach is the **Boyer-Moore Voting Algorithm**, which solves the problem in $O(1)$ space.

## Complexity
* **Time Complexity:** $O(n)$, where $n$ is the length of the array. One pass to build the map, one pass through the map entries.
* **Space Complexity:** $O(n)$ in the worst case (when all elements are distinct).

## Efficiency Feedback
* **Memory Overhead:** The use of a `HashMap` incurs significant overhead due to object allocation and boxing of integers (`int` to `Integer`). 
* **Optimization:** Use the Boyer-Moore Voting Algorithm:
    ```java
    int count = 0, candidate = 0;
    for (int num : nums) {
        if (count == 0) candidate = num;
        count += (num == candidate) ? 1 : -1;
    }
    return candidate;
    ```
    This reduces space complexity to $O(1)$ and is generally faster due to cache locality and no memory allocation.

## Code Quality
* **Readability:** Moderate. The variable names `fr` and `mc` are non-descriptive.
* **Structure:** Good. The logic is clear and follows standard iteration patterns.
* **Naming:** Poor. `fr` (frequency map) and `mc` (max count/majority threshold) should be named descriptively (e.g., `counts`, `majorityCount`).
* **Improvements:**
    * Use `int` primitives where possible to avoid boxing.
    * If choosing to keep the map approach, you can perform the check inside the first loop to avoid iterating over the map entries separately.
    * The variable `mc` is initialized as `n/2` but then updated to track the count of the potential majority; this dual use is confusing.

---
---


# Question Revision
### Revision Report: Majority Element

**Pattern:** Boyer-Moore Voting Algorithm

**Brute Force:** Use nested loops to count the occurrences of every element, comparing each against $n/2$.
*   **Time Complexity:** $O(n^2)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:** Maintain a `candidate` and a `count`. Iterate through the array: if `count` is 0, pick the current element as the candidate; increment `count` if the element matches the candidate, otherwise decrement it.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The guarantee that the majority element appears more than $\lfloor n/2 \rfloor$ times acts as a mathematical "anchor," ensuring that the majority element will always survive the cancellation process against all other elements combined.

**Summary:** Whenever you need to identify a dominant element appearing more than half the time, use the Boyer-Moore Voting Algorithm to cancel out non-majority elements in a single pass.

---
