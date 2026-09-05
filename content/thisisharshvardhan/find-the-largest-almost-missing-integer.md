---
title: "Find the Largest Almost Missing Integer"
slug: find-the-largest-almost-missing-integer
date: "2026-08-18"
---

# My Solution
~~~cpp
class Solution {
public:
    int largestInteger(vector<int>& nums, int k) {
        map<int,int>mp;
        int left=0;
        int right=k;
        while(right<=nums.size()){
            set<int> st;
            for(int i=left;i<right;i++){
                st.insert(nums[i]);
            }
            for(auto x: st) {
                mp[x]++;
            }
            left++;
            right++;
        }
        int ans=-1;

        for(auto x:mp) {
            if(x.second == 1) {
                ans=max(ans,x.first);
            }
        }

        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Brute-force sliding window simulation. The code iterates through every possible subsegment of length $k$, stores elements in a `set` to handle duplicates within each window, and tracks the global frequency of each element across all windows using a `map`.
- **Optimality:** **Suboptimal.** While the logic correctly identifies elements appearing in exactly one window, the use of nested loops and frequent allocations (`set` per window) is unnecessary.

## Complexity
- **Time Complexity:** $O(N \cdot K \log K)$, where $N$ is the size of `nums`. Creating a `set` for every window of size $K$ takes $O(K \log K)$ per window, repeated $N-K+1$ times.
- **Space Complexity:** $O(N)$, as the `map` stores counts for all unique elements present in the input array.

## Efficiency Feedback
- **Bottleneck:** The construction of a new `std::set` for every sliding window is highly inefficient. 
- **Optimization:** You do not need to track all windows. If a number appears in more than one window, it is not "almost missing." The problem boils down to checking which numbers appear in only one specific window configuration. More efficiently, an element $x$ can only be a candidate if it appears in a window of size $k$ and **not** anywhere else in the array, or if it appears in all windows (which is not possible for $k < N$). Specifically, if an element appears in the array $m$ times, and that element is present in $x$ windows, we check if $x=1$. A frequency array or hash map counting total occurrences in the array is sufficient.

## Code Quality
- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Moderate. While clear, the nested loop structure (`while` + `for` loop + `set`) is bulky.
- **Naming:** Good. Variable names (`left`, `right`, `mp`, `st`) follow standard conventions for competitive programming.
- **Concrete Improvements:**
    - Replace `std::set` with a boolean check or a simple frequency count to eliminate $O(K \log K)$ overhead.
    - If $k=1$, the answer is simply the maximum element that appears exactly once in the array.
    - If $k=N$, the answer is the maximum element in the array.
    - For general $k$, count the total frequency of each number in the array. A number can be part of an "almost missing" set only if its total occurrences in the array align with the constraints of the sliding window.

---

# Question Revision
### Revision Report: Find the Largest Almost Missing Integer

**Pattern:** Frequency Counting / Hash Map

**Brute Force:**
Iterate through all possible subarrays of length $k$, track the frequency of every integer appearing across all subarrays, and identify those that appear exactly once. 
*   **Time:** $O(n \cdot k)$
*   **Space:** $O(n)$

**Optimal Approach:**
1. Since we need integers that appear in exactly one subarray of length $k$, observe that any element appearing in multiple subarrays is ineligible.
2. An element at index $i$ is only in "exactly one subarray" if it is at the extreme ends of the array (prefix or suffix) and the subarray size is $k$.
3. Count the frequency of all numbers in the array. 
4. Check if the entire array (length $n$) appears as a subarray; if yes, the count of its elements is $n-k+1$.
5. Filter numbers with a frequency of exactly $k$ (if the subarray is at the start/end) or $1$ (if the array is a specific length).
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**The 'Aha' Moment:**
The constraint of "almost missing" (appearing in only one window) implies that the frequency of the target integer must be exactly $k$ if it’s anchored at the boundaries, or $1$ if it’s unique to the entire sequence.

**Summary:**
When a value must exist in only one window of length $k$, focus on frequency counting to identify elements whose occurrences are restricted by the window boundaries.

---