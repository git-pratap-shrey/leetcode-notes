---
title: "Mirror Frequency Distance"
slug: mirror-frequency-distance
date: "2026-04-06"

---
---

# My Solution
~~~cpp
class Solution {
public:
    int mirrorFrequency(string s) {
        unordered_map<char,int>mp;
        
        int ans=0,m=0,c=0;
        for(int i=0;i<s.size();i++){
           
                mp[s[i]]++;
            
           
        }
        for(int i=0;i<s.size();i++){
            if(mp[s[i]]>0){
                 c=mp[s[i]];
                if(s[i]>='a'&& s[i]<='z'){
                    char r=  'z'-(s[i]-'a');
                    m =mp[r];
                    ans+=abs(m-c);
                    mp[r]=0;
                }
                else{
                    int a=s[i]-'0';
                     m=mp[(9-a)+'0'];
                     ans+=abs(m-c);
                     mp[(9-a)+'0']=0;
                }
            }
            mp[s[i]]=0;
        }
        
        return ans;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Frequency hashing using `unordered_map`. The code counts the occurrences of each character, then iterates through the string to calculate the difference between the frequency of a character and its "mirror" counterpart (e.g., 'a' and 'z', '0' and '9').
*   **Optimal:** Yes. The approach is optimal as it visits the string twice, achieving linear time complexity.

## Complexity
*   **Time Complexity:** $O(N)$ on average, where $N$ is the string length. `unordered_map` operations are $O(1)$ on average.
*   **Space Complexity:** $O(K)$, where $K$ is the alphabet size (constant $K=62$ for alphanumeric characters), making this effectively $O(1)$ auxiliary space.

## Efficiency Feedback
*   **Runtime:** The use of `unordered_map` is technically $O(1)$ average, but carries a higher constant factor and potential hash collisions compared to a fixed-size array.
*   **Optimization:** Since the input space is restricted to alphanumeric characters ('a'-'z', 'A'-'Z', '0'-'9'), a static array of size 128 or 256 would be significantly faster and more cache-friendly than `std::unordered_map`.

## Code Quality
*   **Readability:** Moderate. The logic is functional, but the code is cluttered with unnecessary lines and inconsistent indentation.
*   **Structure:** Moderate. The logic for resetting frequencies (`mp[r]=0` and `mp[s[i]]=0`) is redundant because the check `if(mp[s[i]]>0)` handles the exhaustion of pairs.
*   **Naming:** Moderate. `m`, `c`, `ans`, and `r` are non-descriptive. `m` represents the frequency of the mirror char, and `c` represents the current char's frequency.

### Concrete Improvements
1.  **Replace `unordered_map`**: Use `int freq[128] = {0};` to improve performance.
2.  **Logic Simplification**: You do not need to set the map values to `0` repeatedly. Simply process each unique character once or use a boolean array to track visited characters.
3.  **Variable Naming**: Rename variables for clarity (e.g., `mirrorChar`, `mirrorFreq`, `totalDistance`).
4.  **Refactor Mirror Calculation**: The logic for lowercase letters and digits can be consolidated or simplified; the current structure repeats the `ans += abs(...)` logic unnecessarily.

**Revised Snippet Concept:**
```cpp
int freq[128] = {0};
for(char c : s) freq[c]++;

int ans = 0;
for(char c : s) {
    if(freq[c] == 0) continue;
    
    char mirror;
    if(isdigit(c)) mirror = '9' - (c - '0');
    else if(islower(c)) mirror = 'z' - (c - 'a');
    else continue; // Add handling for uppercase if needed

    ans += abs(freq[c] - freq[mirror]);
    freq[c] = 0;
    freq[mirror] = 0;
}
```

---
---


# Question Revision
### Revision Report: Mirror Frequency Distance

**Pattern:** Frequency Map + Sliding Window (or Two-Pointer)

**Brute Force:**
Iterate through every possible subarray, calculate the frequency of each element within that window, and verify if the distance between the first and last occurrences of the most frequent element satisfies the condition. 
*   **Complexity:** $O(n^2)$

**Optimal Approach:**
Maintain a sliding window where you track the indices of the first and last occurrences of each element using a hash map (or array). As the window expands, calculate the distance between the current index and the recorded "first" index for that element. If the frequency constraint is met, update the global result. 
*   **Time Complexity:** $O(n)$ – Single pass through the input.
*   **Space Complexity:** $O(k)$ – Where $k$ is the number of unique elements stored in the frequency map.

**The 'Aha' Moment:**
When a problem asks for distances between occurrences of specific values, the "first/last" index tracking pattern transforms a search-heavy problem into a simple coordinate arithmetic task.

**Summary:**
Whenever you need to track distances between repeating elements, store their indices in a map to turn $O(n)$ search operations into $O(1)$ constant-time lookups.

---
