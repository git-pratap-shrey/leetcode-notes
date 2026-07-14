---
title: "Maximum Candies Allocated to K Children"
slug: maximum-candies-allocated-to-k-children
date: "2026-06-10"
---

# My Solution
~~~cpp
class Solution {
public:
    long long fun(vector<int>& candies , int guess , int n){
        long long sum =0;
        for(int i=0;i<n;i++){
            int div = candies[i]/guess;
            sum = sum + div;

        }
        return sum;
    }
    int maximumCandies(vector<int>& candies, long long k) {
        int low =1 , high = *max_element(candies.begin(),candies.end());
        int result = 0;
        int n = candies.size();
        while(low<=high){
            int guess =(low+high)/2;
            long long ans = fun(candies , guess , n);
            if(ans >=k){
                result = guess;
                low = guess+1;

            }
            else{
                high = guess-1;
            }
        }
        return result;    
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Binary Search on the Answer.
- **Optimality**: Optimal. The problem exhibits a monotonic property (if it's possible to allocate $X$ candies, it's also possible to allocate $X-1$), making binary search the most efficient way to find the maximum possible value.

## Complexity
- **Time Complexity**: $O(N \log(\max(\text{candies})))$, where $N$ is the number of candy piles. The binary search runs $\log(\max(\text{candies}))$ times, and each check takes $O(N)$ time.
- **Space Complexity**: $O(1)$ auxiliary space.

## Efficiency Feedback
- **Performance**: The solution is highly efficient.
- **Potential Risk**: The expression `int guess = (low + high) / 2;` is susceptible to **integer overflow** if `low + high` exceeds $2^{31}-1$. While it may pass given specific problem constraints (e.g., if $\max(\text{candies}) \le 10^9$), it is safer to use `low + (high - low) / 2`.

## Code Quality
- **Readability**: Moderate. The logic is clear, but the helper function naming is non-descriptive.
- **Structure**: Good. The separation of the check logic (`fun`) from the search logic is appropriate.
- **Naming**: Poor. 
    - `fun` provides no indication of its purpose (should be something like `countPiles` or `canAllocate`).
    - `guess` is acceptable, but `mid` is more standard for binary search.
- **Concrete Improvements**:
    1. Rename `fun` to `countCandies`.
    2. Change `low`, `high`, and `guess` to `long long` to prevent overflow during the addition in the midpoint calculation.
    3. Use `std::max_element` result directly or store it in a `long long`.

---

# Question Revision
### Maximum Candies Allocated to K Children

**Pattern:** Binary Search on Answer

**Brute Force:** 
Iterate linearly from 1 up to the maximum value in the `candies` array. For each value `x`, calculate the total number of portions available. The last `x` that satisfies the requirement for $K$ children is the answer.

**Optimal Approach:**
Perform a binary search over the range of possible candies per child: $[1, \max(\text{candies})]$. For a candidate value `mid`, calculate the total portions by summing $\lfloor \text{pile} / mid \rfloor$ for all piles. If the total $\ge K$, the value is feasible; search the right half for a larger maximum. Otherwise, search the left half.

*   **Time Complexity:** $O(n \log(\max(\text{candies})))$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
The property "can we give $x$ candies to $K$ children?" is monotonic—if it works for $x$, it must work for all values less than $x$.

**Summary:** 
Binary search for the maximum possible portion size by verifying if the sum of $\lfloor \text{pile} / \text{size} \rfloor$ across all piles meets the child count requirement.

---