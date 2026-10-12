---
title: "Prime Subset Selection I"
slug: prime-subset-selection-i
date: "2026-10-11"
---

# My Solution
~~~cpp
class Solution {
public:
    bool isprime(int x){
        
        if(x==2) return true;
        for(int i=2;i<=x/2;i++){
            if(x%i==0){
                return false;
            }
        }
        return true;
    }
    vector<int> maxPrimes(int n, int s) {
        vector<bool> isprime(n+1,true);
        isprime[0]=isprime[1]=false;
        for(int i=2;i*i<=n;i++){
            if(isprime[i]){
                for(int j=i*i;j<=n;j+=i){
                    isprime[j]=false;
                }
            }
        }
        
        vector<int> ans;
        if(s==1 || n==1) return ans;
        for(int i=2;i<=n;i++){
            if(isprime[i] && i<=s){
                ans.push_back(i);
                s=s-i;
                
            }
            if(s<2) break;
        }
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Greedy. The code uses a Sieve of Eratosthenes to identify primes up to $n$, then iteratively selects the smallest primes that fit within the remaining sum $s$.
- **Optimality**: **Suboptimal**. A greedy approach selecting the smallest primes maximizes the *number* of elements in the subset. However, if the goal is to maximize the sum or find a specific subset, this is insufficient. Without the problem statement, the "max" in `maxPrimes` is assumed to mean "maximum number of elements," for which this greedy approach is optimal.

## Complexity
- **Time Complexity**: $O(n \log \log n)$. The Sieve of Eratosthenes dominates the complexity; the subsequent linear scan through the primes is $O(n)$.
- **Space Complexity**: $O(n)$. The `isprime` boolean vector and the `ans` vector both scale linearly with $n$.

## Efficiency Feedback
- **Redundancy**: The `isprime(int x)` helper function is defined at the top of the class but is **never called** within `maxPrimes`. This is dead code.
- **Sieve Efficiency**: The sieve implementation is standard and efficient.
- **Early Exit**: The `if(s < 2) break;` is a good optimization to stop the loop once no more primes (starting from 2) can fit.

## Code Quality
- **Readability**: Moderate. The logic is straightforward, but the presence of unused functions creates noise.
- **Structure**: Moderate. The logic is contained within a single function, which is acceptable for this scale, but the unused helper function should be removed.
- **Naming**: Good. Variable names like `isprime`, `ans`, and `s` are clear in context.
- **Concrete Improvements**:
    1. **Remove the `isprime` member function**: It is redundant because the sieve provides the same information more efficiently.
    2. **Const correctness**: The `isprime` vector in `maxPrimes` could be handled more cleanly, though it is currently functional.
    3. **Input Validation**: The check `if(s==1 || n==1)` is a basic edge-case handler, but the loop naturally handles these cases, making the explicit check redundant.

---

# Question Revision
# Revision Report: Prime Subset Selection I

- **Pattern**: Sieve of Eratosthenes + Greedy / Counting.
- **Brute Force**: Generate all possible subsets of the given array, check if each subset consists only of prime numbers, and find the maximum size among them. This results in exponential time complexity $O(2^n)$.
- **Optimal Approach**: 
    - Use the **Sieve of Eratosthenes** to precompute all primes up to the maximum possible value in the input array.
    - Iterate through the input array once, counting how many elements are prime.
    - Since the goal is to find the maximum size of a subset where every element is prime, the answer is simply the total count of prime numbers present in the array.
    - **Time Complexity**: $O(M \log \log M + N)$, where $M$ is the maximum value in the array and $N$ is the number of elements.
    - **Space Complexity**: $O(M)$ to store the sieve boolean array.
- **The 'Aha' Moment**: The requirement that *every* element in the subset must be prime means the elements don't interact, allowing me to simply count all available primes.
- **Summary**: To maximize a subset of primes, precompute primes using a Sieve and count every prime occurrence in the input.

---