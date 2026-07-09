--- title: "Next Greater Element I" slug: next-greater-element-i date: "2026-06-17" ---  # My Solution ~~~class Solution {
public:
    vector<int> nextGreaterElement(vector<int>& nums1, vector<int>& nums2) {

        unordered_map<int, int> mp;
        stack<int> st;

        for(int i = nums2.size() - 1; i >= 0; i--) {

            while(!st.empty() && st.top() <= nums2[i]) {
                st.pop();
            }

            if(st.empty()) {
                mp[nums2[i]] = -1;
            } else {
                mp[nums2[i]] = st.top();
            }

            st.push(nums2[i]);
        }

        vector<int> ans;

        for(int x : nums1) {
            ans.push_back(mp[x]);
        }

        return ans;
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique**: Monotonic Stack and Hash Map.
- **Optimality**: Optimal. The monotonic stack allows finding the next greater element for all items in `nums2` in a single linear pass.

## Complexity
- **Time Complexity**: $O(n + m)$, where $n$ is the size of `nums2` and $m$ is the size of `nums1`. Each element in `nums2` is pushed and popped from the stack exactly once.
- **Space Complexity**: $O(n)$ to store the `unordered_map` and the `stack` for the elements of `nums2`.

## Efficiency Feedback
- **Runtime**: Highly efficient. The use of a hash map provides $O(1)$ average-case lookup for elements of `nums1`.
- **Optimization**: Call `ans.reserve(nums1.size())` before the final loop to prevent multiple memory reallocations as the vector grows.

## Code Quality
- **Readability**: Good. The logic is clean and follows standard patterns for monotonic stack problems.
- **Structure**: Good. The separation between preprocessing `nums2` and querying for `nums1` is clear.
- **Naming**: Moderate. Variable names are overly generic (`mp`, `st`, `ans`, `x`). More descriptive names like `nextGreaterMap`, `elementStack`, and `result` would improve maintainability.
- **Improvements**:
    - Replace `ans.push_back(mp[x])` with a pre-allocated vector initialized to the size of `nums1` to avoid `push_back` overhead: `vector<int> ans(nums1.size());` followed by `ans[i] = mp[nums1[i]];`.  ---  # Question Revision ### Next Greater Element I

**Pattern:** Monotonic Stack

**Brute Force:** For each element in `nums1`, locate its index in `nums2` and iterate linearly to the right until a larger element is encountered.

**Optimal Approach:**
*   **Logic:** Traverse `nums2` once. Maintain a **monotonic decreasing stack** of elements. When the current element is greater than the stack's top, the current element is the "next greater" for that top element; pop it and store the pair in a hash map. After the pass, map `nums1` values to their corresponding results in the hash map.
*   **Time Complexity:** $O(n + m)$ where $n$ is the size of `nums1` and $m$ is the size of `nums2`.
*   **Space Complexity:** $O(m)$ to store the stack and the map.

**The 'Aha' Moment:** The requirement to find the "first element to the right" that satisfies a comparison (greater than) is the definitive signature of a Monotonic Stack.

**Summary:** Precompute the next greater element for all members of the source array using a monotonic stack and a map for $O(1)$ retrieval.  ---