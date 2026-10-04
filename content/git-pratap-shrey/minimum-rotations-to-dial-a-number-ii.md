---
title: "Minimum Rotations to Dial a Number II"
slug: minimum-rotations-to-dial-a-number-ii
date: "2026-10-04"
---

# My Solution
~~~cpp
class Solution {
public:
    int minRotations(int n, string s) {
        vector<int> prefix(s.size());
        vector<int> suffix(s.size());

        int curr = 0;
        int step = s[0] - '0';
        
        prefix[0] = min(abs(curr - step), min(abs(curr + 10 - step), abs(curr - (step + 10))));
        for(int i = 1; i < s.size(); i++){
            step = s[i] - '0';
            curr = s[i-1] - '0';

            prefix[i] = prefix[i-1] + min(abs(curr - step), min(abs(curr + 10 - step), abs(curr - (step + 10))));
        }
        
        curr = 0;
        step = s[s.size()-1] - '0';
        int index = 0;
        suffix[index++] = min(abs(curr - step), min(abs(curr + 10 - step), abs(curr - (step + 10))));
        for(int i = s.size() - 1; i > 0; i--){
            step = s[i] - '0';
            curr = s[i-1] - '0';

            suffix[index++] = suffix[index-1] + min(abs(curr - step), min(abs(curr + 10 - step), abs(curr - (step + 10))));
        }

        // for(int p : prefix){
        //     cout<<p<<" ";
        // }
        // cout<<"\n";
        // for(int s : suffix){
        //     cout<<s<<" ";
        // }
        // cout<<"\n";

        int min_ans = min(suffix[s.size()-1], prefix[s.size()-1]);
        for(int i = 0; i < s.size() - 1; i++){
            int curr = s[i] - '0';
            int step = s[s.size() - 1] - '0';
            int curr_ans = prefix[i] + suffix[s.size() - 2 - i] - suffix[0] + min(abs(curr - step), min(abs(curr + 10 - step), abs(curr - (step + 10))));
            min_ans = min(min_ans, curr_ans);

            // cout<<prefix[i]<<"+"<<suffix[s.size() - 2 - i]<<"-"<<suffix[0]<<"+"<<min(abs(curr - step), min(abs(curr + 10 - step), abs(curr - (step + 10))))<<"="<<curr_ans<<endl;
            // cout<<curr_ans<<" "<<endl;
        }

        return min_ans;
    }
};

// class Solution {
// public:
//     int minRotations(string s) {
//         int curr = 0;
//         int rotation = 0;
        
//         for(char st : s){
//             int step = st - '0';
//             int distance = 
//             // cout<<curr<<" "<<step<<" "<<distance<<endl;
//             curr = step;
//             rotation += distance;
//         }

//         return rotation;
//     }
// };
~~~

# Submission Review
## Approach
- **Technique**: Prefix and Suffix sums of distances. The code attempts to calculate the cost of rotating the dial from the start (`0`) to some index $i$, and from the end of the string back to `0`, then tries to find an optimal "break point" to minimize rotations.
- **Optimality**: **Incorrect/Suboptimal**. 
    - The logic for `suffix` is flawed: it iterates from the end of the string but calculates transitions using `s[i]` and `s[i-1]` in a way that doesn't correctly represent the cost of rotating the dial in reverse or from a specific point.
    - The distance calculation `min(abs(curr - step), min(abs(curr + 10 - step), abs(curr - (step + 10))))` is a correct way to find the shortest distance on a circular dial of 10.
    - The logic in the final loop attempting to combine prefix and suffix sums does not correctly account for all possible rotation paths or the specific constraints of the "Minimum Rotations to Dial a Number II" problem (which typically involves choosing a starting point or handling a circular array).

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the length of the string $s$. The code performs three linear passes.
- **Space Complexity**: $O(N)$ to store the `prefix` and `suffix` vectors.

## Efficiency Feedback
- **Memory**: The use of two `vector<int>` of size $N$ is acceptable for $O(N)$, but could be reduced to $O(1)$ if the logic were simplified.
- **Runtime**: The runtime is $O(N)$, but since the logic is logically flawed, the efficiency is irrelevant to the correctness.

## Code Quality
- **Readability**: **Poor**. There are large blocks of commented-out code and `cout` statements used for debugging that should have been removed.
- **Structure**: **Moderate**. The division into prefix, suffix, and final calculation is clear, but the implementation within those blocks is confusing.
- **Naming**: **Moderate**. Variable names like `curr`, `step`, and `prefix` are standard, but `index` is used awkwardly in the suffix loop.
- **Concrete Improvements**:
    1. **Logic Correction**: The suffix array should represent the distance from the end of the string back to the start (0) or vice versa; currently, it mixes indices and values inconsistently.
    2. **Cleanliness**: Remove all commented-out blocks and debug prints.
    3. **Edge Cases**: The code does not explicitly handle cases where the string might be empty or contain non-digit characters (though the latter is usually guaranteed by problem constraints).
    4. **Refactoring**: The distance calculation `min(abs(a-b), ...)` is repeated four times. This should be encapsulated in a helper function `getDist(int a, int b)`.

---

# Question Revision
# Revision Report: Minimum Rotations to Dial a Number II

### Pattern
**Dynamic Programming (State Machine / Linear DP)**

### Brute Force
Try every possible rotation sequence for every digit in the phone number. Since each digit can be reached from multiple directions (clockwise or counter-clockwise) and the starting point of the next digit depends on where the previous digit ended, the complexity becomes exponential $O(2^n)$, making it infeasible.

### Optimal Approach
The core idea is to maintain a state of the "current position" on the dial. Since there are only 10 possible positions (0-9), we can use DP to track the minimum cost to end up at each position after processing the $i$-th digit.

1. **State:** `dp[pos]` = minimum rotations to dial the sequence up to the current digit, ending at position `pos`.
2. **Transition:** For the next digit `d` in the phone number:
   - Calculate the distance from every possible previous position `prev_pos` to `d`.
   - The distance is the minimum of clockwise and counter-clockwise movement: $\min(|prev\_pos - d|, 10 - |prev\_pos - d|)$.
   - `new_dp[d] = min(dp[prev_pos] + distance)` across all `prev_pos`.
3. **Complexity:**
   - **Time:** $O(n \times 10)$ where $n$ is the length of the phone number. This simplifies to $O(n)$.
   - **Space:** $O(1)$ as the DP array size is constant (10).

### The 'Aha' Moment
The "optimal" way to reach the current digit depends entirely on which position you landed on for the previous digit, signaling a need to track costs for all possible end-states.

### Summary
Use DP to track the minimum cost to end at each of the 10 dial positions for every digit in the sequence.

---