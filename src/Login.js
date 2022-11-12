import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './Login.css';
import { Link } from 'react-router-dom';
function Login() {
    return (
        <div>
            <Navbar />
            <section className='login-main'>
                <div className='container login-middle '>
                    <h1>Login Form </h1>
                    <div className='container login-input'>
                        <input class="form-control input-item" type="text" placeholder="Email or Phone" />
                        <input class="form-control input-item" type="text" placeholder="Password" />

                        <div class="pass">
                            <a href="#" class="text-decoration-none pass">Forgot Password?</a>
                        </div>
                        {/* <div class="d-grid gap-2">
                            <button class="btn btn-primary" type="button">Button</button>

                        </div> */}

                        <button type="button" class="btn2 btn-primary">LOGIN</button>
                        <div class="signup">Don't have account ? 
                            <Link to="/signUp" class="text-decoration-none pass">Signup Now</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Login
