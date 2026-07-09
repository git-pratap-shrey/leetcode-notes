--- title: "Binary Tree Zigzag Level Order Traversal" slug: binary-tree-zigzag-level-order-traversal date: "2026-06-24" ---  # My Solution ~~~/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    void fn(vector<vector<int>>& answer, vector<TreeNode*>& currLevel, vector<TreeNode*>& nextLevel, bool direction){
        vector<int> currAns;

        if(direction){
            for(int i = 0; i < currLevel.size(); i++){
                currAns.push_back(currLevel[i]->val);
            }
        }
        else{
            for(int i = currLevel.size()-1; i >= 0; i--){
                currAns.push_back(currLevel[i]->val);
            }
        }
        answer.push_back(currAns);
        
        if(nextLevel.empty()){
            return;
        }
        else{
            currLevel = nextLevel;
            nextLevel = vector<TreeNode*>();

            for(int i = 0; i < currLevel.size(); i++){
                if(currLevel[i]->left){
                    nextLevel.push_back(currLevel[i]->left);
                }
                if(currLevel[i]->right){
                    nextLevel.push_back(currLevel[i]->right);
                }
            }

            fn(answer, currLevel, nextLevel, !direction);
        }


    }
    vector<vector<int>> zigzagLevelOrder(TreeNode* root) {
        vector<vector<int>> answer;
        if(!root){
            return answer;
        }

        vector<TreeNode*> currLevel;
        vector<TreeNode*> nextLevel;
        bool direction = false;

        currLevel.push_back(root);


        if(root->left){
            nextLevel.push_back(root->left);
        }
        if(root->right){
            nextLevel.push_back(root->right);
        }


        fn(answer, currLevel, nextLevel, !direction);

        return answer;
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique:** Recursive Breadth-First Search (BFS).
- **Optimality:** Optimal in terms of time and space complexity, though the implementation is unconventional. It mimics an iterative BFS using recursion.

## Complexity
- **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the tree. Each node is visited exactly once.
- **Space Complexity:** $O(N)$. In the worst case (a perfect binary tree), the `currLevel` and `nextLevel` vectors store up to $O(N/2)$ nodes. The recursion stack depth is $O(H)$, where $H$ is the tree height.

## Efficiency Feedback
- **Vector Reassignments:** The lines `currLevel = nextLevel;` and `nextLevel = vector<TreeNode*>();` trigger vector copies and reallocations in every recursive call. Using a `std::deque` or swapping two vectors (`std::swap`) would be more efficient.
- **Recursion Overhead:** Using recursion for a level-order traversal adds unnecessary stack overhead. A simple `while` loop with a `std::queue` is the standard, more performant approach.
- **Redundant Logic:** The logic to populate `nextLevel` for the root is duplicated in both `zigzagLevelOrder` and `fn`.

## Code Quality
- **Readability:** Moderate. The logic is easy to follow, but the flow is fragmented between the entry function and the helper.
- **Structure:** Moderate. The design is "pseudo-iterative." The helper function `fn` handles too many responsibilities (value extraction and child discovery).
- **Naming:** Poor. `fn` is non-descriptive; a name like `processLevel` or `traverse` would be appropriate.
- **Concrete Improvements:**
    1. **Eliminate Redundancy:** Move the initial child discovery of the root into the recursive function to avoid duplicating the `if(root->left)...` block.
    2. **Optimize Vector Handling:** Use `std::swap(currLevel, nextLevel)` to avoid expensive copy-assignments.
    3. **Iterative Transition:** Convert the recursive `fn` into a `while(!queue.empty())` loop to improve memory safety and performance.
    4. **Refine Value Extraction:** Use a `std::deque` for the level values to allow $O(1)$ insertion at both ends based on the `direction` flag, avoiding the need for separate `for` loops.  ---  # Question Revision ### Binary Tree Zigzag Level Order Traversal

**Pattern:** BFS (Breadth-First Search) / Level Order Traversal

**Brute Force:** Perform a standard BFS to collect nodes level by level, then iterate through the result list and reverse every second sub-list.

**Optimal Approach:** Use a `Queue` for standard BFS. For each level, use a `Deque` (double-ended queue) to store the nodes of that level. Based on a boolean `leftToRight` flag, either `addLast()` or `addFirst()` the node values into the level's deque. Toggle the flag after completing each level.
- **Time Complexity:** $O(n)$ where $n$ is the number of nodes.
- **Space Complexity:** $O(n)$ to store the queue and the final result.

**The 'Aha' Moment:** The "zigzag" requirement is simply a standard level-order traversal where the insertion order into the result list toggles between FIFO and LIFO per level.

**Summary:** Use BFS with a toggle flag to alternate between appending and prepending node values for each level.  ---