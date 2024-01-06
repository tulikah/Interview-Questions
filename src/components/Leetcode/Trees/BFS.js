const BFS = () => {

    let root = {
        value: 9,
        next: null
    }

    root.left = {
        value: 7,
        next: null
    }

    const result = [];
    const queue = [];
    const currentNode = root;
    queue.push(currentNode);
    while(queue.length) {
        currentNode = queue.shift();
        result.push(currentNode.value);
        if(currentNode.left) queue.push(currentNode.left);
        if(currentNode.right) queue.push(currentNode.right);
    }

    return result;
}