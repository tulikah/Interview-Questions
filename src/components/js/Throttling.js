const Throttling = () => {

    // Ex: think of a button that triggers an onClick method. 
    // The api calls will be made on each button click if the user keeps clicking
    // You can limit the api calls between two click events.
    // On a window resize event consider an expensive func is called - limit the rate of execution of this fiunction
    // used for optimizing performance of an app
    // any gaming where you use guns. user continuosly fires guns, consider -> machine guns vs pistols
    // depends on usecase, so you cannot say which is better -> throttling or debouncing

    const expensive = () => {
        console.log('Expensive call');
    }

    const throttle = (func, limit) => {
        let flag = true
        return function () {
            if (flag) {
                func();
                flag = false;
            }
            setTimeout(() => { flag = true }, limit)
        }

    }

    const cheap = throttle(expensive, 4000);
    window.addEventListener('resize', cheap);

/*
    //Different question with cooling periods:
    function throttleAdv() {

        //Solution 1:
        let stash = null;
        let timer = null;
      
        const check = function(){
          timer = null;
          if(stash!==null) {
            console.log('stash', stash)
            func.apply(stash[0], stash[1]);
            stash=null;
            timer = window.setTimeout(check, wait);
          }
        }
      
        return function (...args) {
          if(timer !== null) {
            stash = [this, args];
          } else {
            func.apply(this, args);
            timer = window.setTimeout(check, wait);
          }
      
        }
    
        //Solution 2:
        function startCooling() {
            setTimeout(() => {
                if (lastArgs) {
                    func.apply(this, lastArgs);
                    lastArgs = null;
                    startCooling();          // (2) - re-ignite timer
                } else {
                    waiting = false;
                }
            }, wait)
        }

        return function (...args) {
            if (!waiting) {
                func.apply(this, args);
                waiting = true;
                startCooling.call(this);   // (1) - add call to pass this to timer
            } else {
                lastArgs = args;
            }
        }
    }

// expect(run(['A@0', 'B@2', 'C@3'])).toEqual(['A@0', 'C@3'])

*/

    return (
        <div>
            Throttling demo
        </div>
    )

}

export default Throttling;