import React from 'react'
import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';
function Home() {
    return (
        <div>
            <Navbar />
            <section className='main'>
                <div className='container top-text middle'>
                    <h1>Find Your Restaurent Near to You </h1>
                    <div className='userForm'>
                        <form >
                            <div className="input-group formItem flex-nowrap">
                                {/* <span className="input-group-text" id="city">City Name</span> */}
                                <input type="text" className="form-control" placeholder="City" />
                            </div>
                            <div className="input-group formItem flex-nowrap">
                                {/* <span className="input-group-text" id="addon-wrapping">@</span> */}
                                <input type="text" className="form-control" placeholder="State" />
                            </div>
                            <div className="input-group formItem flex-nowrap">
                                {/* <span className="input-group-text" id="addon-wrapping">@</span> */}
                                <input type="text" className="form-control" placeholder="PinCode" />
                            </div>
                            <div className="d-grid input-group flex-nowrap formItem gap-2">
                                <button className="btn btn-primary" type='submit'>Search Restaurent</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Home
