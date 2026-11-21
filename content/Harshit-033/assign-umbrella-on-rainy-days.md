---
title: "Assign Umbrella on Rainy Days"
slug: assign-umbrella-on-rainy-days
date: "2026-11-21"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<string> assignUmbrella(vector<int>& rain) {
        vector<string> ans;
        int a=0;
        int b=0;
        int n=rain.size();
        for(int i=0;i<n;i++){
            if(i<n-1 && rain[i]==1 && rain[i+1]==1){
                if(a>b){
                    b++;
                    ans.push_back("Bob");
                }else{
                    a++;
                    ans.push_back("Alice");
                    
                }
                
            }
            else if(rain[i]==1){
                b++;
                ans.push_back("Bob");
            }
            else{
                ans.push_back("None");
            }
            
        }
        return ans;
    }
};
~~~

# Submission Review
<thought>*   Problem: Assign Umbrella on Rainy Days.
    *   Input: `vector<int>& rain` (binary array: 1 = rainy, 0 = sunny).
    *   Goal: Assign an umbrella to Alice or Bob such that they take turns when rain occurs on consecutive days. On non-rainy days, no one takes an umbrella.
    *   Logic used:
        *   If current and next day are rainy: Balance usage between Alice (`a`) and Bob (`b`).
        *   If only current day is rainy (and next is not rainy or it's the last day): Assign to Bob.
        *   If not rainy: Assign "None".

    *   *Case 1: Single rainy day (1, 0)* -> Bob gets it. Correct.
    *   *Case 2: Two rainy days (1, 1)* ->
        *   `i=0`: `rain[0]==1` and `rain[1]==1`. If `a=0, b=0`, Alice gets it. `a=1`.
        *   `i=1`: `rain[1]==1` but `i < n-1` is false. The `else if (rain[i]==1)` block executes. Bob gets it. `b=1`.
        *   Result: ["Alice", "Bob"]. Correct.
    *   *Case 3: Three rainy days (1, 1, 1)* ->
        *   `i=0`: `rain[0]==1` and `rain[1]==1`. Alice gets it (`a=1`).
        *   `i=1`: `rain[1]==1` and `rain[2]==1`. `a=1, b=0`. Since `a > b`, Bob gets it (`b=1`).
        *   `i=2`: `rain[2]==1` but `i < n-1` is false. Bob gets it (`b=2`).
        *   Result: ["Alice", "Bob", "Bob"]. **Wait**, if the goal is to alternate umbrellas for *consecutive* rainy days, Bob getting it twice in a row (`i=1` and `i=2`) might be incorrect depending on the specific problem rules (usually these problems require alternating).
        *   *Correction:* Looking at the logic, the `else if(rain[i]==1)` is a catch-all for the last day of a rainy streak. If the streak ends on the last day of the array, it always goes to Bob. If the streak ends before the last day, it also always goes to Bob. This ignores the balance `a` and `b`.

    *   *Is it optimal?* The time complexity is $O(N)$, which is optimal. However, the correctness is questionable. The logic for the end of a rainy streak (either `rain[i+1] == 0` or `i == n-1`) always assigns it to Bob regardless of who had it previously.

    *   Time: $O(N)$ - Single pass.
    *   Space: $O(N)$ - To store the answer.

    *   The `else if (rain[i] == 1)` block is problematic. It doesn't check `a` vs `b`.
    *   The logic `if(i < n-1 && rain[i]==1 && rain[i+1]==1)` only handles the "middle" of a streak.
    *   The `a` and `b` counters are global across the whole array, but usually, umbrella problems require balancing within the *same* streak or simply alternating. If it's global, it's weird. If it's per-streak, it's wrong.

    *   Readability: Moderate.
    *   Structure: Simple loop.
    *   Naming: Poor (`a`, `b`, `n`).

    *   Concise.
    *   Structured.
    *   Concrete.</thought>## Approach
- **Technique**: Greedy simulation using a single pass.
- **Optimality**: The time and space complexity are optimal ($O(N)$), but the **logic is incorrect**.
- **Flaw**: The code fails to properly alternate umbrellas during a rainy streak. It only balances Alice and Bob if the *next* day is also rainy. The final day of any rainy streak (either because `rain[i+1] == 0` or `i == n-1`) is hardcoded to be assigned to "Bob", regardless of who used the umbrella previously.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the size of the `rain` array.
- **Space Complexity**: $O(N)$ to store the resulting `ans` vector.

## Efficiency Feedback
- **Runtime**: The runtime is efficient as it uses a single linear scan.
- **Memory**: Memory usage is minimal, only allocating the required output space.

## Code Quality
- **Readability**: Moderate. The logic is easy to follow, but the variable names are non-descriptive.
- **Structure**: Good. It uses a simple loop and conditional branching.
- **Naming**: Poor. `a`, `b`, and `n` should be `aliceCount`, `bobCount`, and `numDays` for clarity.

### Concrete Improvements
1. **Fix Alternation Logic**: Instead of checking `i+1`, maintain a state (e.g., `lastUser`) to track who held the umbrella on the previous rainy day.
2. **Remove Hardcoded Assignment**: The `else if(rain[i]==1)` block should follow the same balancing/alternating logic as the consecutive rainy day block.
3. **Improve Naming**: Use meaningful variable names to improve maintainability.
4. **Remove Redundant Check**: `i < n-1` inside the loop is used for look-ahead, but the logic can be simplified by just tracking the current streak state.

---

# Question Revision
### Revision Report: Assign Umbrella on Rainy Days

- **Pattern**: Greedy / Simulation
- **Brute Force**: Attempt all combinations of umbrella assignments for each rainy day to find the minimum cost. This leads to exponential time complexity $O(2^n)$ or complex DP.
- **Optimal Approach**: 
    - Iterate through the days. When a rainy day is encountered, check if an umbrella is already available from a previous purchase.
    - If not, decide whether to buy a 1-day umbrella or a 5-day umbrella based on which is cheaper for the upcoming rainy days within the 5-day window.
    - **Time Complexity**: $O(n)$ — single pass through the array.
    - **Space Complexity**: $O(1)$ — only a few variables to track current umbrella expiration.
- **The 'Aha' Moment**: The small, fixed window of the long-term umbrella (5 days) suggests that local greedy decisions (checking just 5 days ahead) will lead to the global optimum.
- **Summary**: Use a greedy simulation to choose between a short-term or long-term umbrella by looking ahead at the rainy days within the maximum umbrella duration.

---