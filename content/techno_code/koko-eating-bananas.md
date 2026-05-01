---
title: "Koko Eating Bananas"
slug: koko-eating-bananas
date: "2026-04-25"
---

# My Solution
~~~cpp
class Solution {
public:
    long long calculateHours(vector<int>& piles, int speed) {
        long long totalHours = 0;
        
        for (int i = 0; i < piles.size(); i++) {
            totalHours += (piles[i] + speed - 1) / speed;
        }
        
        return totalHours;
    }

    int minEatingSpeed(vector<int>& piles, int h) {
        int low = 1;
        int high = *max_element(piles.begin(), piles.end());
        
        while (low <= high) {
            int mid = low + (high - low) / 2;
            
            long long hours = calculateHours(piles, mid);
            
            if (hours <= h) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        
        return low;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Binary Search on the answer space.
- **Optimality**: Optimal. The relationship between eating speed and total hours is monotonic, making binary search the most efficient approach to find the minimum threshold.

## Complexity
- **Time Complexity**: $O(N \log M)$, where $N$ is the number of piles and $M$ is the maximum number of bananas in a single pile.
- **Space Complexity**: $O(1)$, as it uses a constant amount of extra space.

## Efficiency Feedback
- **Ceiling Division**: The use of `(piles[i] + speed - 1) / speed` is an efficient way to perform ceiling division without invoking floating-point functions like `ceil()`.
- **Overflow Prevention**: 
    - `totalHours` is correctly typed as `long long` to prevent overflow when summing hours across many piles.
    - `mid` is calculated using `low + (high - low) / 2` to prevent potential integer overflow.
- **Range**: The search range $[1, \max(\text{piles})]$ is the tightest possible range for the answer.

## Code Quality
- **Readability**: Good. The logic is clear and follows standard binary search patterns.
- **Structure**: Good. The helper function `calculateHours` separates the cost calculation from the search logic.
- **Naming**: Good. Variable names (`low`, `high`, `mid`, `totalHours`) are intuitive.
- **Concrete Improvements**: 
    - Pass the vector by `const` reference in `calculateHours` (i.e., `const vector<int>& piles`) to indicate that the function does not modify the input data.

---

# Question Revision
### Koko Eating Bananas

**Pattern:** Binary Search on Answer

**Brute Force:**
Iterate through every possible eating speed $k$ starting from $1$ up to the maximum pile size. For each $k$, calculate the total hours needed; the first $k$ that allows Koko to finish within $h$ hours is the minimum.

**Optimal Approach:**
Since the ability to finish bananas is monotonic (if speed $k$ works, $k+1$ also works), binary search the range $[1, \max(piles)]$. For a candidate speed `mid`, calculate total hours $\sum \lceil pile / mid \rceil$. If total hours $\le h$, `mid` is a potential answer, and we search the left half for a smaller valid speed; otherwise, search the right half.

*   **Time Complexity:** $O(n \log(\max(piles)))$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
The search space for the speed $k$ is sorted and monotonic, allowing me to binary search for the minimum value that satisfies a condition rather than searching for a specific element in an array.

**Summary:** 
Apply binary search on the range of possible speeds to find the minimum $k$ that satisfies the time constraint $h$.

---