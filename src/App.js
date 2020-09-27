import React, { useState, useEffect } from 'react';
// import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign/sign';

import { auth } from './firebase/firebase';




function App() {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
   let unsubscribe = auth.onAuthStateChanged(user => {
     user ? setCurrentUser(user) : setCurrentUser(null);
      
    console.log(user)
    })
    return () => {
      unsubscribe();
    }
  });



  return (
    <>
      <Router>
        <Header currentUser={currentUser} />
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </Router>
    </>
  );

}



/*

class App extends Component {

  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;


  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      })
      
      console.log(user)
    }
  )}  


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
    

  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/shop' component={ShopPage} />
              <Route path='/signin' component={SignInAndSignUpPage} />
          </Switch>
        </Router>
      </>
    );
  }

}
*/

export default App;

