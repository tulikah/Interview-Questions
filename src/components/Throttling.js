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
        return function() {
            if(flag) { 
                func();
                flag=false;
            } 
            setTimeout(() => { flag=true },limit)
        }

    }

    const cheap = throttle(expensive, 4000);
    window.addEventListener('resize', cheap);
    

    return (
        <div>
            Throttling demo
        </div>
    )

}

export default Throttling;