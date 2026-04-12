---
title: "Next Greater Element I"
slug: next-greater-element-i
date: "2026-04-12"

---
---

# My Solution
~~~cpp
class Solution {
public:
    vector<int> nextGreaterElement(vector<int>& nums1, vector<int>& nums2) {
        unordered_map<int,int> mp;

        for(int i=0;i<nums2.size();i++){
            mp[nums2[i]]=i;
        }

        vector<int> ans;
        int len2=nums2.size();

        for(int i=0;i<nums1.size();i++){
            int ind=mp[nums1[i]];

            if(ind==len2-1){
                ans.push_back(-1);
            }
            else{
                for(int j=ind;j<len2;j++){
                    if(nums2[j]>nums1[i]){
                        ans.push_back(nums2[j]);
                        break;
                    }
                    if(j==len2-1){
                        ans.push_back(-1);
                    }
                }
            }

           
        }

        return ans;
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Brute-force lookup with a hash map.
*   **Optimal:** No. The approach uses a nested loop structure to search for the "next greater" element, whereas this problem can be solved in linear time using a Monotonic Stack.

## Complexity
*   **Time Complexity:** $O(N \cdot M)$, where $N$ is the size of `nums1` and $M$ is the size of `nums2`. In the worst case (e.g., `nums2` is sorted in descending order), the inner loop iterates through the remainder of `nums2` for every element in `nums1`.
*   **Space Complexity:** $O(M)$ to store the indices of `nums2` in the hash map.

## Efficiency Feedback
*   **Bottleneck:** The inner `for` loop performs a linear scan of `nums2` starting from the current element's index. This leads to quadratic behavior.
*   **Optimization:** Use a **Monotonic Decreasing Stack** to precompute the "next greater element" for all elements in `nums2` in $O(M)$ time. Store these results in the hash map (`unordered_map<int, int> nextGreater`) and simply perform $O(1)$ lookups for each element in `nums1`.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Moderate. While clear, the nested loop structure is inefficient for larger input sizes.
*   **Naming:** Good. Variable names like `mp`, `ind`, and `len2` are clear within the context of this implementation.
*   **Concrete Improvements:**
    *   Precompute the next greater elements for `nums2` using a stack:
        ```cpp
        stack<int> s;
        unordered_map<int, int> nextGreater;
        for (int num : nums2) {
            while (!s.empty() && s.top() < num) {
                nextGreater[s.top()] = num;
                s.pop();
            }
            s.push(num);
        }
        ```
    *   Use the map to fill the `ans` vector in $O(N)$ time:
        ```cpp
        for (int num : nums1) {
            ans.push_back(nextGreater.count(num) ? nextGreater[num] : -1);
        }
        ```

---
---


# Question Revision
### Revision Report: Next Greater Element I

**Pattern:** Monotonic Stack

**Brute Force:**
For each element in `nums1`, search for its occurrence in `nums2`, then iterate to the right to find the first element greater than it.
*   **Time Complexity:** $O(n \times m)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:**
Use a **Monotonic Decreasing Stack** combined with a **Hash Map** to precompute the "next greater element" for every item in `nums2`. Traverse `nums2` once; if the current element is larger than the top of the stack, you’ve found the "next greater" for that stack element. Store results in the map for $O(1)$ lookup when processing `nums1`.
*   **Time Complexity:** $O(n + m)$
*   **Space Complexity:** $O(n)$ (where $n$ is the length of `nums2`)

**The 'Aha' Moment:**
Whenever you need to find the "next" element that satisfies a specific condition (greater/smaller) relative to current elements, a monotonic stack is the standard tool to avoid nested loops.

**Summary:**
When you need to find the nearest element that is greater or smaller than the current one, use a monotonic stack to process the sequence in a single pass.

---
