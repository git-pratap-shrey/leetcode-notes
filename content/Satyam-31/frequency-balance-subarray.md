--- title: "Frequency Balance Subarray" slug: frequency-balance-subarray date: "2026-06-17" ---  # My Solution ~~~class Solution {
public:
    int getLength(vector<int>& nums) {
        int n=nums.size();
        int ans=0;
        for(int i=0;i<n;i++){
            unordered_map<int,int>mpp,mpp1;
            for(int j=i;j<n;j++){
                int val=nums[j];
                if(mpp[val]>0){
                    int freq=mpp[val];
                    mpp1[freq]--;
                    if(mpp1[freq]==0) mpp1.erase(freq);
                }
                mpp[val]++;
                mpp1[mpp[val]]++;
                if(mpp.size()==1&&mpp1.size()==1) ans=max(ans,j-i+1);
                else if(mpp1.size()==2){
                    auto it=mpp1.begin();
                    int f1=it->first;it++;int f2=it->first;
                    int maxi=max(f1,f2),mini=min(f1,f2);
                    if(maxi==2*mini) ans=max(ans,j-i+1);
                }
            }
        }
        return ans;
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique**: Brute-force nested iteration using frequency maps. The solution iterates through all possible subarrays `[i, j]`, maintaining a frequency map of elements (`mpp`) and a frequency map of those frequencies (`mpp1`).
- **Optimality**: **Not optimal**. An $O(n^2)$ approach is inefficient for typical competitive programming constraints (usually $n \le 10^5$). A more optimal approach would likely involve sliding windows or optimized counting depending on the specific problem constraints.

## Complexity
- **Time Complexity**: $O(n^2)$ on average. The nested loops iterate through all subarrays, and `unordered_map` operations are $O(1)$ average.
- **Space Complexity**: $O(n)$. In the worst case, the maps store every unique element in the array.

## Efficiency Feedback
- **Bottleneck**: The $O(n^2)$ time complexity is the primary bottleneck.
- **Redundant Logic**: The check `if(mpp.size()==1 && mpp1.size()==1)` is partially redundant; if `mpp` has only one key, `mpp1` must inherently have only one key.
- **Overhead**: Using two `unordered_map` objects inside the inner loop leads to significant allocation/deallocation overhead. Replacing them with a fixed-size array (if the value range is known) or a single frequency array would improve the constant factor.

## Code Quality
- **Readability**: Moderate. The logic is straightforward, but the variable names are unhelpful.
- **Structure**: Good. The flow is linear and easy to follow.
- **Naming**: Poor. `mpp` and `mpp1` provide no semantic meaning. Better names would be `elementFreq` and `freqCount`.
- **Concrete Improvements**:
    - Replace `unordered_map` with a frequency array if the input range of `nums[i]` is small.
    - Remove the redundant `mpp.size() == 1` check.
    - Use `std::max` and `std::min` more cleanly or simply check if one frequency is double the other without calling `begin()` and incrementing an iterator manually.  ---  # Question Revision ### Revision Report: Frequency Balance Subarray

**Pattern:** Prefix Sum + Hash Map

**Brute Force:** 
Iterate through all possible subarrays using nested loops, count the frequencies of target elements, and verify if they are balanced.
- **Time:** $O(n^2)$
- **Space:** $O(k)$ (where $k$ is the number of distinct elements)

**Optimal Approach:**
Transform the balance condition into a numerical difference (e.g., if counting balance between $A$ and $B$, treat $A$ as $+1$ and $B$ as $-1$). Maintain a running prefix sum of these values. If the same prefix sum is encountered twice at indices $i$ and $j$, the subarray $(i, j]$ has a net sum of $0$, meaning the frequencies are balanced. Store the first occurrence of each prefix sum in a hash map to maximize the subarray length.
- **Time:** $O(n)$
- **Space:** $O(n)$

**The 'Aha' Moment:** 
"Balance" or "equal counts" indicates that the *difference* between frequencies should remain constant over the desired range.

**Summary:** 
Map frequency differences to a prefix sum and use a hash map to find the widest interval where the sum repeats.  ---