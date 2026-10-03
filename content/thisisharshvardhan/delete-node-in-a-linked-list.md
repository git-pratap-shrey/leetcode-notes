---
title: "Delete Node in a Linked List"
slug: delete-node-in-a-linked-list
date: "2026-10-03"
---

# My Solution
~~~cpp
class Solution {
public:
    int subarraysDivByK(vector<int>& A, int K) {

        vector<int> map(K, 0);
        map[0] = 1;
        int count = 0;
        int sum = 0;
       for (int a : A) {

            sum = (sum + a) % K;
            if (sum < 0)
                sum += K;

            count += map[sum];
            map[sum]++;
        }
        return count;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Prefix Sums with a Hash Map (implemented via a frequency vector) and Modular Arithmetic.
- **Optimality**: Optimal. It processes the array in a single pass using the property that if two prefix sums have the same remainder modulo $K$, the subarray between them is divisible by $K$.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the size of the vector `A`. The array is traversed once.
- **Space Complexity**: $O(K)$, to store the remainder frequencies in the `map` vector.

## Efficiency Feedback
- **Performance**: The use of a `vector<int>` instead of a `std::unordered_map` is a significant optimization, as it avoids hashing overhead and provides $O(1)$ direct indexing.
- **Correctness**: The handling of negative remainders (`if (sum < 0) sum += K;`) ensures the solution works correctly for arrays containing negative integers.

## Code Quality
- **Readability**: Moderate. While the logic is clean, the class and method are completely unrelated to the stated problem ("Delete Node in a Linked List").
- **Structure**: Good. The logic is linear and concise.
- **Naming**: Poor. 
    - The method name `subarraysDivByK` describes the logic, but the context provided in the prompt suggests a mismatch with the intended problem.
    - The variable name `map` is misleading as it is a `std::vector`, not a `std::map`.
- **Improvements**:
    - Rename `map` to `remainderFreq` or `countMap` to avoid confusion with the STL container.
    - Ensure the code matches the requested problem (the provided code solves "Subarray Sums Divisible by K," not "Delete Node in a Linked List").

---

# Question Revision
# Revision Report: Delete Node in a Linked List

- **Pattern**: Linked List Manipulation (Node Copying)
- **Brute Force**: Traverse the list from the head to find the node *immediately preceding* the target node, then change its `next` pointer to skip the target. (Note: Not possible here as only the target node is provided).
- **Optimal Approach**: Since we cannot access the previous node, we mimic the deletion by copying the value of the *next* node into the current node, and then skipping the next node.
    - **Logic**: `node.val = node.next.val` $\rightarrow$ `node.next = node.next.next`
    - **Time Complexity**: $O(1)$
    - **Space Complexity**: $O(1)$
- **The 'Aha' Moment**: The problem gives you access *only* to the node to be deleted, implying you must modify the current node's identity rather than its connectivity.
- **Summary**: When you can't reach the previous node to delete the current one, copy the next node's data into the current node and skip the next one.

---