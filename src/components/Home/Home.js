import React, { useState } from "react";
import "./Home.css";
// import {BsCheck2All} from 'react-icons/bs'
import Cta from './Cta'
import Claim from "./Claim";

function Home() {
  const [popUp,setPopup]=useState(false)
  return (
    <section className="main-page">
      <div className="container">
        <div className="over-box">
          <div className="over-sub-box">
            <h1>Presale overview</h1>

            <p>
              We want to revolutionize the traditional world of Freelancing. in
              web3 freelancing will provide endless opportunities in the future.
              That's why we started Deelance to contribute to the movement of
              creating a secure and sustainable future for the gig economy. The
              freelancers experience many roadblocks and obstacles that may
              affect their livelihood.
            </p>
          </div>
        </div>

        <div className="row justify-content-center align-items-center presale-section"  >
          <div className="col-md-1">
            
          </div>
          <div className="col-md-5">
            <div className="pre-box-1">
            <div className="head-bar">
              <div className="fill-bar">

              </div>
              <img src="https://ik.imagekit.io/cforcrypto/fire.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1670610000640" alt="" className="fire-1"/>
              <img src="https://ik.imagekit.io/cforcrypto/Group_64.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670610001237" alt="" className="bullet-1"/>
            </div>
              <div className="pre-box-2">
                
                <div className="head-title text-center">
                  <h3>Round-1</h3>

                  <span className="span-btn">$250 min / $20,000 max</span>

                  <p>Deelance Official Contracts</p>
                </div>
                <div className="price-box text-center">
                  <h1>
                    $ 0.018 <span className="sp-white">/$DLANCE</span>
                  </h1>
                  <p>11/23/2022 to 12/7/2022</p>
                  <p>Raise xxxx out of $540,000 / Sold out of 30,000,000</p>
                </div>
                {/* <div className="list-box">
                  <p>Investors in this round will get :</p>
                  <p className="p-light"><BsCheck2All className="check"/> Token Allocated</p>
                  <h6>  30,000,000</h6>
                  <p className="p-light"> <BsCheck2All className="check"/>Token will be available on vesting period and will be available once sale end</p>
                  <h6>Vesting for 2 months</h6>
                  <p className="p-light" ><BsCheck2All  className="check" />Released  25% every 15days</p>
                  <h6>on stacking pools</h6>
                  <p className="p-light"> <BsCheck2All  className="check"/>EARLY ACCESS</p>
                  <h6>to the 1st NFT drops</h6>
                </div> */}
                <div className="text-center align-items-center d-flex jsa ">
                  <a href="/" className="p1-btn">Buy Now!</a>
                  <div className={popUp?"popup":'popup-show'}>
                    <div className="pop-box">
                    <p>schedule 1</p>
                    <p>schedule 2</p>
                    <p>schedule 3</p>
                    <p>schedule 4</p>

                    </div>
                    

                  </div>
                  <a href="#pop" className="p1-btn" onClick={()=>setPopup(!popUp)}>Claim</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">

          <div className="pre-box-1">
          <div className="head-bar">
              {/* <div className="fill-bar">

              </div> */}
              <img src="https://ik.imagekit.io/cforcrypto/fire.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1670610000640" alt="" className="fire2"/>
              <img src="https://ik.imagekit.io/cforcrypto/Group_64.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670610001237" alt="" className="blt-2"/>
            </div>
              <div className="pre-box-2">
                
                <div className="head-title text-center">
                  <h3>Round-2</h3>

                  <span className="span-btn">$250 min / $20,000 max</span>

                  <p>Deelance Official Contracts</p>
                </div>
                <div className="price-box text-center">
                  <h1>
                  $ 0.012 <span className="sp-white">/ $DLANCE</span>
                  </h1>
                  <p>12/7/2022 to 1/4/2023</p>
                </div>
                {/* <div className="list-box">
                  <p>Investors in this round will get :</p>
                  <p className="p-light"><BsCheck2All  className="check"/>Token Allocated</p>
                  <h6>330,000,000</h6>
                  <p className="p-light"><BsCheck2All  className="check"/>Token will be available once sale ends</p>
                  <h6>iStripper Trading Card - Epic edition</h6>
                  <p className="p-light"><BsCheck2All  className="check"/>AIRDROP</p>
                  <h6>iStripper Trading Card - Epic edition</h6>
                </div> */}

                <div className="text-center jsa2">
                  <a href="/" className="r2-btn">Coming soon..</a>
                </div>
                {/* <p className="day">0 Days, 3 Hours, 43 Minutes, 4 Seconds</p> */}
              </div>
            </div>
          </div>
          <div className="col-md-1">

          </div>
        </div>
      </div>
      <Cta/>
      <Claim/>
    </section>
  );
}

export default Home;
