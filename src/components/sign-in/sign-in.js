// import React, { Component } from 'react'
import React, { useState } from 'react'
import { connect } from 'react-redux'

import './sign-in.scss'
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { withRouter } from "react-router";

// import { auth, signInWithGoogle } from '../../firebase/firebase'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user-actions'

 
const SignIn = (props) => {

// class SignIn extends Component {

  // state = {
  //   email: '',
  //   password: ''
  // }

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [userCredentials, setCredentials] = useState({ email: '', password: ''});


  const { email, password } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { emailSignInStart } = props;

    // const { email, password } = this.state;
    
    emailSignInStart(email, password)


    /*
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });

      // console.log(this.props)
      // this.props.history.push('/')

    } catch (error) {
      console.log(error)
    }*/
    
  }


  const handleChange = (e) => {
    // this.setState({
    //   [e.target.name]: e.target.value
    // })

    const { name, value } = e.target;
    // this.setState({
    //   [name]: value
    // })

    setCredentials({
      ...userCredentials,
      [name]: value
    })

    // setCredentials({
    //   ...userCredentials,
    //   [e.target.name]: e.target.value
    // })
  }


  // render() {
    const { googleSignInStart } = props;

    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput 
            name="email" 
            type="email" 
            // value={userCredentials.email} 
            value={email} 
            required 
            // handleChange={(e) => setEmail(e.target.value)}
            handleChange={handleChange}
            label="email" 
          />
          {/* <label>Email</label> */}
          <FormInput 
            name="password" 
            type="password" 
            // value={userCredentials.password} 
            value={password} 
            required 
            // handleChange={(e) => setPassword(e.target.value)}
            handleChange={handleChange}
            label="password"
          />
          {/* <label>Password</label> */}
          {/* <input type="submit" value="Submit Form" /> */}
          <div className="buttons">
            <CustomButton type="submit"> Sign in </CustomButton>
            {/* <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn > Sign in with Google </CustomButton> */}
            <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn > Sign in with Google </CustomButton>
          </div>
        </form>
      </div>
    )
  // }
}


const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})


export default connect(null, mapDispatchToProps)(withRouter(SignIn))
