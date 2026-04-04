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
*   **Technique:** Frequency counting using a `HashMap`.
*   **Optimality:** Suboptimal. While correct, it uses $O(n)$ space. The optimal approach is the **Boyer-Moore Voting Algorithm**, which solves the problem in $O(1)$ space.

## Complexity
*   **Time Complexity:** $O(n)$, as it iterates through the array once and the map entries once.
*   **Space Complexity:** $O(n)$ in the worst case (when all elements are distinct).

## Efficiency Feedback
*   **Bottleneck:** The `HashMap` overhead (hashing, bucket management, and object allocation for `Integer` wrappers) makes this slower and more memory-intensive than the constant-space solution.
*   **Optimization:** Use the Boyer-Moore Voting Algorithm: maintain a `candidate` and a `count`. Increment `count` if the current element matches the candidate, decrement otherwise (resetting candidate when `count == 0`).

## Code Quality
*   **Readability:** Moderate. The variable names (`fr`, `mc`) are non-descriptive and hinder immediate understanding.
*   **Structure:** Good. The logic is cleanly separated into population and extraction phases.
*   **Naming:** Poor. Abbreviations like `fr` (frequency map) and `mc` (majority count/threshold) should be full descriptive names (e.g., `counts`, `threshold`).
*   **Improvements:**
    *   Rename variables for clarity.
    *   Consider returning the result directly inside the map iteration or using the optimal voting algorithm to eliminate the map entirely.
    *   The initialization `int mc=n/2;` is slightly misleading because it is updated to track the *current max frequency* during iteration, rather than staying as the threshold. If you keep the map approach, use a separate variable for `maxCount`.

---
---


# Question Revision
### Revision Report: Majority Element

**Pattern:** Boyer-Moore Voting Algorithm

**Brute Force:**
Use nested loops to count the occurrences of every element.
*   **Time:** $O(n^2)$
*   **Space:** $O(1)$

**Optimal Approach:**
Maintain a `candidate` and a `count`. Iterate through the array: if `count` is 0, set current element as `candidate`. Increment `count` if the element matches the `candidate`, otherwise decrement it. Because the majority element appears more than $\lfloor n/2 \rfloor$ times, it will remain the surviving `candidate`.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:**
The constraint that the majority element appears more than half the time ($> n/2$) guarantees that it will mathematically cancel out all other elements combined.

**Summary:**
When an element is guaranteed to appear more than half the time, use a counter to "vote" for a candidate, knowing the true majority will inevitably survive the process of elimination.

---
