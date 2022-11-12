import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import './Login.css';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div>
      <Navbar />
      <section className='login-main'>
                <div className='container login-middle '>
                    <h1>Login Form </h1>
                    <div className='container login-input'>
                        <input class="form-control input-item" type="text" placeholder="Email or Phone" />
                        <input class="form-control input-item" type="text" placeholder="Password" />
                        <input class="form-control input-item" type="text" placeholder=" ConfirmPassword" />
                        {/* <div class="d-grid gap-2">
                            <button class="btn btn-primary" type="button">Button</button>

                        </div> */}

                        <button type="button" class="btn2 btn-primary">SIGNUP</button>
                        <div class="signup">Already have account ? 
                            <Link to="/login" class="text-decoration-none pass">Login</Link>
                        </div>
                    </div>
                </div>
            </section>
      <Footer />
    </div>
  )
}

export default SignUp
