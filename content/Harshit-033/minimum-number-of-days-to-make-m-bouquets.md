---
title: "Minimum Number of Days to Make m Bouquets"
slug: minimum-number-of-days-to-make-m-bouquets

---
---

# My Solution
~~~c
long long int comp(int* bloomDay, int bloomDaySize, int m, int k,long long int mid ){
    long long int chance=0;
    int coun=0;
    for(int i=0;i<bloomDaySize;i++){
        if(mid-bloomDay[i]>=0){
            coun++;
        }
        else{
            coun=0;
        }

        if(coun==k){
            chance++;
            coun=0;
        }
    }
    return chance;

}


int minDays(int* bloomDay, int bloomDaySize, int m, int k) {
    long long prod=(long long)m*k;
    if(prod>bloomDaySize){
        return -1;
    }


    long long int min=0;
    long long int max=0;
    for(int i=0;i<bloomDaySize;i++){
        max=(max<bloomDay[i])?bloomDay[i]:max;
        min=(min>bloomDay[i])?bloomDay[i]:min;
    }
    long long int count;
    long long int ans=max;
    long long int mid;
    while(min<=max){
        mid=(min+max)/2;
        count=comp(bloomDay,bloomDaySize,m,k,mid);

        if(count>=m){
            max=mid-1;
            ans=mid;
        }
        else
            {
                min=mid+1;
            }

    }

    return (int)ans;
}
~~~

# Submission Review
## Approach
*   **Technique:** Binary Search on the answer space (range of days).
*   **Optimality:** Optimal. The search space is monotonic; if it's possible to make $m$ bouquets in $d$ days, it is also possible for any $d' > d$. The greedy check function (`comp`) correctly counts non-overlapping segments of length $k$.

## Complexity
*   **Time Complexity:** $O(N \log D)$, where $N$ is `bloomDaySize` and $D$ is the difference between the maximum and minimum values in `bloomDay`.
*   **Space Complexity:** $O(1)$, as only a few scalar variables are used.

## Efficiency Feedback
*   **Efficiency:** The implementation is highly efficient. The `comp` function traverses the array once per binary search step, which is standard for this problem.
*   **Optimization:** The `min` variable is initialized to `0`. It could be initialized to the minimum value in `bloomDay` to tighten the search range slightly, though this is negligible compared to the $O(N \log D)$ performance.

## Code Quality
*   **Readability:** Moderate. The code is compact, but variable names like `coun` and `chance` are non-descriptive.
*   **Structure:** Good. The logic is clearly separated into a helper function and a main controller.
*   **Naming:** Poor.
    *   `coun` should be `consecutive_blooms` or `flowers_gathered`.
    *   `chance` should be `bouquets_made`.
    *   `comp` should be renamed to something descriptive like `can_make_bouquets`.
*   **Concrete Improvements:**
    *   **Correctness Bug:** In `minDays`, `min` is initialized to `0`, but `max` is initialized by scanning the array. If the array contains only large values, the `min` initialization is fine, but it is clearer to initialize `min` to the smallest element in the array.
    *   **Logic:** The `minDays` check `if(prod > bloomDaySize)` is a correct early-exit condition (the "Pigeonhole Principle").
    *   **Consistency:** Use `int` for `mid` and loop indices instead of `long long` where values are guaranteed to stay within `int` range, to avoid unnecessary casting.

---
---


# Question Revision
### Revision Report: Minimum Number of Days to Make m Bouquets

**Pattern:** Binary Search on Answer (Monotonic Predicate)

**Brute Force:**
Iterate through every possible day (from the minimum to the maximum value in `bloomDay`). For each day, simulate the bouquet creation process by checking contiguous blocks of bloomed flowers.
*   **Time Complexity:** $O(D \cdot n)$, where $D$ is the range of days.
*   **Space Complexity:** $O(1)$.

**Optimal Approach:**
Since the feasibility function is monotonic (if it’s possible to make $m$ bouquets on day $X$, it is guaranteed to be possible on day $X+1$), perform a binary search on the range of days. For each midpoint, use a greedy linear scan to count the maximum possible bouquets created within that time limit.
*   **Time Complexity:** $O(n \log(\max(bloomDay)))$.
*   **Space Complexity:** $O(1)$.

**The 'Aha' Moment:**
The problem asks for the *minimum* value that satisfies a *boolean condition* (can we make $m$ bouquets?), which is the hallmark of a binary search on the solution space.

**Summary:**
When asked to find the minimum value that makes a constraint true, binary search the result range and use a greedy check function to validate feasibility.

---
