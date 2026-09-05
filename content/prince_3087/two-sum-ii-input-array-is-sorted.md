---
title: "Two Sum II - Input Array Is Sorted"
slug: two-sum-ii-input-array-is-sorted
date: "2026-08-26"
---

# My Solution
~~~cpp
class Solution {
public:
    string reverseWords(string s) {
        string ans = "";
        string t = "";
        for(int i = s.size()-1 ; i>=0 ; i--){
            if(s[i]!= ' '){
                t= t+s[i];
            }
            else if(!t.empty()){
                reverse(t.begin(),t.end());
                if(!ans.empty()){
                    ans = ans + ' ';
                }
                ans = ans+t;
                t = "";
            }
        }
        if(!t.empty()){
            reverse(t.begin() , t.end());
            if(!ans.empty()){
                ans = ans + ' ';
            }
            ans =ans+t;
        }
        return ans;
        
    }
};
~~~

# Submission Review
## Approach
* **Technique:** Iterative string manipulation.
* **Optimality:** Suboptimal. The logic processes the string backward and performs repeated string concatenations and reversals, which is inefficient compared to a two-pointer approach or splitting the string.

## Complexity
* **Time Complexity:** $O(n^2)$ in the worst case. String concatenation (`ans = ans + t`) and `reverse` inside a loop result in quadratic behavior due to constant reallocation and copying of the `ans` string.
* **Space Complexity:** $O(n)$ to store the resulting string.

## Efficiency Feedback
* **Bottleneck:** The primary bottleneck is the repeated use of the `+` operator on strings. In C++, `string + string` creates a new string object and copies all characters from the operands, making the overall complexity quadratic. 
* **Optimization:** 
    1. Use a `stringstream` to extract words and build the result, or reverse the entire string once and then reverse each individual word in place. 
    2. Avoid repeated string concatenations; use `ans.push_back()` or `ans +=` if the capacity is managed, but ideally, swap elements in place.

## Code Quality
* **Readability:** Moderate. The logic is easy to follow, but the function name `reverseWords` does not match the provided logic (which is more about word extraction and reordering).
* **Structure:** Poor. Note that the class name/function provided does not match the problem description provided ("Two Sum II").
* **Naming:** Poor. The function signature provided (`reverseWords`) is irrelevant to the "Two Sum II" problem mentioned in the prompt.
* **Improvements:** 
    * Use two pointers to reverse words in place to achieve $O(n)$ time and $O(1)$ extra space (if the string is mutable).
    * If using extra space, `std::vector<string>` with `std::reverse` is significantly more idiomatic and performant than manual string building.

---

# Question Revision
### Revision Report: Two Sum II - Input Array Is Sorted

**Pattern:** Two Pointers

**Brute Force:**
Use nested loops to check every possible pair $(i, j)$ until $nums[i] + nums[j] == target$.
*   **Time Complexity:** $O(n^2)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:**
Initialize one pointer at the beginning (`left`) and one at the end (`right`). If the current sum is too small, increment `left` to increase the sum; if too large, decrement `right` to decrease it.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
The requirement that the input array is already **sorted** is the explicit signal that you can discard half of the search space at each step by adjusting pointers.

**Summary:**
When an array is sorted and you need to find a pair, exploit the monotonic property by shrinking the search window from the ends inward.

---