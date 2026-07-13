---
title: "Sort Characters By Frequency"
slug: sort-characters-by-frequency
date: "2026-06-07"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The `Code` section of your request is currently empty, and I cannot perform a review without the implementation.

---

# Question Revision
### Sort Characters By Frequency

**Pattern:** Hashing + Bucket Sort

**Brute Force:** 
Count character frequencies using a hash map, convert the map to a list of pairs, and sort the list by frequency in descending order.
- **Time:** $O(n \log n)$ or $O(n \log k)$ where $k$ is the alphabet size.
- **Space:** $O(n)$.

**Optimal Approach:**
1. **Frequency Map:** Count the occurrences of each character.
2. **Bucket Sort:** Create an array of lists where the index represents the frequency (from $0$ to $n$). Place characters into the bucket corresponding to their count.
3. **Reconstruct:** Iterate through the buckets in reverse order (highest frequency first) and append each character to the result string based on its index.

- **Time:** $O(n)$ to count, bucket, and reconstruct.
- **Space:** $O(n)$ to store the map and buckets.

**The 'Aha' Moment:** 
Since the maximum possible frequency is bounded by the length of the string ($n$), I can use the frequency as an array index to avoid a traditional sort.

**Summary:** Use a frequency map and bucket sort by count to reconstruct the string in linear time.

---