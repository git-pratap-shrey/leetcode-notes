---
title: "LRU Cache"
slug: lru-cache
date: "2026-10-09"
---

# My Solution
~~~cpp
class LRUCache {
public:
    
    class Node{
     public:
        int key;
        int val;
        Node* next;
        Node* prev;

        Node(int key,int val){
            this->key=key;
            this->val=val;
            next=nullptr;
            prev=nullptr;
        }
    };
    Node* head=new Node(-1,-1);
    Node* tail=new Node(-1,-1);
    int cap;
    unordered_map<int,Node*>mp;
    
    LRUCache(int capacity) {
        cap=capacity;
        head->next=tail;
        tail->prev=head;
    }
    void add(Node* node){
        Node * temp = head->next;
        head->next=node;
        node->prev= head;

        node->next=temp;
        temp->prev=node;
    }
    void remove(Node* node){
        Node* p=node->prev;
        Node* q=node->next;
        p->next=q;
        q->prev=p;
    }

    int get(int key) {
        if(mp.find(key)==mp.end()) return -1;
        Node* node=mp[key];
        remove(node);
        add(node);
        return node->val;
    }
    
    void put(int key, int value) {
        if(mp.find(key)!= mp.end()){
            Node* node=mp[key];
            node->val=value;
            remove(node);
            add(node);
            return;
        }

        if(mp.size()==cap){
            Node* node= tail->prev; 
            mp.erase(node->key);
            remove(node);
            delete node;    
        }
 
       Node* node=new Node(key,value);
       mp[key]=node;
       add(node);


    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache* obj = new LRUCache(capacity);
 * int param_1 = obj->get(key);
 * obj->put(key,value);
 */
~~~

# Submission Review
## Approach
- **Technique**: Doubly Linked List combined with a Hash Map (`unordered_map`).
- **Optimality**: Optimal. This is the standard approach to achieve $O(1)$ time complexity for both `get` and `put` operations.

## Complexity
- **Time Complexity**: $O(1)$ for both `get` and `put`. All operations (map lookup, node removal, and insertion at head) are constant time.
- **Space Complexity**: $O(C)$ where $C$ is the capacity. The map and the linked list both store at most $C+2$ elements.

## Efficiency Feedback
- **Memory Leak**: The code has a significant memory leak. The `head` and `tail` sentinel nodes are allocated with `new` but are never deleted in a destructor.
- **Allocation Overhead**: Using `new Node` for every insertion can be slower than using a pre-allocated pool or a `std::list` if performance is critical, though it is acceptable for competitive programming.

## Code Quality
- **Readability**: Good. The logic is straightforward, and the helper functions `add` and `remove` abstract the pointer manipulation well.
- **Structure**: Moderate. 
    - The `Node` class is defined inside `LRUCache`, which is good for encapsulation.
    - **Critical Issue**: Lack of a destructor to clean up the linked list and sentinel nodes.
- **Naming**: Good. Variables like `head`, `tail`, `cap`, and `mp` are standard and clear in this context.

**Concrete Improvements**:
1. **Implement a Destructor**: Iterate through the list and `delete` all nodes, including `head` and `tail`, to prevent memory leaks.
2. **Const Correctness**: Mark `get` as `const` if it didn't modify the internal order (though in LRU, `get` inherently modifies the state).
3. **Use `std::list`**: Replacing the manual Doubly Linked List with `std::list<pair<int, int>>` and storing iterators in the map would reduce boilerplate code and the risk of pointer errors.

---

# Question Revision
# Revision Report: LRU Cache

- **Pattern**: Hash Map + Doubly Linked List (DLL).
- **Brute Force**: Use a dynamic array or a simple list to store keys in order of access. On every `get` or `put`, search for the key ($O(n)$) and shift elements to move the accessed item to the front ($O(n)$).
- **Optimal Approach**:
    - **Logic**: Use a **HashMap** to store `key -> Node` for $O(1)$ lookup. Use a **Doubly Linked List** to maintain the order of usage. New/accessed items are moved to the *head* (Most Recently Used), and items are evicted from the *tail* (Least Recently Used).
    - **Time Complexity**: $O(1)$ for both `get` and `put`.
    - **Space Complexity**: $O(C)$ where $C$ is the capacity of the cache.
- **The 'Aha' Moment**: The requirement for $O(1)$ access (Hash Map) combined with $O(1)$ re-ordering/deletion (Doubly Linked List) is the signature of this pattern.
- **Summary**: Combine a Map for instant lookup with a Doubly Linked List to track usage order for constant-time eviction.

---