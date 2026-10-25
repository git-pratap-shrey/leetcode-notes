---
title: "Count Days Spent Together"
slug: count-days-spent-together
date: "2026-10-25"
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
- **Technique**: Greedy. The code calculates the potential gain (difference between a "sorted" version of the number and the original) for each element, sorts these gains in descending order, and applies the top $k$ gains.
- **Optimality**: **Incorrect**. The `reverse` function does not actually reverse the digits; it sorts them in descending order. If the problem requires a literal digit reversal (e.g., $123 \to 321$), this logic fails for numbers like $102$ (becomes $210$ instead of $201$). Furthermore, it uses `sort` on digits, which is overkill for a simple reversal.

## Complexity
- **Time Complexity**: $O(N \cdot D \log D + N \log N)$, where $N$ is the number of elements and $D$ is the maximum number of digits in an integer. The $N \log N$ comes from sorting the results vector.
- **Space Complexity**: $O(N + D)$ to store the results vector and the temporary digit vector.

## Efficiency Feedback
- **Bottleneck**: The `reverse` function is highly inefficient. Using a `std::vector` to store digits, sorting them, and then rebuilding the number involves unnecessary heap allocations and overhead.
- **Optimization**: Use simple modulo and multiplication arithmetic to reverse a number in $O(D)$ time without extra space or sorting.

## Code Quality
- **Readability**: Moderate. The logic is easy to follow, but the function name `reverse` is misleading because it performs a digit sort.
- **Structure**: Moderate. The separation of the gain calculation and the summation is clear.
- **Naming**: Poor. 
    - `reverse` does not reverse; it sorts digits.
    - Variables `a`, `b`, `c`, and `z` are non-descriptive.
- **Improvements**:
    - Change `reverse` to a proper digit reversal function or rename it to `sortDigitsDescending`.
    - Replace `vector<long long> z` with a simple loop and integer arithmetic.
    - Use `std::sort` with a lambda or a custom comparator to avoid creating a separate `pair` vector if memory is constrained.

---

# Question Revision
# Revision Report: Count Days Spent Together

- **Pattern:** Interval Intersection / Coordinate Geometry
- **Brute Force:** Iterate through every single day from the earliest start date to the latest end date, checking if each day falls within both date ranges.
- **Optimal Approach:** 
    - Calculate the intersection of the two date ranges: `start = max(start1, start2)` and `end = min(end1, end2)`.
    - Calculate the total overlapping days: `overlapping_days = max(0, end - start + 1)`.
    - Iterate through the overlapping range and subtract days that fall on a weekend (Saturday or Sunday).
    - **Complexity:** 
        - Time: $O(D)$ where $D$ is the number of overlapping days.
        - Space: $O(1)$.
- **The 'Aha' Moment:** When asked to find common occurrences between two ranges, the first step is always to find the intersection using `max(starts)` and `min(ends)`.
- **Summary:** Find the date range intersection and subtract weekends using modulo 7 logic.

---