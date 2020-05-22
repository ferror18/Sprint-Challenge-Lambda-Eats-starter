import React from "react"

const Form = (props)=>{
    const {
        name,
        size,
        top,
        special,
    } = props.formValues
    const {onInputChange, onSubmit, price} = props
    return (
        <form onChange={onInputChange} onSubmit={onSubmit} className='pizzaForm'>
            <h1>Build Your Own Pizza</h1>
            <label>Who is this Pizza for?</label>
            <input 
                className='inputName' 
                type='text'
                maxLength='256'
                minLength='2'
                name='name'
                value={name}
            ></input>
            <label>Pizza Size</label>
            <select name="size" className='dropdown'>
                <option value="small">Small</option>
                <option value="medium">medium</option>
                <option value="large">large</option>
                <option value="extra-large">extra-large</option>
            </select>
            <label>Choose Toppings:</label>
            <div className='checklist'>
            <input type="checkbox" className='top' name="chesse" value="chesse" checked={top.chesse}></input>
            <label>chesse</label>
            <input type="checkbox" className='top' name="sauce" value="sauce"checked={top.sauce}></input>
            <label>sauce</label>
            <input type="checkbox" className='top' name="pepperoni" value="pepperoni"checked={top.pepperoni}></input>
            <label>pepperoni</label>
            <input type="checkbox" className='top' name="ham" value="ham"checked={top.ham}></input>
            <label>ham</label>
            <input type="checkbox" className='top' name="pineapple" value="pineapple"checked={top.pineapple}></input>
            <label>pineapple</label>
            <input type="checkbox" className='top' name="bacon" value="bacon"checked={top.bacon}></input>
            <label>bacon</label>
            </div>
            <label>Any Special Instruccions:</label>
            <input type='textarea' value={special} name='special' className='special'></input>
            <input type='submit' className='submitbtn' value={`Place Order`}></input>
        </form>
    )
}

export default Form