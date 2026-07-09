--- title: "Capacity To Ship Packages Within D Days" slug: capacity-to-ship-packages-within-d-days date: "2026-06-16" ---  # My Solution ~~~class Solution {
public:
    bool fun(vector<int>& weights , int guess , int n , int days){
        int k =1;
        int ans =0;
        for(int i=0 ; i<n ;i++){
            if(ans + weights[i]<=guess){
                ans =ans+weights[i];
            }
            else{
                k++;
                ans = weights[i];
                if(k>days){
                    return false;
                }
            }
            
        }
        return true;
    }
    int shipWithinDays(vector<int>& weights, int days) {
        int low = 0;
        int high;
        int n =weights.size();
        int res =-1;
        for(int i=0;i<n;i++){
            low = max(low,weights[i]);
            high = high+weights[i];
        }
        while(low<=high){
            int guess = (low+high)/2;
            if(fun(weights , guess , n , days)){
                res =guess;
                high = guess -1;
            }
            else{
                low =guess+1;
            }
        }
        return res;
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique**: Binary Search on the Answer. The code searches for the minimum feasible capacity in the range `[max(weights), sum(weights)]`.
- **Optimality**: Optimal. The problem exhibits monotonicity (if capacity $C$ works, any capacity $> C$ also works), making binary search the most efficient approach.

## Complexity
- **Time Complexity**: $O(N \log(\sum \text{weights} - \max \text{weights}))$, where $N$ is the number of packages. The binary search takes logarithmic steps, and each check (`fun`) takes linear time.
- **Space Complexity**: $O(1)$ as it uses a constant amount of extra space.

## Efficiency Feedback
- **Critical Bug**: The variable `int high;` is declared but **not initialized**. The line `high = high + weights[i];` results in **Undefined Behavior (UB)** because it adds to a garbage value.
- **Integer Overflow**: `int guess = (low + high) / 2;` is susceptible to overflow if the sum of weights exceeds $2^{31}-1$. Using `low + (high - low) / 2` is safer.
- **Redundancy**: Passing `int n` to `fun` is unnecessary since `weights.size()` is available.

## Code Quality
- **Readability**: Poor. 
    - `fun` is a generic name; `canShip` or `isPossible` would be more descriptive.
    - `ans` is used to track the current day's load, which is misleading (usually `ans` refers to the final result).
    - `k` is used for the day counter; `daysUsed` would be clearer.
- **Structure**: Good. The separation of the feasibility check into a helper function is correct.
- **Naming**: Poor. Variable names lack semantic meaning.

**Concrete Improvements**:
1. Initialize `int high = 0;`.
2. Rename `fun` $\rightarrow$ `canShip`, `ans` $\rightarrow$ `currentLoad`, `k` $\rightarrow$ `daysCount`.
3. Replace `(low + high) / 2` with `low + (high - low) / 2`.
4. Remove the redundant `int n` parameter from the helper function.  ---  # Question Revision ### Capacity To Ship Packages Within D Days

**Pattern:** Binary Search on Answer

**Brute Force:**
Linearly test every possible capacity starting from $\max(weights)$ up to $\sum(weights)$. For each capacity, simulate the shipping process to check if it fits within $D$ days.

**Optimal Approach:**
The search space for the capacity is monotonic: if a capacity $C$ works, any capacity $> C$ also works. Use binary search between `low = max(weights)` and `high = sum(weights)`. For each midpoint `mid`, use a greedy simulation to count the days required; if `days <= D`, search the left half for a smaller valid capacity.

*   **Time Complexity:** $O(n \cdot \log(\sum weights - \max weights))$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
The requirement to find the "minimum possible value" of a capacity that satisfies a condition across a sorted range of potential answers signals Binary Search on the answer.

**Summary:**
Binary search for the smallest capacity in the range $[\max, \sum]$ that allows all packages to be shipped within $D$ days using a greedy simulation.  ---