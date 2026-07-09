--- title: "Palindrome Partitioning" slug: palindrome-partitioning date: "2026-07-01" ---  # My Solution ~~~class Solution {
public:
    void pp(vector<vector<string>>& ans,vector<string>&res,int idx,string& s){
        if(idx==s.size()){
            ans.push_back(res);
            return;
        }
        for(int i=idx;i<s.size();i++){
            if(isP(s,idx,i)){
                res.push_back(s.substr(idx,i-idx+1));
                pp(ans,res,i+1,s);
                res.pop_back();
            }
        }
    }

    bool isP(string &s,int low,int high){
        while(low<high){
            if(s[low]!=s[high]){
                return false;
            }
            low++;
            high--;
        }
        return true;
    }

    vector<vector<string>> partition(string s) {
        vector<vector<string>>ans;
        vector<string>res;
        pp(ans,res,0,s);
        return ans;
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique:** Backtracking with recursion.
- **Optimality:** Optimal for generating all possible partitions, as the problem requires an exhaustive list of combinations. However, the palindrome check is redundant across recursive calls.

## Complexity
- **Time Complexity:** $O(N \cdot 2^N)$, where $N$ is the length of the string. There are $2^{N-1}$ possible ways to partition the string, and for each partition, the code performs palindrome checks and substring operations taking $O(N)$.
- **Space Complexity:** $O(N)$ for the recursion stack and the temporary `res` vector (excluding the space required for the final `ans` list).

## Efficiency Feedback
- **Bottleneck:** The `isP` function is called repeatedly for the same substrings. 
- **Optimization:** Pre-calculate a 2D boolean DP table where `dp[i][j]` is true if `s[i...j]` is a palindrome. This would reduce the palindrome check from $O(N)$ to $O(1)$ during the backtracking phase.
- **Memory:** `s.substr()` creates a new string object in every valid recursive step, increasing overhead.

## Code Quality
- **Readability:** Moderate. The logic is clear, but the shorthand naming makes it less intuitive.
- **Structure:** Good. The separation of the palindrome check and the recursive backtracking is appropriate.
- **Naming:** Poor.
    - `pp`: Non-descriptive (should be `backtrack` or `partitionHelper`).
    - `isP`: Overly abbreviated (should be `isPalindrome`).
    - `res`: Vague (should be `currentPartition`).
- **Improvements:**
    - Use more descriptive function and variable names.
    - Pass the `ans` and `res` vectors by reference (already done) to avoid copying.
    - Consider pre-computing palindromes for strings of significant length.  ---  # Question Revision ### Palindrome Partitioning

**Pattern:** Backtracking

**Brute Force:** Generate every possible partition of the string (all $2^{n-1}$ combinations) and then validate if every substring in each partition is a palindrome.

**Optimal Approach:** 
Use a recursive backtracking function to explore the string. At each index, attempt to cut a prefix; if the prefix is a palindrome, recursively partition the remaining suffix. 
- **Time Complexity:** $O(n \cdot 2^n)$ — In the worst case (e.g., "aaaaa"), there are $2^{n-1}$ partitions, and validating each palindrome takes $O(n)$.
- **Space Complexity:** $O(n)$ — To store the current recursion stack and the path of partitions.

**The 'Aha' Moment:** The requirement to "return all possible" valid configurations is a classic signal for a backtracking search.

**Summary:** Use backtracking to recursively split the string, only diving deeper into the recursion tree if the current prefix is a palindrome.  ---