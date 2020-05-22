import React,{useState, useEffect} from "react";
import {
  link,
  BrowserRouter as Router,
  Route,
  Link
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
let formattedFormValues = null
const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues)
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
    axios.post('https://reqres.in/api/users', formattedFormValues)
   .then(response=>{
     console.log(response);
   })
   .catch(response=>{
     console.log(response);
     
   })
   .finally(()=>{
     setFormValues(initialFormValues)
   })
  }
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
      <Form onSubmit={onSubmit} formValues={formValues} onInputChange={onInputChange}></Form>
    </Route>
    </>
  );
};
export default App;
