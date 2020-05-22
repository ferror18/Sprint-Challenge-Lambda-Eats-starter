import React from "react"

const Form = (props)=>{
    const {
        name,
        size,
        top,
        special,
    } = props.formValues
    const {onInputChange, onSubmit} = props
    return (
        <form onChange={onInputChange} onSubmit={onSubmit} className='pizzaForm'>
            <h1>Build Your Own Pizza</h1>
            <label>Who is this Pizza for?</label>
            <input 
                className='inputname' 
                type='text'
                maxLength='256'
                minLength='2'
                name='name'
                value={name}
            ></input>
            <select name="size">
                <option value="small">Small</option>
                <option value="medium">medium</option>
                <option value="large">large</option>
                <option value="extra-large">extra-large</option>
            </select>
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
            <input type='textarea' value={special} name='special'></input>
            <input type='submit' className='submitbtn' value='Order Now'></input>
        </form>
    )
}

export default Form