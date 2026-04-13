---
title: "Remove K Digits"
slug: remove-k-digits
date: "2026-04-13"

---
---

# My Solution
~~~cpp
class Solution {
public:
    string removeKdigits(string num, int k) {
        if(k==num.size()) return "0";
        vector<char> s;
        vector<char> ans;
        for(int i=0;i<num.size();i++){
            if(s.empty()){
                if(num[i]-'0'==0) continue;
                s.push_back(num[i]);
                continue;
            }

            while(!s.empty() && s.back()-'0'>num[i]-'0' && k>0){
                s.pop_back();
                k--;
            }
            s.push_back(num[i]);
        }

        int j=0;
        while(!s.empty() && j<s.size() && s[j]-'0'==0 ){
            j++;
        }
        if(s.empty()) return "0";
        for(int i=j;i<s.size()-k;i++){
            ans.push_back(s[i]);
        }
        if(ans.empty()) return "0";
        return string(ans.begin(),ans.end());
            
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Greedy approach using a monotonic stack.
*   **Optimal:** No. While the monotonic stack approach is the standard optimal strategy, the implementation logic for handling `k` and the final string construction is flawed and unnecessarily complex.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of digits in the string. Each digit is pushed and popped at most once.
*   **Space Complexity:** $O(N)$ to store the stack.

## Efficiency Feedback
*   **Bottleneck:** The logic attempts to handle leading zeros and remaining `k` values post-loop using manual indexing and temporary vectors, which adds overhead.
*   **Redundancy:** Creating a separate `ans` vector and copying the string is inefficient compared to returning the stack contents directly as a string.

## Code Quality
*   **Readability:** Poor. The logic post-loop (`for(int i=j;i<s.size()-k;i++)`) is confusing and handles corner cases (like remaining `k` after the loop) inconsistently.
*   **Structure:** Poor. The separation between the stack-processing logic and the final formatting is disjointed. The `j` index skip logic is fragile.
*   **Naming:** Moderate. `s` and `ans` are generic; `stack` would be more descriptive for `s`.

### Concrete Improvements
1.  **Simplify Post-Processing:** If $k > 0$ after the loop, simply remove the last $k$ elements from the stack (as they are in non-decreasing order).
2.  **Use `std::string` as Stack:** A `std::string` can act as a stack, avoiding the need for a `vector<char>` and the eventual conversion to `string`.
3.  **Refactor Leading Zeros:** Instead of searching for `j`, simply find the first non-zero character or remove leading zeros after building the string.
4.  **Edge Case Fix:** The condition `if(num[i]-'0'==0) continue;` at the start of the loop is incorrect; it prevents the algorithm from correctly forming numbers like "10200" with `k=1`.

**Refactored Logic Sketch:**
```cpp
string removeKdigits(string num, int k) {
    string res = "";
    for (char c : num) {
        while (k > 0 && !res.empty() && res.back() > c) {
            res.pop_back();
            k--;
        }
        res.push_back(c);
    }
    res.resize(res.size() - k); // Remove remaining k
    
    // Remove leading zeros
    size_t first = res.find_first_not_of('0');
    if (first == string::npos) return "0";
    return res.substr(first);
}
```

---
---


# Question Revision
### Revision Report: Remove K Digits

**Pattern:** Monotonic Stack (Greedy)

**Brute Force:** Generate all possible combinations of the string by removing $k$ digits and find the minimum value. This requires $O(C(n, k))$ complexity, which is computationally infeasible for large inputs.

**Optimal Approach:** Use a monotonic increasing stack to maintain the smallest lexicographical sequence. Iterate through the digits; while the current digit is smaller than the stack top and we still have removals remaining, pop from the stack.
*   **Time Complexity:** $O(n)$, as each digit is pushed and popped at most once.
*   **Space Complexity:** $O(n)$ to store the digits in the stack.

**The 'Aha' Moment:** The requirement to maintain the smallest lexicographical order by removing elements is a classic signal that keeping a "non-decreasing" history of elements will yield the global minimum.

**Summary:** Whenever you need to maintain the smallest lexicographical sequence by removing characters, use a monotonic increasing stack to greedily discard larger elements that appear before smaller ones.

---
