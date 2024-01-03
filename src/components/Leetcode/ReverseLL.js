const ReverseLL = (list) => {
    let current = list, prev=null;
    while(current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}