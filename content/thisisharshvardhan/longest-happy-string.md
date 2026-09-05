---
title: "Longest Happy String"
slug: longest-happy-string
date: "2026-08-18"
---

# My Solution
~~~cpp
class Solution {
public:
    string longestDiverseString(int a, int b, int c) {
        int num[3]={a,b,c};
        char alpha[3]={'a','b','c'};
        string ans="";
        while(1){
            int temp=-1;
            for(int i=0;i<3;i++){
                if(num[i]==0) continue; 

                if(ans.size()>=2 && ans[ans.size()-1]==alpha[i] && ans[ans.size()-2]==alpha[i]) continue;
                if(temp==-1||num[i]>num[temp]) temp=i;
                }
                if(temp==-1) break;
                ans+=alpha[temp];
                num[temp]--;
            }

        return ans;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Greedy.
*   **Optimality:** Optimal. It consistently picks the character with the highest remaining count that doesn't violate the "no three consecutive identical characters" rule.

## Complexity
*   **Time Complexity:** $O(a + b + c)$, where $N = a + b + c$ is the total length of the string. The loop runs exactly $N$ times, and each iteration performs a constant number of checks (3).
*   **Space Complexity:** $O(a + b + c)$ to store the resulting string.

## Efficiency Feedback
*   **Runtime:** The runtime is excellent. However, there is a minor inefficiency: the inner loop is always `O(1)`, but in languages like C++, `ans.size()` and string concatenation can involve reallocations. 
*   **Optimization:** You can reserve memory for the string beforehand: `ans.reserve(a + b + c);`.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. Using arrays `num` and `alpha` avoids redundant `if-else` chains.
*   **Naming:** Moderate. `num`, `alpha`, and `temp` are slightly generic; `counts`, `chars`, and `bestIdx` would be more descriptive.
*   **Improvements:**
    *   **Style:** Using `std::vector` or `std::pair` arrays can make the code more idiomatic.
    *   **Safety:** The `while(1)` with a break condition is fine, but checking the total sum of counts is a more explicit loop termination condition.
    *   **Logic:** The check `if(temp==-1) break;` is correct, ensuring the loop exits when no valid character can be picked. 

### Suggested Refinement:
```cpp
string longestDiverseString(int a, int b, int c) {
    struct CharCount { int count; char ch; };
    CharCount arr[] = {{a, 'a'}, {b, 'b'}, {c, 'c'}};
    string ans = "";
    ans.reserve(a + b + c);

    while (true) {
        // Sort to ensure we always try to pick the largest available
        sort(begin(arr), end(arr), [](auto& x, auto& y) { return x.count > y.count; });
        
        bool added = false;
        for (auto& item : arr) {
            if (item.count > 0 && !(ans.size() >= 2 && ans.back() == item.ch && ans[ans.size()-2] == item.ch)) {
                ans += item.ch;
                item.count--;
                added = true;
                break;
            }
        }
        if (!added) break;
    }
    return ans;
}
```
*Note: While the provided greedy approach is optimal, sorting inside the loop makes it $O(N \log 3)$, which simplifies logic but is technically slightly slower than your original $O(N)$ approach.*

---

# Question Revision
### Revision Report: Longest Happy String

**Pattern:** Greedy (Priority Queue)

**Brute Force:** Generate all possible permutations of characters and validate the "no three consecutive" rule. This is factorial $O(n!)$ and infeasible for large inputs.

**Optimal Approach:**
Always pick the character with the highest remaining count that doesn't violate the constraint (i.e., doesn't create a sequence of three). If the most frequent character is already used twice consecutively, skip to the second most frequent character. Use a Max-Heap to dynamically track the counts of 'a', 'b', and 'c'.
*   **Time Complexity:** $O(n \cdot \log k)$, where $n$ is the total length and $k=3$ (the alphabet size). Since $k$ is constant, this is effectively $O(n)$.
*   **Space Complexity:** $O(1)$, as the heap stores at most 3 elements.

**The 'Aha' Moment:**
When a problem requires local optimal choices (pick the most frequent) while respecting a global constraint (avoiding $aaa$), a greedy strategy using a priority queue to always favor the "most restricted" resource is the key.

**Summary:**
Prioritize the most frequent remaining character unless it violates the consecutive constraint, in which case fallback to the next most frequent available option.

---