const AsyncAwaitCalls = () => {

    function createAstncTasks() {
        let value = Math.floor(Math.random() * 10);
      
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (value < 5) {
              reject(`error with ${value}`);
            } else {
              resolve(value * 1000);
            }
          }, value * 1000);
        });
      }
      
      const tasks = [
        createAstncTasks(),
        createAstncTasks(),
        createAstncTasks(),
        createAstncTasks(),
        createAstncTasks(),
      ];
      
      const asyncCalls = async (task, cb) => {
        let resolve = [];
        let rejects = [];
        let completed = 0;
      
        //Using Promises
        task.reduce((prev, curr) => {
          return prev.finally(() => {
            return curr
              .then((res) => {
                resolve.push(res);
              })
              .catch((err) => rejects.push(err))
              .finally(() => {
                completed++;
                if (completed === tasks.length) {
                  cb(rejects, resolve);
                }
              });
          });
        }, Promise.resolve());
      
        //using async-await
        for (let t of tasks) {
          try {
            let result = await t;
            resolve.push(result);
          } catch (error) {
            rejects.push(error);
          }
        }
        cb(rejects, resolve);
      };
      
      asyncCalls(tasks, (error, result) => {
        console.log(error);
        console.log(result);
      });
      
}

export default AsyncAwaitCalls;