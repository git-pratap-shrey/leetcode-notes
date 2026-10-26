---
title: "Subtree of Another Tree"
slug: subtree-of-another-tree
date: "2026-10-23"
---

# My Solution
~~~cpp
class Solution {
public:
    long long reverse(long long a){
        vector<long long >z;
        while(a!=0){
            int r=a%10;
            z.push_back(r);
            a=a/10;
        }
        sort(z.begin(),z.end());
        long long b=0;
        for(int i=z.size()-1;i>=0;i--){
            b=b*10+z[i];
        }
        return b;
    }
    long long maximizeSum(vector<int>& nums, int k) {
        vector<pair<long long ,long long>>res;
        for(int i=0;i<nums.size();i++){
            long long a=reverse(nums[i]);
            long long c=a-nums[i];
            res.push_back({c,nums[i]});
        }
        sort(res.begin(),res.end());
        long long sum=0;
        for(int i=nums.size()-1;i>=0;i--){
            if(k>0&& res[i].first>0){
                sum+=(res[i].first+res[i].second);
                k--;
            }
            else{
                sum+=res[i].second;
            }
        }
        return sum;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Greedy. The code calculates the potential gain (difference between a "reversed/sorted" version of the number and the original) for each element, sorts these gains, and picks the top $k$ positive gains.
- **Correctness**: **Incorrect**. 
    1. The problem requested is "Subtree of Another Tree," but the provided code implements a solution for a completely different problem (likely "Maximize Sum After K Operations").
    2. The `reverse` function does not actually reverse the number; it sorts the digits in descending order.
    3. The final loop `for(int i=nums.size()-1;i>=0;i--)` contains a bug: `i` is an `int`, but it is decremented. However, if `nums.size()` is 0, it will underflow or behave unexpectedly. More importantly, the loop logic expects `res` to be sorted in ascending order, but the indexing and logic are inconsistent.

## Complexity
- **Time Complexity**: $O(N \cdot D \log D + N \log N)$, where $N$ is the number of elements and $D$ is the maximum number of digits in an integer. The $N \log N$ comes from sorting the `res` vector.
- **Space Complexity**: $O(N)$ to store the `res` vector.

## Efficiency Feedback
- **Bottleneck**: The use of `std::vector` and `std::sort` inside the `reverse` function is highly inefficient for digit manipulation. Using a fixed-size array or a frequency map for digits (0-9) would be faster.
- **Logic Error**: The loop `for(int i=nums.size()-1;i>=0;i--)` combined with `res[i]` is only correct if the vector is sorted ascending and we iterate backwards. However, if $k$ is large, the `else` block still adds `res[i].second` regardless of whether $k$ is exhausted, which is functionally correct for the sum, but the logic is convoluted.

## Code Quality
- **Readability**: Poor. The function name `reverse` is a misnomer because it sorts digits.
- **Structure**: Moderate. The separation of the digit manipulation and the greedy selection is clear.
- **Naming**: Poor. Variable names `a`, `b`, `c`, `z` are non-descriptive.
- **Improvements**:
    - Rename `reverse` to `sortDigitsDescending`.
    - Replace the vector in `reverse` with a simple digit count array.
    - Fix the mismatch between the problem title ("Subtree of Another Tree") and the actual implementation.

---

# Question Revision
# Revision Report: Subtree of Another Tree

- **Pattern:** Tree Recursion / Nested DFS
- **Brute Force:** For every single node in the main tree, perform a full structural comparison with the subtree. If any node matches the root of the subtree and the resulting traversal is identical, return true.
- **Optimal Approach:** 
    - **Logic:** Use a helper function `isSameTree(s, t)` to check if two trees are identical by recursively verifying that current nodes match and their left/right children also match. In the main `isSubtree(root, subRoot)` function, recursively traverse the main tree; at each node, call `isSameTree`.
    - **Time Complexity:** $O(M \times N)$ where $M$ and $N$ are the number of nodes in the two trees (in the worst case, we check every node of $M$ against $N$).
    - **Space Complexity:** $O(\max(H_M, H_N))$ for the recursion stack.
- **The 'Aha' Moment:** When a problem asks if one structure exists *inside* another, it typically requires a nested search: one traversal to find a potential starting point and another to verify the match.
- **Summary:** Perform a DFS on the main tree and trigger a secondary "identical tree" check at every node.

---