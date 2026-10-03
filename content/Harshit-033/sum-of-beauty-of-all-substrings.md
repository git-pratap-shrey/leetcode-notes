---
title: "Sum of Beauty of All Substrings"
slug: sum-of-beauty-of-all-substrings
date: "2026-09-26"
---

# My Solution
~~~cpp
class Solution {
public:
    int find(string &s,int k,int j,vector<int>& arr){
        int mx=0;
        int mn=INT_MAX;

        for(int i=0;i<26;i++){
            if(arr[i]>0){
                mx=max(mx,arr[i]);
                mn=min(mn,arr[i]);
            }
        }

        return mx-mn;
    }

    int beautySum(string s) {
        int ans=0;

        for(int i=0;i<s.size();i++){
            vector<int> arr(26,0);

            for(int j=i;j<s.size();j++){
                arr[s[j]-'a']+=1;
                ans+=find(s,i,j,arr);
            }
        }

        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Brute-force nested loops with a frequency array (sliding window/substring expansion).
- **Optimality**: Suboptimal. While it correctly iterates all substrings, it recalculates the min/max frequency by iterating over the entire alphabet array (26 elements) for every single substring.

## Complexity
- **Time Complexity**: $O(N^2 \times 26)$, where $N$ is the length of the string. The outer two loops generate $N^2$ substrings, and the `find` function performs a constant-time scan of the alphabet.
- **Space Complexity**: $O(26)$ (or $O(1)$), as the frequency array size is fixed regardless of input string length.

## Efficiency Feedback
- **Bottleneck**: The `find` function is called inside the innermost loop. Although 26 is a constant, this results in roughly $26 \times \frac{N^2}{2}$ operations.
- **Optimizations**:
    - The `find` function is a helper that could be inlined to avoid function call overhead.
    - The parameters `string &s`, `int k`, and `int j` passed to `find` are unused, adding unnecessary overhead to the stack.

## Code Quality
- **Readability**: Moderate. The logic is straightforward, but the `find` function contains unused parameters.
- **Structure**: Moderate. The separation of the beauty calculation into a helper function is clean, but the unused parameters make the API confusing.
- **Naming**: Poor. `find` is a generic name that doesn't describe "calculating beauty"; `arr` is too generic for a frequency map.
- **Concrete Improvements**:
    - Remove unused parameters `s`, `k`, and `j` from the `find` function.
    - Rename `find` to `calculateBeauty` and `arr` to `freq`.
    - Use a fixed-size array `int freq[26] = {0};` instead of `vector<int>` inside the loop to reduce heap allocation overhead.

---

# Question Revision
# Revision Report: Sum of Beauty of All Substrings

- **Pattern:** Fixed-Size Window / Frequency Array (Brute Force optimized)
- **Brute Force:** Use three nested loops: two to define the start and end of every possible substring, and a third to iterate through that substring to count character frequencies and calculate the beauty (max freq - min freq).
- **Optimal Approach:** 
    - Use two nested loops to generate all substrings. 
    - Instead of re-scanning the substring, maintain a frequency array `count[26]` that updates incrementally as the inner loop expands.
    - For each expansion, iterate through the `count` array (constant time 26) to find the current max and min frequencies (ignoring zero counts).
    - **Time Complexity:** $O(n^2 \cdot 26) \approx O(n^2)$
    - **Space Complexity:** $O(1)$ (Fixed-size array of 26)
- **The 'Aha' Moment:** The constraints ($n \le 500$) suggest an $O(n^2)$ solution is acceptable, and the "beauty" depends on frequency, implying an incremental update of a frequency map.
- **Summary:** Use nested loops to expand substrings and maintain a running frequency array to calculate beauty in constant time per step.

---