--- title: "Minimum Lights to Illuminate a Road" slug: minimum-lights-to-illuminate-a-road date: "2026-07-03" ---  # My Solution ~~~class Solution {
    public int minLights(int[] lights) {
        int n = lights.length;
        int[] diff = new int[n+2];
        for(int i=0;i<n;i++){
            if(lights[i]>0){
                int left = Math.max(0,i-lights[i]);
                int right = Math.min(n-1,i+lights[i]);
                diff[left]++;
                diff[right+1]--;
            }
        }
        int ans = 0;
        int cover = 0;
        for(int i=0;i<n;i++){
            cover += diff[i];
            if(cover==0){
                ans++;
                cover++;
                int end = Math.min(i+2,n-1);
                diff[end+1]--;
            }
        }
        return ans;
    }
} - java~~~  # Submission Review ## Approach
- **Technique**: Difference Array (Prefix Sum).
- **Optimality**: Optimal. The solution processes the road in a single pass after initializing the coverage, ensuring $O(N)$ time complexity. It uses a greedy approach to place additional lights only when a gap is encountered, extending the coverage as far as possible.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the length of the `lights` array. The code performs two linear passes.
- **Space Complexity**: $O(N)$ to store the `diff` array.

## Efficiency Feedback
- **Runtime**: The approach is highly efficient. Using a difference array avoids nested loops for range updates, preventing $O(N^2)$ worst-case scenarios.
- **Memory**: Space usage is minimal and proportional to the input size.
- **Optimization**: The manual increment `cover++` inside the loop effectively simulates adding a light starting at index `i`. This is a clever way to avoid re-scanning the `diff` array.

## Code Quality
- **Readability**: Moderate. While the difference array pattern is standard, the logic for adding a light (`cover++` combined with `diff[end+1]--`) is slightly opaque without comments.
- **Structure**: Good. The separation between initial coverage calculation and the gap-filling pass is clear.
- **Naming**: Good. Variable names like `diff`, `cover`, and `ans` clearly communicate their purpose.

**Concrete Improvements**:
1. **Magic Numbers**: The value `i+2` used to determine the range of an added light is a "magic number." This should be defined as a constant (e.g., `ADDITIONAL_LIGHT_RANGE`) to clarify the assumed range of the lights being added.
2. **Boundary Logic**: In the line `int end = Math.min(i+2, n-1);`, `end` is calculated but only used to index `diff[end+1]`. This could be simplified to `diff[Math.min(i + 3, n + 1)]--` to reduce variable overhead, though the current way is more readable.  ---  # Question Revision ### Revision Report: Minimum Lights to Illuminate a Road

**Pattern:** Greedy / Interval Coverage

**Brute Force:** 
Explore all possible combinations of light intervals using recursion/backtracking to find the smallest subset that covers the entire road length.
*   **Complexity:** $O(2^n)$

**Optimal Approach:**
1.  **Sort** intervals by their start position.
2.  Maintain a variable `current_end` (initially 0) representing the end of the road currently illuminated.
3.  While `current_end` < `road_length`:
    *   Iterate through all intervals that start $\le$ `current_end`.
    *   Pick the one that extends the farthest (maximum `end`).
    *   Update `current_end` to this maximum `end` and increment the light count.
    *   If no interval can extend `current_end`, the road cannot be fully lit.
*   **Time Complexity:** $O(n \log n)$ due to sorting.
*   **Space Complexity:** $O(1)$ (excluding sort overhead).

**The 'Aha' Moment:** 
When you need to cover a continuous range with minimum segments, always greedily pick the interval that provides the maximum "reach" from your current boundary.

**Summary:** 
Sort by start time and repeatedly jump to the furthest possible end point until the target is reached.  ---