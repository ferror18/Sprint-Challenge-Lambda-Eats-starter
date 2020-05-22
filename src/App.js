import React,{useState, useEffect} from "react";
import {
  link,
  BrowserRouter as Router,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import Form from "./components/form"
import axios from "axios"

const initialFormValues = {
  name:'',
  size:'',
  top:{
    chesse: true,
    sauce: true,
    pepperoni: false,
    ham: false,
    pineapple: false,
    bacon:false
    
  },
  special:'',
}
let initialPrice = 15.68
let formattedFormValues = null



const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [price, setPrice] = useState(initialPrice)
  const {history} = useHistory()
  const onInputChange = event => {
    if (event.target.type === 'checkbox') {
      setFormValues({...formValues, 
        [event.target.className]: 
        {...formValues.top, [event.target.name]: event.target.checked}})
    }else{
      setFormValues({...formValues, [event.target.name]: event.target.value})
    }
  }
  const onSubmit = event =>{
    event.preventDefault()
    formattedFormValues = Object.keys(formValues.top).filter(item=>item)
    axios.post('https://reqres.in/api/users', formattedFormValues)
   .then(response=>{
     console.log(response.data);
      history.push('/thankyou')
   })
   .catch(response=>{
     console.log(`There was an error${response}`);
     
     
   })
   .finally(()=>{
     setFormValues(initialFormValues)
   })
  }
  // useEffect(()=>{
  //   setPrice(Object.keys(formValues.top).reduce((acc, cur)=> {if(formValues.cur === true){return acc + 1}}) + initialPrice)
  //   console.log(`something`);
    
  // }, [formValues])
  return (
    <>
    <Route exact path='/'>
    <div className='container'>
      <h1>Order Pizza Now</h1>
      <Link to='/pizza'>
      <button>ORDER PIZZA NOW!</button>
      </Link>
    </div>
    </Route>
    <Route path='/pizza'>
      <Form price={price} onSubmit={onSubmit} formValues={formValues} onInputChange={onInputChange}></Form>
    </Route>
    </>
  );
};
export default App;
