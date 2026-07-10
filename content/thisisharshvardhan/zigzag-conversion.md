---
title: "Zigzag Conversion"
slug: zigzag-conversion
date: "2026-06-25"

---

# My Solution
~~~
class
 Solution {
public:
    string convert(string s, int numRows) {
        if (numRows==1) return s;
        vector<string> rows(numRows);
        bool down=true;
        int curr=0;
        for (char c: s){
            rows[curr]+=c;
            if (curr==numRows-1) down=false;
            if (curr==0) down=true;
            down ? curr++ : curr--;
        }
        string ans="";
        for (string row : rows) ans+=row;
        return ans;
    }
};
~~~

# Submission Review

## Approach

- **Technique:** Simulation. The code simulates the zigzag movement by maintaining a set of strings (one for each row) and toggling the direction of traversal when the top or bottom row is reached.
- **Optimality:** Optimal. It processes each character of the input string exactly once.

## Complexity

- **Time Complexity:** $O(n)$, where $n$ is the length of string `s`. The algorithm iterates through the string once to distribute characters and once more to concatenate the rows.
- **Space Complexity:** $O(n)$. The `rows` vector stores all $n$ characters of the input string.

## Efficiency Feedback

- **Performance:** The runtime and memory usage are minimal.
- **Optimization:** The final string concatenation `ans += row` may cause multiple reallocations. Using `ans.reserve(s.size())` before the final loop would optimize memory allocation.

## Code Quality

- **Readability:** Good. The logic is intuitive and the flow is linear.
- **Structure:** Good. Edge cases (like `numRows == 1`) are handled at the start.
- **Naming:** Moderate. `curr` and `down` are acceptable, though `currentRow` and `isMovingDown` would be more explicit.
- **Improvements:**
    - Use `std::string::reserve()` to prevent unnecessary reallocations of the result string.
    - Use a `const string&` in the final loop (`for (const string& row : rows)`) to avoid copying each row string during concatenation.

---

# Question Revision

#

## Zigzag Conversion

**Pattern:** Simulation / String Manipulation

**Brute Force:** Create a 2D matrix representing the entire zigzag grid, fill it character by character, and then iterate through the matrix to collect non-empty cells. This wastes significant space on empty cells.

**Optimal Approach:** Use an array of strings (one for each row). Iterate through the input string, appending the current character to the active row. Use a direction flag to toggle between incrementing and decrementing the row index whenever you reach the top row (0) or bottom row (`numRows - 1`).
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$

**The 'Aha' Moment:** The character placement is simply a periodic oscillation between the first and last row indices.

**Summary:** Simulate the vertical "bounce" by tracking the current row and flipping the direction at the boundaries.

---
