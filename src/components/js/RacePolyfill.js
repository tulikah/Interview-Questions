const RacePolyfill = () => {

    function race(funcs) {
        let handled = false;
        return function func(cb) {
            funcs.forEach(fn => {
                fn((err, data) => {
                    if (!handled) {
                        handled = true;
                       cb(err, data)
                    }
                })
            });
        }
    }


const async1 = (callback) => {
    setTimeout(() => callback(undefined, 1), 300)
}

const async2 = (callback) => {
    setTimeout(() => callback(undefined, 2), 100)
}

const async3 = (callback) => {
    setTimeout(() => callback(undefined, 3), 200)
}

const first = race(
    [
        async1,
        async2,
        async3
    ]
)

first((error, data) => {
    console.log(data) // 2, since 2 is the first to be given
}, 1)

return (
    <h1>Race Polyfill</h1>
)
}


export default RacePolyfill;