---
title: "Add Two Numbers II"
slug: add-two-numbers-ii
date: "2026-10-03"
---

# My Solution
~~~cpp
class Solution {
public:
    int countRotations(string s, int k) {
        int n=s.size();
        int c=0;
        for(int i=0;i<n;i++){
            if(s[i]==s[(i+1)%n]){
                c++;
            }
        }
        if(k==c-1){
            return c;
        }
        else if(k==c){
            return n-c;
        }
        else{
            return 0;
        }
    }
};
~~~

# Submission Review
## Approach
- **Technique**: The code implements a custom counting logic based on adjacent character equality in a string.
- **Correctness**: **Incorrect**. The provided code does not solve the problem "Add Two Numbers II" (which requires adding two numbers represented by linked lists). Instead, it implements a logic unrelated to the problem statement, likely intended for a different problem entirely.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the length of the string $s$.
- **Space Complexity**: $O(1)$, as no extra space proportional to input size is used.

## Efficiency Feedback
- While the logic is $O(n)$, it is functionally useless as it does not address the required problem (adding two numbers).

## Code Quality
- **Readability**: Poor. The logic is arbitrary and does not correspond to the problem title.
- **Structure**: Moderate. The function structure is standard, but the logic within is nonsensical for the given task.
- **Naming**: Poor. Variable names `c` and `s` are overly generic.
- **Improvements**: 
    - The entire solution needs to be rewritten to implement the "Add Two Numbers II" logic (typically involving stacks or reversing linked lists to handle addition from least significant to most significant digit).

---

# Question Revision
# Revision Report: Add Two Numbers II

- **Pattern:** Stack / Linked List Reversal
- **Brute Force:** Convert both linked lists into integers, add them, and convert the sum back into a linked list. 
    - *Flaw:* Fails on extremely large numbers that exceed 64-bit integer limits (integer overflow).
- **Optimal Approach:** 
    - **Logic:** Use two **Stacks** to store the nodes of both lists. Since stacks are LIFO (Last-In-First-Out), popping from the stacks allows you to process the digits from least significant (tail) to most significant (head). Create the resulting list by inserting new nodes at the **front** (head) of the result list to maintain the correct order.
    - **Time Complexity:** $O(N + M)$ where $N$ and $M$ are the lengths of the two lists.
    - **Space Complexity:** $O(N + M)$ to store the stacks.
- **The 'Aha' Moment:** The lists are given in most-significant-digit order, but addition must happen from least-to-most significant, signaling a need for a LIFO structure.
- **Summary:** Use stacks to reverse the processing order of the lists and build the result list backward.

---