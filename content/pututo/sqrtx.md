--- title: "Sqrt(x)" slug: sqrtx date: "2026-06-28" ---  # My Solution ~~~class Solution {
public:
    int mySqrt(int x) {
        long long l=0,r=x,ans=0;
        while(l<=r){
            long long mid=l+(r-l)/2;
            if(mid*mid<=x){
                ans=mid;
                l=mid+1;
            }
            else{
                r=mid-1;
            }
        }
        return ans;
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique**: Binary Search on the answer range $[0, x]$.
- **Optimality**: Optimal. Binary search reduces the search space exponentially, providing the most efficient way to find the floor of a square root without using built-in math functions.

## Complexity
- **Time Complexity**: $O(\log x)$ — The search space is halved in each iteration.
- **Space Complexity**: $O(1)$ — Only a few scalar variables are used.

## Efficiency Feedback
- **Overflow Prevention**: The use of `long long` for `l`, `r`, and `mid` is necessary and correctly implemented to prevent overflow during the `mid * mid` calculation, as $x$ can be up to $2^{31}-1$.
- **Midpoint Calculation**: Using `l + (r - l) / 2` is a best practice to prevent overflow, although redundant here since `l` and `r` are already `long long`.

## Code Quality
- **Readability**: Good. The logic is concise and follows standard binary search patterns.
- **Structure**: Good. The loop termination and boundary updates are correct.
- **Naming**: Moderate. While `l`, `r`, and `ans` are standard in competitive programming, `low`, `high`, and `result` would be more descriptive for production code.
- **Improvements**: 
    - For $x=0$ or $x=1$, the loop still runs $\log x$ times; while negligible, a small early return could be added.
    - The range could be narrowed to $r = \min(x, 46340)$ if using `int` to avoid `long long` entirely (since $\lfloor\sqrt{2^{31}-1}\rfloor = 46340$), but the current `long long` approach is cleaner.  ---  # Question Revision ### Sqrt(x)

**Pattern:** Binary Search

**Brute Force:** Iterate linearly from $0$ up to $\sqrt{x}$ and return the first integer $i$ where $(i+1)^2 > x$. Time: $O(\sqrt{n})$.

**Optimal Approach:** 
Perform a binary search on the range $[1, x]$. If $mid^2 \le x$, then $mid$ is a potential answer, and we search the right half for a larger possible integer. Otherwise, search the left half.
- **Time Complexity:** $O(\log n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The property $f(i) = i^2$ is monotonically increasing, allowing us to discard half the search space in each step.

**Summary:** Find the largest integer $k$ such that $k^2 \le x$ using binary search on the range $[1, x]$.  ---