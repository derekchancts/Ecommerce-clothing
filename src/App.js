// import React, { useState, useEffect } from 'react';
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign/sign';

import { auth, createUserProfileDocument } from './firebase/firebase';


/*
function App() {

  const [currentUser, setCurrentUser] = useState(null);


  useEffect(() => {
   let unsubscribe = auth.onAuthStateChanged(async userAuth => {

    // if (userAuth.isInitializing || userAuth.user === null) return;

    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);  
     
      userRef.onSnapshot(snapshot => {
        // console.log(snapshot.data(), snapshot.id)
        setCurrentUser({
          id: snapshot.id,
          ...snapshot.data()
        })
      })
    //  user ? setCurrentUser(user) : setCurrentUser(null); 
    //  console.log(user)
    }

    return () => {
      unsubscribe();
    }

    });
  })


  // useEffect(() => {
  //   console.log(currentUser)
  //  }, [currentUser])


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

*/



class App extends Component {

  state = {
    currentUser: null
  }


  unsubscribeFromAuth = null;


  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);  
       
        userRef.onSnapshot(snapshot => {
         //  console.log(snapshot.data(), snapshot.id)

          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
          // }, () => { console.log(this.state.currentUser) })
          console.log(this.state.currentUser);
        })
        
      }
      else {
        this.setState({ currentUser: userAuth });
        console.log(this.state.currentUser);
      }
    })
  }  


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
    

  render() {
    return (
      <>
        <Router>
          <Header currentUser={this.state.currentUser} />
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


export default App;

