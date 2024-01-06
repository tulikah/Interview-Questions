const DFS = () => {
let root = 30;

    //Pre-Order:
    (function() {
        let result = [];
        const RootLR = (currentNode) => {
            result.push(currentNode.value);
            if(currentNode.left) RootLR(currentNode.left);
            if(currentNode.right) RootLR(currentNode.right);
        }
        RootLR(root)
        return result;
    }())


    //Post-Order:
    (function(){
        let result = [];
        const LRRoot = () => {
            if(currentNode.left) LRRoot(currentNode.left)
            if(currentNode.right) LRRoot(currentNode.right);
            result.push(currentNode.value);
        }
        LRRoot(root);
    })

    //In-Order:
    (function(){
        let result = [];
        const LRootR = () => {
            if(currentNode.left) LRootR(currentNode.left)
            result.push(currentNode.value);
            if(currentNode.right) LRootR(currentNode.right);

        }
        LRootR(root);
    })
}