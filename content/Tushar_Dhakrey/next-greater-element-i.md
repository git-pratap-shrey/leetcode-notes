---
title: "Next Greater Element I"
slug: next-greater-element-i
date: "2026-04-13"
---

# My Solution
~~~java
class Solution {
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {
        Stack<Integer> st = new Stack<>();
        HashMap<Integer,Integer> map = new HashMap<>();
        int n = nums2.length;
        int arr[] = new int[n];
        for(int i=n-1;i>=0;i--){
            while(!st.isEmpty() && st.peek()<=nums2[i]){
                st.pop();
            }
            //if(st.isEmpty()){
            //    arr[i]=-1;
            //}
            //else{
            //    arr[i] =st.peek();
            //}
            int nextgreat = st.isEmpty() ?-1:st.peek();
            map.put(nums2[i],nextgreat);
            st.push(nums2[i]);
        }
        //HashMap<Integer,Integer> map = new HashMap<>();
        //for(int i=0;i<n;i++){
        //    map.put(nums2[i],arr[i]);
        //}
        int res[] = new int[nums1.length];
        for(int i=0;i<nums1.length;i++){
            res[i]= map.get(nums1[i]);
        }
        return res;

    }   
}
~~~

# Submission Review
## Approach
- **Technique:** Monotonic stack with a HashMap for lookup.
- **Optimality:** Optimal. The solution processes `nums2` in a single pass to precalculate the next greater elements and uses a hash map for $O(1)$ retrieval during the `nums1` traversal.

## Complexity
- **Time Complexity:** $O(N + M)$, where $N$ is the length of `nums2` and $M$ is the length of `nums1`. Each element in `nums2` is pushed and popped from the stack at most once.
- **Space Complexity:** $O(N)$ to store the HashMap and the stack for `nums2`.

## Efficiency Feedback
- The implementation is efficient. Using a `HashMap` to store the result of the monotonic stack operation allows for quick lookups when iterating through `nums1`.
- **Note:** `java.util.Stack` is synchronized and considered legacy; using `java.util.ArrayDeque` as a stack is generally faster and preferred in competitive programming.

## Code Quality
- **Readability:** Moderate. The presence of commented-out code blocks detracts from the professional appearance and readability of the submission.
- **Structure:** Good. The logic is clearly separated into two distinct phases (preprocessing `nums2` and mapping to `nums1`).
- **Naming:** Good. Variable names like `nextgreat`, `map`, and `st` are conventional and clear enough for this context.

### Concrete Improvements
1. **Remove Commented Code:** Delete the unused `arr` array and the commented-out logic blocks to clean up the source code.
2. **Use `ArrayDeque`:** Replace `Stack<Integer> st = new Stack<>()` with `Deque<Integer> st = new ArrayDeque<>()` to improve performance.
3. **Refine Initialization:** The `int arr[] = new int[n]` array is declared but never used. Removing this will save unnecessary memory allocation. 

**Revised snippet for the stack:**
```java
Deque<Integer> st = new ArrayDeque<>();
// ...
int nextgreat = st.isEmpty() ? -1 : st.peek();
map.put(nums2[i], nextgreat);
st.push(nums2[i]);
```

---

# Question Revision
### Revision Report: Next Greater Element I

**Pattern:** Monotonic Stack

**Brute Force:**
For each element in `nums1`, search for its first occurrence in `nums2`, then scan to the right to find the first element strictly larger.
*   **Time Complexity:** $O(n \cdot m)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:**
Use a monotonic decreasing stack to pre-process `nums2`. Iterate through `nums2`; if the current element is greater than the stack top, pop the stack and map the popped element to the current element in a hash map. Finally, iterate through `nums1` to retrieve the cached results from the map.
*   **Time Complexity:** $O(n + m)$
*   **Space Complexity:** $O(n + m)$

**The 'Aha' Moment:**
Whenever you need to find the "next" element that satisfies a relational condition (greater/smaller) for a sequence, a stack can track "waiting" candidates until the condition is met.

**Summary:**
Use a monotonic stack to process "next greater" problems by treating the stack as a waiting room for elements searching for their future successor.

---