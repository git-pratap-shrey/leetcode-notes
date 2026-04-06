---
title: "Delete Node in a Linked List"
slug: delete-node-in-a-linked-list
date: "2026-04-06"

---
---

# My Solution
~~~c
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
void deleteNode(struct ListNode* node) {
    while(node->next->next!=NULL){
        node->val=node->next->val;
        node=node->next;
    }
    node->val=node->next->val;
    free(node->next);
    node->next=NULL;
    
}
~~~

# Submission Review
**Analyzing Node Deletion**

I've been examining a `deleteNode` function in C. It iterates to shift values, then deletes the last node, but this isn't the standard method. I'm focusing on correctness, efficiency, and overall code quality compared to more conventional approaches to linked list node deletion. It's an interesting approach I need to understand better.


**Evaluating Value-Shift**

I've taken a deep dive into this value-shifting deletion method. The core is now clear: copy subsequent node data, then free the last node, creating a tail node with double values. This is inefficient at O(N) where a simpler O(1) method exists. Though readable, I am concerned about the unnecessary shifting that is happening. Correctness depends on the constraint that the tail can't be deleted.


## Approach
- **Technique**: Value shifting (iterative clobbering).
- **Optimality**: **Suboptimal**. The code iterates through all subsequent nodes to shift their values forward. A more efficient approach copies only the immediate next node's value and pointer, achieving the same result in constant time.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes following the target node.
- **Space Complexity**: $O(1)$.
- **Bottleneck**: The `while` loop iterates to the end of the list to perform a "shift-left" operation on values, which is unnecessary for a linked list.

## Efficiency Feedback
- **Runtime**: High relative to the optimal solution. Since you are given the specific node to delete (and it is guaranteed not to be the tail), you only need to copy the data from the immediate successor and then remove that successor.
- **Optimization**: You can reduce this to $O(1)$ by replacing the loop with:
  ```c
  struct ListNode* temp = node->next;
  node->val = temp->val;
  node->next = temp->next;
  free(temp);
  ```

## Code Quality
- **Readability**: **Moderate**. The logic is easy to follow, but it mimics array deletion rather than utilizing linked list properties.
- **Structure**: **Good**. It correctly handles the memory deallocation of the now-redundant tail node.
- **Naming**: **Good**. Follows standard naming conventions for the problem type.
- **Concrete Improvements**:
    - Remove the `while` loop to achieve $O(1)$ performance.
    - Check for `node == NULL` or `node->next == NULL` if the environment does not guarantee the problem constraints (though for competitive programming, this is often skipped).

---
---


# Question Revision
**Analyzing the Constraints**

I'm currently focused on the "Delete Node in a Linked List" problem, specifically the constraint where only the target node is accessible. My thinking is centered on understanding the unique challenge this presents and how to creatively work around the lack of the head node. I'm exploring potential patterns and alternative strategies to achieve the deletion without direct access to the beginning of the list.


**Refining the In-Place Strategy**

I've refined my strategy for the "Delete Node" problem, zeroing in on an in-place manipulation, or value substitution, approach. It's clear that the brute-force method won't work without a head pointer. The optimal solution cleverly copies the *next* node's value into the target node, then bypasses the next node entirely, making the problem constant time and space. The "aha" moment was realizing direct node access is given.


### Pattern
In-place Value Substitution

### Brute Force
Typically, deleting a node requires access to the **previous** node to bridge the gap (`prev.next = node.next`). Since we are only given the target node and no head pointer, a traditional traversal to find the predecessor is impossible, making the standard deletion approach unworkable.

### Optimal Approach
Instead of physically removing the node's memory address from the list, we overwrite the current node's data with the data from the next node. We then bypass the next node by linking the current node directly to the one following it.

*   **Logic:**
    1. `node.val = node.next.val`
    2. `node.next = node.next.next`
*   **Time Complexity:** $O(1)$
*   **Space Complexity:** $O(1)$

### The 'Aha' Moment
The constraint that we are given access *only* to the node to be deleted (and it is guaranteed not to be the tail) forces us to treat the node as a container and move the data rather than the pointer.

### Summary
To delete a node without access to its predecessor, transform the current node into its successor by copying the next node's value and skipping its original position.

---
