---
title: "Reorder List"
slug: reorder-list
date: "2026-10-02"
---

# My Solution
~~~cpp
class Solution {
public:
    int minEatingSpeed(vector<int>& piles, int h) {
        int l = 0;
        int r = *max_element(piles.begin(), piles.end());


        long long currH;
        while(r - l > 1){
            int mid = (l + r) / 2;
            currH = 0;
            
            for(int pile : piles){
                currH += pile/mid;
                if(pile % mid){
                    currH++;
                }
            }

            // cout<<currH<<" "<<mid<<endl;
            if(currH <= h){
                r = mid;
            }
            else{
                l = mid;
            }
        }

        // cout<<l<<r<<endl;
        return r;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Binary Search on the answer (searching for the minimum eating speed $k$).
- **Optimality**: Optimal. The problem exhibits monotonicity (if K works, K+1 also works), making binary search the most efficient approach.

## Complexity
- **Time Complexity**: $O(N \cdot \log(\max(\text{piles})))$, where $N$ is the number of piles. Each binary search step iterates through the entire list.
- **Space Complexity**: $O(1)$, as it only uses a few primitive variables.

## Efficiency Feedback
- **Division Logic**: The use of `pile/mid` followed by a modulo check `if(pile % mid)` is a manual implementation of ceiling division. This can be replaced with `(pile + mid - 1) / mid` for slightly cleaner assembly.
- **Potential Runtime Error**: If `l` starts at 0 and `r` is 1, `mid` becomes 0. This leads to a **Division by Zero** error at `pile/mid`. `l` should be initialized to 1.

## Code Quality
- **Readability**: Moderate. The logic is straightforward, but the presence of commented-out `cout` statements reduces professionalism.
- **Structure**: Good. The binary search loop and condition logic are correctly implemented for finding the lower bound.
- **Naming**: Poor. `l`, `r`, and `currH` are generic. While common in competitive programming, `low`, `high`, and `totalHours` would be more descriptive.
- **Concrete Improvements**:
    1. **Fix Bug**: Change `int l = 0;` to `int l = 1;` to prevent division by zero.
    2. **Clean up**: Remove commented-out debug prints.
    3. **Optimization**: Use `1LL * pile` or `(pile + mid - 1) / mid` to simplify the hour calculation.
    4. **Typo/Mismatch**: The problem title provided is "Reorder List," but the code implements "Koko Eating Bananas."

---

# Question Revision
# Revision Report: Reorder List

- **Pattern**: Linked List Manipulation (Two Pointers + Reverse + Merge)
- **Brute Force**: Copy the linked list nodes into an array/ArrayList. Use two pointers (start and end) to traverse the array and rebuild the list by manually updating the `.next` pointers of the original nodes.
- **Optimal Approach**:
    1. **Find Middle**: Use a slow and fast pointer to locate the center of the list.
    2. **Reverse Second Half**: Reverse the linked list starting from the middle node to the end.
    3. **Merge**: Interleave nodes from the first half and the reversed second half using two pointers.
    - **Time Complexity**: $O(n)$ — Three linear passes (middle, reverse, merge).
    - **Space Complexity**: $O(1)$ — In-place manipulation without extra data structures.
- **The 'Aha' Moment**: The requirement to weave the list from both ends suggests a need for bidirectional access, which in a singly linked list necessitates reversing the second half.
- **Summary**: Find the middle, reverse the second half, and merge the two lists by interleaving nodes.

---