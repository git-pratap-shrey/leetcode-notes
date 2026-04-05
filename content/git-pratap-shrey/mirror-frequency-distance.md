---
title: "Mirror Frequency Distance"
slug: mirror-frequency-distance

---
---

# My Solution
~~~cpp
class Solution {
public:
    int mirrorFrequency(string s) {
        vector<int> alpha(26);
        vector<int> digit(10);
        
        for(char c : s){
            // cout << c << "->";

            if(c >= 'a' && c <= 'z'){
                // cout<<"char"<<endl;
                alpha[c-'a']++;
            }
            else{
                // cout<<"digit"<<endl;
                digit[c-'0']++;
            }
        }

        int sum = 0;
        
        for(int i = 0; i < 13; i++){
            // cout<<i<<"->"<<26-1-i<<endl;
            sum += abs(alpha[i] - alpha[26-1-i]);
        }

        for(int i = 0; i < 5; i++){
            // cout<<i<<"->"<<10-1-i<<endl;
            sum += abs(digit[i] - digit[10-1-i]);            
        }

        return sum;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Frequency counting and mirrored index comparison.
*   **Optimality:** Optimal. It performs a single pass over the string to populate frequency arrays, followed by a linear scan of the character/digit ranges, which is $O(N)$.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the length of the string.
*   **Space Complexity:** $O(1)$, as the frequency arrays have a fixed size (26 + 10 = 36).

## Efficiency Feedback
*   **Efficiency:** The runtime is as efficient as possible for this logic. The overhead is negligible.
*   **Optimizations:**
    *   The commented-out `cout` statements should be removed for production or competitive submissions to avoid unnecessary I/O overhead.
    *   The loop bounds (13 for alpha, 5 for digit) are correct for folding the arrays in half.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. Separation between frequency counting and calculation is clean.
*   **Naming:** Good. `alpha` and `digit` clearly represent the frequency storage structures.
*   **Concrete Improvements:**
    *   **Dead Code:** Remove all commented-out `cout` lines to improve cleanliness.
    *   **Const correctness:** Mark the input `string s` as `const string& s` to avoid unnecessary copying if the string is large.
    *   **Safety:** While the problem implies only lowercase letters and digits, adding a default case or an assertion inside the `if/else` block would improve robustness against unexpected input characters.

```cpp
// Suggested refactor for signature
int mirrorFrequency(const string& s) { 
    // ... logic
}
```

---
---


# Question Revision
### Revision Report: Mirror Frequency Distance

**Pattern:** Two Pointers / Sliding Window

**Brute Force:** 
For every element, iterate through the entire array to find its mirror frequency (the nearest occurrence of the same value in either direction), calculating the minimum distance.
*   **Time:** $O(n^2)$
*   **Space:** $O(1)$

**Optimal Approach:** 
Use a Hash Map to store the *last seen index* of each element. As you iterate through the array, calculate the distance between the current index and the last seen index of the same value. Update the global minimum distance, then update the Hash Map with the current index.
*   **Time:** $O(n)$ (Single pass)
*   **Space:** $O(k)$ (Where $k$ is the number of unique elements)

**The 'Aha' Moment:** 
The requirement to compare an element's current position with its *previous* occurrence is a classic signal to use a Hash Map to "remember" history while traversing, effectively turning a nested loop into a lookup.

**Summary:** 
When a problem asks for the distance between duplicate elements, store the last index of each value in a map to achieve $O(1)$ lookup time instead of re-scanning the array.

---
