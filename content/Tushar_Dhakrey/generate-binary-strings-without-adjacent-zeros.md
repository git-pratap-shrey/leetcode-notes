---
title: "Generate Binary Strings Without Adjacent Zeros"
slug: generate-binary-strings-without-adjacent-zeros
date: "2026-07-08"

---

# My Solution
~~~
class
 Solution {
    public List<String> validStrings(int n) {
        List<String> ans = new ArrayList<>();
        generate("",n,ans);
        return ans;
    }
    private void generate(String curr, int n, List<String> ans){
        if(curr.length() == n){
            ans.add(curr);
            return;
        }
        generate(curr+"1",n,ans);

        if(curr.length()==0 || curr.charAt(curr.length()-1)=='1'){
            generate(curr+"0",n,ans);
        }
    }
}
~~~

# Submission Review

## Approach

- **Technique**: Recursive Backtracking (Brute-force generation with pruning).
- **Optimality**: Optimal in terms of the number of states visited, as it only explores paths that lead to valid strings. However, the implementation is suboptimal due to string immutable operations.

## Complexity

- **Time Complexity**: $O(n \cdot \phi^n)$, where $\phi \approx 1.618$ (the golden ratio). The number of valid strings follows the Fibonacci sequence $F_{n+2}$. Each string takes $O(n)$ to construct due to string concatenation.
- **Space Complexity**: $O(n \cdot \phi^n)$ to store the result list. The recursion stack depth is $O(n)$.

## Efficiency Feedback

- **Bottleneck**: String concatenation (`curr + "1"`) inside the recursion creates a new `String` object at every step. This leads to high memory allocation and overhead.
- **Optimization**: Use a `StringBuilder` or a `char[]` array to modify the string in place and backtrack (remove the last character) to reduce object creation.

## Code Quality

- **Readability**: Good. The logic is simple and easy to follow.
- **Structure**: Good. Clear separation between the entry method and the recursive helper.
- **Naming**: Moderate. `ans` and `curr` are generic; `results` and `currentString` would be more descriptive.
- **Improvements**:
    - Change `String curr` to `StringBuilder sb` to avoid $O(n^2)$ cumulative string building per path.
    - Pass `n` as a constant or use a member variable to avoid passing it through every recursive call.

---

# Question Revision

#

## Generate Binary Strings Without Adjacent Zeros

**Pattern:** Backtracking / Recursive Generation

**Brute Force:** Generate all $2^n$ possible binary strings and use a filter/regex to discard any containing the substring `"00"`.

**Optimal Approach:** 
Use recursion to build the string incrementally. At each position:
1. Always allow appending `'1'`.
2. Append `'0'` only if the previous character was `'1'` (or if it is the first character).

*   **Time Complexity:** $O(1.618^n \cdot n)$ — The number of valid strings follows the Fibonacci sequence; $n$ accounts for string construction.
*   **Space Complexity:** $O(n)$ — Depth of the recursion stack.

**The 'Aha' Moment:** The constraint "without adjacent zeros" means the validity of the current character depends entirely on the state of the immediate predecessor.

**Summary:** Use recursion to build the string, branching into both '0' and '1' only when the previous character is not '0'.

---
