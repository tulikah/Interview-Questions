import React from 'react'
import { useState, useRef } from 'react'

const Hooks = () => {
    const [text, setText] = useState('');
    const [theme, setTheme] = useState(false);
    const z = useRef(0)
    const [y, setY] = useState(0);
    const dark = "flex h-80 w-80 border-2 border-sky-500 bg-gray-500 text-white";
  
    let x = 0;
    const incrementX = () => {
      x = x + 1;
      console.log(x);
      return x;
    }

    return (
    <div className="m-2 p-2">
      <div>
        <h1>Understanding how hooks works!</h1>
        <p>Two important hooks majorly used in developing everyday feature are - </p>
        <p>useState() and useEffect()</p>
      </div>

      <h1 className="mt-4">useMemo(), useCallback(), diff between - normal increment, useState(), useRef()</h1>
      <div className="flex mt-4">

        <div className={ theme ? "flex h-80 w-80 border-2 border-sky-500" : dark }>
          <input className="h-10 w-60 border-2 border-sky-700 p-2 m-2" type="text" value={ text } onChange={ (e) => setText(e.target.value) } />
          <button className="h-20 w-20 border-solid border-2 border-sky-500 p-2 m-2" onClick={ () => setTheme(!theme) }>Change Theme</button>
        </div>

        <div className="ml-2 h-80 w-96 border-2 border-sky-500">
          <button className="border bg-red-100 w-40 h-10 m-2" onClick={ () => incrementX() }>Increment x</button>
          <span className="m-3">{ x }</span>
          <div>
            <button className="border bg-red-100 w-40 h-10 mt-4 ml-2" onClick={ () => setY(y + 1) }>Increment Y</button>
            <span className="m-3">{ y }</span>
          </div>
          <div>
            <button className="border bg-red-100 w-40 h-10 mt-4 ml-2" onClick={ () => z.current = z.current + 1 }>Increment Y</button>
            <span className="m-3">{ z.current }</span>
          </div>

        </div>
      </div>

    </div>
    )
}

export default Hooks