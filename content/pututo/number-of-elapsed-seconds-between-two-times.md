---
title: "Number of Elapsed Seconds Between Two Times"
slug: number-of-elapsed-seconds-between-two-times
date: "2026-07-12"
---

# My Solution
~~~cpp
class Solution {
public:
    int secondsBetweenTimes(string startTime, string endTime) {
        int h1=stoi(startTime.substr(0,2));
        int m1=stoi(startTime.substr(3,2));
        int s1=stoi(startTime.substr(6,2));
        int h2=stoi(endTime.substr(0,2));
        int m2=stoi(endTime.substr(3,2));
        int s2=stoi(endTime.substr(6,2));
        int ts1=h1*3600+m1*60+s1;
        int ts2=h2*3600+m2*60+s2;
        if(ts1>ts2){
            ts2+=86400;
        }
        int ans=ts2-ts1;
        cout<<ts2-ts1;
        return ts2-ts1;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Direct conversion of time strings into total seconds from the start of the day (00:00:00).
*   **Optimality:** Optimal. It performs a constant number of operations to compute the delta, which is the most efficient way to handle time arithmetic.

## Complexity
*   **Time Complexity:** $O(1)$. The operations (substring, integer conversion, arithmetic) are performed on fixed-length strings (HH:MM:SS), resulting in constant time.
*   **Space Complexity:** $O(1)$. No auxiliary data structures are used.

## Efficiency Feedback
*   **Runtime:** High efficiency. The use of `stoi` and `substr` is negligible given the small input size.
*   **Optimization:** The `cout` statement is unnecessary for production/competitive code and should be removed to avoid extra I/O overhead.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. The functional decomposition is clear.
*   **Naming:** Moderate. Variables like `h1`, `m1`, `s1` are standard for time components, but more descriptive names (e.g., `startHours`, `endSeconds`) would enhance clarity.
*   **Improvements:**
    *   **Remove `cout`:** It serves no purpose in the calculation and can interfere with the judge system's output expectations.
    *   **Abstraction:** Consider a helper function `toSeconds(string time)` to avoid code duplication for parsing `startTime` and `endTime`.
    *   **Input Validation:** The code assumes valid "HH:MM:SS" format; adding basic checks or using `sscanf` could make it more robust.

```cpp
// Suggested refactor
int toSeconds(const string& time) {
    return stoi(time.substr(0, 2)) * 3600 + 
           stoi(time.substr(3, 2)) * 60 + 
           stoi(time.substr(6, 2));
}

int secondsBetweenTimes(string startTime, string endTime) {
    int ts1 = toSeconds(startTime);
    int ts2 = toSeconds(endTime);
    if (ts1 > ts2) ts2 += 86400;
    return ts2 - ts1;
}
```

---

# Question Revision
### Revision Report: Number of Elapsed Seconds Between Two Times

**Pattern:** Unit Conversion / Normalization

**Brute Force:** 
Simulate the passage of time by incrementing the start time second-by-second until it matches the end time.
*   **Time Complexity:** $O(T)$, where $T$ is the number of elapsed seconds.
*   **Space Complexity:** $O(1)$.

**Optimal Approach:**
Convert both timestamps into a single, unified scalar unit (seconds from the start of the day: `seconds = hours * 3600 + minutes * 60 + seconds`). Calculate the absolute difference between the two scalar values.
*   **Time Complexity:** $O(1)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
Whenever a problem involves measuring an interval across different temporal granularities, always normalize the inputs to the smallest possible unit to turn a complex simulation into a simple subtraction.

**Summary:** 
Don't simulate the passage of time—map all time units to a common base to make duration calculation a simple arithmetic operation.

---