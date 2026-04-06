---
title: "Capacity To Ship Packages Within D Days"
slug: capacity-to-ship-packages-within-d-days
date: "2026-04-04"

---
---

# My Solution
~~~c
int comp(int* weights, int weightsSize,int mid){
    int count=1;
    int temp=mid;
    for(int i=0;i<weightsSize;i++){
        

        if(temp>=weights[i]){
            temp=temp-weights[i];

        }
        else {
            temp=mid;
            count++;
            temp=temp-weights[i];
        }


    }

    return count;
}



int shipWithinDays(int* weights, int weightsSize, int days) {

    int high=0;
    int low=0;
    for(int i=0;i<weightsSize;i++){
        high=high+weights[i];
        low=(low<weights[i])?weights[i]:low;
    }

    
    int mid;
    int day;
    int ans=high;
    while(low<=high){
        mid=(low+high)/2;
        day=comp(weights,weightsSize,mid);

        if(day<=days){
            ans=mid;
            high=mid-1;

        }
        else{
            low=mid+1;
        }
    }

    return ans;


    
}
~~~

# Submission Review
## Approach
- **Technique:** Binary Search on the answer space.
- **Optimality:** Optimal. The search space is bounded by the maximum weight (`low`) and the sum of all weights (`high`), which is the standard approach for this problem.

## Complexity
- **Time Complexity:** $O(N \log(\sum \text{weights}))$, where $N$ is the number of weights. The `comp` function iterates through the array once ($O(N)$), and the binary search runs $\log(\sum \text{weights})$ times.
- **Space Complexity:** $O(1)$, as it uses a constant amount of extra space.

## Efficiency Feedback
- **Runtime:** The logic is efficient. Using `low` as the maximum element in `weights` rather than 0 correctly reduces the search space.
- **Optimization:** The code performs one loop over `weights` initially to find `high` and `low`. This is good. No significant bottlenecks exist.

## Code Quality
- **Readability:** Moderate. The `comp` function could be named more descriptively (e.g., `canShipWithCapacity`).
- **Structure:** Good. The logic is clean and separates the feasibility check from the search loop.
- **Naming:** Moderate. `comp` and `temp` are somewhat generic. `temp` acts as `current_capacity`, and `mid` acts as `ship_capacity`.
- **Concrete Improvements:**
    - **Variable Naming:** Rename `comp` to `getDaysRequired`.
    - **Logic safety:** While `low + high` does not overflow for typical competitive programming constraints, using `low + (high - low) / 2` is a safer habit to prevent integer overflow for extremely large values.
    - **Formatting:** Remove the extra whitespace/blank lines inside the `comp` loop for consistency.
    - **Logic Simplification:** In `comp`, the `temp` variable is reset to `mid` when a package doesn't fit. This is correct, but the logic could be slightly tighter:
      ```c
      if (temp < weights[i]) {
          count++;
          temp = mid;
      }
      temp -= weights[i];
      ``` 
      This eliminates the redundant `temp = temp - weights[i]` line that currently appears in both branches of your `if-else`.

---
---


# Question Revision
### Revision Report: Capacity To Ship Packages Within D Days

**Pattern:** Binary Search on Answer Space

**Brute Force:** 
Iterate through every possible capacity starting from the maximum weight of a single package up to the sum of all package weights, simulating the shipping process for each. 
*   **Time Complexity:** $O(n \times \sum w_i)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:** 
Since the time required to ship packages is monotonically decreasing as capacity increases, we define the search space $[max(weights), sum(weights)]$. We perform binary search on this range, using a greedy helper function to verify if a capacity $C$ can ship all packages within $D$ days.
*   **Time Complexity:** $O(n \log(\sum w_i))$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
Whenever a problem asks for the *minimum* value of a maximum constraint (or vice-versa) and the feasibility of a value is monotonic, you are looking at a Binary Search on Answer space.

**Summary:** 
When the result range is known and checking if a specific value is "feasible" is faster than calculating it directly, perform binary search on the result space rather than the input array.

---
