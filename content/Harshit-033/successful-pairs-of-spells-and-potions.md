---
title: "Successful Pairs of Spells and Potions"
slug: successful-pairs-of-spells-and-potions
date: "2026-04-10"

---
---

# My Solution
~~~c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int compare(const void *a, const void *b) {
    return (*(int*)a - *(int*)b);   // ascending order
}

int* successfulPairs(int* spells, int spellsSize, int* potions, int potionsSize, long long success, int* returnSize) {

   qsort(potions, potionsSize, sizeof(int), compare);

   int* arr=(int*)malloc(sizeof(int)*spellsSize);
   long long res;
    int count=0;

    
    long long mid;
    
   for(int i=0;i<spellsSize;i++){
        count=0;
        long long low=0;
        long long high=potionsSize-1;

        while(low<=high){
            mid=(low+high)/2;
            res=(long long)spells[i]*potions[mid];

            if(res>=success){
                count=potionsSize-mid;
                high=mid-1;
            }
            else{
                low=mid+1;
            }
        }
        arr[i]=count;
        
   }
   *returnSize=spellsSize;
   return arr;
    
}
~~~

# Submission Review
## Approach
*   **Technique:** Binary Search on a sorted array.
*   **Optimality:** Optimal. Sorting the potions allows for binary search on each spell, which is the standard approach for this problem.

## Complexity
*   **Time Complexity:** $O(P \log P + S \log P)$, where $P$ is `potionsSize` and $S$ is `spellsSize`. Sorting takes $O(P \log P)$ and the loop performs $S$ binary searches of $O(\log P)$.
*   **Space Complexity:** $O(S)$ for the output array (excluding input storage and sort overhead).

## Efficiency Feedback
*   The logic is efficient. Using `(long long)` casting prevents integer overflow when calculating `spells[i] * potions[mid]`, which is critical for correctness.
*   Memory usage is minimal and optimal.
*   **Minor Optimization:** `mid = low + (high - low) / 2` is safer against overflow than `(low + high) / 2`, though not strictly necessary given the constraints on `potionsSize`.

## Code Quality
*   **Readability:** Good. The logic flow is clear and standard.
*   **Structure:** Good. The `compare` function is implemented correctly for `qsort`.
*   **Naming:** Moderate. `arr` is generic; `result` or `pairs` would be more descriptive. `res` is slightly ambiguous.
*   **Concrete Improvements:**
    *   **Integer Overflow:** The current `compare` function `(*(int*)a - *(int*)b)` is susceptible to integer overflow if the array contains both very large positive and very large negative integers. While unlikely for "potions," a safer implementation is:
        ```c
        int compare(const void *a, const void *b) {
            int arg1 = *(const int*)a;
            int arg2 = *(const int*)b;
            if (arg1 < arg2) return -1;
            if (arg1 > arg2) return 1;
            return 0;
        }
        ```
    *   **Unused variables:** The variable `count` is initialized outside the loop, which is fine, but it is reset inside. The declaration can be moved into the scope where it is used.

---
---


# Question Revision
### Revision Report: Successful Pairs of Spells and Potions

**Pattern:** Binary Search (on a sorted array)

**Brute Force:**
Iterate through every spell and every potion to check if `spell * potion >= success`.
*   **Time Complexity:** $O(n \times m)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:**
1. Sort the `potions` array.
2. For each `spell`, calculate the minimum required potion value: `min_potion = ceil(success / spell)`.
3. Perform a Binary Search (specifically `bisect_left`) on the sorted `potions` array to find the first index where the value is $\ge$ `min_potion`.
4. The number of successful potions is `len(potions) - index`.
*   **Time Complexity:** $O((n+m) \log m)$ where $n$ is the number of spells and $m$ is the number of potions.
*   **Space Complexity:** $O(1)$ (ignoring space used for sorting).

**The 'Aha' Moment:**
Whenever you need to count how many elements in a set satisfy a specific threshold relative to a target value, sorting the set allows you to replace a linear scan with a binary search.

**Summary:**
When asked to find the number of elements meeting a condition in a static collection, sort the collection and use binary search to locate the boundary of the threshold.

---
