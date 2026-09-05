---
title: "Last Stone Weight"
slug: last-stone-weight
date: "2026-08-21"
---

# My Solution
~~~cpp
class Solution {
public:
    double minPrice(vector<int>& prices, vector<int>& discounts) {
        sort(prices.begin(), prices.end(), greater<int>());
        sort(discounts.begin(), discounts.end(), greater<int>());

        long long final_price = 0;
        int i;
        for(i = 0; i < prices.size() && i < discounts.size(); i++){
            final_price += (long long)(100 - discounts[i]) * (long long)prices[i];
            // cout<<(100 - discounts[i])<<"->"<<prices[i]<<"->"<<final_price<<endl;
        }

        while(i < prices.size()){
            final_price += prices[i] * 100;
            // cout<<final_price<<endl;
            i++;
        }

        double answer = (double)final_price / 100;
        return answer;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Greedy.
- **Optimality:** Optimal. Pairing the largest prices with the largest discounts (percentage-wise) minimizes the total cost. This is a classic application of the rearrangement inequality.

## Complexity
- **Time Complexity:** $O(N \log N + M \log M)$, where $N$ is the number of prices and $M$ is the number of discounts, due to the sorting step. The subsequent linear pass is $O(\max(N, M))$.
- **Space Complexity:** $O(1)$ (ignoring the internal space used by the sorting algorithm).

## Efficiency Feedback
- **Runtime:** Very efficient. The solution avoids redundant calculations.
- **Type Casting:** The use of `long long` for `final_price` is appropriate to prevent integer overflow before the final division. 
- **Recommendation:** If the input vectors are extremely large, `std::sort` is appropriate; however, if $N$ and $M$ are small and fixed, a priority queue or custom sorting could be used, but the current approach is already near-optimal for general cases.

## Code Quality
- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Good. The loop separation for applied discounts versus remaining items is clean.
- **Naming:** Moderate. `minPrice` is descriptive, but the parameter names `prices` and `discounts` imply they represent the full dataset. The logic assumes `discounts` are percentages (0-100), which is implied by the `(100 - discounts[i])` calculation.
- **Concrete Improvements:**
    - **Input Validation:** The code assumes `discounts[i]` is between 0 and 100. Adding an `assert` or check would make it more robust.
    - **Loop Consolidation:** You could simplify the logic by padding the shorter vector with zeros (or an appropriate neutral value) to avoid two separate loops, though the current approach is perfectly acceptable for competitive programming.
    - **Variable Naming:** Rename `i` to `idx` or `count` for better clarity. 
    - **Modern C++:** Use `std::accumulate` or ranges (if using C++20) to compute the final sum more idiomatically.

---

# Question Revision
### Revision Report: Last Stone Weight

**Pattern:** Max-Heap (Priority Queue)

**Brute Force:** 
Sort the array after every smash operation. 
*   **Time:** $O(n^2 \log n)$ 
*   **Space:** $O(n)$ or $O(1)$ depending on the sorting implementation.

**Optimal Approach:** 
Use a Max-Heap to consistently extract the two largest elements in $O(\log n)$ time. After smashing, push the difference back into the heap. Repeat until one or zero stones remain.
*   **Time:** $O(n \log n)$ 
*   **Space:** $O(n)$

**The 'Aha' Moment:**
When a problem requires repeatedly accessing and updating the extreme values (maximum or minimum) of a dynamic dataset, a heap is the most efficient structure to maintain order without full re-sorting.

**Summary:**
Whenever you need to repeatedly perform "extract top two and re-insert result," reach for a Max-Heap to transform $O(n)$ sorting into $O(\log n)$ maintenance.

---