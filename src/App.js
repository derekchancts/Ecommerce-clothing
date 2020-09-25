import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';


// const HatsPage = () => (
//   <div>
//     <h1>Hats</h1>
//   </div>          
// )

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </BrowserRouter>
    </>
  );
}

export default App;
