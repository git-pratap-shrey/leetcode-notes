const fs = require('fs');
const path = require('path');

const mainPath = path.resolve('d:/n8n/quartz/leetcode/leetcode-notes-main.json');
const addPath = path.resolve('d:/n8n/quartz/leetcode/add_this.json');

try {
    const main = JSON.parse(fs.readFileSync(mainPath, 'utf8'));
    const add = JSON.parse(fs.readFileSync(addPath, 'utf8'));

    // n8n JSON nodes are identified by name/ID. 
    // We want to replace nodes in main that have the same name OR ID as in add.
    const addNodesByName = new Map(add.nodes.map(n => [n.name, n]));
    const addNodesById = new Map(add.nodes.map(n => [n.id, n]));
    
    const mergeNodeId = 'de4e6503-79cb-4e11-ae97-5be6b9423063'; // Merge

    // 1. Determine index of Merge node
    let insertIndex = main.nodes.findIndex(n => n.id === mergeNodeId);
    if (insertIndex === -1) insertIndex = 0;

    // 2. Filter out nodes from main that are present in add (by name or ID)
    const filteredNodes = main.nodes.filter(n => !addNodesByName.has(n.name) && !addNodesById.has(n.id));

    // 3. Recalculate insert index based on items removed before it
    const itemsBeforeRemoved = main.nodes.slice(0, insertIndex).filter(n => addNodesByName.has(n.name) || addNodesById.has(n.id)).length;
    insertIndex -= itemsBeforeRemoved;

    // 4. Insert ALL new nodes at the insertIndex
    filteredNodes.splice(insertIndex, 0, ...add.nodes);
    main.nodes = filteredNodes;

    // 5. Merge connections
    // n8n connections object keys are node names.
    for (const name in add.connections) {
        // Overwrite or add
        main.connections[name] = add.connections[name];
    }

    fs.writeFileSync(mainPath, JSON.stringify(main, null, 2));
    console.log(`Successfully merged ${add.nodes.length} nodes from add_this.json into leetcode-notes-main.json.`);
} catch (err) {
    console.error('Error during merge:', err.message);
    process.exit(1);
}
