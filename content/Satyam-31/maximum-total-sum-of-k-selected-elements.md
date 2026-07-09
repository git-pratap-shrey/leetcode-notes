--- title: "Maximum Total Sum of K Selected Elements" slug: maximum-total-sum-of-k-selected-elements date: "2026-06-29" ---  # My Solution ~~~class Solution {
public:
    long long maxSum(vector<int>& nums, int k, int mul) {
        sort(nums.begin(), nums.end());

        int m = 0;
        long long sum = 0;

        for (int i = nums.size() - 1; i >= 0 && m < k; i--) {
            if (mul > 0) {
                sum += 1LL * mul * nums[i];
                mul--;
            } else {
                sum += nums[i];
            }
            m++;
        }

        return sum;
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique:** Greedy (Incorrect).
- **Optimality:** Not optimal/Incorrect. The solution only considers the largest elements of the array. It fails to account for cases where multiplying the smallest (most negative) elements by negative multipliers results in a larger positive sum.

## Complexity
- **Time Complexity:** $O(N \log N)$ where $N$ is the size of `nums`, dominated by `std::sort`.
- **Space Complexity:** $O(1)$ or $O(\log N)$ depending on the sorting implementation.

## Efficiency Feedback
- While the runtime is efficient for the constraints, the logic is fundamentally flawed.
- **Bottleneck:** The greedy strategy is too simplistic. To fix this, the solution would need to consider a prefix of $x$ smallest elements and a suffix of $k-x$ largest elements, iterating through all possible values of $x \in [0, k]$.

## Code Quality
- **Readability:** Good. The code is clean and easy to follow.
- **Structure:** Good. Simple linear flow.
- **Naming:** Moderate. `m` is a generic name; `count` or `elementsPicked` would be more descriptive.
- **Concrete Improvements:**
    - The current logic `if (mul > 0)` does not correctly map the sequence of multipliers $(mul, mul-1, \dots, mul-k+1)$ to the array elements.
    - The logic completely ignores the case where $mul$ is initially negative or becomes negative during the loop.  ---  # Question Revision ### Revision Report: Maximum Total Sum of K Selected Elements

**Pattern:** Greedy / Priority Queue (Max-Heap)

**Brute Force:** 
Aggregate all available elements from all sets into a single list, sort the list in descending order, and sum the first $K$ elements.
*   **Time:** $O(N \log N)$ where $N$ is the total number of elements.
*   **Space:** $O(N)$ to store all elements.

**Optimal Approach:** 
Maintain a Max-Heap containing the largest available element from each set along with its source index. Extract the maximum element $K$ times; after each extraction, push the next available element from the same source set into the heap.
*   **Time:** $O(K \log M)$ where $M$ is the number of sets.
*   **Space:** $O(M)$ to store the heap.

**The 'Aha' Moment:** 
The requirement to pick the top $K$ elements from multiple sorted sources signals a "K-way merge" strategy using a priority queue.

**Summary:** 
Use a Max-Heap to greedily extract the largest remaining element across all sources $K$ times.  ---