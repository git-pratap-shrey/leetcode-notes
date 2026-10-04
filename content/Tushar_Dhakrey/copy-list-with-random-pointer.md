---
title: "Copy List with Random Pointer"
slug: copy-list-with-random-pointer
date: "2026-10-04"
---

# My Solution
~~~java
/*
// Definition for a Node.
class Node {
    int val;
    Node next;
    Node random;

    public Node(int val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}
*/

class Solution {
    public Node copyRandomList(Node head) {
        if(head==null){
            return null;
        }
        HashMap<Node, Node> map = new HashMap<>();
        Node newhead = new Node(head.val);
        Node oldtemp = head.next;
        Node newtemp = newhead;
        while(oldtemp!=null){
            Node copy = new Node(oldtemp.val);
            map.put(oldtemp,copy);
            newtemp.next = copy;
            oldtemp = oldtemp.next;
            newtemp = newtemp.next;
        }
        map.put(head,newhead);
        oldtemp = head;
        newtemp = newhead;
        while(oldtemp!=null){
            newtemp.random = map.get(oldtemp.random);
            oldtemp = oldtemp.next;
            newtemp = newtemp.next;
        }
        return newhead;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Two-pass traversal using a `HashMap` to map original nodes to their corresponding cloned nodes.
- **Optimality**: Suboptimal in terms of space. While the time complexity is optimal, the space complexity can be reduced to $O(1)$ (excluding the output list) by interleaving the cloned nodes within the original list.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes. The list is traversed twice.
- **Space Complexity**: $O(N)$ to store the mapping of original nodes to cloned nodes in the `HashMap`.

## Efficiency Feedback
- **Memory**: High memory overhead due to the `HashMap` storing $N$ entries.
- **Optimization**: To achieve $O(1)$ auxiliary space, the "interweaving" method (inserting copy nodes between original nodes) would eliminate the need for the map.

## Code Quality
- **Readability**: Moderate. The logic is straightforward, but the initialization of `newhead` outside the loop creates a slight inconsistency in how the first node is handled compared to the rest.
- **Structure**: Moderate. The code is split into two distinct phases (creation and linking), which is logical, though the handling of the first node is slightly fragmented.
- **Naming**: Good. `oldtemp` and `newtemp` clearly distinguish between the source and destination lists.
- **Concrete Improvements**:
    - **Simplify Loop**: Initialize the map and the loop such that the `head` is handled inside the `while` loop rather than as a special case outside.
    - **Null Handling**: The current code is safe, but using `map.putIfAbsent` or a single loop with `computeIfAbsent` could condense the logic.

---

# Question Revision
# Revision Report: Copy List with Random Pointer

- **Pattern**: Hash Map / Interweaving Nodes
- **Brute Force**: Use a Hash Map to map every original node to its corresponding copy. Traverse the list twice: once to create all copy nodes and store them in the map, and a second time to link the `next` and `random` pointers using the map lookups.
- **Optimal Approach**: **Node Interweaving**
    1. **Interweave**: Create a copy of each node and insert it immediately after the original node (e.g., $A \to A' \to B \to B'$).
    2. **Assign Randoms**: Set `curr.next.random = curr.random.next` (if `curr.random` exists).
    3. **Separate**: Restore the original list and extract the copy list by decoupling the nodes.
    - **Time Complexity**: $O(n)$
    - **Space Complexity**: $O(1)$ (excluding the space required for the new list).
- **The 'Aha' Moment**: When you need to map an original object to a copy without extra space, try embedding the copy directly into the original structure.
- **Summary**: Interweave copy nodes into the original list to eliminate the need for a hash map when resolving random pointers.

---