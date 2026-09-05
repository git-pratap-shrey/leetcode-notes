---
title: "Smallest Missing Multiple of K"
slug: smallest-missing-multiple-of-k
date: "2026-08-25"
---

# My Solution
~~~cpp
class Solution {
public:
    int missingMultiple(vector<int>& nums, int k) {
        unordered_set<int>s(nums.begin(),nums.end());
        int ans=k;
        while(s.count(ans)){
            ans+=k;
        }
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Hashing (using `unordered_set`) and linear probing of multiples.
- **Optimality**: Optimal. The algorithm checks multiples of $k$ sequentially. Since there are $N$ elements in the input, the smallest missing multiple must be found within the first $N+1$ multiples of $k$.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of elements in `nums`. Building the set takes $O(N)$ and the `while` loop runs at most $N+1$ times with $O(1)$ average lookup.
- **Space Complexity**: $O(N)$ to store the elements in the `unordered_set`.

## Efficiency Feedback
- **Runtime**: Very efficient due to $O(1)$ average time complexity of `unordered_set::count`.
- **Memory**: Memory usage is proportional to the input size. For extremely tight memory constraints, sorting the array and using binary search could reduce auxiliary space to $O(1)$ (depending on the sort implementation) at the cost of $O(N \log N)$ time.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. Minimal and functional.
- **Naming**: Moderate. `s` is a generic name for the set; `num_set` or `presence_map` would be more descriptive. `ans` is acceptable but `current_multiple` would be more precise.
- **Improvements**: No logic changes needed. To avoid worst-case $O(N)$ collisions in `unordered_set` (though rare in most competitive programming platforms unless specifically targeted), a custom hash or `std::set` (at $O(N \log N)$) could be used, but is unnecessary here.

---

# Question Revision
### Smallest Missing Multiple of K

**Pattern:** Hashing / Set Lookup

**Brute Force:** 
Iterate through multiples $k, 2k, 3k, \dots$ and perform a linear scan of the array for each multiple until one is not found.
- **Time:** $O(N \cdot M)$ where $M$ is the index of the first missing multiple.
- **Space:** $O(1)$.

**Optimal Approach:** 
1. Filter the input array and insert only the multiples of $k$ into a `HashSet`.
2. Starting from $current = k$, increment $current$ by $k$ in a loop.
3. The first $current$ not present in the `HashSet` is the result.
- **Time:** $O(N)$ to populate the set + $O(M)$ to find the gap $\approx O(N)$.
- **Space:** $O(N)$ to store the set.

**The 'Aha' Moment:** 
Searching for the "smallest missing" value in a sequence indicates that $O(1)$ membership checks via a Hash Set are required to prevent the time complexity from becoming quadratic.

**Summary:** 
Store multiples of $k$ in a set and increment by $k$ from the base case until a gap is encountered.

---