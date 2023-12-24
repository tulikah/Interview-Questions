import React, { useEffect } from 'react'
import { useState } from "react";

const InifiniteScroll = () => {
    const [count, setCount] = useState(50);
    const elements = [];

    useEffect(() => {

        const onScroll = () => {
            if(window.innerHeight + window.scrollY >= window.document.body.offsetHeight -30) {
                setCount(count + 50);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [count])

    for(let i=1; i<=count; i++) {
        elements.push(<div>{i}</div>);
    }

    return(
        <main>{elements}</main>
    )
}

export default InifiniteScroll;