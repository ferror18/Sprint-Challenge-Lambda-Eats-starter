import React from "react";
import {useHistory}   from "react-router-dom"

const ThankYouPage=()=>{
    const myhistory = useHistory()
    return(
        <div className='tkcontainer'>
            <h1 className='thankyou'>Congrats! your Pizza it's on it's way!</h1>
            <h3 className='PizzaDoggo'>Enjoy this Dog with Pizza</h3>
            <iframe src="https://giphy.com/embed/9fuvOqZ8tbZOU" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            <button className='home' onClick={()=>{myhistory.push('/')}}>Home</button>
        </div>
    )
}

export default ThankYouPage