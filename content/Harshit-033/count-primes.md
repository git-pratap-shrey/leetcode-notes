---
title: "Count Primes"
slug: count-primes
date: "2026-04-09"

---
---

# My Solution
~~~cpp
class Solution {
public:
    bool prime(int num){
        if(num==2) return true;
        for(int i=2;i<num/2;i++){
            if(num%i==0){
                return false;
            }
        }
        return true;
    }


    int countPrimes(int n) {
        if(n<=2) return 0;
        int arr[n];
        for(int i=2;i<n;i++){
            arr[i]=1;
        }

        for(int i=2;i*i<n;i++){

            if(prime(i)){
                for(int j=i*i;j<n;j+=i){
                    arr[j]=0;
                }
            }
        }
        int count=0;
        for(int i=2;i<n;i++){
            if(arr[i]==1) count++;
        }
        return count;
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** The code attempts a hybrid of the **Sieve of Eratosthenes** and trial division.
*   **Optimality:** **Suboptimal.** While the Sieve is the standard approach, this implementation redundantly calls a `prime()` function inside the Sieve loop and uses an uninitialized Variable Length Array (VLA), which is non-standard in C++.

## Complexity
*   **Time Complexity:** $O(n \sqrt{n})$ due to the combination of the outer loop, the `prime()` check, and the sieve marking.
*   **Space Complexity:** $O(n)$ to store the array of flags.

## Efficiency Feedback
*   **Bottleneck:** The `prime()` function performs $O(\sqrt{i})$ operations inside a loop that runs up to $\sqrt{n}$. A standard Sieve of Eratosthenes requires no trial division; it should simply check if the current index is already marked (e.g., `if (arr[i] == 1)`).
*   **Redundancy:** The `prime()` function is entirely unnecessary if the Sieve is implemented correctly. The Sieve naturally identifies primes by the absence of markings.
*   **Memory Safety:** `int arr[n]` is a VLA. If `n` is large (e.g., $10^7$), this will cause a **stack overflow**. Use `std::vector<bool>` or `std::vector<char>` to allocate on the heap.

## Code Quality
*   **Readability:** Moderate. The logic is understandable but cluttered with unnecessary helper functions.
*   **Structure:** Poor. Mixing manual primality testing with the Sieve obscures the logic.
*   **Naming:** Moderate. `arr` is generic; `isPrime` or `sieve` would be more descriptive.
*   **Concrete Improvements:**
    1.  **Remove `prime()`:** Rely on the sieve marking logic: `if (arr[i])`.
    2.  **Use `std::vector<bool>`:** Prevents stack overflows and is memory-optimized.
    3.  **Fix VLA:** Replace `int arr[n]` with `vector<bool> isPrime(n, true);`.
    4.  **Loop Boundary:** The `prime()` loop condition `i < num/2` is logically incorrect for some numbers; it should be `i * i <= num`. However, since `prime()` shouldn't exist, this is moot.

### Optimized Logic Snippet
```cpp
int countPrimes(int n) {
    if (n <= 2) return 0;
    vector<bool> isPrime(n, true);
    isPrime[0] = isPrime[1] = false;
    for (int i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            for (int j = i * i; j < n; j += i)
                isPrime[j] = false;
        }
    }
    return count(isPrime.begin(), isPrime.end(), true);
}
```

---
---


# Question Revision
### Revision Report: Count Primes

**Pattern:** Number Theory / Sieve of Eratosthenes

**Brute Force:**
Iterate from 2 to $n-1$ and check if each number is prime by testing all divisors up to its square root.
*   **Time Complexity:** $O(n\sqrt{n})$
*   **Space Complexity:** $O(1)$

**Optimal Approach:**
Use the **Sieve of Eratosthenes**. Create a boolean array of size $n$, initialize all as `true`, and iteratively mark multiples of each found prime starting from $p^2$ as `false`.
*   **Time Complexity:** $O(n \log \log n)$
*   **Space Complexity:** $O(n)$

**The 'Aha' Moment:**
When a problem asks to count all primes up to $n$ rather than verifying a single number, the cost of redundant primality checks makes iterative sieving the standard, efficient choice.

**Summary:** 
To count primes efficiently, pre-calculate multiples and mark them off rather than testing each number in isolation.

---
