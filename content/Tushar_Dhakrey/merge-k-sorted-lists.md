---
title: "Merge k Sorted Lists"
slug: merge-k-sorted-lists
date: "2026-10-05"
---

# My Solution
~~~java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        if(lists==null || lists.length==0){
            return null;
        }
        return mergehelper(lists,0,lists.length-1);
    }
    private ListNode mergehelper(ListNode[] lists,int start,int end){
        if(start==end){
            return lists[start];
        }
        if(start+1==end){
            return merge2(lists[start],lists[end]);
        }
        int mid = start+(end-start)/2;
        ListNode left = mergehelper(lists,start,mid);
        ListNode right = mergehelper(lists,mid+1,end);
        return merge2(left,right);
    }
    private ListNode merge2(ListNode list1, ListNode list2) {
        if(list1 == null || list2 == null){
            return list1==null ? list2:list1;
        }
        if(list1.val <= list2.val){
            list1.next = merge2(list1.next,list2);
            return list1;
        }
        else{
            list2.next = merge2(list1,list2.next);
            return list2;
        }
    }
}
~~~

# Submission Review
## Approach
- **Technique:** Divide and Conquer. The solution recursively splits the array of $k$ lists into halves, merges them pairwise using a recursive `merge2` helper, and combines them until one sorted list remains.
- **Optimality:** Optimal. The time complexity matches the theoretical lower bound for merging $k$ sorted lists.

## Complexity
- **Time Complexity:** $O(N \log k)$, where $N$ is the total number of nodes across all lists and $k$ is the number of lists. Each node is processed $\log k$ times during the merge process.
- **Space Complexity:** $O(N)$ in the worst case. While the divide-and-conquer stack is $O(\log k)$, the `merge2` function is implemented **recursively**. For a list of total length $N$, the recursion depth of `merge2` can reach $O(N)$, potentially leading to a `StackOverflowError` for very large lists.

## Efficiency Feedback
- **Bottleneck:** The recursive implementation of `merge2`. In a production environment or with extremely long linked lists, this will consume significant stack memory.
- **Optimization:** Convert `merge2` from a recursive function to an iterative one using a dummy head node to reduce space complexity to $O(1)$ auxiliary space (excluding the recursion stack for the divide-and-conquer part).

## Code Quality
- **Readability:** Good. The logic is clear and follows a standard divide-and-conquer pattern.
- **Structure:** Good. The separation of concerns between the splitting logic (`mergehelper`) and the merging logic (`merge2`) is clean.
- **Naming:** Moderate. `mergehelper` and `merge2` are functional but generic; `mergeTwoLists` and `divideAndConquer` would be more descriptive.
- **Improvements:** 
    - Use an iterative approach for `merge2` to avoid stack overflow.
    - The base case `if(start+1==end)` in `mergehelper` is redundant, as the `mid` logic and `start==end` base case handle this naturally.

---

# Question Revision
# Revision Report: Merge k Sorted Lists

- **Pattern**: Heap / Priority Queue (Min-Heap)
- **Brute Force**: Collect all elements from all $k$ lists into a single array, sort the array, and rebuild a new linked list. 
    - **Complexity**: Time $O(N \log N)$, Space $O(N)$ where $N$ is the total number of nodes.
- **Optimal Approach**: 
    - Initialize a Min-Heap and insert the head node of each of the $k$ lists.
    - Repeatedly extract the minimum element from the heap and append it to the result list.
    - Whenever a node is extracted, insert its next neighbor (if it exists) into the heap.
    - **Complexity**: 
        - Time: $O(N \log k)$ — each of the $N$ nodes is pushed and popped from a heap of size $k$.
        - Space: $O(k)$ — the heap stores at most one node from each of the $k$ lists.
- **The 'Aha' Moment**: When you need to repeatedly find the minimum among multiple sorted streams, a Min-Heap is the most efficient way to track the "current" smallest element.
- **Summary**: Use a Min-Heap to maintain the heads of $k$ sorted lists, extracting the smallest and advancing that specific list's pointer.

---