---
title: "Remove K Digits"
slug: remove-k-digits
date: "2026-10-23"
---

# My Solution
~~~cpp
class Solution {
public:
    bool can_collide(stack<int>& s, int x){
        if(s.empty()){
            return false;
        }

        if(s.top() > 0 && x < 0){
            return true;
        }

        return false;
    }

    vector<int> asteroidCollision(vector<int>& asteroids) {
        stack<int>s;

        for(int a : asteroids){
            bool flag = false;
            while(can_collide(s, a)){
                int temp = s.top();
                s.pop();

                if(temp == abs(a)){
                    flag = true;
                    break;
                }

                if(temp > abs(a)){
                    a = temp;                        
                }

            }

            if(!flag){
                s.push(a);
            }
        }

        vector<int>ans(s.size());
        while(!s.empty()){
            ans[s.size() - 1] = s.top();
            s.pop();
        }

        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Stack-based simulation.
- **Correctness:** **Incorrect.** The code is solving the "Asteroid Collision" problem, but the prompt specifies the problem as "Remove K Digits." This is a complete mismatch between the required problem and the provided implementation.
- **Logic Errors (relative to Asteroid Collision):** The final loop to populate the `ans` vector is broken. `ans[s.size() - 1] = s.top();` uses a decreasing `s.size()`, causing index-out-of-bounds or overwriting incorrect positions.

## Complexity
- **Time Complexity:** $O(N)$ where $N$ is the number of asteroids. Each element is pushed and popped from the stack at most once.
- **Space Complexity:** $O(N)$ to store the stack and the result vector.

## Efficiency Feedback
- **Bottleneck:** The logic for transferring the stack to the vector is flawed, which would lead to a runtime crash or incorrect results.
- **Optimization:** Using a `std::deque` or `std::vector` instead of `std::stack` would allow direct return/conversion without needing to pop elements and reverse them.

## Code Quality
- **Readability:** Moderate. The `can_collide` helper simplifies the loop condition.
- **Structure:** Poor. The vector population logic is logically unsound.
- **Naming:** Good. Variable names (`asteroids`, `s`, `flag`) are standard for this problem type.

**Concrete Improvements:**
1. **Problem Alignment:** Implement a greedy monotonic stack approach to solve "Remove K Digits" instead of "Asteroid Collision."
2. **Vector Population:** To fix the current logic, use a pointer/index:
   ```cpp
   vector<int> ans(s.size());
   for (int i = s.size() - 1; i >= 0; i--) {
       ans[i] = s.top();
       s.pop();
   }
   ```
3. **Logic Fix:** In the collision loop, `a = temp` is conceptually wrong for the "Asteroid Collision" problem; the current asteroid should be destroyed, not transformed into the one that destroyed it.

---

# Question Revision
# Revision Report: Remove K Digits

- **Pattern:** Monotonic Stack
- **Brute Force:** Generate all possible combinations of removing $k$ digits and find the minimum resulting string. This leads to an exponential time complexity $O\binom{n}{k}$, which is impractical for large inputs.
- **Optimal Approach:** 
    - **Logic:** To make a number smaller, we need the leftmost digits to be as small as possible. Maintain a **monotonic increasing stack**. Iterate through the digits: while the current digit is smaller than the top of the stack and we still have removals left ($k > 0$), pop from the stack. After the loop, if $k > 0$, remove digits from the end. Finally, strip leading zeros.
    - **Time Complexity:** $O(n)$ — Each digit is pushed and popped at most once.
    - **Space Complexity:** $O(n)$ — To store the stack.
- **The 'Aha' Moment:** The requirement to minimize a number by removing digits suggests that a "peak" (a digit larger than its successor) is the optimal point to remove to decrease the number's magnitude most significantly.
- **Summary:** Use a monotonic stack to remove "peaks" from left to right to ensure the smallest possible leading digits.

---