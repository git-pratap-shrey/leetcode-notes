--- title: "Mirror Frequency Distance" slug: mirror-frequency-distance date: "2026-07-04" ---  # My Solution ~~~class Solution {
    public int mirrorFrequency(String s) {
        int[] fre = new int[128];
        for(char ch: s.toCharArray()){
            fre[ch]++;
        }
        int ans = 0;
        for(char ch='a';ch<='m';ch++){
            char mirror = (char)('a'+'z'-ch);
            ans += Math.abs(fre[ch]-fre[mirror]);
        }
        for(char ch='0';ch<='4';ch++){
            char mirror = (char)('0'+'9'-ch);
            ans += Math.abs(fre[ch]-fre[mirror]);
        }
        return ans;
    }
} - java~~~  # Submission Review ## Approach
- **Technique**: Frequency mapping using a counting array.
- **Optimality**: Optimal. The solution processes the input string in a single pass and performs a constant number of lookups to compute the mirrored differences.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the length of the string $s$.
- **Space Complexity**: $O(1)$, as the frequency array has a fixed size of 128 regardless of the input size.

## Efficiency Feedback
- **Performance**: The runtime is minimal due to the $O(N)$ linear scan.
- **Memory**: Memory usage is very low ($128 \times 4$ bytes for the array).
- **Optimization**: No meaningful optimizations are needed. Using `s.charAt(i)` in a standard `for` loop instead of `s.toCharArray()` would avoid creating a temporary character array, slightly reducing memory overhead for very large strings.

## Code Quality
- **Readability**: Good. The logic is simple and the mirror calculation `('a'+'z'-ch)` is a clever and concise way to find the symmetric character.
- **Structure**: Good. The separation between the counting phase and the summation phase is clear.
- **Naming**: Moderate. `fre` and `ans` are standard competitive programming shorthand, but `frequency` and `totalDistance` would be more professional.
- **Improvement**: The code implicitly ignores any characters that are not lowercase letters ('a'-'z') or digits ('0'-'9'). If the problem definition includes other characters, they are currently excluded from the result.  ---  # Question Revision ### Mirror Frequency Distance

**Pattern:** Hash Map / Frequency Grouping

**Brute Force:**
Iterate through all possible pairs of elements, calculate the frequency of each element in the array, and compute the distance if frequencies match.
- **Time:** $O(n^2)$
- **Space:** $O(n)$

**Optimal Approach:**
1. Use a Hash Map to store the frequency of every element in the input.
2. Create a second Hash Map where the key is the **frequency** and the value is a **list of indices** of elements having that frequency.
3. Iterate through the frequency map; for each list of indices, calculate the required distances (e.g., sum of distances, min/max).
- **Time:** $O(n)$
- **Space:** $O(n)$

**The 'Aha' Moment:**
The need to relate elements based on their *count* rather than their *value* signals that you must invert the mapping to use frequency as the primary key.

**Summary:**
Group indices by their element's frequency using a double-mapping strategy to reduce pairwise comparisons to $O(n)$.  ---