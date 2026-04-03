---
title: "Valid Palindrome"
slug: valid-palindrome

---
---

# My Solution
~~~cpp
class Solution {
public:
 bool isalpha(char ch){
            if((ch>='0'&&ch<='9')||(tolower(ch)>='a'&&tolower(ch)<='z')){
                return true;
            }
            return false;
        }
    bool isPalindrome(string s) {
      
        int start = 0;
        int end = s.size()-1;
        while(start<end){
            if(isalpha(s[start])==false){
                start++;
                continue;
            }
            if(isalpha(s[end])==false){
                end --;
                continue;
            }
            if(tolower(s[start])!=tolower(s[end])){
                return false;
            }
            start++;
            end--;
        }
        return true;

    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Two-pointer approach.
*   **Optimality:** Optimal. It performs a single pass over the string in-place without requiring extra memory.

## Complexity
*   **Time Complexity:** $O(n)$, where $n$ is the length of the string, as each character is visited at most once.
*   **Space Complexity:** $O(1)$, as it uses a constant amount of extra space.

## Efficiency Feedback
*   The logic is highly efficient.
*   **Optimization:** The custom `isalpha` function re-checks the character conditions multiple times (`tolower` is called twice). Since `std::isalnum` is already available in `<cctype>`, using the built-in function or simplifying the logic to check `tolower(ch)` only once would be marginally cleaner and more idiomatic.

## Code Quality
*   **Readability:** Good. The two-pointer logic is standard and easy to follow.
*   **Structure:** Moderate. The `isalpha` method is a member function but logically acts as a utility; it should ideally be marked `private` or `static`. 
*   **Naming:** Moderate. The function name `isalpha` is misleading because the implementation actually checks for alphanumeric characters (digits + letters). A more accurate name would be `isAlphanumeric`.
*   **Concrete Improvements:**
    *   Rename `isalpha` to `isAlphanumeric`.
    *   Include `<cctype>` and use `std::isalnum` instead of manual range comparisons.
    *   Change the custom `isalpha` method to `private`.
    *   Use `const` for the input string reference: `const string& s`.

```cpp
// Suggested refactor for clarity
bool isAlphanumeric(char ch) {
    return std::isalnum(static_cast<unsigned char>(ch));
}
```

---
---


# Question Revision
### Revision Report: Valid Palindrome

**Pattern:** Two Pointers

**Brute Force:** Create a new string by filtering non-alphanumeric characters, reverse it, and compare it to the original.
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**Optimal Approach:** Use two pointers starting at both ends of the string. Move them inward, skipping non-alphanumeric characters and comparing characters at each step. If a mismatch occurs, return `false`.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:** The requirement to compare characters symmetrically from both ends toward the middle is the classic signal for a two-pointer approach.

**Summary:** When asked to verify properties of a sequence based on symmetry or boundaries, always look to pointers at the start and end to achieve constant space complexity.

---
