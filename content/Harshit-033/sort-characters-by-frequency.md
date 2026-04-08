---
title: "Sort Characters By Frequency"
slug: sort-characters-by-frequency
date: "2026-04-08"

---
---

# My Solution
~~~cpp
class Solution {
public:
    string frequencySort(string s) {
        int len=s.size();

        map<char,int> mp;

        for(int i=0;i<len;i++){
            mp[s[i]]+=1;
        }
        
        vector<pair<char,int>> v(mp.begin(),mp.end());
        sort(v.begin(),v.end(),[](pair<int,int> a, pair<int,int> b) {
        return a.second > b.second;});
        int j=0;
        for(auto &p : v){
            while(p.second!=0){
                s[j]=p.first;
                p.second--;
                j++;
            }

        }

        return s;



    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Frequency counting using `std::map`, followed by sorting the frequency map entries and reconstructing the string.
*   **Optimality:** Suboptimal. While the logic is correct, the use of `std::map` (ordered) adds unnecessary logarithmic overhead, and sorting the map entries is less efficient than using a bucket sort (or `std::unordered_map`) for this specific problem.

## Complexity
*   **Time Complexity:** $O(N \log K + K \log K)$, where $N$ is the string length and $K$ is the number of unique characters. The `std::map` operations take $O(N \log K)$, and sorting the vector takes $O(K \log K)$.
*   **Space Complexity:** $O(K)$, to store the frequency map and the vector of pairs.

## Efficiency Feedback
*   **Bottleneck:** `std::map` maintains elements in sorted order by key (char), which is unnecessary. Using `std::unordered_map` would reduce frequency counting to $O(N)$ average time.
*   **Optimization:** Since $K$ is bounded (e.g., ASCII/Unicode limits), you can achieve $O(N)$ time complexity by using a frequency array (if the character set is small) or `std::unordered_map` combined with bucket sorting (placing characters into buckets based on their frequency).

## Code Quality
*   **Readability:** Good. The logic flow is linear and easy to follow.
*   **Structure:** Moderate. The use of `std::pair` in the lambda function signature (`pair<int, int>`) is slightly inaccurate (should be `pair<char, int>`), though it compiles due to implicit conversion.
*   **Naming:** Moderate. `mp`, `v`, `p`, and `j` are standard in competitive programming but could be more descriptive (e.g., `charCounts`, `sortedChars`).
*   **Concrete Improvements:**
    *   Change `map<char, int>` to `unordered_map<char, int>` to improve average lookup speed.
    *   Correct the lambda parameter types to `const pair<char, int>& a, const pair<char, int>& b` to avoid unnecessary copying and maintain type safety.
    *   Consider using a bucket sort approach (array of vectors) to achieve $O(N)$ performance, as the max frequency is capped by the string length.

---
---


# Question Revision
### Revision Report: Sort Characters By Frequency

**Pattern:** Frequency Map + Sorting / Bucket Sort

**Brute Force:**
1. Count character frequencies using a hash map.
2. Store character-frequency pairs in a list.
3. Sort the list by frequency in descending order.
4. Construct the result string by repeating each character.
*   **Time Complexity:** $O(n \log k)$ where $k$ is the number of unique characters.
*   **Space Complexity:** $O(n)$ to store the map and the result string.

**Optimal Approach:**
1. Use a hash map to count character frequencies.
2. Create an array of lists (buckets) where the index represents frequency (from $1$ to $n$).
3. Iterate through the map and place each character into its corresponding frequency bucket.
4. Iterate through buckets from $n$ down to $1$, appending characters to the result.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(n)$

**The 'Aha' Moment:**
When the constraints involve mapping items to their occurrence counts and the range of possible frequencies is bounded by the input length, using buckets as a counting sort optimization replaces the need for an $O(\log n)$ comparison sort.

**Summary:**
Whenever you need to sort elements by frequency, use a hash map to count and an array of buckets to sort in linear time.

---
