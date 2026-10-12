---
title: "Design Bus Seat Booking System"
slug: design-bus-seat-booking-system
date: "2026-10-11"
---

# My Solution
~~~cpp
class BusBooking {
public:
    map<string,int> mp;
    int t=0;
    int mc=0;
    int wc=0;
    BusBooking(int n) {
        
    }
    
    void toggle(string seat) {
        if(mp.find(seat)!=mp.end()){
            t=t-mp[seat];
            char c=seat[0];
            if(c=='B' || c=='C'){
                mc--;
            }
            else{
                wc--;
            }
            mp.erase(seat);
        }
        else{
            char c=seat[0];
            int cost=1;
            if(c=='B' || c=='C'){
                mc++;
            }
            else{
                wc++;
                string adj;
                if(c=='A'){
                    adj=adj+'B'+seat.substr(1);
                    
                    
                }
                else{
                    adj='C'+seat.substr(1);
                }
                if(mp.find(adj)!=mp.end()){
                    cost=3;
                }
            }
            mp[seat]=cost;
            t+=cost;
        }
        
    }
    
    int getTotalTime() {
        return t;
        
    }
    
    int getMinTime() {
        return mc+wc;
        
    }
};

/**
 * Your BusBooking object will be instantiated and called as such:
 * BusBooking* obj = new BusBooking(n);
 * obj->toggle(seat);
 * int param_2 = obj->getTotalTime();
 * int param_3 = obj->getMinTime();
 */
~~~

# Submission Review
## Approach
- **Technique**: Simulation using a hash map (`std::map`) to track booked seats and associated costs.
- **Optimality**: Suboptimal. The logic for calculating `cost` during `toggle` only checks for adjacency at the moment of booking. If an adjacent seat is booked *after* the current seat, the cost of the existing seat is not updated, leading to incorrect `getTotalTime` values.

## Complexity
- **Time Complexity**: 
    - `toggle`: $O(\log N)$ per call due to `std::map` operations.
    - `getTotalTime`: $O(1)$.
    - `getMinTime`: $O(1)$.
- **Space Complexity**: $O(S)$ where $S$ is the number of currently booked seats.

## Efficiency Feedback
- **Map Overhead**: Using `std::unordered_map` would reduce `toggle` complexity from $O(\log N)$ to $O(1)$ average.
- **Bottleneck**: The current implementation fails to handle the bidirectional dependency of "adjacent seats." To correctly track the total cost, the system must check and update the cost of neighbors whenever a seat is toggled.

## Code Quality
- **Readability**: Poor. Lack of comments, inconsistent indentation, and cryptic variable names (`t`, `mc`, `wc`) make the logic hard to follow.
- **Structure**: Moderate. The class structure follows the requested API, but the constructor is empty and does nothing with the input `n`.
- **Naming**: Poor. `mp` (map), `t` (total), `mc` (middle/center count?), and `wc` (window count?) are not descriptive.
- **Concrete Improvements**:
    1. Use an `unordered_map<string, int>` for better performance.
    2. Implement a helper function to calculate the cost of a seat based on its neighbors to ensure consistency when seats are toggled in any order.
    3. Rename variables: `t` $\rightarrow$ `totalCost`, `mc` $\rightarrow$ `middleSeatsCount`, `wc` $\rightarrow$ `windowSeatsCount`.
    4. Fix the logic in `toggle`: When booking seat A, it checks B; however, when booking seat B, it does not update the cost of seat A if A was already booked.

---

# Question Revision
# Revision Report: Design Bus Seat Booking System

- **Pattern:** Heap / Priority Queue (Min-Heap)

- **Brute Force:** 
  Maintain a boolean array or a set of all available seats. For every `book()` request, iterate linearly through the seats to find the first available one. For `release()`, simply mark the seat as available.
  - Time Complexity: $O(n)$ per booking, $O(1)$ per release.

- **Optimal Approach:** 
  Use a **Min-Heap** to store all currently available seat numbers. 
  - `book()`: Pop the smallest element from the heap (the first available seat).
  - `release(seat)`: Push the seat number back into the heap.
  - **Complexity:**
    - Time: $O(\log n)$ for both `book` and `release`.
    - Space: $O(n)$ to store the seats.

- **The 'Aha' Moment:** 
  The requirement to always retrieve the "smallest available" element while allowing dynamic insertions (releases) points directly to a Priority Queue.

- **Summary:** 
  Use a Min-Heap to efficiently track and retrieve the lowest available index in a dynamic pool of resources.

---