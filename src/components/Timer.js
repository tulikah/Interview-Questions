import React, { useState, useRef, useEffect } from 'react'


const Timer = () => {

    const timerRef = useRef();
    const [count, setCount] = useState(0);
    const [start, setStart] = useState(0);


    useEffect(() => {
        if(start) {
            timerRef.current = setTimeout(() => {
                setCount(count + 1);
            }, 1000)
        }
    }, [count, start])

    function onStart() {
        setStart(true);
    }

    function onPause() {
        clearInterval(timerRef.current);
        setStart(false);
    }

    //     function start() {
    //         timerRef.current = setInterval(() => {
    //             setCount((prevCount) => prevCount+1);
    //         }, 1000);

    //     }

    //     function pause() 
    //          clearInterval(timerRef.current); 
    //     }

    //     function end() {
    //         clearInterval(timerRef.current); 
    //         setCount(0)
    //    }


    return (
        <div>
            <div className="flex">
                <button className="border bg-blue-200 h-10 w-20 m-2 p-2" onClick={ () => onStart() }>Start</button>
                <button className="border bg-blue-200 h-10 w-20 m-2 p-2" onClick={ () => onPause() }>Pause</button>
                {/* <button className="border bg-blue-200 h-10 w-20 m-2 p-2" onClick={ () => end() }>End</button> */}
            </div>
            <h1 className="m-2 p-2">Counter: { count }</h1>
        </div>
    )
}

export default Timer;