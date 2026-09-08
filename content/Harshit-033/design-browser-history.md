---
title: "Design Browser History"
slug: design-browser-history
date: "2026-09-06"
---

# My Solution
~~~cpp
class BrowserHistory {
public:
    stack<string> hist;
    stack<string> hist2;
    BrowserHistory(string homepage) {
        hist.push(homepage);
        
    }
    
    void visit(string url) {
        hist.push(url);
        while(!hist2.empty()){
            hist2.pop();
        }

        
    }
    
    string back(int steps) {
        string ans;
        while(hist.size()>1 && steps>0){
            ans=hist.top();
            hist2.push(ans);
            hist.pop();
            steps--;
        }
        return hist.top();
        
    }
    
    string forward(int steps) {
        string ans;
        while(!hist2.empty() && steps){
            ans=hist2.top();
            hist.push(ans);
            hist2.pop();
            steps--;
        }
        return hist.top();

        
    }
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * BrowserHistory* obj = new BrowserHistory(homepage);
 * obj->visit(url);
 * string param_2 = obj->back(steps);
 * string param_3 = obj->forward(steps);
 */
~~~

# Submission Review
## Approach
- **Technique**: Two-stack simulation. `hist` tracks the backward history (including current page), and `hist2` tracks the forward history.
- **Optimality**: Suboptimal. While the logic is correct, using `std::stack` forces an $O(N)$ clear operation during `visit`, whereas a `std::vector` or a doubly-linked list with a pointer would allow $O(1)$ truncation of the forward history.

## Complexity
- **Time Complexity**:
    - `BrowserHistory`: $O(1)$
    - `visit`: $O(N)$ where $N$ is the number of elements in the forward stack (`hist2`).
    - `back`: $O(\text{steps})$
    - `forward`: $O(\text{steps})$
- **Space Complexity**: $O(M)$ where $M$ is the total number of URLs visited.

## Efficiency Feedback
- **Bottleneck**: The `while(!hist2.empty()) { hist2.pop(); }` loop in the `visit` method is inefficient. Since `std::stack` does not provide a `.clear()` method, the code manually pops every element.
- **Optimization**: Replace `std::stack<string>` with `std::vector<string>`. This would allow:
    - Using `.clear()` or `.resize()` for $O(1)$ or amortized $O(1)$ clearing of forward history.
    - Avoiding repeated push/pop operations by simply moving an integer index (pointer) back and forth.

## Code Quality
- **Readability**: Moderate. The logic is simple and easy to follow, but the lack of comments and generic naming hinders clarity.
- **Structure**: Good. The class structure follows the requirements.
- **Naming**: Poor. `hist` and `hist2` are non-descriptive. Better alternatives would be `backStack` and `forwardStack`.
- **Improvements**:
    - Use `std::vector` to manage history to improve the time complexity of `visit`.
    - Remove the unused `string ans` variables inside `back` and `forward`; they are assigned but not used for anything other than temporary storage before pushing.

---

# Question Revision
### Design Browser History

**Pattern:** Two Pointers / Dynamic Array

**Brute Force:**
Use two stacks (one for back, one for forward). `visit` pushes to the back stack and clears the forward stack. While functional, managing two separate structures increases overhead.

**Optimal Approach:**
Use a single dynamic array with a `current` pointer and a `boundary` pointer (tracking the furthest reachable "forward" page).
- `visit(url)`: Increment `current`, overwrite value at `current`, and set `boundary = current`.
- `back(steps)`: Move `current` back by $\min(\text{steps}, \text{current})$.
- `forward(steps)`: Move `current` forward by $\min(\text{steps}, \text{boundary} - \text{current})$.

**Complexity:**
- **Time:** $O(1)$ for all operations.
- **Space:** $O(n)$ where $n$ is the number of URLs visited.

**The 'Aha' Moment:**
The requirement to clear forward history upon a new visit implies that we don't need to delete elements, but simply move a boundary marker to truncate the valid range.

**Summary:**
Simulate a browser history using a dynamic array and a movable pointer to achieve constant-time navigation and updates.

---