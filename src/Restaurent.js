import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Restaurent() {

   const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13];
    return (
        <div>
            <Navbar />
            <div className='container my-3'>
            <div className='row g-3 '>
               { 
                  arr.map((intex)=>{
                    return <div class="card mx-3 col-md-3" style={{width: "18rem"}}>
                    <img src="./login1.jpg" class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                
                  })
                 
               }
               </div>
                
            </div>
            <Footer />
        </div>
    )
}

export default Restaurent
