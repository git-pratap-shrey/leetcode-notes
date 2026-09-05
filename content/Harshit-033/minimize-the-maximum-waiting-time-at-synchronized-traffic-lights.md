---
title: "Minimize the Maximum Waiting Time at Synchronized Traffic Lights"
slug: minimize-the-maximum-waiting-time-at-synchronized-traffic-lights
date: "2026-08-16"
---

# My Solution
~~~cpp
class Solution {
public:
    int minPenalty(int period, vector<int>& lights, vector<int>& at) {
        int ans=0;
        int mx=INT_MIN;
        for(int i=0;i<lights.size();i++){
            mx=max(lights[i],mx);
        }
        for(int j=0;j<at.size();j++){
            int r=at[j]%period;
            if(r<mx){
                continue;
            }
            ans=max(period-r,ans);
        }
        return ans;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Greedy/Linear scan.
*   **Correctness:** The solution appears **logically flawed**. It calculates `ans` based on the largest duration (`mx`) in the `lights` vector, but it treats `lights[i]` as an individual threshold rather than accounting for the state of *all* lights. If the intention is to find the maximum wait time across a synchronized system, simply taking the max of `lights` and comparing it to `at[j] % period` ignores the individual start/stop cycles of each light.

## Complexity
*   **Time Complexity:** $O(N + M)$, where $N$ is the number of lights and $M$ is the number of arrival times. This is optimal for a single-pass approach.
*   **Space Complexity:** $O(1)$, as it uses a few auxiliary variables regardless of input size.

## Efficiency Feedback
*   The runtime is highly efficient, but the logic is insufficient for the problem description "Synchronized Traffic Lights." 
*   **Optimization:** If the logic were correct, the $O(N)$ pass to find `mx` could be eliminated if `mx` were known or passed as a constant. Currently, it is efficient but likely produces incorrect results for most test cases involving varied traffic light cycles.

## Code Quality
*   **Readability:** Moderate. The variable names `r`, `mx`, and `at` are somewhat cryptic.
*   **Structure:** Good. The logic is partitioned into two clear loops.
*   **Naming:** Poor. `at` should be `arrival_times`, `mx` should be `max_light_duration`, and `r` should be `remainder`.
*   **Concrete Improvements:**
    1.  Rename variables for clarity (e.g., `at` to `arrival_times`).
    2.  The `INT_MIN` initialization is safe, but ensure `lights` is not empty to avoid logic errors.
    3.  **Critical:** Re-evaluate the algorithm; if the lights have different periods or phases, the current single-value `mx` approach is insufficient to determine the wait time at each specific intersection. You likely need to iterate through each light `i` for each arrival `j`.

---

# Question Revision
### Revision Report: Minimize Maximum Waiting Time

**Pattern:** Modular Arithmetic / Mathematical Simulation

**Brute Force:** Calculate the arrival time at every light by simulating every possible departure delay, resulting in $O(n \cdot d)$ complexity, where $d$ is the range of possible delays.

**Optimal Approach:**
Observe that waiting times at each light $i$ are cyclic functions $f_i(t) = (t \mod g_i)$, where $g_i$ is the cycle duration. By calculating the "earliest possible start time" required to clear each light at the start of its green cycle, we can compute the total shift needed. Since each light acts as a modulo constraint, we can solve this using the property that waiting time is minimized by aligning the arrival time with the start of a green interval.
*   **Time Complexity:** $O(n)$ where $n$ is the number of traffic lights.
*   **Space Complexity:** $O(1)$ auxiliary space.

**The 'Aha' Moment:**
When a problem involves periodic constraints (like traffic light cycles), stop trying to simulate time and start calculating the modular offsets required to "align" arrival times with the start of the intervals.

**Summary:**
Whenever you see repeating cycles, shift your focus from tracking elapsed time to solving for the required phase alignment using modular arithmetic.

---