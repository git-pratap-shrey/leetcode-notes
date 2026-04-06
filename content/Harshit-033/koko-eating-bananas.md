---
title: "Koko Eating Bananas"
slug: koko-eating-bananas
date: "2026-04-03"

---
---

# My Solution
~~~c
long long int comp(int* piles, int pilesSize, long long int mid){
    long long int count=0;
    for(int i=0;i<pilesSize;i++){
        if(piles[i]%mid==0){
            count=count+(piles[i]/mid);
        }
        else{
            count=count+(piles[i]/mid)+1;
        }
    }
    return count;
}

int minEatingSpeed(int* piles, int pilesSize, int h) {
    

    int max=0;
    for(int i=0;i<pilesSize;i++){
        max=(piles[i]>max)?piles[i]:max;
    }
    long long int low=1;
    long long int high=max;
    long long int ans;
    long long int mid;
    long long int time=high;
    while(low<=high){
        mid=(low+high)/2;
        ans=comp(piles,pilesSize,mid);
        
        if(ans<=h){
            high=mid-1;
            time=mid;
            
        }
        else{

            low=mid+1;
        }


    }
    return (int)time;

  
    
}
~~~

# Submission Review
## Approach
* **Technique:** Binary Search on the Answer.
* **Optimality:** Optimal. The search space is monotonic (faster speed results in fewer hours), and binary search is the standard approach for this problem.

## Complexity
* **Time Complexity:** $O(N \log M)$, where $N$ is the number of piles and $M$ is the maximum value in `piles`. 
* **Space Complexity:** $O(1)$, as it uses a constant amount of extra space.

## Efficiency Feedback
* **Efficiency:** The runtime is efficient.
* **Minor Optimization:** The calculation `(piles[i] + mid - 1) / mid` is a common arithmetic trick to replace the `if-else` block in `comp`, which can reduce branching and slightly improve performance on some compilers.
* **Variable Usage:** The variable `time` is initialized to `high` but is correctly updated during the search; however, initializing it to `max` is slightly redundant given the binary search logic.

## Code Quality
* **Readability:** Good. The logic is straightforward and easy to follow.
* **Structure:** Good. The helper function `comp` effectively modularizes the logic.
* **Naming:** Moderate. `comp` is somewhat ambiguous; `calculateHours` or `getRequiredHours` would be more descriptive.
* **Concrete Improvements:**
    * **Integer Overflow:** While `long long` is used for `count`, the `piles` array contains `int` elements. The inputs are generally within constraints, but be mindful of potential overflows if `mid` is very small and `piles[i]` is large (not an issue here since `mid` starts at 1).
    * **Redundancy:** The `time` variable is a good way to track the best answer found so far, but you can also simply return `low` after the `while` loop finishes, as `low` will converge to the minimum feasible speed.
    * **Formatting:** Minor style point—the code is a bit inconsistent with whitespace (e.g., unnecessary blank lines).

```c
// Optimized helper function
long long int getRequiredHours(int* piles, int pilesSize, int mid) {
    long long int count = 0;
    for (int i = 0; i < pilesSize; i++) {
        count += (piles[i] + mid - 1) / mid;
    }
    return count;
}
```

---
---


# Question Revision
### Revision Report: Koko Eating Bananas

**Pattern:** Binary Search on Answer Space

**Brute Force:** 
Iterate through every possible eating speed $k$ (from 1 to `max(piles)`) and calculate the total hours needed for each until finding the smallest $k$ where total hours $\leq H$. 
*   **Complexity:** $O(n \times m)$ where $n$ is the number of piles and $m$ is the maximum pile size.

**Optimal Approach:** 
Since the time taken to eat bananas is monotonically decreasing as the eating speed $k$ increases, perform a binary search on the range $[1, \text{max(piles)}]$. For each midpoint $k$, calculate the total hours needed using `ceil(pile / k)` for all piles. 
*   **Time Complexity:** $O(n \log m)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
When the problem asks for the "minimum $k$" such that a condition is met and the feasibility of $k$ follows a monotonic trend (if it works for $k$, it works for all speeds $>k$), the search space is inherently ordered for binary search.

**Summary:** 
If you can verify a candidate value in linear time and the solution set is monotonic, binary search over the result range rather than the input array.

---
