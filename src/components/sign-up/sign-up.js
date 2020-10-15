// import React, { Component } from 'react'
import React, { useState } from 'react'
import './sign-up.scss'
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

// import { auth, createUserProfileDocument } from '../../firebase/firebase';

import { connect } from 'react-redux'
import { signUpStart } from '../../redux/user/user-actions'



const SignUp = ({ signUpStart }) => {

// class SignUp extends Component {

  // state = {
  //   displayName: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: ''
  // }

  const [userCredentials, setCredentials] = useState({ 
    displayName: '', 
    email: '', 
    password: '', 
    confirmPassword: ''
  });


  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const { displayName, email, password, confirmPassword } = this.state;
    // const { signUpStart } = this.props;

    signUpStart(displayName, email, password, confirmPassword)

    // if(password !== confirmPassword) {
    //   alert("passwords don't match");
    //   return;
    // }

    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(email, password);

    //   await createUserProfileDocument( user, { displayName } );

    //   this.setState({
    //     displayName: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: ''
    //   })

    // } catch (error) {
    //   console.error(error);
    // }

  }



  const handleChange = (e) => {
    // this.setState({
    //   [e.target.name]: e.target.value
    // })

    setCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value
    })

    // const { value, name } = e.target;
    // this.setState({
    //   [name]: value
    // })
  }


  // render() {

    // const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type="submit"> Sign Up </CustomButton>

        
        </form>
      </div>
    )
  // }
}



const mapDispatchToProps = dispatch => ({
  signUpStart: (displayName, email, password, confirmPassword) => 
    dispatch(signUpStart({ displayName, email, password, confirmPassword }))
})

export default connect(null, mapDispatchToProps)(SignUp)
