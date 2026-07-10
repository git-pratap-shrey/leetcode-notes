---
title: "Maximum Valid Pair Sum"
slug: maximum-valid-pair-sum
date: "2026-07-04"

---

# My Solution
~~~
class
 Solution {
public:
    int maxValidPairSum(vector<int>& nums, int k) {
        int n=nums.size();
        vector<int>s(n);
        s[n-1]=nums[n-1];
        for(int i=n-2;i>=0;i--){
            s[i]=max(s[i+1],nums[i]);
        }
        int ans=INT_MIN;
        for(int i=0;i+k<n;i++){
            ans=max(ans,nums[i]+s[i+k]);
        }
        return ans;
    }
};
~~~

# Submission Review

## Approach

- **Technique**: Suffix Maximum Precomputation.
- **Optimality**: Optimal. The algorithm ensures every potential pair $(i, j)$ where $j \ge i + k$ is considered by pairing each $nums[i]$ with the largest available element in the valid range $[i+k, n-1]$.

## Complexity

- **Time Complexity**: $O(n)$ — Two linear passes over the input array.
- **Space Complexity**: $O(n)$ — Used to store the suffix maximum array `s`.

## Efficiency Feedback

- **Memory Optimization**: The space complexity can be reduced to $O(1)$ by iterating backwards from $n-1$ to $0$, maintaining a running maximum of the elements encountered so far, and calculating the pair sum once the index distance $\ge k$ is reached.

## Code Quality

- **Readability**: Moderate. The logic is simple, but the lack of descriptive variable names makes it less intuitive.
- **Structure**: Good. The separation of precomputation and result calculation is clear.
- **Naming**: Poor. 
    - `s` should be `suffixMax`.
    - `ans` is acceptable, but `maxSum` would be more precise.
    - `n` is standard for size.
- **Concrete Improvements**:
    - Use `std::max_element` or a single backward pass to eliminate the extra vector.
    - Use `long long` for `ans` if the problem constraints allow sums to exceed `INT_MAX` (though based on the provided snippet, `int` is used).

---

# Question Revision

#

## Maximum Valid Pair Sum

**Pattern:** Modular Arithmetic / Hash Map

**Brute Force:**
Iterate through every possible pair $(a, b)$ from `nums1` and `nums2`, checking if $(a + b) \mod k == 0$ and tracking the maximum sum.
- **Time:** $O(n \cdot m)$
- **Space:** $O(1)$

**Optimal Approach:**
1. Create two arrays/maps of size $k$ to store the maximum element encountered for each remainder $\pmod k$ for both `nums1` and `nums2`.
2. For each remainder $r$ present in the first map, calculate the required complement remainder: $comp = (k - r) \mod k$.
3. If the complement exists in the second map, update the global maximum sum using $\text{max\_val1}[r] + \text{max\_val2}[comp]$.
- **Time:** $O(n + m + k)$
- **Space:** $O(k)$

**The 'Aha' Moment:**
Divisibility constraints on a sum imply that only the remainders of the individual elements matter, allowing us to reduce the search space from all elements to just $k$ possible remainders.

**Summary:**
Store the maximum value for each remainder $\pmod k$ and pair complements to find the largest divisible sum.

---
