--- title: "Ransom Note" slug: ransom-note date: "2026-06-08" ---  # My Solution ~~~ - ~~~  # Submission Review It appears you haven't provided the code to be reviewed. Please provide the solution you would like me to analyze.  ---  # Question Revision ### Ransom Note

**Pattern:** Hash Map / Frequency Counter

**Brute Force:** For every character in `ransomNote`, scan `magazine` for a match; if found, remove that character from `magazine` to prevent reuse.

**Optimal Approach:** Create a frequency map (or an array of size 26) to store the counts of all characters in `magazine`. Iterate through `ransomNote`, decrementing the count for each character used; if a count drops below zero, the note cannot be formed.
- **Time Complexity:** $O(n + m)$ where $n$ is the length of `ransomNote` and $m$ is the length of `magazine`.
- **Space Complexity:** $O(1)$ because the character set is limited to a fixed size (26 lowercase English letters).

**The 'Aha' Moment:** The constraint that each letter can be used "only once" signals that this is a resource-counting problem rather than a simple membership check.

**Summary:** Ensure the magazine's character inventory is greater than or equal to the ransom note's requirements.  ---