---
title: "Number of Elapsed Seconds Between Two Times"
slug: number-of-elapsed-seconds-between-two-times
date: "2026-07-12"
---

# My Solution
~~~java
class Solution {
    public int secondsBetweenTimes(String startTime, String endTime) {
        int hour1 = Integer.parseInt(startTime.substring(0,2));
        int min1 = Integer.parseInt(startTime.substring(3,5));
        int sec1 = Integer.parseInt(startTime.substring(6,8));
        int hour2 = Integer.parseInt(endTime.substring(0,2));
        int min2 = Integer.parseInt(endTime.substring(3,5));
        int sec2 = Integer.parseInt(endTime.substring(6,8));
        return ((hour2*60*60)+(min2*60)+sec2)- ((hour1*60*60)+(min1*60)+sec1);
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Arithmetic conversion. The solution converts both time strings into total seconds from the start of the day (00:00:00) and calculates the difference.
*   **Optimality:** Optimal. This is the most direct way to solve the problem with $O(1)$ arithmetic operations.

## Complexity
*   **Time Complexity:** $O(1)$. The input strings are fixed length (8 characters), making the parsing and arithmetic constant time.
*   **Space Complexity:** $O(1)$. The solution uses a constant amount of memory for local integer variables.

## Efficiency Feedback
*   The runtime is highly efficient. Since the input format is strictly HH:MM:SS, string slicing and integer parsing are negligible overhead.
*   The logic assumes `endTime` is chronologically after `startTime`. If the problem requirements involve crossing midnight (i.e., `endTime` < `startTime`), this implementation will return a negative value, which might be incorrect depending on the specific problem constraints.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. Simple, imperative flow appropriate for the task.
*   **Naming:** Good. Variable names (`hour1`, `min1`, etc.) are descriptive and intuitive.
*   **Concrete Improvements:**
    *   **DRY (Don't Repeat Yourself):** You can extract the time-to-seconds conversion into a private helper method to reduce code duplication.
    *   **Robustness:** Consider if you need to handle cases where `startTime` is after `endTime` by adding `(totalSeconds2 - totalSeconds1 + 86400) % 86400` if the interval spans across midnight.
    *   **Modern Java:** For production code, `java.time.LocalTime` (e.g., `LocalTime.parse(startTime).toSecondOfDay()`) is preferred for readability and built-in validation, though this would have higher overhead than your manual parsing.

```java
// Example of a cleaner implementation
private int toSeconds(String time) {
    int h = Integer.parseInt(time.substring(0, 2));
    int m = Integer.parseInt(time.substring(3, 5));
    int s = Integer.parseInt(time.substring(6, 8));
    return h * 3600 + m * 60 + s;
}
```

---

# Question Revision
### Revision Report: Number of Elapsed Seconds Between Two Times

**Pattern:** Coordinate/Unit Conversion (Normalization)

**Brute Force:**
Increment the start time by one second repeatedly until it matches the end time, maintaining a counter.
*   **Time Complexity:** $O(N)$ where $N$ is the number of seconds in the range.
*   **Space Complexity:** $O(1)$.

**Optimal Approach:**
Convert both time strings into total seconds elapsed from the beginning of the day (e.g., `total_seconds = hours * 3600 + minutes * 60 + seconds`). Subtract the two resulting integers to find the difference. 
*   **Time Complexity:** $O(1)$ (Assuming fixed time format length).
*   **Space Complexity:** $O(1)$.

**The 'Aha' Moment:**
When a problem involves time or complex units, treat the input as a single scalar value by converting it into its smallest base unit to transform a simulation problem into a simple arithmetic one.

**Summary:**
Always normalize time-based inputs into a single integer representing the total base units (seconds/minutes) to bypass loop-based simulations.

---