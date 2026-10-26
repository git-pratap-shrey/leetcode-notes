---
title: "Binary Digit Score"
slug: binary-digit-score
date: "2026-10-25"
---

# My Solution
~~~java
class Solution {
    public int calculateScore(int a, int b) {
        String bita = Integer.toBinaryString(a);
        String bitb = Integer.toBinaryString(b);
        char[] arr1 = bita.toCharArray();
        char[] arr2 = bitb.toCharArray();
        int n1 = arr1.length;
        int n2 = arr2.length;
        int count1 = 0;
        int count2 = 0;
        for(int i=0;i<n1;i++){
            if(arr1[i]=='1'){
                count1++;
            }
        }
        for(int i=0;i<n2;i++){
            if(arr2[i]=='1'){
                count2++;
            }
        }
        int ans = 0;
        if(count1>=count2){
            ans = count1*count2;
        }
        else{
            ans = count2/count1;
        }
        return ans;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: String manipulation and counting. The code converts integers to binary strings, counts the '1' bits (population count), and applies a conditional arithmetic operation.
- **Optimality**: Suboptimal. Using string conversion to count set bits is significantly slower and more memory-intensive than using bitwise operations.

## Complexity
- **Time Complexity**: $O(\log a + \log b)$. The time is proportional to the number of bits in the integers.
- **Space Complexity**: $O(\log a + \log b)$. Creating strings and character arrays for each input consumes linear space relative to the bit length.

## Efficiency Feedback
- **Bottleneck**: The use of `Integer.toBinaryString()`, `toCharArray()`, and manual looping.
- **Optimization**: Replace the entire string conversion process with `Integer.bitCount(a)` and `Integer.bitCount(b)`. This reduces space complexity to $O(1)$ and utilizes hardware-optimized instructions.

## Code Quality
- **Readability**: Moderate. The logic is straightforward, but it is overly verbose for a simple bit-counting task.
- **Structure**: Good. The flow is linear and easy to follow.
- **Naming**: Moderate. `bita` and `bitb` are slightly ambiguous; `binA` or `binaryA` would be clearer. `ans` is standard for competitive programming but generic.
- **Concrete Improvements**:
    - Use `Integer.bitCount()` to replace 15 lines of code with 2.
    - Remove unnecessary `char[]` conversions.
    - Handle the case where `count1` is 0 in the `else` block to avoid a `ArithmeticException` (division by zero).

---

# Question Revision
# Revision Report: Binary Digit Score

- **Pattern:** String Manipulation / Base Conversion
- **Brute Force:** 
    1. Iterate through the string to count '0's and '1's.
    2. Manually calculate the decimal value by iterating through the string and adding $2^i$ for every '1' encountered.
- **Optimal Approach:**
    1. **Count:** Use a single pass (or built-in `count()` method) to find the number of zeros and ones.
    2. **Convert:** Convert the binary string directly to an integer using a built-in base-2 conversion function (e.g., `int(s, 2)` in Python).
    3. **Result:** Return the sum of the counts and the decimal value.
    - **Time Complexity:** $O(n)$ where $n$ is the length of the string.
    - **Space Complexity:** $O(1)$ ignoring the space used for the output integer.
- **The 'Aha' Moment:** The phrase "decimal value of the binary string" is a direct trigger to use base-2 conversion.
- **Summary:** Sum the counts of '0's and '1's and add it to the binary string's integer equivalent.

---