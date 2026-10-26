---
title: "Difference Between Peaks and Valleys"
slug: difference-between-peaks-and-valleys
date: "2026-10-24"
---

# My Solution
~~~cpp

class Solution {
public:
    int carFleet(int target, vector<int>& position, vector<int>& speed) {
        int n=position.size();
        vector<pair<int,int>> cars;

        for(int i=0;i<n;i++){
            cars.push_back({position[i],speed[i]});
        }

        sort(cars.rbegin(),cars.rend());

        int fleets=0;
        double prevTime=0;

        for(int i=0;i<n;i++){
            double time=(double)(target-cars[i].first)/cars[i].second;

            if(time>prevTime){
                fleets++;
                prevTime=time;
            }
        }

        return fleets;
    }
};

~~~

# Submission Review
## Approach
- **Technique**: Greedy with Sorting.
- **Optimality**: Optimal. Sorting by position allows the algorithm to process cars from closest to the target to furthest, ensuring that any car that catches up to a leading fleet is correctly merged.

## Complexity
- **Time Complexity**: $O(N \log N)$ due to `sort(cars.rbegin(), cars.rend())`. The subsequent linear scan is $O(N)$.
- **Space Complexity**: $O(N)$ to store the `vector<pair<int, int>> cars`.

## Efficiency Feedback
- **Runtime**: Efficient for the constraints typical of this problem. 
- **Memory**: Memory usage is linear. One minor optimization would be using a custom struct or ensuring the vector is pre-allocated with `reserve(n)` to avoid multiple reallocations during `push_back`.

## Code Quality
- **Readability**: Good. The logic is straightforward and follows a clear flow.
- **Structure**: Good. The separation of data preparation (pairing and sorting) and logic (time calculation) is clean.
- **Naming**: Moderate. `cars` and `fleets` are descriptive, but the problem title provided ("Difference Between Peaks and Valleys") does not match the implementation provided (`carFleet`), indicating a mismatch between the problem label and the code.
- **Improvements**:
    - Use `std::vector::reserve(n)` before the loop to optimize memory allocation.
    - The use of `rbegin()` and `rend()` is a concise way to handle descending order.

---

# Question Revision
# Revision Report: Difference Between Peaks and Valleys

- **Pattern:** Linear Scan / State Tracking
- **Brute Force:** Iterate through the array and for every element, check if it is strictly greater than its immediate neighbors (peak) or strictly smaller (valley). This requires handling edge cases for the first and last elements and manually skipping consecutive duplicate values to find the true "turning points."
- **Optimal Approach:** 
    - **Logic:** Filter the array to remove consecutive duplicates first (or skip them during iteration). Once you have a sequence of unique adjacent elements, a peak occurs when $arr[i-1] < arr[i] > arr[i+1]$ and a valley occurs when $arr[i-1] > arr[i] < arr[i+1]$. Calculate the sum of all peaks and subtract the sum of all valleys.
    - **Time Complexity:** $O(n)$ — Single pass to remove duplicates and single pass to identify extrema.
    - **Space Complexity:** $O(n)$ if using a new list for unique elements, or $O(1)$ if using a pointer to skip duplicates in-place.
- **The 'Aha' Moment:** The presence of "consecutive equal elements" indicates that the problem isn't about local indices, but about the direction of the slope changing.
- **Summary:** Treat sequences of identical values as a single point to simplify the problem into a basic "peak vs valley" slope check.

---