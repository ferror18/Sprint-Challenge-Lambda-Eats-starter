import React from "react";
import {useHistory}   from "react-router-dom"

const ThankYouPage=(props)=>{
    const {
        id,
        name,
        size,
        orderPrice,
        top,
        special
    } = props.myResponse
    const myhistory = useHistory()
    return(
        <div className='tkcontainer'>
            <h1 className='thankyou'>Congrats! your Pizza it's on it's way!</h1>
            <h3 className='PizzaDoggo'>Enjoy this Dog with Pizza</h3>
            <iframe src="https://giphy.com/embed/9fuvOqZ8tbZOU" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>

            <div>
                <h3>Your Order:</h3>
                <p>
                    {`
                    Thank for Ordering ${name}`}<br></br>
                    {`
                    Your Order Number: ${id}`}<br></br>
                    {`
                    Pizza Size: ${size}`}<br></br>
                    {`
                    Your Total: $ ${orderPrice}`}<br></br>
                    {`
                    In your Pizza ${top}`}<br></br>
                    {`
                    You Instruccions: ${special}`}<br></br>
                </p>
            </div>

            <button className='home' onClick={()=>{myhistory.push('/')}}>Home</button>
        </div>
    )
}

export default ThankYouPage