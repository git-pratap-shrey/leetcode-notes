---
title: "Count Indices With Opposite Parity"
slug: count-indices-with-opposite-parity
date: "2026-07-10"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<int> countOppositeParity(vector<int>& nums) {
        int n = nums.size();
        vector<int> answer;
        for(int i=0;i<n;i++){
            if(nums[i] %2 ==0){
                int odd=0;
             for(int j=i+1 ; j<n;j++){
                if(nums[j]%2 !=0) odd++;
             }
             answer.push_back(odd);
            }
            if(nums[i] %2 !=0){
                int even=0;
             for(int j=i+1 ; j<n;j++){
                if(nums[j]%2 ==0) even++;
             }
             answer.push_back(even);
            }
        }
        return answer;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Brute-force nested iteration.
*   **Optimal:** No. The approach performs a linear scan for every element in the array, resulting in unnecessary redundant calculations.

## Complexity
*   **Time Complexity:** $O(n^2)$, where $n$ is the size of the input array. For each element $i$, it traverses all elements $j > i$.
*   **Space Complexity:** $O(1)$ auxiliary space (excluding the output vector).

## Efficiency Feedback
*   **Bottleneck:** The nested `for` loop forces an $O(n^2)$ runtime. This will TLE (Time Limit Exceeded) for large input sizes (typically $n > 10^4$).
*   **Optimization:** This can be solved in $O(n)$ time using a **suffix sum** or **suffix count** array. By pre-calculating the total number of even and odd integers in the array, you can determine the count for each index in $O(1)$ during a single forward pass.

## Code Quality
*   **Readability:** Moderate. The logic is clear, but the structure is verbose.
*   **Structure:** Poor. The use of two separate `if` blocks for even/odd parity is redundant; the inner loop logic can be unified.
*   **Naming:** Good. Variable names like `odd` and `even` are descriptive.
*   **Concrete Improvements:**
    1.  Pre-calculate the total counts of odds and evens.
    2.  As you iterate through the array, maintain a running count of odds and evens encountered so far.
    3.  Calculate the result for each index by subtracting the running count from the total count.
    4.  Initialize the `answer` vector with `answer.resize(n)` to avoid reallocations during `push_back`.

---

# Question Revision
### Revision Report: Count Indices With Opposite Parity

**Pattern:** Iterative Linear Scan / Parity Check

**Brute Force:**
Nested loops comparing every pair of indices $(i, j)$ and checking if `(nums[i] % 2 != nums[j] % 2)` while satisfying the index condition `(i % 2 != j % 2)`.
*   **Complexity:** $O(n^2)$ time, $O(1)$ space.

**Optimal Approach:**
Count the occurrences of indices with even/odd values and even/odd parities. Iterate through the array once to track counts of even-valued numbers at odd indices ($E_{odd}$) and odd-valued numbers at even indices ($O_{even}$), and vice versa. Use the relationship that an index $i$ and index $j$ have opposite parity if $i \pmod 2 \neq j \pmod 2$.
*   **Complexity:** $O(n)$ time, $O(1)$ space.

**The 'Aha' Moment:**
When the problem constraints require comparing specific index-based properties, you can avoid $O(n^2)$ by grouping elements into buckets based on their parity and index type and using simple arithmetic to combine them.

**Summary:**
Whenever you need to count pairs satisfying modular conditions, stop comparing elements and start counting frequencies of each (value parity, index parity) state to solve in linear time.

---