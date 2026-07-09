--- title: "Maximum Total Sum of K Selected Elements" slug: maximum-total-sum-of-k-selected-elements date: "2026-06-28" ---  # My Solution ~~~class Solution {
    public long maxSum(int[] nums, int k, int mul) {
        Arrays.sort(nums);
        long sum = 0;
        for(int i=nums.length-1;i>=nums.length-k;i--){
            long add =nums[i];
            long mult = 1L*nums[i]*mul;
            sum += Math.max(add,mult);
            mul--;
        }
        return sum;
    }
} - java~~~  # Submission Review ## Approach
- **Technique**: Greedy. The code sorts the array and selects the $k$ largest elements, choosing between the element's value and its product with the current multiplier.
- **Optimality**: **Incorrect**. The approach is suboptimal and logically flawed. It only considers the $k$ largest elements. If `mul` is negative, multiplying a very small (negative) number by a negative multiplier can yield a larger positive result than taking the largest positive numbers. The code fails to consider the smallest elements of the sorted array.

## Complexity
- **Time Complexity**: $O(n \log n)$ due to `Arrays.sort(nums)`.
- **Space Complexity**: $O(1)$ or $O(\log n)$ depending on the internal implementation of the sorting algorithm.

## Efficiency Feedback
- The time and space complexity are standard for this type of problem, but the runtime is wasted on a logically incorrect algorithm.
- To fix the logic, the solution would likely need Dynamic Programming or a more robust Greedy approach that evaluates both ends of the sorted array (smallest and largest) at each step of $k$.

## Code Quality
- **Readability**: Moderate. The logic is easy to follow, but the variable naming is slightly misleading (`mult` refers to the resulting value, not the multiplier itself).
- **Structure**: Good. The code is concise.
- **Naming**: Moderate. `add` and `mult` are generic; `val` and `product` would be more descriptive.
- **Concrete Improvements**:
    - **Bug Fix**: Implement a DP approach or a two-pointer strategy to account for negative numbers and negative multipliers.
    - **Type Safety**: `1L * nums[i] * mul` correctly prevents integer overflow before assigning to `long`, which is a good practice.  ---  # Question Revision ### Revision Report: Maximum Total Sum of K Selected Elements

**Pattern:** Greedy / Max-Heap

**Brute Force:**
Generate all possible combinations of $k$ elements from the set, calculate the sum for each, and track the maximum.
- **Time Complexity:** $O(\binom{n}{k})$
- **Space Complexity:** $O(1)$

**Optimal Approach:**
Utilize a Max-Heap or sort the array in descending order to greedily pick the $k$ largest elements. By always selecting the current maximum available value, you guarantee the global maximum sum for a fixed $k$.
- **Time Complexity:** $O(n \log n)$ (Sorting) or $O(n \log k)$ (Min-Heap to maintain top $k$)
- **Space Complexity:** $O(1)$ or $O(k)$

**The 'Aha' Moment:**
The requirement to maximize a sum using a fixed count ($k$) without interdependence between elements signals a Greedy strategy.

**Summary:**
To maximize the sum of $k$ elements, always prioritize the largest available values using sorting or a priority queue.  ---