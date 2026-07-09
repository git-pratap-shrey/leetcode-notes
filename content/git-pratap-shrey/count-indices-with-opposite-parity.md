--- title: "Count Indices With Opposite Parity" slug: count-indices-with-opposite-parity date: "2026-07-07" ---  # My Solution ~~~class Solution {
public:
    vector<int> countOppositeParity(vector<int>& nums) {
        vector<int> suffixSum(nums.size());

        suffixSum[nums.size()-1] = 0;
        
        if(nums.size() == 1){
            return {0};
        }
        suffixSum[nums.size()-2] = nums[nums.size()-1] % 2 == 0 ? 1 : 0;

        // cout<<suffixSum[nums.size()-1]<<" ";
        // cout<<suffixSum[nums.size()-2]<<" ";


        for (int i = nums.size() - 3; i >= 0; i--){
            suffixSum[i] = nums[i+1] % 2 == 0 ?  suffixSum[i+1] + 1 : suffixSum[i+1];
            // cout<<suffixSum[i]<<" ";
        }

        vector<int> answer(nums.size());

        for(int i = 0; i < nums.size(); i++){
            if(nums[i] % 2 != 0){
                answer[i] = suffixSum[i];
            }
            else{
                answer[i] = nums.size() - i - 1 - suffixSum[i];
            }
        } 
        return answer;
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique**: Precomputation using a suffix count array.
- **Optimality**: Optimal. The problem requires checking every element's relationship with all subsequent elements; a linear pass with precomputed counts is the most efficient way to achieve this.

## Complexity
- **Time Complexity**: $O(n)$ where $n$ is the size of `nums`. The code performs two linear passes.
- **Space Complexity**: $O(n)$ to store the `suffixSum` array and the `answer` vector.

## Efficiency Feedback
- **Auxiliary Space**: The `suffixSum` array is technically redundant. One could maintain a running count of even/odd numbers by iterating from the end of the array backwards and filling the `answer` array in a single pass, reducing auxiliary space from $O(n)$ to $O(1)$.
- **Redundant Logic**: The manual initialization of `suffixSum[nums.size()-1]` and `suffixSum[nums.size()-2]` followed by a loop starting at `nums.size()-3` is unnecessarily verbose and requires a guard clause for `size == 1`.

## Code Quality
- **Readability**: Moderate. The presence of commented-out `cout` statements and the disjointed initialization of the suffix array make the logic harder to follow.
- **Structure**: Moderate. The boundary condition handling (`if(nums.size() == 1)`) and the fragmented loop logic are clunky.
- **Naming**: Moderate. `suffixSum` is a misleading name because it stores a **count** of even numbers, not a sum of elements. A name like `evenCountSuffix` would be more accurate.

**Concrete Improvements**:
1. **Consolidate Loops**: Use a single loop from `n-1` down to `0` to calculate parity counts and populate the answer array simultaneously.
2. **Remove Dead Code**: Delete commented-out print statements.
3. **Simplify Boundary Checks**: By using a more standard loop structure, the `size == 1` special case is handled naturally.  ---  # Question Revision ### Revision Report: Count Indices With Opposite Parity

**Pattern:** Combinatorics / Frequency Mapping

**Brute Force:** 
Use nested loops to check every pair $(i, j)$ where $i < j$. Verify if `nums1[i] % 2 != nums1[j] % 2` and `nums2[i] % 2 != nums2[j] % 2`.
- **Time:** $O(n^2)$
- **Space:** $O(1)$

**Optimal Approach:** 
Since only parity (0 or 1) matters, there are only four possible state combinations for any index $i$: `(0,0), (0,1), (1,0), (1,1)`. 
1. Count the occurrences of each combination across the arrays.
2. A valid pair consists of complementary states: `(0,0)` matches with `(1,1)`, and `(0,1)` matches with `(1,0)`.
3. Total count = $\text{count}(0,0) \times \text{count}(1,1) + \text{count}(0,1) \times \text{count}(1,0)$.

- **Time:** $O(n)$
- **Space:** $O(1)$ (constant space for 4 counters)

**The 'Aha' Moment:** 
The condition "opposite parity in both arrays" implies that we only need the total counts of the four parity combinations, making the relative order (indices $i < j$) irrelevant.

**Summary:** 
Sum the products of complementary parity pair frequencies: $(0,0) \cdot (1,1) + (0,1) \cdot (1,0)$.  ---