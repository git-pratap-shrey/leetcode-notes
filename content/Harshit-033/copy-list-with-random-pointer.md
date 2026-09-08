---
title: "Copy List with Random Pointer"
slug: copy-list-with-random-pointer
date: "2026-09-06"
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
    Node* copyRandomList(Node* head) {
            if (head == NULL) return NULL;
            Node* temp=head;

            Node* dummy = new Node(-1);
            
            Node* res=dummy;
            
            
            
            map<Node*,Node*> hass;

            
            while(temp!=NULL){
                
                Node* temp2=new Node(temp->val);
                hass[temp]=temp2;
                res->next=temp2;
                res=temp2;
                temp=temp->next;
            }
            temp=head;
            res=dummy->next;
            while(temp!=NULL){
                res->random=hass[temp->random];
                res=res->next;
                temp=temp->next;
            }
            return dummy->next;
	
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Hash-map based deep copy. It uses a two-pass strategy: the first pass creates the copy nodes and links them linearly via `next`; the second pass resolves the `random` pointers using the map.
- **Optimality**: Suboptimal in space. While the time complexity is near-optimal, the problem can be solved in $O(1)$ auxiliary space by interweaving the copy nodes within the original list.

## Complexity
- **Time Complexity**: $O(N \log N)$. The code uses `std::map`, where insertions and lookups take logarithmic time.
- **Space Complexity**: $O(N)$. The map stores a mapping for every node in the original list.

## Efficiency Feedback
- **Bottleneck**: `std::map` is implemented as a balanced BST. Replacing it with `std::unordered_map` would reduce the time complexity to $O(N)$ on average.
- **Memory Leak**: The `dummy` node is allocated on the heap (`new Node(-1)`) but is never deleted, causing a small memory leak.

## Code Quality
- **Readability**: Moderate. The indentation is inconsistent, and there is excessive unnecessary whitespace.
- **Structure**: Good. The logic is split clearly into two distinct phases (creation and pointer resolution).
- **Naming**: Poor. `hass` is a non-standard abbreviation for a hash map; `temp` and `temp2` are generic and do not describe the roles of the pointers.
- **Concrete Improvements**:
    1. Change `map<Node*, Node*>` to `unordered_map<Node*, Node*>`.
    2. Use more descriptive names: `hass` $\rightarrow$ `nodeMap`, `temp` $\rightarrow$ `curr`.
    3. Store the `dummy->next` pointer in a variable, `delete dummy`, then return the pointer to prevent memory leaks.
    4. Fix the inconsistent indentation for better maintainability.

---

# Question Revision
### Copy List with Random Pointer

**Pattern:** Hash Map / Linked List Manipulation

**Brute Force:** 
Use a Hash Map to store the mapping `{original_node: cloned_node}`. Iterate through the list twice: first to create all cloned nodes, second to assign `next` and `random` pointers using the map.
- **Time:** $O(n)$
- **Space:** $O(n)$

**Optimal Approach:** 
Interweave the cloned nodes directly into the original list to eliminate the need for a map.
1. **Interweave:** Create a clone of each node and insert it immediately after the original (`A -> A' -> B -> B'`).
2. **Link Randoms:** Set `curr.next.random = curr.random.next` (the clone's random is the clone of the original's random).
3. **Decouple:** Separate the interweaved list into the original and the cloned list.
- **Time:** $O(n)$
- **Space:** $O(1)$ (excluding the memory for the new list)

**The 'Aha' Moment:** 
The need to map an original node to its clone without extra space suggests using the original list's structure itself as the "map" by interweaving.

**Summary:** 
Interweave cloned nodes into the original list to associate them in-place, link the random pointers, then decouple the two lists.

---