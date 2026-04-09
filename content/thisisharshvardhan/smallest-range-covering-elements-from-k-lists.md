---
title: "Smallest Range Covering Elements from K Lists"
slug: smallest-range-covering-elements-from-k-lists
date: "2026-04-09"

---
---

# My Solution
~~~cpp
class Info{
public:
    int data;
    int row;
    int col;

    Info(int x,int y,int z){
        data=x;
        row=y;
        col=z;
    }
};
class compare{
public: 
    bool operator()(Info* a,Info*b){
        return a->data>b->data;
    }
};
class Solution {
public:
    vector<int> smallestRange(vector<vector<int>>& nums) {
        priority_queue<Info*,vector<Info*>,compare> pq;
        vector<int> ans;
        int mini=INT_MAX;
        int maxi=INT_MIN;

        int totalrow=nums.size();
        int totalcol=nums[0].size();

        for (int i=0;i<totalrow;i++){
            int ele=nums[i][0];
            Info* temp = new Info(ele,i,0);
            pq.push(temp);
            mini=min(mini,ele);
            maxi=max(maxi,ele);

        }

        int ans_start=mini;
        int ans_end=maxi;

        while(!pq.empty()){
            Info* front=pq.top();
            pq.pop();

            int data=front->data;
            int rInd=front->row;
            int cInd=front->col;

            mini=data;

            if ((maxi-mini) < (ans_end-ans_start)){
                ans_start=mini;
                ans_end=maxi;
            }

            if (cInd+1<nums[rInd].size()){
                int ele=nums[rInd][cInd+1];
                Info* temp=new Info(ele,rInd,cInd+1);
                maxi=max(maxi,ele);
                pq.push(temp);
            }
            else break;

        }
        ans.push_back(ans_start);
        ans.push_back(ans_end);
        return ans;

    }
};
~~~

# Submission Review
## Approach
*   **Technique**: Greedy approach using a Min-Priority Queue to track the smallest element across $K$ sorted lists. This is an application of the "Merge K Sorted Lists" pattern.
*   **Optimality**: Optimal. The algorithm maintains a sliding window of size $K$ by always discarding the minimum and adding the next element from the list that contained that minimum. This ensures all lists are represented in the window at all times.

## Complexity
*   **Time Complexity**: $O(N \log K)$, where $N$ is the total number of elements across all lists and $K$ is the number of lists. Each element is pushed and popped from the priority queue exactly once.
*   **Space Complexity**: $O(K)$. The priority queue stores exactly one element from each of the $K$ lists at any given time.

## Efficiency Feedback
*   **Memory Leak**: The code uses `new Info(...)` inside the loop but never `delete`s the objects. In a competitive programming environment, this might trigger a Memory Limit Exceeded (MLE) if the input size is massive, though it is usually acceptable due to the process-based cleanup.
*   **Performance**: Passing `Info*` into the priority queue involves dynamic memory allocation on every step. Using a `struct` or `tuple` (storing values by object rather than pointer) would be more cache-friendly and faster by avoiding heap fragmentation.

## Code Quality
*   **Readability**: Moderate. The code is logic-heavy but follows standard conventions.
*   **Structure**: Moderate. The use of a separate `Info` class is verbose for modern C++. Using `std::pair` or `std::tuple` would make the code more idiomatic.
*   **Naming**: Good. Variable names like `rInd`, `cInd`, `mini`, and `maxi` clearly describe their purpose.

### Concrete Improvements
1.  **Remove Dynamic Allocation**: Replace `Info*` with a simple `struct` or `std::pair` inside the priority queue to avoid heap overhead and manual memory management.
    ```cpp
    struct Element {
        int val, row, col;
        bool operator>(const Element& other) const { return val > other.val; }
    };
    // Then use priority_queue<Element, vector<Element>, greater<Element>>
    ```
2.  **Simplify Logic**: `totalcol` is unused in the loop logic; avoid declaring variables that aren't strictly necessary.
3.  **Modern C++**: Use `emplace` instead of `new` and `push` to construct the element in place within the container.

---
---


# Question Revision
### Revision Report: Smallest Range Covering Elements from K Lists

**Pattern:** Multi-way Merge / Min-Heap

**Brute Force:**
Generate all possible combinations of elements by picking one from each of the $k$ lists. Calculate the range for each combination and track the global minimum. 
**Complexity:** $O(n^k)$ where $n$ is the average list length.

**Optimal Approach:**
1. Insert the first element of each of the $k$ lists into a Min-Heap along with their list index.
2. Track the `max` value currently in the heap.
3. Pop the `min` from the heap, calculate the current range (`max - min`), and update the global minimum range if smaller.
4. Insert the next element from the same list that the popped element belonged to, updating the `max` if necessary.
5. Stop when any list is exhausted.
**Complexity:** Time: $O(N \log k)$, Space: $O(k)$ where $N$ is the total number of elements and $k$ is the number of lists.

**The 'Aha' Moment:**
When you need to maintain a "window" across $k$ sorted sequences where the boundaries are defined by the current minimum and maximum of the selected elements, a Min-Heap allows you to greedily shrink the range from the left.

**Summary:**
Whenever you must track a range spanning multiple sorted lists, use a Min-Heap to greedily pull the smallest element while keeping a running track of the current maximum.

---
