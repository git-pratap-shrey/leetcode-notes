---
title: "Rearrange Array by Removing Distinct Values"
slug: rearrange-array-by-removing-distinct-values
date: "2026-09-27"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<int> rearrangeArray(vector<int>& nums) {
        int arr[101]={};
        int n=nums.size();
        int mx=0;
        int maxf=0;
        for(int i=0;i<n;i++){
            arr[nums[i]]+=1;
            mx=max(mx,nums[i]);
            maxf=max(maxf,arr[i]);
        }
        vector<int> ans;

        bool flag=true;
        for(int j=0;j<n;j++){
            for(int i=0;i<=mx;i++){
                if(arr[i]!=0){
                    ans.push_back(i);
                    arr[i]-=1;
                }
            }
        }
        return ans;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Frequency Array (Counting Sort variant). The code counts occurrences of each number and then repeatedly iterates through the frequency array to pick one of each available distinct element per round.
- **Optimality**: Suboptimal. While it achieves a sorted-like distribution, the nested loop structure is inefficient for large input ranges.

## Complexity
- **Time Complexity**: $O(n \cdot \text{max\_val})$, where $n$ is the size of the input and $\text{max\_val}$ is the maximum value in `nums`. In the worst case, if $n=100$ and $\text{max\_val}=100$, it performs $10,000$ iterations.
- **Space Complexity**: $O(1)$ (fixed-size array of 101) or $O(\text{max\_val})$ depending on constraints.
- **Bottleneck**: The nested loop `for(int j=0; j<n; j++)` containing `for(int i=0; i<=mx; i++)` iterates through the entire range of possible values $n$ times, regardless of how many distinct elements remain.

## Efficiency Feedback
- **Runtime**: High due to the $O(n \cdot \text{max\_val})$ loop. If the input contains only one distinct value, the inner loop still runs $\text{max\_val}$ times for every element of $n$.
- **Memory**: Low, as it uses a small fixed-size array.
- **Optimization**: Use a `std::map` or a sorted list of distinct elements to iterate only over values that actually exist in the input, rather than the entire range from $0$ to `mx`.

## Code Quality
- **Readability**: Moderate. The logic is simple, but there is a critical bug in the frequency counting loop: `maxf=max(maxf,arr[i]);` uses the loop index `i` instead of the value `nums[i]`.
- **Structure**: Poor. 
    - The fixed-size array `arr[101]` makes the code fragile; it will cause a Buffer Overflow/Segment Fault if `nums` contains any value $\ge 101$.
    - The variable `flag` is declared but never used.
- **Naming**: Poor. `mx` and `maxf` are cryptic; `arr` is too generic.
- **Concrete Improvements**:
    1. Replace `int arr[101]` with `std::unordered_map<int, int>` or `std::vector<int>` sized dynamically to avoid crashes.
    2. Fix the `maxf` logic (though `maxf` is currently unused in the rest of the code).
    3. Remove the unused `flag` variable.
    4. Replace the nested loop with a queue of distinct elements to reduce time complexity to $O(n \log n)$ or $O(n)$.

---

# Question Revision
# Revision Report: Rearrange Array by Removing Distinct Values

- **Pattern:** Two Pointers (Read/Write)
- **Brute Force:** Create a temporary list or hash set to store the elements to keep, then copy them back into the original array. 
- **Optimal Approach:** 
    - Use a `write` pointer to track the position of the next unique/valid element and a `read` pointer to traverse the array.
    - Iterate through the array; whenever a value meets the condition (e.g., not a distinct value or a specific target), move it to the `write` index and increment the `write` pointer.
    - **Time Complexity:** $O(n)$
    - **Space Complexity:** $O(1)$ (In-place modification)
- **The 'Aha' Moment:** The requirement to modify the array "in-place" combined with a linear filter condition strongly signals the Two-Pointer read/write pattern.
- **Summary:** Use a slow pointer to overwrite the array in-place while a fast pointer scans for values that satisfy the retention criteria.

---