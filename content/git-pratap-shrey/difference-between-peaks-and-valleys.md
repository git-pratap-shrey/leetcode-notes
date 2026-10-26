---
title: "Difference Between Peaks and Valleys"
slug: difference-between-peaks-and-valleys
date: "2026-10-24"
---

# My Solution
~~~cpp
class Solution {
public:
    string removeKdigits(string num, int k) {
        stack<int> s;
        for(char c : num){
            int d = c - '0';

            if(s.empty()){
                s.push(d);
                continue;
            }

            while(!s.empty() && d < s.top() && k){
                s.pop();
                k--;
            }

            s.push(d);
        }

        while(k > 0) {
            s.pop();
            k--;
        }
        vector<int>ans(s.size());

        while(!s.empty()){
            ans[s.size() - 1] = s.top();
            s.pop();
        }

        string ansStr;
        bool flag = false;
        for(int i : ans){
            if(i == 0 && !flag){
                continue;
            }
            else{
                flag = true;
            }
            ansStr += char(i + '0');
        }

        if(ansStr == ""){
            ansStr = "0";
        }

        for(char c : ansStr){
        }
        return ansStr;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Greedy approach using a Monotonic Stack.
- **Optimality:** The logic for "Remove K Digits" is optimal ($O(N)$). However, the code is solving the wrong problem; the problem statement provided is "Difference Between Peaks and Valleys," but the code implements "Remove K Digits."

## Complexity
- **Time Complexity:** $O(N)$, where $N$ is the length of the string. Each character is pushed and popped from the stack at most once.
- **Space Complexity:** $O(N)$ to store the stack and the resulting vector/string.

## Efficiency Feedback
- **Bottleneck:** The conversion from `stack` $\rightarrow$ `vector` $\rightarrow$ `string` is redundant. Using a `std::string` as a stack (via `push_back` and `pop_back`) would eliminate extra allocations and the need for a separate vector.
- **Redundant Loop:** The final `for(char c : ansStr){}` loop is empty and serves no purpose.

## Code Quality
- **Readability:** Moderate. The logic is standard for the specific algorithm, but the disconnect between the problem title and the code is jarring.
- **Structure:** Poor. 
    - The process of extracting elements from the stack into a vector `ans` is flawed: `ans[s.size() - 1] = s.top();` inside a `while` loop where `s.size()` changes will lead to incorrect indexing or out-of-bounds errors.
    - The `flag` logic for leading zeros is functional but could be simplified.
- **Naming:** Good. Variable names like `num`, `k`, and `ansStr` are clear.

### Concrete Improvements
1. **Correct the Bug:** The line `ans[s.size() - 1] = s.top();` is logically broken because `s.size()` decreases every iteration. It should use a separate index pointer.
2. **Use String as Stack:** Replace `stack<int>` with `string res`. This allows direct manipulation and avoids the expensive conversion process.
3. **Remove Dead Code:** Delete the empty `for` loop at the end.
4. **Fix Logic Alignment:** The code solves a completely different problem than "Difference Between Peaks and Valleys."

---

# Question Revision
# Revision Report: Difference Between Peaks and Valleys

- **Pattern**: Array Traversal / Simulation
- **Brute Force**: Iterate through the array, manually identifying every peak and valley by checking neighbors, storing them in lists, and then calculating the sum of differences between consecutive extremes.
- **Optimal Approach**: 
    - **Logic**: Use a single pass to identify "turning points." Skip consecutive identical elements to handle plateaus. A point is a peak if it is greater than its immediate non-equal neighbors, and a valley if it is smaller. Once the first extreme is found, track the `current_extreme` and add the absolute difference to the total whenever the direction changes.
    - **Time Complexity**: $O(n)$ where $n$ is the length of the array.
    - **Space Complexity**: $O(1)$ as only a few variables are used to track the state.
- **The 'Aha' Moment**: The requirement to ignore plateaus (consecutive equal values) indicates that I should only trigger logic when `nums[i] != nums[i-1]`.
- **Summary**: Ignore duplicates and sum the absolute differences between every consecutive local maximum and minimum.

---