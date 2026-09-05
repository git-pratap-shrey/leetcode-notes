---
title: "K Closest Points to Origin"
slug: k-closest-points-to-origin
date: "2026-08-21"
---

# My Solution
~~~cpp
class Solution {
public:
    bool can_append(string& s, char x, int y){
        int l = s.size();
        if(y == 0){
            return false;
        }
        if(l < 2){
            return true;
        }
        if(s[l-1] == s[l-2]){
            if(s[l-1] == x){
                return false;
            }
        }
        return true;
    }
    pair<int, int> find_largest(int a, int b, int c){
        if(a >= b){
            if(a >= c){
                if(c > b){
                    return {0, 2};
                }
                return {0, 1};
            }
            else{
                return {2, 0};
            }
        }
        else{
            if(b >= c){
                if(c > a){
                    return {1, 2};
                }
                return {1, 0};
            }
            else{
                return {2, 1};
            }
        }
    }
    string longestDiverseString(int a, int b, int c) {
        string answer;
        while(a || b || c){
            pair<int, int> p = find_largest(a, b, c);

            if(p.first == 0){
                if(can_append(answer, 'a', a)){
                    answer.push_back('a');
                    a--;
                    continue;
                }
            }
            if(p.first == 1){
                if(can_append(answer, 'b', b)){
                    answer.push_back('b');
                    b--;
                    continue;
                }
            }
            if(p.first == 2){
                if(can_append(answer, 'c', c)){
                    answer.push_back('c');
                    c--;
                    continue;
                }
            }

            if(p.second == 0){
                if(can_append(answer, 'a', a)){
                    answer.push_back('a');
                    a--;
                    continue;
                }
            }
            if(p.second == 1){
                if(can_append(answer, 'b', b)){
                    answer.push_back('b');
                    b--;
                    continue;
                }
            }
            if(p.second == 2){
                if(can_append(answer, 'c', c)){
                    answer.push_back('c');
                    c--;
                    continue;
                }
            }

            char third = 3 - (p.first + p.second);

            if(third == 0){
                if(can_append(answer, 'a', a)){
                    answer.push_back('a');
                    a--;
                    continue;
                }
            }
            if(third == 1){
                if(can_append(answer, 'b', b)){
                    answer.push_back('b');
                    b--;
                    continue;
                }
            }
            if(third == 2){
                if(can_append(answer, 'c', c)){
                    answer.push_back('c');
                    c--;
                    continue;
                }
            }

            break;
        }

        return answer;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Greedy approach with priority-based selection.
*   **Optimal:** Yes, the greedy strategy of picking the most frequent available character (that doesn't violate the constraint) is correct for this problem.
*   **Note:** The provided code does **not** solve the "K Closest Points to Origin" problem; it solves "Longest Diverse String" (LeetCode 1405).

## Complexity
*   **Time Complexity:** $O(a + b + c)$, where $a, b, c$ are the counts of characters. In each iteration, one character is added to the result string until no more valid characters can be added.
*   **Space Complexity:** $O(a + b + c)$ to store the resulting string.

## Efficiency Feedback
*   **Bottleneck:** The manual branching logic inside the `while` loop is highly redundant. You perform multiple nested `if` checks that essentially replicate a selection based on priority.
*   **Optimization:** Using a `std::priority_queue` or a sorted array of structures `(count, char)` would eliminate the massive `if-else` blocks and make the code cleaner and less error-prone.

## Code Quality
*   **Readability:** Poor. The `find_largest` function and the subsequent repetitive `if` blocks make the logic difficult to follow.
*   **Structure:** Poor. The core logic is cluttered by manual mapping of indices to characters ('a', 'b', 'c').
*   **Naming:** Moderate. `find_largest` is misleading; it returns indices based on frequency, but the logic inside is unnecessarily complex.
*   **Concrete Improvements:**
    *   **Data Structures:** Store the character counts in a container (e.g., `vector<pair<int, char>>`) and sort it at the start of each iteration.
    *   **Constraint Checking:** Simplify `can_append` to only check the last two characters of the `answer` string instead of the entire string.
    *   **Logic Simplification:** Use an array to map indices to characters: `char chars[] = {'a', 'b', 'c'};`. This removes the need for multiple hardcoded `if` statements. 
    *   **Refactor:** The entire `while` loop logic can be condensed into a loop that always attempts to pick the most frequent character first, then the next most frequent if the first is invalid.

---

# Question Revision
### Revision Report: K Closest Points to Origin

**Pattern:** Heap (Priority Queue) / QuickSelect

**Brute Force:** 
Calculate the Euclidean distance ($x^2 + y^2$) for every point, store them in a list, sort the entire list by distance, and return the first $k$ elements.
*   **Time:** $O(n \log n)$
*   **Space:** $O(n)$

**Optimal Approach:**
*   **Max-Heap:** Maintain a max-heap of size $k$. Iterate through all $n$ points; if the current distance is smaller than the heap's maximum, pop the max and push the current.
    *   **Time:** $O(n \log k)$
    *   **Space:** $O(k)$
*   **QuickSelect (Hoare's Selection):** Use the partitioning logic from QuickSort to place the $k$-th smallest distance at the $k$-th index. 
    *   **Time:** $O(n)$ average, $O(n^2)$ worst case.
    *   **Space:** $O(1)$ (excluding input storage).

**The 'Aha' Moment:**
When the problem asks for the "$k$ smallest" or "$k$ largest" elements from an unsorted collection rather than a fully sorted result, you should immediately pivot to a Heap or QuickSelect.

**Summary:**
Whenever you need the top-$k$ elements of an unsorted set, use a Max-Heap to keep the best $k$ candidates or QuickSelect to achieve linear time on average.

---