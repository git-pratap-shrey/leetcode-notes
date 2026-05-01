---
title: "Find the XOR of Numbers Which Appear Twice"
slug: find-the-xor-of-numbers-which-appear-twice
date: "2026-04-28"
---

# My Solution
~~~java
class Solution {
    public int duplicateNumbersXOR(int[] nums) {
        Set<Integer> seen = new HashSet<>();
        List<Integer> dupli = new ArrayList<>();
        for(int num : nums){
            if(!seen.add(num)){
                dupli.add(num);
            }
        }
        int xor = 0;
        for(int num: dupli){
            xor ^= num;
        }
        return xor;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Hashing. The solution uses a `HashSet` to detect duplicates and an `ArrayList` to store them before performing the XOR operation.
- **Optimality**: Suboptimal. While the time complexity is asymptotically optimal, the use of an intermediate list is redundant.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the length of the input array. The code iterates through the array twice (once for detection, once for XORing).
- **Space Complexity**: $O(n)$ to store elements in the `HashSet` and the `ArrayList`.

## Efficiency Feedback
- **Redundant Storage**: The `List<Integer> dupli` is unnecessary. The XOR operation can be performed directly inside the first loop when a duplicate is detected.
- **Memory Overhead**: Using `HashSet<Integer>` and `ArrayList<Integer>` involves boxing `int` to `Integer`, which increases memory consumption and adds overhead compared to a boolean array (if the range of input values is known and small).

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Moderate. The process is split into two passes when one would suffice.
- **Naming**: Good. Variables `seen`, `dupli`, and `xor` clearly describe their purpose.
- **Concrete Improvement**:
  ```java
  for (int num : nums) {
      if (!seen.add(num)) {
          xor ^= num; // Perform XOR immediately
      }
  }
  // Remove ArrayList entirely
  ```

---

# Question Revision
### Find the XOR of Numbers Which Appear Twice

**Pattern:** Hash Set / Frequency Tracking

**Brute Force:** Use nested loops to find every pair of identical numbers and XOR them.
- Time: $O(n^2)$
- Space: $O(1)$

**Optimal Approach:** Iterate through the array once. Maintain a `Set` of seen numbers; if the current number exists in the set, XOR it into the running result.
- Time: $O(n)$
- Space: $O(n)$

**The 'Aha' Moment:** The phrase "appear twice" indicates that the second encounter of any element is the unique trigger to perform the XOR operation.

**Summary:** Use a set to detect duplicates in a single pass and XOR them into the result immediately upon discovery.

---