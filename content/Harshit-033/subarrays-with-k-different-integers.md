---
title: "Subarrays with K Different Integers"
slug: subarrays-with-k-different-integers
date: "2026-04-17"
---

# My Solution
~~~cpp
class Solution {
public:
    int subnum(vector<int>& nums, int k){
        if (k<0) return 0;

        int left=0;
        int right=0;
        int count=0;
        int ans=0;
        unordered_map<int,int> mp;
        while(right<nums.size()){
            if(mp.find(nums[right])!=mp.end() ){
                if(mp[nums[right]]==0){
                    count++;
                    mp[nums[right]]+=1;
                }
                else{
                     mp[nums[right]]+=1;

                }              
                
            }
            else{
                count++;
                mp[nums[right]]=1;
            }

            while(count>k){
                mp[nums[left]]-=1;
                if(mp[nums[left]]==0) count--;
                left++;
            }
            ans=ans+(right-left+1);
            right++;


        }
        return ans;

    }

    int subarraysWithKDistinct(vector<int>& nums, int k) {

        return subnum(nums,k)-subnum(nums,k-1);
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Sliding Window (Two Pointers). The solution uses the "at most $K$" strategy: it calculates the number of subarrays with at most $k$ distinct integers and subtracts the number of subarrays with at most $k-1$ distinct integers to find the number of subarrays with exactly $k$.
- **Optimality**: Optimal. This is the standard efficient approach for this problem.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the size of the input array. Each pointer (`left` and `right`) traverses the array at most twice (once for each call to `subnum`).
- **Space Complexity**: $O(D)$, where $D$ is the number of distinct integers in the array, stored in the `unordered_map`.

## Efficiency Feedback
- **Bottleneck**: The use of `std::unordered_map` introduces overhead due to hashing. Since the range of values in `nums` is typically known in competitive programming (e.g., up to $N$), a fixed-size frequency array `int freq[N+1]` would be significantly faster.
- **Redundant Logic**: The `if(mp.find(nums[right])!=mp.end())` block is unnecessarily verbose. The same logic can be achieved simply by incrementing the map value and checking if it was 0.

## Code Quality
- **Readability**: Moderate. The logic in `subnum` is cluttered with redundant `if-else` branches.
- **Structure**: Good. The helper function decomposition makes the "exactly $K$" logic clear.
- **Naming**: Poor. `subnum` is vague; a name like `atMostK` would be more descriptive.
- **Concrete Improvements**:
    - Simplify the `count` update logic:
      ```cpp
      if (mp[nums[right]] == 0) count++;
      mp[nums[right]]++;
      ```
    - Replace `unordered_map` with a `vector<int>` or array if the value range is known.
    - Remove the `if (k < 0) return 0;` check if the problem constraints guarantee $k \ge 1$, though it is safe to keep.

---

# Question Revision
### Subarrays with K Different Integers

**Pattern:** Sliding Window (Two Pointers)

**Brute Force:** 
Iterate through all possible subarrays using nested loops and use a hash set to count distinct integers. 
- **Complexity:** $O(n^2)$ time, $O(n)$ space.

**Optimal Approach:** 
The condition "exactly $K$" is not monotonic, making a standard sliding window difficult. Instead, solve for "at most $K$" and subtract "at most $K-1$".
1. Create a helper function `atMost(k)`:
    - Expand `right` pointer, tracking element frequencies in a map.
    - While `map.size() > k`, shrink `left` pointer and update frequencies.
    - Add `right - left + 1` to the total (this counts all subarrays ending at `right` that have $\le k$ distinct elements).
2. Result = `atMost(K) - atMost(K - 1)`.

- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(k)$

**The 'Aha' Moment:** 
"Exactly $K$" is difficult to track with a sliding window, but "At Most $K$" is monotonic, allowing the use of the subtraction property: $Exact(K) = AtMost(K) - AtMost(K-1)$.

**Summary:** 
Convert an "exactly K" constraint into the difference between two "at most K" sliding window problems.

---