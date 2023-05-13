import React, { useState } from 'react';
import { LoginData, RegisterData } from '../../../Service/Utility';
import './SignUpCard.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUpCard() {
  //click feature
  const [isSignInForm, setIsSignInForm] = useState(true);
  //arranging values in state
  const [signInData, setSignInData] = useState({ email: '', password: '' }); 
  //arranging values in state
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '' });
  //for color alteration
  const [activeButton, setActiveButton] = useState('Sign in');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignInForm) {
      console.log('Sign in data:', signInData);
  
      /*Sending Login Details*/
      try {
        const response = await LoginData(signInData);
        console.log(response);
        sessionStorage.setItem('email',response.email)
        sessionStorage.setItem('Authorization',response.jwtToken)
        console.log(response.email)
        console.log(response.jwtToken)
        console.log('Login success'); 
        toast.success("Login Success",{
          position: toast.POSITION.TOP_RIGHT
        });
  
        // Store JWT token in local storage
        if (response && response.token) {
          console.log(response.email);
          console.log(response.jwtToken);
          sessionStorage.setItem('Authorization', response.token);
        }
  
      } catch (error) {
        console.log(error);
        console.log('Login fail');
        toast.error("Login Failed",{
          position: toast.POSITION.TOP_RIGHT
        });
      }
    } else {
      console.log('Register data:', registerData);
  
      //Sending Registration Details
      try {
        const response = await RegisterData(registerData);
        console.log(response);
        console.log('Registration success');
        toast.success("Registration Success",{
          position: toast.POSITION.TOP_RIGHT
        });
        setTimeout(() => {
          toast.warning("You need to Sign in now",{
            position: toast.POSITION.TOP_RIGHT
          });
        }, 6370);

      } catch (error) {
        console.log(error);
        console.log('Registration fail');
        toast.error("Registration Failed",{
          position: toast.POSITION.TOP_RIGHT
        });
      }
    }
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (isSignInForm) {
      setSignInData((prevData) => ({ ...prevData, [name]: value }));
    } else {
      setRegisterData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    setIsSignInForm(buttonName === 'Sign in');
    const url = buttonName === 'Sign in' ? '/signIn' : '/register';
    window.history.pushState(null, null, url);
  };

  // brings signup card to right side
  const style ={
    signUp:{
      right: '1px',
      top : '60px',
      position: 'absolute',
    }
  }

  return (
    <div className="form-container" style={style.signUp}>
      <ToastContainer/>
      <div className="form-tabs">
        <button
          className={isSignInForm ? 'active' : ''}
          onClick={() => handleButtonClick('Sign in')}
        >
          Sign in
        </button>
        <button
          className={!isSignInForm ? 'active' : ''}
          onClick={() => handleButtonClick('Register')}
        >
          Register
        </button>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        {isSignInForm ? (
          <>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={signInData.email}
              onChange={handleInputChange}
              required
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={signInData.password}
              onChange={handleInputChange}
              required
            />
          </>
        ) : (
          <>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={registerData.name}
              onChange={handleInputChange}
              required
            />
            <br />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={registerData.email}
              onChange={handleInputChange}
              required
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={registerData.password}
              onChange={handleInputChange}
              required
            />
          </>
        )}
        <br />
        <button id='btnSubmit' type="submit">{isSignInForm ? 'Sign in' : 'Register'}</button>
      </form>
    </div>
  );
}
