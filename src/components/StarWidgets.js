import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";


const StarWidgets = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [stars, setStars] = useState(5);

   
    return (
        <div>
            <div style={{display: "flex", justifyContent: 'center', alignItems: 'center',margin: '100px'}}>
                <select style={{margin: '10px', padding:'10px'}} onChange={(e) => {
                    setStars(Number(e.currentTarget.value))}
                    }> 
                    {[...Array(10)].map((c, id) => {
                        return <option>{id}</option>
                    })}
  
  

                </select>
            </div>

            <div style={ { display: "flex", justifyContent: 'center', alignItems: 'center', margin: '100px' } }>

                { [...Array(stars)].map((star, idx) => {
                    idx = idx + 1;
                    return (
                        <label key={ idx }>
                            <input style={ { display: "none" } } className="ratingInput" type="radio" value={ idx } name='radio'
                                onClick={ () => setRating(idx) }

                            />
                            <FaStar style={ { cursor: "pointer" } } color={ idx <= (hover || rating) ? 'pink' : 'gray' } size={ 100 }
                      
                                // onMouseEnter={ () => setHover(ratingValue) }
                                // onMouseLeave={ () => setHover(null) }
                            // onBlur={() => }
                            />
                        </label>

                    )
                }) }

            </div>
        </div>
    )
}

export default StarWidgets;