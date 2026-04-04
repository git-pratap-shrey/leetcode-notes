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
*   **Optimality:** Suboptimal. While correct, it uses $O(n)$ space, whereas the **Boyer-Moore Voting Algorithm** solves this in $O(n)$ time with $O(1)$ space.

## Complexity
*   **Time Complexity:** $O(n)$, where $n$ is the length of the array, due to single passes for populating and iterating the map.
*   **Space Complexity:** $O(n)$ in the worst case (all elements are distinct).

## Efficiency Feedback
*   **Bottleneck:** The reliance on `HashMap` causes significant heap allocation and overhead for hashing operations. 
*   **Optimization:** Use the **Boyer-Moore Voting Algorithm**. It maintains a `candidate` and a `count`, updating them in a single linear pass without auxiliary memory.

## Code Quality
*   **Readability:** Moderate. The logic is straightforward but lacks comments explaining the intent.
*   **Structure:** Moderate. Returning `res` after the loop is safe because the problem guarantees a majority element exists, but the logic inside the loop is slightly convoluted (using `mc` as both a threshold and a tracker).
*   **Naming:** Poor. Variables `res`, `mc`, and `fr` are non-descriptive. Use `majorityElement`, `threshold`, and `frequencyMap`.
*   **Concrete Improvements:**
    *   Rename variables for clarity.
    *   Consider replacing the second loop: you can check if `fr.get(i) > nums.length / 2` immediately inside the first loop to exit early.
    *   Implement Boyer-Moore to achieve $O(1)$ space complexity.

```java
// Recommended Boyer-Moore approach:
public int majorityElement(int[] nums) {
    int count = 0, candidate = 0;
    for (int num : nums) {
        if (count == 0) candidate = num;
        count += (num == candidate) ? 1 : -1;
    }
    return candidate;
}
```

---
---


# Question Revision
### Revision Report: Majority Element

**Pattern:** Boyer-Moore Voting Algorithm

**Brute Force:** Use nested loops to count the occurrences of every element, or use a Hash Map to store frequencies.
*   **Time:** $O(n^2)$ or $O(n)$
*   **Space:** $O(1)$ or $O(n)$

**Optimal Approach:** Maintain a `candidate` and a `count`. Iterate through the array: if `count` is 0, pick the current element as the candidate. Increment `count` if the element matches the candidate, otherwise decrement it.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:** The guarantee that the majority element appears more than $\lfloor n/2 \rfloor$ times means it will always "outvote" all other elements combined.

**Summary:** Whenever you need to find an element that appears more than half the time, use the Boyer-Moore counter to cancel out non-majority elements.

---
