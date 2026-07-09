--- title: "Middle of the Linked List" slug: middle-of-the-linked-list date: "2026-06-22" ---  # My Solution ~~~/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* middleNode(ListNode* head) {
        ListNode* fastHead = head;

        while(fastHead && fastHead->next != NULL){
            fastHead = fastHead->next->next;
            head = head->next;
        }

        return head;
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique**: Fast and Slow Pointers (Tortoise and Hare).
- **Optimality**: Optimal. It finds the middle node in a single pass without requiring prior knowledge of the list length.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the number of nodes in the linked list.
- **Space Complexity**: $O(1)$, as it only uses two pointers regardless of input size.

## Efficiency Feedback
- The runtime and memory usage are minimal.
- No meaningful optimizations are possible as the algorithm already achieves the lower bound for time and space complexity.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good.
- **Naming**: Moderate. 
    - `fastHead` is slightly misleading; `fast` would be more accurate as it is a moving pointer, not a reference to the head of the list.
    - Reusing the parameter `head` as the slow pointer is functional but can be confusing; a dedicated `slow` pointer would improve clarity.
- **Concrete Improvements**: 
    - Consistently use `nullptr` instead of `NULL` for modern C++ standards (the code mixes `nullptr` in the struct definition and `NULL` in the `while` loop).  ---  # Question Revision ### Middle of the Linked List

**Pattern:** Two Pointers (Slow & Fast)

**Brute Force:** Traverse the entire list to calculate the total length $N$, then perform a second traversal to the node at index $N/2$.

**Optimal Approach:** 
Initialize two pointers (`slow` and `fast`) at the head. Move `slow` one step and `fast` two steps per iteration. When `fast` (or `fast.next`) reaches the end of the list, `slow` will be at the middle.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The need to find a relative midpoint in a singly linked list without knowing the total length upfront signals the "Tortoise and Hare" strategy.

**Summary:** Use a fast pointer moving at $2x$ speed to automatically position a slow pointer at the list's center in one pass.  ---