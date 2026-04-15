---
title: "Can Place Flowers"
slug: can-place-flowers
date: "2026-04-14"
---

# My Solution
~~~c
bool canPlaceFlowers(int* flowerbed, int flowerbedSize, int n) {
    if(n==0) return true;

    for(int i=0;i<flowerbedSize; i++){
        if(flowerbed[i]==0){
            
            int left=(i==0)?0:flowerbed[i-1];
            int right=(i==flowerbedSize-1)?0:flowerbed[i+1];

            if(left==0 && right==0){
                flowerbed[i]=1;
                n--;
                if(n==0) return true;
            }
        }
    }

    return false;
}
~~~

# Submission Review
## Approach
- **Technique:** Greedy. The algorithm iterates through the array and plants a flower at the first available spot that satisfies the non-adjacency constraint.
- **Optimality:** Optimal. Planting a flower at the earliest possible valid position minimizes the constraints imposed on subsequent positions.

## Complexity
- **Time Complexity:** $O(N)$, where $N$ is `flowerbedSize`. The array is traversed at most once.
- **Space Complexity:** $O(1)$. The solution uses a constant amount of extra space and modifies the input array in place.

## Efficiency Feedback
- **Performance:** The runtime is optimal.
- **Optimization:** The early return `if(n==0) return true;` both at the start and immediately after decrementing `n` prevents unnecessary iterations once the requirement is met.

## Code Quality
- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Good. The use of ternary operators for boundary checks handles edge cases (start and end of the array) concisely.
- **Naming:** Good. Variable names (`left`, `right`) clearly describe their purpose.
- **Improvements:** 
    - The input array `flowerbed` is modified. If the original data must be preserved, a copy would be required, though in a competitive programming context, this is typically acceptable.
    - The logic `(i==0)?0:flowerbed[i-1]` is clean, though some might prefer explicit boundary checks for clarity; however, this implementation is idiomatic for C.

---

# Question Revision
### Can Place Flowers

**Pattern:** Greedy / Simulation

**Brute Force:** Try every possible combination of flower placements using recursion/backtracking to see if any configuration satisfies the $n$ requirement. 
- **Complexity:** $O(2^m)$ where $m$ is the number of empty plots.

**Optimal Approach:** Iterate through the array once. For each plot, check if it is empty (`0`) and if its left and right neighbors are also empty (or are the boundaries of the array). If both conditions are met, "plant" a flower by setting the plot to `1` and decrement the required count $n$. Stop early if $n$ reaches zero.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** Since planting a flower only affects its immediate neighbors, making the first available greedy choice never prevents a better placement later.

**Summary:** Greedily plant a flower wherever the current plot and both adjacent plots are empty.

---