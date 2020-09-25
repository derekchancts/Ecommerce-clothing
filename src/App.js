import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';


// const HatsPage = () => (
//   <div>
//     <h1>Hats</h1>
//   </div>          
// )

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
