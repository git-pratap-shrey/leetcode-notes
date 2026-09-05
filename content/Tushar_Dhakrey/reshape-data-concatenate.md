---
title: "Reshape Data: Concatenate"
slug: reshape-data-concatenate
date: "2026-08-29"
---

# My Solution
~~~pythondata
import pandas as pd

def concatenateTables(df1: pd.DataFrame, df2: pd.DataFrame) -> pd.DataFrame:
    result = pd.concat([df1,df2],axis=0,ignore_index=True)
    return result
~~~

# Submission Review
## Approach
*   **Technique:** Uses `pandas.concat` to perform a vertical stacking (row-wise concatenation) of two DataFrames.
*   **Optimality:** Optimal. This is the idiomatic and standard approach for row-wise concatenation in `pandas`.

## Complexity
*   **Time Complexity:** $O(N + M)$, where $N$ and $M$ are the number of rows in `df1` and `df2` respectively, as it requires copying the data into a new memory block.
*   **Space Complexity:** $O(N + M)$ to store the newly created concatenated DataFrame.

## Efficiency Feedback
*   **Runtime:** Very efficient for standard memory-resident data.
*   **Note:** If the DataFrames are massive, concatenation involves reallocating memory for the combined object. This is unavoidable given the immutable-like nature of creating a new `pd.DataFrame` result.

## Code Quality
*   **Readability:** Good. The code is concise and uses the appropriate library function.
*   **Structure:** Good. Simple, functional approach.
*   **Naming:** Good. `df1`, `df2`, and `result` are standard conventions in data science workflows.
*   **Improvements:** The code is idiomatic; no changes are required for correctness or performance. If this were part of a larger pipeline, ensuring `df1` and `df2` share the same column structure would be the only operational concern, though `pd.concat` handles mismatched columns by introducing `NaN` values (which is typically desired behavior unless strict schema enforcement is required).

---

# Question Revision
### Revision Report: Reshape Data (Concatenation)

**Pattern:** Array Manipulation / Flattening

**Brute Force:** 
Create a new result array of size `m * n` and use nested loops to copy each element from the source matrix into the target, tracking the current position with a flat index counter.
*   **Time Complexity:** $O(m \cdot n)$
*   **Space Complexity:** $O(m \cdot n)$ (for the result)

**Optimal Approach:**
Use the property that any element at `(r, c)` in a matrix with `n` columns corresponds to the index `i = r * n + c` in a flattened array. Conversely, for a target matrix with `n_new` columns, an index `i` maps to `row = i / n_new` and `col = i % n_new`. Perform a single pass through the input, calculating target coordinates via division and modulo operators.
*   **Time Complexity:** $O(m \cdot n)$
*   **Space Complexity:** $O(1)$ (excluding output storage)

**The 'Aha' Moment:** 
The problem is simply a coordinate transformation between 1D index space and 2D grid space using division and modulo arithmetic.

**Summary:** 
Whenever you need to reshape a matrix, map the flat index `i` to 2D coordinates using `i / cols` and `i % cols` to avoid nested loop overhead.

---