--- title: "Integer to Roman" slug: integer-to-roman date: "2026-06-27" ---  # My Solution ~~~class Solution {
public:
    string intToRoman(int num) {
        vector<pair<int,string>> val={
            {1000,"M"},{900,"CM"},{500,"D"},{400,"CD"},
              {100,"C"},{90,"XC"},{50,"L"},{40,"XL"},
            {10,"X"},{9,"IX"},{5,"V"},{4,"IV"},{1,"I"}
           };

        string ans="";

        for(auto &p:val){
            while(num>=p.first){
                ans+=p.second;
                num-=p.first;
               }
           }

        return ans;   }
}; - cpp~~~  # Submission Review ## Approach
- **Technique:** Greedy. The solution iterates through a predefined list of Roman numeral values and symbols in descending order, subtracting the largest possible value repeatedly.
- **Optimality:** Optimal. This is the standard way to construct Roman numerals.

## Complexity
- **Time Complexity:** $O(1)$. Although there are nested loops, the number of iterations is bounded by the maximum value of the input (typically 3999) and the fixed size of the mapping table.
- **Space Complexity:** $O(1)$. The mapping table is constant size, and the output string has a small, fixed maximum length.

## Efficiency Feedback
- **Runtime:** Very efficient. The greedy approach minimizes operations.
- **Memory:** Low. 
- **Optimization:** For extremely high-performance requirements, using a fixed-size array instead of `std::vector` or pre-allocating the string via `ans.reserve()` could marginally reduce allocations, but it is unnecessary for this problem scale.

## Code Quality
- **Readability:** Good. The logic is clear and concise.
- **Structure:** Good. The mapping is well-organized.
- **Naming:** Moderate. `val` is a generic name for a collection of pairs; `romanMappings` would be more descriptive. `ans` is acceptable but `result` is preferred in production code.
- **Improvements:**
    - Mark the `val` vector as `static const` to avoid re-initializing the vector on every function call.
    - Use `const auto& p` in the loop to avoid any potential copying (though `pair<int, string>` is small).  ---  # Question Revision ### Integer to Roman

**Pattern:** Greedy Mapping

**Brute Force:** Hardcode separate logic for each decimal place (thousands, hundreds, tens, ones) and handle the special subtractive cases (4s and 9s) using conditional `if/else` blocks for every position.

**Optimal Approach:** Create a predefined list of Roman symbols and their corresponding values, including the subtractive pairs (e.g., `CM` for 900, `IV` for 4), sorted in descending order. Iterate through this list, appending the symbol to the result and subtracting its value from the total as long as the remaining number is greater than or equal to that value.
- **Time Complexity:** $O(1)$ (The input range is capped at 3999, making the number of iterations constant).
- **Space Complexity:** $O(1)$.

**The 'Aha' Moment:** Treating subtractive pairs (like `IV` or `XC`) as unique, standalone symbols removes the need for complex conditional logic.

**Summary:** Use a greedy approach by iterating through a descending map of values and symbols (including subtractive cases) to build the string.  ---