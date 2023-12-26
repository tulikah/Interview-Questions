

const Debouncing = () => {

    // Search functionality: when you start typing, if you type slowly it should not do multiple calls each time you type a letter.
    // To limit api calls between two key strokes we can use debouncing.
    // any gaming where you use guns. user continuosly fires guns, consider -> machine guns vs pistols
    // depends on usecase, so you cannot say which is better -> throttling or debouncing

    let counter = 1;
    const handleOnKeyUp = () => {
        console.log("Data...", counter++);
    }

    const myFunc = (func, delay) => {
        let timer;
        return function(...args) {
            let context = args;
            clearTimeout(timer);
            timer = setTimeout(() => {func.apply(context)}, delay)
        }
    }

    const myDebounce = myFunc(handleOnKeyUp, 300);



    return (
        <h1 className="m-2">
            Debouncing Demo

            <input type="text" onKeyUp={() => myDebounce()} className="w-30 h-10 m-2 border border-black"/>
        </h1>
    )
}

export default Debouncing;