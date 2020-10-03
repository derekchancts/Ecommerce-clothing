// import React, { useState, useEffect } from 'react';
import React, { Component } from 'react';
import './App.css';
// import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import {  Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign/sign';

import { auth, createUserProfileDocument } from './firebase/firebase';
import { connect } from 'react-redux';

import { setCurrentUser } from './redux/user/user-actions'
import { selectCurrentUser } from './redux/user/user-selectors'
import CheckoutPage from './pages/checkout/checkout';


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
  // state = {
  //   currentUser: null
  // }

  unsubscribeFromAuth = null;


  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);  
       
        userRef.onSnapshot(snapshot => {
         //  console.log(snapshot.data(), snapshot.id)

          // this.setState({
          //   currentUser: {
          //     id: snapshot.id,
          //     ...snapshot.data()
          //   }
          // })

          // const user = {
          //     id: snapshot.id,
          //     ...snapshot.data()
          // }
          // this.props.setCurrentUser(user)

          setCurrentUser({
               id: snapshot.id,
             ...snapshot.data()
          })
          // console.log(this.state.currentUser);
        })
        
      }
      else {
        // this.setState({ currentUser: userAuth });
        // console.log(this.state.currentUser);
        setCurrentUser(userAuth)
      }
    })
  }  


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
    

  render() {

    return (
      <>
        {/* <Router> */}
          {/* <Header currentUser={this.state.currentUser} /> */}
          <Header />
          <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/shop' component={ShopPage} />
              <Route exact path='/checkout' component={CheckoutPage} />
              {/* <Route path='/signin' component={SignInAndSignUpPage} /> */}
              <Route exact path='/signin' 
                render={() => this.props.currentUser ? 
                (<Redirect to='/' />) : (<SignInAndSignUpPage />) } />
          </Switch>
        {/* </Router> */}
      </>
    );
  }

}


// const mapStateToProps = (state) => ({
//   currentUser: state.user.currentUser
// })

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
})


const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);

