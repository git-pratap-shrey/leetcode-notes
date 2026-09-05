---
title: "Implement Trie (Prefix Tree)"
slug: implement-trie-prefix-tree
date: "2026-08-25"
---

# My Solution
~~~cpp
struct node{
    node *links[26];
    bool flag=false;

    node(){
        for(int i=0;i<26;i++){
            links[i]=NULL;
        }
    }

    bool containskey(char ch){
        return (links[ch-'a']!=NULL);
    }

    void put(char ch,node* node){
        links[ch-'a']=node;
    }

    node* get(char ch){
        return links[ch-'a'];
    }

    void setend(){
        flag=true;
    }

    bool isend(){
        return flag;
    }
};

class Trie {
private: 
    node* root;

public:

    Trie() {
        root=new node();
    }
    
    void insert(string word) {
        node* temp=root;

        for(int i=0;i<word.size();i++){

            if(!temp->containskey(word[i])){
                temp->put(word[i],new node());
            }

            temp=temp->get(word[i]);
        }

        temp->setend();
    }
    
    bool search(string word) {
        node* temp=root;

        for(int i=0;i<word.size();i++){

            if(!temp->containskey(word[i])){
                return false;
            }

            temp=temp->get(word[i]);
        }

        return temp->isend();
    }
    
    bool startsWith(string prefix) {
        node* temp=root;

        for(int i=0;i<prefix.size();i++){

            if(!temp->containskey(prefix[i])){
                return false;
            }

            temp=temp->get(prefix[i]);
        }

        return true;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Standard Trie (Prefix Tree) implementation using linked nodes with a fixed-size array of pointers for children.
*   **Optimality:** Optimal. The time complexity per operation is proportional to the length of the string, which is the theoretical lower bound for this data structure.

## Complexity
*   **Time Complexity:** 
    *   `insert`: $O(m)$, where $m$ is the word length.
    *   `search`/`startsWith`: $O(m)$.
*   **Space Complexity:** $O(N \times \Sigma)$, where $N$ is the total number of characters across all inserted words and $\Sigma=26$.

## Efficiency Feedback
*   **Memory:** The `node` structure allocates a fixed array of 26 pointers (`26 * 8 bytes` on 64-bit systems) regardless of the branching factor. This is memory-intensive for sparse Tries. If memory usage becomes an issue, consider using a `std::unordered_map<char, node*>` or a sorted `std::vector<pair<char, node*>>` to trade lookup speed for space.
*   **Performance:** The code relies on dynamic allocation (`new node()`) for every character. For high-frequency operations, using a memory pool or a static array-based Trie can significantly reduce heap fragmentation and allocation overhead.

## Code Quality
*   **Readability:** Good. The logic is clean and follows standard conventions.
*   **Structure:** Good. The encapsulation of node logic within the `node` struct is appropriate.
*   **Naming:** Moderate. `flag` is generic; `isEndOfWord` or `isTerminal` would be more descriptive.
*   **Concrete Improvements:**
    *   **Memory Management:** The current implementation has a **memory leak**. There is no destructor provided to traverse the Trie and `delete` the nodes. Add a recursive destructor to the `node` struct and call `delete root` in the `Trie` destructor.
    *   **Encapsulation:** The `node` struct members could be made `private` with the existing public methods to strictly enforce encapsulation.
    *   **Modern C++:** Use `nullptr` instead of `NULL` for type safety.
    *   **Const-correctness:** `search` and `startsWith` should be marked as `const` member functions to allow usage with `const Trie` objects.

---

# Question Revision
### Revision Report: Implement Trie (Prefix Tree)

**Pattern:** Tree / Graph (N-ary Tree)

**Brute Force:** Store all inserted words in a `Set` or `List`. To check prefixes, iterate through all elements and perform `string.startsWith()`, resulting in $O(N \cdot L)$ time per operation where $N$ is the number of words and $L$ is the string length.

**Optimal Approach:** Use a Trie node structure where each node contains an array (size 26 for 'a-z') of children nodes and a boolean flag `isEndOfWord`.
*   **Insert:** Traverse the path character by character, creating new nodes if they don't exist.
*   **Search/StartsWith:** Traverse the path character by character; return `false` if a link is missing.
*   **Time Complexity:** $O(L)$ per operation, where $L$ is the length of the word/prefix.
*   **Space Complexity:** $O(N \cdot L \cdot \Sigma)$, where $\Sigma$ is the alphabet size (26).

**The 'Aha' Moment:** Whenever a problem requires efficient prefix matching or lexicographical lookups across a dynamic set of strings, a Trie is the dedicated structure to trade memory for constant-time character traversal.

**Summary:** Think of a Trie as a state machine where each edge is a character; use it whenever you need to search for prefixes rather than whole words.

---