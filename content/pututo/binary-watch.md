---
title: "Binary Watch"
slug: binary-watch
date: "2026-07-05"

---

# My Solution
~~~
class
 Solution {
public:
    vector<string> ans;
    vector<int> hourVal = {8,4,2,1};
    vector<int> minuteVal = {32,16,8,4,2,1};

    void solve(int idx,int left,int hour,int minute){
        if(left==0){
            if(hour<12 && minute<60){
                string t=to_string(hour)+":";
                if(minute<10)
                    t+='0';
                t+=to_string(minute);
                ans.push_back(t);
            }
            return;
        }
        if(idx==10)
            return;
        if(left>10-idx)
            return;
        // Don't take
        solve(idx+1,left,hour,minute);
        // Take
        if(idx<4)
            solve(idx+1,left-1,hour+hourVal[idx],minute);
        else
            solve(idx+1,left-1,hour,minute+minuteVal[idx-4]);
    }

    vector<string> readBinaryWatch(int turnedOn){
        solve(0,turnedOn,0,0);
        return ans;
    }
};
~~~

# Submission Review

## Approach

- **Technique**: Recursive Backtracking (Combinations). The code explores all combinations of $\binom{10}{k}$ LEDs to determine valid hour and minute values.
- **Optimality**: Optimal. Given the constraint of only 10 LEDs, the maximum number of combinations is $\binom{10}{5} = 252$, making brute-force search highly efficient.

## Complexity

- **Time Complexity**: $O(\binom{10}{k})$, where $k$ is `turnedOn`. This is effectively $O(1)$ as the input space is constant (max 10 LEDs).
- **Space Complexity**: $O(k)$ for the recursion stack depth, plus $O(\binom{10}{k})$ to store the result.

## Efficiency Feedback

- **Pruning**: The check `if(left > 10 - idx) return;` effectively prunes branches where there aren't enough LEDs left to reach the target `turnedOn` count.
- **String Formatting**: The use of `to_string` and manual concatenation is acceptable here due to the small output size, though `sprintf` or `std::format` (C++20) would be more idiomatic for time formatting.

## Code Quality

- **Readability**: Moderate. The logic is straightforward, but the mixed handling of hours and minutes within a single `idx` counter (0-3 for hours, 4-9 for minutes) adds slight cognitive load.
- **Structure**: Poor. The `ans` vector is a class member and is **never cleared** inside `readBinaryWatch`. If the `Solution` instance is reused for multiple test cases, the results from previous calls will persist, leading to incorrect outputs.
- **Naming**: Good. Variables like `hourVal`, `minuteVal`, and `left` clearly communicate their purpose.

#

## Concrete Improvements
1. **Bug Fix**: Move `vector<string> ans;` inside `readBinaryWatch` and pass it by reference to `solve`, or call `ans.clear()` at the start of `readBinaryWatch`.
2. **Refactoring**: Instead of `if(idx < 4)`, use two separate loops or recursive calls—one for hours and one for minutes—to remove the conditional check from every recursive step.
3. **Formatting**: Use `printf` or `stringstream` with `setw(2)` and `setfill('0')` for cleaner time formatting.

---

# Question Revision

#

## Revision Report: Binary Watch

**Pattern:** Brute Force / Simulation

**Brute Force:** Iterate through every possible hour (0-11) and minute (0-59), count the total number of set bits (1s) in their binary representations, and collect those that equal `nums`.

**Optimal Approach:** Since the total search space is constant and small (12 $\times$ 60 = 720 combinations), iterating through all valid times is the most efficient method.
- **Time Complexity:** $O(1)$ (fixed number of iterations)
- **Space Complexity:** $O(1)$ (excluding the output list)

**The 'Aha' Moment:** The extremely small constraints (12 hours, 60 minutes) indicate that iterating over the time range is more straightforward than generating bit permutations.

**Summary:** Iterate through all 720 possible time combinations and filter for those where the sum of set bits equals the number of available LEDs.

---
