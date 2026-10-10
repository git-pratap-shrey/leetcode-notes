---
title: "LRU Cache"
slug: lru-cache
date: "2026-10-09"
---

# My Solution
~~~cpp
class LRUCache {
public:
    int cap;
    int idx = 0;
    unordered_map<int, pair<int, int>> mp;
    queue<pair<int, int>> q;

    LRUCache(int capacity){
        cap = capacity;
    }
    
    int get(int key) {
        if(mp.count(key)){
            mp[key].second = idx;
            q.push({key, idx});
            idx++;
            return mp[key].first;
        }
        else{
            return -1;
        }

    }
    
    void put(int key, int value) {
        mp[key] = {value, idx};
        q.push({key, idx});

        while(mp.size() > cap){
            auto temp = q.front();
            q.pop();

            // cout<<"evict"<<temp.first<<endl;
            if(!mp.count(temp.first)){
                continue;
            }
            if(mp[temp.first].second == temp.second){
                mp.erase(temp.first);
            }
        }

        idx++;
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
- **Technique**: The solution uses a **Lazy Eviction** strategy. It employs an `unordered_map` to store values and timestamps (`idx`), and a `queue` to track the order of access.
- **Optimality**: **Suboptimal**. While it mimics LRU behavior, a standard LRU is implemented using a Doubly Linked List and a Hash Map to achieve $O(1)$ for both `get` and `put`. This implementation relies on a queue that grows with every access, regardless of whether the key is new or existing.

## Complexity
- **Time Complexity**: 
    - `get`: $O(1)$
    - `put`: Amortized $O(1)$, but can be higher when `mp.size() > cap` triggers a loop to pop stale entries from the queue.
- **Space Complexity**: $O(N + M)$ where $N$ is the capacity and $M$ is the total number of `get` and `put` operations. This is suboptimal because the queue grows linearly with every operation, not just with the number of unique elements.

## Efficiency Feedback
- **Memory Leak/Bloat**: The `queue` stores every single access event. In a scenario with many `get` calls on a few keys, the queue will grow indefinitely until a `put` operation triggers eviction. This leads to significantly higher memory usage than the required $O(\text{capacity})$.
- **Bottleneck**: The `while(mp.size() > cap)` loop must process all outdated entries (stale timestamps) before it can successfully evict a current entry.

## Code Quality
- **Readability**: Moderate. The logic is simple, but the "lazy" approach is unconventional for LRU.
- **Structure**: Moderate. The logic is contained, but relies on a global `idx` counter which could eventually overflow in an extremely long-running system.
- **Naming**: Good. Variable names like `cap`, `mp`, and `q` are standard for competitive programming.
- **Concrete Improvements**:
    - Replace the `queue` with a `std::list` (doubly linked list).
    - Store the list iterator in the map: `unordered_map<int, pair<int, list<int>::iterator>>`.
    - This allows moving an element to the front in $O(1)$ and deleting the tail in $O(1)$ without storing redundant access history.

---

# Question Revision
# Revision Report: LRU Cache

- **Pattern**: Hash Map + Doubly Linked List (DLL)
- **Brute Force**: Use a dynamic array or list to track usage. On every `get` or `put`, move the accessed element to the end of the list.
    - **Complexity**: $O(n)$ for lookups and updates due to shifting elements.
- **Optimal Approach**: 
    - Use a **Hash Map** to store keys and pointers to their corresponding nodes in a **Doubly Linked List**.
    - The DLL maintains the order of usage: the head represents the Least Recently Used (LRU) and the tail represents the Most Recently Used (MRU).
    - `get(key)`: Find node via map $\rightarrow$ move node to tail $\rightarrow$ return value.
    - `put(key, value)`: If exists, update value and move to tail. If new, add to tail; if capacity is exceeded, remove the head node and its map entry.
    - **Complexity**: 
        - Time: $O(1)$ for both `get` and `put`.
        - Space: $O(capacity)$ to store the elements.
- **The 'Aha' Moment**: The requirement for $O(1)$ access (Map) combined with $O(1)$ re-ordering of elements (Doubly Linked List) is the classic trigger for this hybrid structure.
- **Summary**: Combine a Hash Map for instant lookup with a Doubly Linked List for instant removal and insertion of elements.

---