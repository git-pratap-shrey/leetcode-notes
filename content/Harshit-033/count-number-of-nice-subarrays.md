---
title: "Count Number of Nice Subarrays"
slug: count-number-of-nice-subarrays
date: "2026-04-17"
---

# My Solution
~~~cpp
class Solution {
public:
    int subs(vector<int>& nums,int k){
        if (k<0) return 0;
        int right=0;
        int left=0;
        int count=0;
        int ans=0;
        while(right<nums.size()){

            if(nums[right]%2!=0){
                count++;
            }

            while(count>k){
                if(nums[left]%2!=0){
                count--;
                }

                left++;
            }

            ans=ans+(right-left+1);
            right++;

        }
        return ans;
    }

    int numberOfSubarrays(vector<int>& nums, int k) {

        return subs(nums,k)-subs(nums,k-1);
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Two-pointer / Sliding Window.
- **Logic**: The solution uses a helper function `subs` to calculate the number of subarrays containing **at most** $k$ odd numbers. The number of subarrays with **exactly** $k$ odd numbers is then derived using the formula: `atMost(k) - atMost(k - 1)`.
- **Optimality**: Optimal. This is a standard technique to handle "exactly $k$" constraints in sliding window problems.

## Complexity
- **Time Complexity**: $O(n)$. The `subs` function is called twice, and each call processes the array in a single pass where each pointer (`left` and `right`) moves at most $n$ times.
- **Space Complexity**: $O(1)$. No additional data structures are used regardless of input size.

## Efficiency Feedback
- **Runtime**: The runtime is minimal due to the linear scan.
- **Memory**: Memory usage is optimal as it only uses a few integer variables.
- **Potential Optimization**: While the current approach is $O(n)$, the problem could also be solved in a single pass using a hash map or a frequency array to store the prefix sums of odd numbers. However, the sliding window approach used here is generally faster in practice due to lower overhead.

## Code Quality
- **Readability**: Moderate. The indentation is inconsistent (e.g., the `if` block inside the `while` loop), making the structure harder to scan.
- **Structure**: Good. The logic is cleanly separated into a helper function and a main driver.
- **Naming**: Poor. `subs` is too generic; a name like `countAtMostK` would explicitly describe the function's purpose.
- **Concrete Improvements**:
    - Fix indentation for better readability.
    - Rename `subs` to `countAtMostK`.
    - Use `const vector<int>& nums` in the helper function to avoid any potential unnecessary copies (though not an issue here as it is passed by reference).
    - Use `size_t` or `int n = nums.size()` to avoid repeated calls to `.size()` and potential signed/unsigned comparison warnings.

---

# Question Revision
### Revision Report: Count Number of Nice Subarrays

**Pattern:** Sliding Window (Difference of Two Windows)

**Brute Force:** Iterate through all possible subarrays $(i, j)$ and count odd integers in each.
- Time: $O(n^2)$
- Space: $O(1)$

**Optimal Approach:** Use a helper function `atMost(k)` to count subarrays containing $\le k$ odd numbers. The count for exactly $k$ is derived as `atMost(k) - atMost(k - 1)`.
- **Logic:** Expand the right pointer; if odd count exceeds $k$, shrink the left pointer. The number of subarrays ending at `right` is `right - left + 1`.
- **Time:** $O(n)$
- **Space:** $O(1)$

**The 'Aha' Moment:** When a sliding window requires an "exact" constraint, it is often easier to calculate the difference between two "at most" constraints.

**Summary:** Treat odd numbers as 1s and apply the `atMost(k) - atMost(k-1)` subtraction trick to isolate the exact count.

---