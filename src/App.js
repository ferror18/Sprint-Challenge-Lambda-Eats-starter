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
import ThankYouPage from "./components/thankyou";

const initialFormValues = {
  name:'',
  size:'pys',
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
let Prices = {
  pys: '0',
  small: 8.65,
  medium: 11.13,
  large: 15.98,
  xl:20.99
}
let formattedFormValues = null
let initialSubmitReady = false



const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [price, setPrice] = useState(Prices.pys)
  const myhistory = useHistory()
  const [submitReady, setSubmitReady] = useState(initialSubmitReady)
  const [prices, setPrices] = useState(Prices)
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
     myhistory.push('/thankyou')
   })
   .catch(response=>{
     console.log(`There was an error${response}`);
     
     
   })
   .finally(()=>{
     setFormValues(initialFormValues)
   })
  }
  const getPrice = ()=>{
    
  }
  useEffect(()=>{
    if (formValues.name !== '' && formValues.size !== "pys" && formValues.name.length > 2) {
      setSubmitReady(true)
    }else{
      setSubmitReady(false)
    }
    
  }, [formValues])

  useEffect(()=>{
    setPrice(
      Number(Prices[(formValues.size)] + (((
        Object.keys(formValues.top).filter((topping)=>{
          return formValues.top[topping]
        }).length - 2) * 2.85))
      ).toFixed(2)
    )
  },[formValues])

  return (
    <>
    <Route exact path='/'>
    <div className='container'>
      <div className='banner'><h1>Order Pizza Now</h1></div>
      <Link to='/pizza'>
      <button>ORDER PIZZA NOW!</button>
      </Link>
    </div>
    </Route>
    <Route path='/pizza'>
      <Form prices={prices} submitReady={submitReady} price={price} onSubmit={onSubmit} formValues={formValues} onInputChange={onInputChange}></Form>
    </Route>
    <Route path='/thankyou'>
      <ThankYouPage/>
    </Route>
    </>
  );
};
export default App;
