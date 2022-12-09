import React from "react";
import "./Home.css";
import {BsCheck2All} from 'react-icons/bs'
import Cta from './Cta'

function Home() {
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
          <div className="col-md-6">
            <div className="pre-box-1">
              <div className="pre-box-2">
                <div className="head-bar">bar</div>
                <div className="head-title text-center">
                  <h3>Round-1</h3>

                  <span className="span-btn">$250 min / $20,000 max</span>

                  <p>Deelance Official Contracts</p>
                </div>
                <div className="price-box text-center">
                  <h1>
                    $ 0.008 <span className="sp-white">/ Dolz</span>
                  </h1>
                  <p>11/23/2022 to 12/7/2022</p>
                </div>
                <div className="list-box">
                  <p>Investors in this round will get :</p>
                  <p><BsCheck2All/> Airdrop</p>
                  <span> <BsCheck2All/> VRParadise NFT - Legendary edition</span>
                  <p>AIRDROP</p>
                  <span>iStripper Trading Card - Legendary edition</span>
                  <p>BOOSTED APRs</p>
                  <span>on stacking pools</span>
                  <p>EARLY ACCESS</p>
                  <span>to the 1st NFT drops</span>
                </div>
                <div className="text-center align-items-center ">
                  <a href="/" className="p1-btn">Buy Now!</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">

          <div className="pre-box-1">
              <div className="pre-box-2">
                <div className="head-bar">bar</div>
                <div className="head-title text-center">
                  <h3>Round-1</h3>

                  <span className="span-btn">$250 min / $20,000 max</span>

                  <p>Deelance Official Contracts</p>
                </div>
                <div className="price-box text-center">
                  <h1>
                    $ 0.008 <span className="sp-white">/ Dolz</span>
                  </h1>
                  <p>11/23/2022 to 12/7/2022</p>
                </div>
                <div className="list-box">
                  <p>Investors in this round will get :</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cta/>
    </section>
  );
}

export default Home;
