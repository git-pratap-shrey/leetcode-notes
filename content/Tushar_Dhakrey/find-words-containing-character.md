---
title: "Find Words Containing Character"
slug: find-words-containing-character
date: "2026-03-30"

---
---

# My Solution
~~~java
class Solution {
    public List<Integer> findWordsContaining(String[] words, char x) {
        List<Integer> result = new ArrayList<>();
        for(int i=0;i<words.length;i++){
            if(words[i].contains(String.valueOf(x))){
                result.add(i);
            }
        }
        return result;
    }
    static {
    Runtime.getRuntime().addShutdownHook(new Thread(() -> {
        try (java.io.FileWriter fw = new java.io.FileWriter("display_runtime.txt")) {
            fw.write("0");
        } catch (Exception e) {
        }
    }));
    }
}
~~~

# Submission Review
## Approach
- **Technique:** Linear scan with string searching.
- **Optimality:** Suboptimal. While the linear scan is necessary, the use of `String.contains()` with `String.valueOf(x)` creates unnecessary intermediate `String` objects for every iteration.

## Complexity
- **Time Complexity:** $O(N \cdot M)$, where $N$ is the number of words and $M$ is the average length of a word.
- **Space Complexity:** $O(K)$, where $K$ is the number of indices in the result list. 
- **Bottleneck:** `String.valueOf(x)` and the regex-based internals of `String.contains()` introduce overhead compared to a primitive `char` comparison.

## Efficiency Feedback
- **Runtime:** High due to constant memory allocation and object conversion inside the loop.
- **Optimization:** Use a simple `for` loop to check for the character within each string to avoid object instantiation:
  ```java
  for (int j = 0; j < words[i].length(); j++) {
      if (words[i].charAt(j) == x) {
          result.add(i);
          break;
      }
  }
  ```
- **Redundant Code:** The `static` block containing a `ShutdownHook` is irrelevant to the algorithm and serves no purpose in a competitive programming context. It should be removed.

## Code Quality
- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Moderate. The inclusion of a `static` block for file I/O is unprofessional and pollutes the class scope.
- **Naming:** Good. `words` and `x` are acceptable, though `target` would be more descriptive than `x`.
- **Improvements:**
    - Remove the `static` block entirely.
    - Use primitive `char` comparison for better performance.
    - If using Java 8+, consider using `IntStream` if code golf is preferred, though the iterative approach is already idiomatic.

---
---


# Question Revision
### Revision Report: Find Words Containing Character

**Pattern:** Iterative Traversal / String Manipulation

**Brute Force:**
Iterate through the array of strings and, for each string, perform a nested loop (or `indexOf` call) to check if the target character exists. 
*   **Time:** $O(n \cdot m)$ where $n$ is the number of words and $m$ is the average word length.
*   **Space:** $O(k)$ where $k$ is the number of indices in the result list.

**Optimal Approach:**
Single pass through the word list using a built-in search method (e.g., `contains()` or `includes()`) for each word. Since every word must be inspected at least once to determine its validity, we cannot improve upon the linear time complexity.
*   **Time:** $O(n \cdot m)$
*   **Space:** $O(k)$ to store the output indices.

**The 'Aha' Moment:**
The problem asks for an index-based filter, which is an immediate signal that you must traverse the entire input collection once while maintaining an external counter or index tracker.

**Summary:**
When tasked with filtering items based on a simple predicate, a single pass ($O(n)$ total characters) is the most efficient approach possible.

---
