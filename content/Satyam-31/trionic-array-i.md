---
title: "Trionic Array I"
slug: trionic-array-i
date: "2026-02-26"

---
---

# My Solution
~~~cpp
class Solution {
public:
    bool isTrionic(vector<int>& nums) {
        
        int n = nums.size();
        if(n < 4) return false;

        int p = -1, q = -1;

        
        for(int i = 0; i < n-1; i++){
            if(nums[i] >= nums[i+1]){   
                p = i;
                break;
            }
        }

        if(p <= 0 || p >= n-2) return false;

        for(int i = p; i < n-1; i++){
            if(nums[i] <= nums[i+1]){   
                q = i;
                break;
            }
        }

        if(q <= p || q >= n-1) return false;

         for(int i = q; i < n-1; i++){
            if(nums[i] >= nums[i+1]) return false;
        }

        return true;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Greedy traversal/linear scan.
*   **Optimal:** Yes. The logic checks for a "mountain" or "trionic" shape (strictly increasing, then strictly decreasing) by identifying the peak ($p$) and the valley ($q$) transitions. It effectively validates a three-segment structure in $O(n)$ time.

## Complexity
*   **Time Complexity:** $O(n)$, where $n$ is the number of elements. The algorithm performs a constant number of passes over the array.
*   **Space Complexity:** $O(1)$, as it only uses a few integer pointers regardless of input size.

## Efficiency Feedback
*   **Runtime:** The implementation is highly efficient. It exits early (short-circuiting) as soon as a condition is violated.
*   **Optimizations:** The three separate loops can be collapsed into a single pass state machine to slightly improve instruction cache locality, though this would not change the asymptotic complexity.

## Code Quality
*   **Readability:** Good. The logic is sequential and easy to follow.
*   **Structure:** Good. Early exit conditions handle edge cases effectively.
*   **Naming:** Moderate. `p` and `q` are mathematically standard but contextually vague; `peakIndex` and `valleyIndex` would be more descriptive.
*   **Concrete Improvements:**
    *   **Input Validation:** The check `p <= 0` is redundant if the problem guarantees $n \ge 4$ and the loop starts at $i=0$ (if $p=0$, the condition `nums[0] >= nums[1]` is met immediately, which is valid for a peak). 
    *   **Loop bounds:** The logic `q >= n-1` is technically correct, but checking `i` vs `n-1` repeatedly is standard. 
    *   **Logic robustness:** Ensure the definition of "Trionic" explicitly allows or disallows flat plateaus (the current code treats `nums[i] == nums[i+1]` as a failure to meet the strictly increasing/decreasing criteria). If plateaus are allowed, the comparison operators need adjustment.

---
---


# Question Revision
### Revision Report: Trionic Array I

**Pattern:** Prefix Sums / Sliding Window

**Brute Force:** Calculate the sum for every possible subarray by iterating with nested loops, resulting in a complexity of $O(n^2)$.

**Optimal Approach:** Precompute a prefix sum array (or use a running sum variable) to allow $O(1)$ range queries. By mapping cumulative sums to their indices in a hash map, you can identify subarrays that satisfy the Trionic condition in a single pass.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(n)$

**The 'Aha' Moment:** The requirement to find a subarray sum meeting a specific condition is a classic signal to use prefix sums to transform a range-based search into a point-based lookup.

**Summary:** Whenever a problem asks for subarray sums or counts, prioritize prefix sums or sliding windows to reduce nested iterations into linear time.

---
