---
title: "String Compression"
slug: string-compression
date: "2026-04-12"

---
---

# My Solution
~~~java
class Solution {
    public int compress(char[] chars) {
        int index = 0;
        int i=0;
        int n = chars.length;
        while(i<n){
            char curr = chars[i];
            int count = 0;
            while(i<n && chars[i]==curr){
                count++;
                i++;
            }
            chars[index]= curr;
            index++;
            if(count>1){
                String count_str = Integer.toString(count);
                for(char ch : count_str.toCharArray()){
                    chars[index] = ch;
                    index++;

                }
            }
        }
        return index;
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Two-pointer approach (in-place modification).
*   **Optimality:** Optimal. The algorithm processes each character exactly once and modifies the array in place with $O(1)$ auxiliary space.

## Complexity
*   **Time Complexity:** $O(n)$, where $n$ is the length of the `chars` array. Each character is visited a constant number of times.
*   **Space Complexity:** $O(k)$, where $k$ is the number of digits in the maximum count (essentially $O(\log n)$), due to the `Integer.toString()` conversion. This is well within limits.

## Efficiency Feedback
*   **Runtime:** Very efficient. The conversion to a `String` inside the loop creates small garbage objects, but given the constraints of typical competitive programming, this is negligible.
*   **Optimization:** To avoid object allocation entirely, you could compute the digits of `count` mathematically (using `/` and `%`) and place them into the array, though this is a minor micro-optimization.

## Code Quality
*   **Readability:** Good. The logic is linear and follows the problem requirements intuitively.
*   **Structure:** Good. The nested `while` loops cleanly separate the scanning of consecutive characters from the logic of writing the compressed results.
*   **Naming:** Moderate. `i` and `n` are standard, but `count_str` uses an underscore which violates common Java `camelCase` conventions.
*   **Concrete Improvements:**
    *   Rename `count_str` to `countStr` to follow Java conventions.
    *   The `if (count > 1)` block correctly handles the requirement; ensure you are mindful that the problem implies `1` should not be written as a digit. The logic handles this correctly.
    *   The code is production-ready for competitive programming.

---
---


# Question Revision
### Revision Report: String Compression

**Pattern:** Two Pointers (In-place modification)

**Brute Force:**
Create a new string/array, iterate through the input to count consecutive characters, append the character and its count (if > 1) to the new structure, and return it.
*   **Complexity:** $O(n)$ Time, $O(n)$ Space.

**Optimal Approach:**
Use two pointers: `read` to scan the input array and `write` to track the position for the next compressed character. Iterate through the array; whenever a sequence of identical characters ends, write the character to `chars[write]` and convert the count to digits to write sequentially if the count > 1.
*   **Time Complexity:** $O(n)$ (Each element is visited by the `read` pointer once).
*   **Space Complexity:** $O(1)$ (Modification occurs in-place).

**The 'Aha' Moment:**
When a problem asks for "in-place" modification to reduce space complexity, a `write` pointer tracking the next available slot is the standard mechanism to overwrite data without losing necessary information.

**Summary:** 
Use a dual-pointer strategy when you need to transform an array in-place, using one pointer to ingest data and another to track the insertion frontier.

---
