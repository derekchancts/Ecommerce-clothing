import React, { Component } from 'react'
import './sign-in.scss'
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { withRouter } from "react-router";

import { auth, signInWithGoogle } from '../../firebase/firebase';

 
class SignIn extends Component {

  state = {
    email: '',
    password: ''
  }


  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });

      // console.log(this.props)
      // this.props.history.push('/')

    } catch (error) {
      console.log(error)
    }
    
  }


  handleChange = (e) => {
    // this.setState({
    //   [e.target.name]: e.target.value
    // })

    const { value, name } = e.target;
    this.setState({
      [name]: value
    })
  }


  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email" 
            type="email" 
            value={this.state.email} 
            required 
            handleChange={this.handleChange}
            label="email" 
          />
          {/* <label>Email</label> */}
          <FormInput 
            name="password" 
            type="password" 
            value={this.state.password} 
            required 
            handleChange={this.handleChange}
            label="password"
          />
          {/* <label>Password</label> */}
          {/* <input type="submit" value="Submit Form" /> */}
          <div className="buttons">
            <CustomButton type="submit"> Sign in </CustomButton>
            <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn > Sign in with Google </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}


export default withRouter(SignIn)
