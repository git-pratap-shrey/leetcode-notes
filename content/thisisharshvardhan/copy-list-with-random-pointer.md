---
title: "Copy List with Random Pointer"
slug: copy-list-with-random-pointer
date: "2026-10-07"
---

# My Solution
~~~cpp
/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* next;
    Node* random;
    
    Node(int _val) {
        val = _val;
        next = NULL;
        random = NULL;
    }
};
*/

class Solution {
public:
  Node* copy(Node* head){
    Node* dummy=new Node(-1);
    Node* temp=dummy;
    Node* temp2=head;
    while(temp2!=NULL){
        int data=temp2->val;
        Node* newnode= new Node(data);
        temp->next=newnode;
        temp=temp->next;
        temp2=temp2->next;
    }
    return dummy->next;
  }
   
    Node* copyRandomList(Node* head) {
        Node* dummy=copy(head);
        Node* temp2=dummy;
        unordered_map<Node*,Node*>mp;
        Node* temp1=head;
       while(temp1!=NULL){
        mp[temp1]=temp2;
        temp1=temp1->next;
        temp2=temp2->next;
       }
       for(auto it:mp){
        if(it.first->random!=NULL)
        it.second->random=mp[it.first->random];
       }
       return dummy;
  }
};
~~~

# Submission Review
## Approach
- **Technique**: Two-pass approach using a Hash Map (`unordered_map`). First, it creates a linear copy of the list; second, it maps original nodes to copied nodes to resolve the `random` pointers.
- **Optimality**: Suboptimal. While $O(N)$ time is optimal, the space complexity can be reduced to $O(1)$ (excluding output) by interleaving copied nodes within the original list.

## Complexity
- **Time Complexity**: $O(N)$ where $N$ is the number of nodes. The code iterates through the list three times (once in `copy`, once to populate the map, and once to link random pointers).
- **Space Complexity**: $O(N)$ to store the mapping of original nodes to their clones in the `unordered_map`.

## Efficiency Feedback
- **Redundancy**: The `copy` helper function is redundant. The list can be cloned and the map populated in a single pass, reducing the number of traversals from 3 to 2.
- **Memory**: Using `unordered_map` introduces significant overhead compared to the interleaving method.

## Code Quality
- **Readability**: Moderate. The logic is straightforward, but the separation of the linear copy into a helper function adds unnecessary jumping.
- **Structure**: Moderate. The `copy` function is defined inside the `Solution` class but performs a task that could be integrated into the main function for better flow.
- **Naming**: Poor. Variables like `temp`, `temp1`, `temp2`, and `it` are generic and non-descriptive. `dummy` is used correctly, but `copy` as a function name is slightly ambiguous.

**Concrete Improvements**:
1. **Merge Passes**: Combine the linear copy and the map population into one `while` loop.
2. **Naming**: Rename `temp1` to `currOriginal` and `temp2` to `currCopy`.
3. **Memory Leak**: The `Node* dummy = new Node(-1);` in both functions allocates memory on the heap that is never deleted, causing a small memory leak. Use a stack-allocated dummy `Node dummy(-1);` and return `dummy.next`.

---

# Question Revision
# Revision Report: Copy List with Random Pointer

- **Pattern:** Hash Map / Interweaving Nodes
- **Brute Force:** Use a Hash Map to map every original node to its corresponding copied node. Iterate once to create nodes and a second time to wire the `next` and `random` pointers.
- **Optimal Approach:** 
    - **Logic:** Use the "Interweaving" technique. 
        1. Create a copy of each node and insert it immediately after the original node (e.g., `A -> A' -> B -> B'`).
        2. Set the `random` pointers for the copies: `curr.next.random = curr.random.next`.
        3. Separate the interwoven list into two independent lists (original and copy) by restoring the `next` pointers.
    - **Time Complexity:** $O(n)$ — Three linear passes through the list.
    - **Space Complexity:** $O(1)$ — Excluding the space required for the new list.
- **The 'Aha' Moment:** When you need to map a node to its clone without extra space, try temporarily embedding the clone directly into the original structure.
- **Summary:** Interweave copies into the original list to map random pointers via relative positioning, then decouple them.

---