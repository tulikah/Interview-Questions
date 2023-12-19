import React from 'react'

const Promises = () => {

    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("P1 Success"), 2000);
      });
    
      const p2 = new Promise((resolve, reject) => {
        setTimeout(() => reject("P2 fail"), 3000);
      });
    
      const p3 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("P3 Success"), 1000);
      });

      const promiseAll = Promise.all([p1, p2, p3])
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

        // It does not wait for other promises and just returns the failed promise.
        // It is important to catch the error and not show uncaught error
        // response will be after 3secs - P2 fail

      const promiseAllSettled = Promise.allSettled([p1, p2, p3])       
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

        // waited for all results to come in and gave all reasults in an array - irrespective of resolve/reject
        // Result has array of objects with status and value. If rejected it will give reason for rejecting with status.
    
      const promiseRace = Promise.race([p1, p2, p3])       
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

      // It's like a race, so regardless of sucess or fail, it will return the one with the least timeout. 
      // returns a value here. Value of the first settled promise.

      const promiseRace = Promise.any([p1, p2, p3])       
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

      // It will wait for first settled success. Doesn't matter about the time here.
      // If all the are rejects - it wil throw an aggregate error. The combination of all these errors.
      // In the catch statement you can get all the objects from this error.

      const p1 = new Promise((resolve, reject) => {
        setTimeout(() => reject("P1 Success"), 2000);
      });
    
      const p2 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("P2 Success"), 5000);
      });
    
      const p3 = new Promise((resolve, reject) => {
        setTimeout(() => reject("P3 Success"), 1000);
      });

      // After 5 secs it will give P2 success. It will ignore other promises.
    

    return (
        <div>
            Promises:
            - Promise.all()
            - Promise.allSettled()
            - Promise.race()
        </div>
    )
}

export default Promises
