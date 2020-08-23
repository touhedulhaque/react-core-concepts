import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Rucula Salat', 'Burata Salat', 'Tomate-Mozzarela', 'House-Salat', 'Mix-salat', 'Basic-Salat']

  const products = [
    { name: 'Pizza', food: 'Margarita', price: '8.95 Euro' },
    { name: 'Pizza', food: '4 Season', price: '10.95 Euro' },
    { name: 'Pizza', food: 'Calabria', price: '9.95 Euro' },
    { name: 'Pizza', food: 'San Marino', price: '12.95 Euro' },
    { name: 'Pizza', food: 'Norcia', price: '14.95 Euro' },
    { name: 'Pasta', food: 'Camarã Nero', price: '12.95 Euro' },
  ]



  return (
    <div className="App">
      <header className="App-header">
        <h1>Products List</h1>

      <Counter></Counter>
      <Users></Users>


        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          
        </ul>

        {
          products.map(pd =><Product products={pd}></Product> )
        }


       
        <h1>Lists of People</h1>
        <Person name="Rubel Bhuyian" job="Pizzaolo" exp="5 years"></Person>
        <Person name="Imdadul haque" job="Pizzaolo" exp="3 years"></Person>
        <Person name="Touhedul Haque" job="Waiter" exp="5 years"></Person>
        <Person name="Israt Jahan" job="Sandwich Maker" exp="1 year"></Person>
        <Person name={nayoks[1]} job="actor" exp="2 year"></Person>


      </header>
    </div>
  );
}
const buttonStyle = {
  display: 'inline-block',
  padding: '15px 25px',
  fontSize: '24px',
  cursor: 'pointer',
  textAlign: 'center',
  textDecoration: 'none',
  outline: 'none',
  color: '#fff',
  backgroundColor: '#4CAF50',
  border: 'none',
  borderRadius: '15px',
  boxShadow: '0 9px #999',
}

function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = ()=>setCount(count+1);
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button style={buttonStyle} onClick = {()=>setCount(count-1)}>Decrease</button>
      <br/>
      <br/>
      <button style={buttonStyle} onClick = {()=>setCount(count+1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h3>Dynamic Customers: {users.length}</h3>
      <ul>
        {
          users.map(user => 
          <li>{user.name}, {user.email} </li>
          
          
          )
        }
      </ul>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    color: 'black',
    border: '2px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '350px',
    width: '250px',
    float: 'left',
    marginBottom: '10px'

  }

  
  
  const { name, food, price } = props.products;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{food}</h5>
      <h3>{price}</h3>
      <button style={buttonStyle}>Buy Now</button>
    </div>
  )
}




function Person(props) {
  const personStyle = {

    border: '15px solid lightsalmon',

    margin: '10px',


  }

  return (
    <div style={personStyle}>
      <div style={{ border: '50px solid lightyellow', margin: '1px', padding: '8px', color: 'skyblue' }}>
        <h1>{props.name}</h1>
        <h3>Profession: {props.job}</h3>
        <h4>Year of Exp: {props.exp}</h4>
      </div>
    </div>
  )
}

export default App;
