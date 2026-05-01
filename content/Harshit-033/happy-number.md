---
title: "Happy Number"
slug: happy-number
date: "2026-04-29"
---

# My Solution
~~~cpp
class Solution {
public:
    bool isHappy(int n) {
        unordered_map<int,int> mp;
        int m,r;
        while(true){
            m=0;
            while(n!=0){
                r=n%10;
                m=m+(r*r);
                n=n/10;
            }
            n=m;
            if(m==1) return true;
            if(mp.find(m)!=mp.end()){
                if(mp[m]==1) return false;
            }
            mp[m]=1;
        }
        return true;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Cycle detection using a Hash Map.
- **Optimality:** Optimal. The problem requires detecting if a sequence enters a loop or reaches 1; tracking seen elements is a standard way to achieve this.

## Complexity
- **Time Complexity:** $O(\log n)$. The number of digits is $\log_{10} n$. The values drop rapidly to a small constant range (e.g., for $n=10^9$, the next value is at most 729), after which the sequence either hits 1 or enters a cycle of constant length.
- **Space Complexity:** $O(\log n)$ or $O(1)$ in practice, as the number of elements stored in the map before a cycle is detected is very small regardless of the input size.

## Efficiency Feedback
- **Data Structure:** Using `unordered_map<int, int>` to store a boolean presence is inefficient. An `unordered_set<int>` would be more semantically correct and slightly more memory-efficient.
- **Redundant Check:** The line `if(mp[m]==1) return false;` inside the `find` block is redundant because any element present in the map was explicitly set to 1.

## Code Quality
- **Readability:** Moderate. The logic is straightforward, but the lack of descriptive variable names makes it harder to follow.
- **Structure:** Moderate. The `while(true)` loop is acceptable here, but the final `return true;` is unreachable code.
- **Naming:** Poor. 
    - `m`: Should be `sumOfSquares` or `nextValue`.
    - `r`: Should be `digit`.
    - `mp`: Should be `seen` or `visited`.
- **Improvements:**
    - Replace `unordered_map` with `unordered_set`.
    - Use a `do-while` loop or a more descriptive loop condition.
    - Use `const` or `auto` where applicable for clarity.

---

# Question Revision
### Happy Number

**Pattern:** Cycle Detection

**Brute Force:** Use a `Set` to store every computed sum. If a sum repeats, the number is trapped in a cycle and is not "happy."

**Optimal Approach:** Use **Floyd's Cycle-Finding Algorithm** (Tortoise and Hare). Initialize two pointers: a `slow` pointer that computes the sum of squares once per step, and a `fast` pointer that computes it twice. If they meet at 1, the number is happy; if they meet at any other value, a cycle exists.
- **Time Complexity:** $O(\log n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The problem describes a sequence that either terminates at 1 or loops infinitely, which is functionally identical to finding a cycle in a linked list.

**Summary:** Use slow and fast pointers to detect if the sequence of squared digits loops or converges to 1.

---