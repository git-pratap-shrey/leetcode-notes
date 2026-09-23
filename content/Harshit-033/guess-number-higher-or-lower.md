---
title: "Guess Number Higher or Lower"
slug: guess-number-higher-or-lower
date: "2026-09-20"
---

# My Solution
~~~cpp
class Solution{
public:
    int b_search(vector<int>&arr,int x){
        int low=0,high=arr.size();
        while(low<high){
            int mid=low+(high-low)/2;
            if(arr[mid]>=x) high=mid;
            else low=mid+1;
        }
        return low;
    }

    vector<int> findClosestElements(vector<int>&arr,int k,int x){
        int ind=b_search(arr,x);
        int i=ind-1,j=ind;
        vector<int>ans;
        while(ans.size()<k){
            if(j>=arr.size()){
                ans.push_back(arr[i--]);
            }
            else if(i<0){
                ans.push_back(arr[j++]);
            }
            else if(abs(arr[i]-x)<=abs(arr[j]-x)){
                ans.push_back(arr[i--]);
            }
            else{
                ans.push_back(arr[j++]);
            }
        }
        sort(ans.begin(),ans.end());
        return ans;

       // OPTIMAL CODE //
       /*
        int low=0,high=arr.size()-k;
        while(low<high){
            int mid=low+(high-low)/2;
            if(x-arr[mid]>arr[mid+k]-x)
                low=mid+1;
            else
                high=mid;
        }
        return vector<int>(arr.begin()+low,arr.begin()+low+k);
        */


    }
};
~~~

# Submission Review
## Approach
- **Technique**: Binary Search followed by a Two-Pointer expansion and final sorting.
- **Optimality**: Suboptimal. While it finds the correct elements, it sorts the result vector at the end, adding unnecessary overhead. The commented-out "Optimal Code" using binary search on the window starting position is the truly optimal approach.

## Complexity
- **Time Complexity**: $O(\log N + k \log k)$, where $N$ is the size of the array. $\log N$ for binary search, $k$ for expansion, and $k \log k$ for sorting the final result.
- **Space Complexity**: $O(k)$ to store the resulting elements.

## Efficiency Feedback
- **Bottleneck**: The `sort(ans.begin(), ans.end())` call is the primary bottleneck. Since the two pointers expand from a center, the elements are collected in a non-monotonic order.
- **Optimization**: Instead of sorting, the code could track the final `low` and `high` indices of the window and return a slice of the original array: `vector<int>(arr.begin() + final_low, arr.begin() + final_high)`. This would reduce complexity to $O(\log N + k)$.

## Code Quality
- **Readability**: Moderate. The logic is straightforward, but the boundary checks inside the `while` loop are verbose.
- **Structure**: Good. The separation of the binary search into a helper function is clean.
- **Naming**: Moderate. `b_search` is generic; `ind` is acceptable but `insertion_point` would be more descriptive.
- **Improvements**:
    - Pass `vector<int>& arr` as `const vector<int>& arr` to avoid unnecessary copying and signal that the input is read-only.
    - Remove the `sort` call by tracking indices.
    - The `b_search` function is essentially a manual implementation of `std::lower_bound`. Using the STL function would reduce code length and potential bugs.

---

# Question Revision
### Revision Report: Guess Number Higher or Lower

**Pattern:** Binary Search

**Brute Force:** 
Iterate sequentially from $1$ to $n$ and call `guess(i)` for each.
- Time: $O(n)$
- Space: $O(1)$

**Optimal Approach:** 
Maintain `low` and `high` boundaries. Calculate `mid` and use the API feedback to discard half of the search space in each iteration.
- **Time Complexity:** $O(\log n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
The input is a sorted range of integers and the feedback provides a directional hint (higher/lower), which is the classic trigger for Binary Search.

**Summary:** Use binary search to halve the search space based on API feedback until the target is found.

---