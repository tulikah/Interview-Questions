const AsyncAwaitCalls = () => {

    let random = Math.floor(Math.random * 10);

    function createAsyncCalls(){
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if(random < 5){
                    reject(`Error ${random}`)
                } else {
                    resolve(`Resolve ${random}`)
                }
            }, value * 1000);
        })
    }

    let tasks = [
        createAsyncCalls(),
        createAsyncCalls(),
        createAsyncCalls(),
        createAsyncCalls(),
        createAsyncCalls(),
        createAsyncCalls()
    ];

    function runTasks(tasks, cb) {
        let rejects = [];
        let resolves = [];
        let completed = 0;

        //running sequentially
        tasks.reduce((prev, curr) => {
            return prev.finally(() => {
                return curr.then((val) => {
                    resolves.push(val);
                })
                .catch((err) => {
                    rejects.push(err);
                })
                .finally(() => {
                    completed++;
                    if(completed === tasks.length) {
                        cb(resolves, rejects);
                    }
                })
            })

        }, Promise.resolve())

        //running parallely
        tasks.forEach(element => {
            element.then((val) => {
                resolves.push(val);
            }).catch((err) => {
                rejects.push(err);
            }).finally(() => {
                completed++;

                if(completed === tasks.length) {
                    cb(resolves, rejects);
                }
            })
        });

    }

    runTasks(tasks, ((resolve, reject) => {
        console.log("results", resolve);
        console.log("reject", reject)
    }))
      
}

export default AsyncAwaitCalls;