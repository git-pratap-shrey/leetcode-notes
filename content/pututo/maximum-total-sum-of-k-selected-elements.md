--- title: "Maximum Total Sum of K Selected Elements" slug: maximum-total-sum-of-k-selected-elements date: "2026-07-07" ---  # My Solution ~~~class Solution {
public:
    long long maxSum(vector<int>& nums, int k, int mul) {
        long long sum=0;
        sort(nums.begin(),nums.end());
        for(int i=nums.size()-1;i>=0&&k>0;i--,k--){
            if(mul>0){
                sum+=nums[i]*1LL*mul;
                mul--;
            }
            else{
                sum+=nums[i]*1LL;
            }
        }
        return sum;
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique**: Greedy with Sorting.
- **Optimality**: **Conditional**. The approach is optimal *if* `mul` is positive and exactly $k$ elements must be selected. It correctly pairs the largest available multipliers with the largest available numbers to maximize the sum ($\sum a_i \cdot m_i$).
- **Correctness Issue**: The code fails if `mul` can be negative. The `if (mul > 0)` check ignores the multiplier entirely when `mul <= 0`, treating it as a multiplier of 1, which is logically inconsistent.

## Complexity
- **Time Complexity**: $O(N \log N)$ where $N$ is the size of `nums`. The bottleneck is the `std::sort` operation.
- **Space Complexity**: $O(1)$ or $O(\log N)$ depending on the `std::sort` implementation (in-place vs. stack space).

## Efficiency Feedback
- **Runtime**: The time complexity is optimal for a sorting-based approach.
- **Memory**: Memory usage is minimal.
- **Potential Optimization**: If $k$ is significantly smaller than $N$, using `std::nth_element` to partition the top $k$ elements would reduce the time complexity to $O(N)$.

## Code Quality
- **Readability**: **Good**. The logic is straightforward and easy to follow.
- **Structure**: **Good**. The loop control and sum accumulation are concise.
- **Naming**: **Good**. Variable names (`sum`, `nums`, `k`, `mul`) are standard and descriptive.

### Concrete Improvements
1. **Overflow Prevention**: While `1LL` is used during multiplication, `mul` is decremented as an `int`. If `mul` is very large, ensure it doesn't underflow before the `mul > 0` check (though not an issue here as it stops at 0).
2. **Edge Case Handling**: The code should explicitly handle cases where `mul <= 0` if the problem constraints allow negative multipliers.
3. **Type Consistency**: Use `long long` for `mul` consistently to avoid repetitive casting with `1LL`.
4. **Performance**: Replace `sort` with `nth_element` if only the top $k$ elements are needed.

```cpp
// Suggested performance optimization for large N, small k
std::nth_element(nums.begin(), nums.end() - k, nums.end());
// Then sort only the last k elements
std::sort(nums.end() - k, nums.end());
```  ---  # Question Revision ### Revision Report: Maximum Total Sum of K Selected Elements

**Pattern:** Greedy / Sorting

**Brute Force:** 
Generate all possible combinations of $K$ elements from the array, calculate their sums, and track the maximum. 
Complexity: $O(\binom{n}{k})$

**Optimal Approach:** 
Sort the array in descending order and accumulate the sum of the first $K$ elements. Alternatively, use a Min-Heap of size $K$ to track the largest elements.
- **Time Complexity:** $O(n \log n)$ (Sorting) or $O(n \log k)$ (Heap)
- **Space Complexity:** $O(1)$ (Sorting) or $O(k)$ (Heap)

**The 'Aha' Moment:** 
The objective to "maximize total sum" while selecting a fixed number of elements ($K$) implies that there is no dependency between choices, making the largest available values the optimal picks.

**Summary:** 
Sort the array descending and sum the first $K$ elements to achieve the maximum total.  ---