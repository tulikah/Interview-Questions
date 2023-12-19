import React from 'react'
import { useState, useEffect } from "react";

const Slider = () => {
    const [incrementIdx, setIncrementIdx] = useState(0);
    const images = [
        "https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591",
        "https://img.freepik.com/free-photo/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-red-onion-wooden-table_2829-19631.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00Dfjkik4ka-QTmbR-p4qhF7as9KRPOlzeQ&usqp=CAU",
        "https://www.cnet.com/a/img/resize/69256d2623afcbaa911f08edc45fb2d3f6a8e172/hub/2023/02/03/afedd3ee-671d-4189-bf39-4f312248fb27/gettyimages-1042132904.jpg?auto=webp&fit=crop&height=675&width=1200",
        "https://cms.upsidefoods.com/wp-content/uploads/2023/01/FooterBowl_Small.png",
    ];

    const handlePrevious = () => {
        if (incrementIdx === 0) setIncrementIdx(images.length - 1);
        else setIncrementIdx(incrementIdx - 1);
    };

    const handleNext = () => {
        setIncrementIdx((incrementIdx + 1) % images.length);
    };

    //whenever rendering happens useEffect() is called, hence we're adding setTimeout in the useEffect hook:
    //Dependency of incrementIdx
    useEffect(() => {
        const timer = setTimeout(() => {
            handleNext();
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
        // clearTimeout(timer);
    }, [incrementIdx]);

    return (
        <div className="min-h-screen">
            <h2 className="text-center text-4xl font-bold text-blue-900">
                Slider Demo
        </h2>
            <div className="flex justify-center">
                <button onClick={ () => handlePrevious() }>previous</button>
                { images.map((img, idx) => (
                    <img
                        className={
                            "h-24 w-24 m-2 " + (idx === incrementIdx ? "block" : "hidden")
                        }
                        key={ img }
                        src={ img }
                        alt="img"
                    />
                )) }

                <button onClick={ () => handleNext() }>next</button>
            </div>
        </div>
    );
}

export default Slider
