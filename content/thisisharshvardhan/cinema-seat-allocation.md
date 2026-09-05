---
title: "Cinema Seat Allocation"
slug: cinema-seat-allocation
date: "2026-08-20"
---

# My Solution
~~~cpp
class Solution {
public:

    bool isAvailable(unordered_set<int>& seats, int seat) {
        return seats.find(seat) == seats.end();
    }

    int maxNumberOfFamilies(int n, vector<vector<int>>& reservedSeats) {

        unordered_map<int,unordered_set<int>> mp;

        for(auto &x:reservedSeats) {
            mp[x[0]].insert(x[1]);
        }

        int ans=(n-mp.size())*2;

        for(auto &p:mp) {

            unordered_set<int>& seats=p.second;

            bool groupA=isAvailable(seats,2) && isAvailable(seats,3) && isAvailable(seats,4) && isAvailable(seats,5);

            bool groupB=isAvailable(seats,4) && isAvailable(seats,5) && isAvailable(seats,6) &&isAvailable(seats,7);

            bool groupC=isAvailable(seats,6) &&isAvailable(seats,7) &&isAvailable(seats,8)&&isAvailable(seats,9);

            if(groupA &&groupC)
                ans+=2;
            else if(groupA || groupB || groupC)
                ans++;
        }

        return ans;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Greedy with Hashing.
*   **Optimality:** Optimal. It iterates through reserved rows to check availability for three specific 4-seat clusters. Empty rows are handled in constant time via `(n - mp.size()) * 2`.

## Complexity
*   **Time Complexity:** $O(R)$, where $R$ is the number of `reservedSeats`. Each reservation is processed once to build the map, and each row in the map is processed in $O(1)$ constant-time checks.
*   **Space Complexity:** $O(R)$, required to store the reserved seats in the `unordered_map` and `unordered_set` structures.

## Efficiency Feedback
*   **Performance:** Generally efficient, but `std::unordered_set` has significant overhead for small, fixed-size datasets (max 10 seats per row). Using a bitmask (e.g., `int` or `std::bitset<11>`) for each row would be significantly faster and more memory-efficient.
*   **Optimization:** Replacing `unordered_set<int>` with a simple integer bitmask would eliminate heap allocations for every row, drastically reducing runtime and memory footprint.

## Code Quality
*   **Readability:** Good. The logic for the three groups is clear and easy to follow.
*   **Structure:** Good. Segregating the logic for occupied vs. empty rows is a clean design choice.
*   **Naming:** Good. Variable names like `groupA`, `groupB`, and `groupC` are descriptive in the context of the problem.
*   **Improvements:**
    *   **Data Structure:** As noted, replace `unordered_set<int>` with a bitmask `int mask`. You can check seats using bitwise operations (e.g., `(mask & (1 << seat))` to check if seat is reserved).
    *   **Redundancy:** The `isAvailable` helper function adds a layer of indirection that is unnecessary if using bitmasks.
    *   **Type Safety:** `reservedSeats` indices are `1`-indexed, which is handled correctly, but consider using `std::unordered_map<int, int>` to store bitmasks for memory efficiency.

---

# Question Revision
### Cinema Seat Allocation

**Pattern:** Bitmasking / Hash Map

**Brute Force:** 
Represent the entire cinema as a 2D boolean array of size $n \times 10$. Iterate through every row and check all possible 4-seat combinations $[2,5], [4,7], [6,9]$.
*   **Time:** $O(n)$ (where $n$ is the number of rows).
*   **Space:** $O(n)$ (to store the grid).

**Optimal Approach:**
Since we only care about seats 2-9, use a **Bitmask** to store occupied seats for each row. Store rows with at least one occupied seat in a Hash Map `Map<row, bitmask>`. Iterate through the map to check if the specific bit patterns (e.g., `011110000`, `00011110`, `00000111`) are available. If a row is not in the map, it is completely empty and contributes 2 families; otherwise, calculate based on the remaining gaps.
*   **Time:** $O(k)$, where $k$ is the number of rows with reservations.
*   **Space:** $O(k)$ to store the map.

**The 'Aha' Moment:**
When the problem constraints indicate $n$ is very large (e.g., $10^9$) but the number of reservations is small, ignore the empty rows and only process the "sparse" rows using a Hash Map.

**Summary:**
When rows are sparse but the coordinate space is massive, use a Hash Map to store only the impacted rows and bitwise operations to validate seat availability instantly.

---