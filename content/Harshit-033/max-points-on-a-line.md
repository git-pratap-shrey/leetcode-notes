---
title: "Max Points on a Line"
slug: max-points-on-a-line
date: "2026-10-07"
---

# My Solution
~~~cpp
class Solution {
public:
    int maxPoints(vector<vector<int>>& points) {
        map<tuple<int,int,long long>,set<pair<int,int>>> mp;

        for(int i=0;i<points.size()-1;i++){
            for(int j=i+1;j<points.size();j++){
                long long x=points[i][0];
                long long y=points[i][1];
                long long x1=points[j][0];
                long long y1=points[j][1];

                long long dy=y1-y;
                long long dx=x1-x;

                if(dx==0){
                    dy=1;
                    dx=0;
                }
                else if(dy==0){
                    dy=0;
                    dx=1;
                }
                else{
                    long long g=gcd(abs(dy),abs(dx));
                    dy/=g;
                    dx/=g;

                    if(dx<0){
                        dx=-dx;
                        dy=-dy;
                    }
                }

                long long c=y*dx-x*dy;

                mp[{dy,dx,c}].insert({x,y});
                mp[{dy,dx,c}].insert({x1,y1});
            }
        }

        int mx=1;

        for(auto &p:mp){
            mx=max(mx,(int)p.second.size());
        }

        return mx;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: The solution uses a **geometric hashing** approach. It represents every possible line formed by pairs of points using a normalized line equation $dy \cdot x - dx \cdot y + c = 0$ (where $c$ is the intercept constant). It stores unique points belonging to each line in a `std::map` of `std::set`s.
- **Optimality**: **Suboptimal**. While mathematically sound, using a `map<tuple, set>` introduces significant overhead. The standard optimal approach is to iterate through each point and use a frequency map for slopes, reducing the complexity of managing global line equations.

## Complexity
- **Time Complexity**: $O(N^2 \log N \cdot \log N)$ or $O(N^2 \log N)$ depending on the map/set implementation. The nested loops are $O(N^2)$, and each insertion into the `map` and `set` takes logarithmic time.
- **Space Complexity**: $O(N^2)$ in the worst case (where every pair of points forms a unique line).

## Efficiency Feedback
- **High Overhead**: The use of `std::map<std::tuple<...>, std::set<...>>` is very expensive. `std::set` allocates memory for every single point insertion, leading to high memory fragmentation and slow execution.
- **Redundant Storage**: The code stores every point on every line it belongs to. Since a point can belong to $N-1$ lines, the space usage is unnecessarily high.
- **Optimization**: 
    1. Use an `unordered_map` with a custom hash for the tuple to reduce lookup to $O(1)$.
    2. Instead of a global map of sets, fix one point $i$ and find the most frequent slope among all other points $j$. This reduces space complexity to $O(N)$.

## Code Quality
- **Readability**: **Good**. The logic for normalizing the slope using GCD is clear and handles vertical/horizontal lines correctly.
- **Structure**: **Moderate**. The logic is contained within one function, which is fine for competitive programming, but the reliance on heavy STL containers for simple counting is a structural inefficiency.
- **Naming**: **Moderate**. Variable names like `dx`, `dy`, `c`, and `mx` are standard for geometry problems, though `mp` is generic.
- **Improvements**:
    - Use `std::gcd` (C++17) instead of a custom implementation if applicable.
    - Handle the edge case where `points.size() <= 1` explicitly, although the loop bounds and `mx=1` handle it implicitly.

---

# Question Revision
# Revision Report: Max Points on a Line

- **Pattern:** Hash Map + Geometry (Slope Calculation)
- **Brute Force:** Check every possible triplet of points $(P_1, P_2, P_3)$ to see if they are collinear using the area of a triangle formula or slope comparison. 
    - **Complexity:** $O(n^3)$ time, $O(1)$ space.
- **Optimal Approach:** 
    - For each point $i$, treat it as the "anchor." 
    - Calculate the slope between point $i$ and every other point $j$.
    - Store slope frequencies in a Hash Map (`Map<Slope, Count>`).
    - The maximum points for anchor $i$ is $\max(\text{map values}) + 1$.
    - **Complexity:** 
        - **Time:** $O(n^2)$ — Two nested loops to iterate through all pairs.
        - **Space:** $O(n)$ — To store slopes for a single anchor point.
- **The 'Aha' Moment:** Collinearity is defined by a constant slope, and a Hash Map is the most efficient way to group elements by a common property (the slope) relative to a fixed point.
- **Summary:** Fix one point as an anchor and use a map to count the most frequent slope among all other points.

---