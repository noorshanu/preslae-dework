import React from 'react'

// import {BsCheck2All} from 'react-icons/bs'
import Cta from '../Home/Cta'
import { NavLink } from "react-router-dom";
function PrivateSale() {
  return (
    <>
    <section className="main-page">
      <div className="container">
  

        <div className="row justify-content-center align-items-center presale-section"  >
          <div className="col-md-1">
            
          </div>
          <div className="col-md-5">
          <div className="head-bar">
              <div className="fill-bar">

              </div>
              <img src="https://ik.imagekit.io/cforcrypto/fire.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1670610000640" alt="" className="fire-1"/>
              <img src="https://ik.imagekit.io/cforcrypto/Group_64.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670610001237" alt="" className="bullet-1"/>
            </div>
            <div className="pre-box-1">
      
              <div className="pre-box-2">
                
                <div className="head-title text-center">
                  <h3>Private Sale</h3>

                  <span className="span-btn">$250 min / $20,000 max</span>

                  <p>Deelance Official Contracts</p>
                </div>
                <div className="price-box text-center">
                  <h1>
                    $ 0.018 <span className="sp-white">/$DLANCE</span>
                  </h1>
                  <p>24 HOURS, 38 MINUTES, 51 SECONDS Remaining</p>
                  <p>Raise $230,000 out of $540,000 / 15,000,00 Sold out of 30,000,000</p>
                </div>
                <div>
                  <h3>You already bought:</h3>
                  <p>$dlance</p>
                </div>
                <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
  </div>
  </form>
          
                <div className="text-center align-items-center d-flex jsa ">
                  <NavLink to="/private-sale" className="p1-btn" >Buy Now</NavLink>
             
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
          <div className="head-bar">
            
            <img src="https://ik.imagekit.io/cforcrypto/fire.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1670610000640" alt="" className="fire2"/>
            <img src="https://ik.imagekit.io/cforcrypto/Group_64.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670610001237" alt="" className="blt-2"/>
          </div>
          <div className="pre-box-1">
         
              <div className="pre-box-2">
                
                <div className="head-title text-center">
                  <h3>PreSale</h3>

                  <span className="span-btn">$250 min / $20,000 max</span>

                  <p>Deelance Official Contracts</p>
                </div>
                <div className="price-box text-center">
                  <h1>
                  $ 0.012 <span className="sp-white">/ $DLANCE</span>
                  </h1>
                  <p>12/7/2022 to 1/4/2023</p>
                </div>
               

                <div className="text-center jsa2">
                  <a href="/" className="r2-btn">Coming soon..</a>
                </div>
              
              </div>
            </div>
          </div>
          <div className="col-md-1">

          </div>
        </div>
      </div>
    </section>
      <Cta/>
    </>

  )
}

export default PrivateSale