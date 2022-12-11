import React from "react";

function Cta() {
  return (
    <section className="cta">
      <div className="container">
        <div className="text-center">
          <h2 className=" head-cta">How do you buy</h2>
        </div>
        <div className="cta-box">
          <div className="">
            <div className="cta-details">
            <p className="p-light">Step-1</p>
            <h2>Create MetaMask wallet</h2>
            <p  className="cta-p">
              Create a MetaMask Wallet using either a desktop computer or an
              iOS/Android mobile device. That will allow you to buy, sell, send,
              and receive $Dlance .
            </p>
            <p  className="cta-p">
              To start with, ensure you have a MetaMask wallet installed on your
              browser in order to connect your wallet to the platform.
            </p>
            <p  className="cta-p">
              If you are purchasing on mobile, we recommend using Trust Wallet
              and connecting through the in built browser (just copy presale
              link into the Trust Wallet Browser).
            </p>
          </div>
          <div className="cta-details">
            <p className="p-light">Step-2</p>
            <h2>Send ETH to your wallet</h2>
            <p  className="cta-p">
              You can buy Ethereum (ETH) directly on MetaMask or transfer it to
              your MetaMask Wallet from exchanges like Coinbase, Binance, etc.
              Make sure to use the ERC-20 network when transferring ETH.
            </p>
            <p  className="cta-p">
              Once you’ve connected your wallet, you’ll be able to purchase with
              ETH{" "}
            </p>
          </div>
          </div>
          <div>
            <img
              src="https://ik.imagekit.io/cforcrypto/image_10.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670618179808"
              alt=""
            />
          </div>
          <div>
            <div className="cta-details">
              <p className="p-light">Step-3</p>
              <h2>Add $Dlance into Metamask Wallet</h2>
              <p  className="cta-p">
                Access your $Dlance token in your metamask click on the custom
                token and paste the contract address and you will get $Dlance in
                your Metamask wallet.
              </p>
            </div>
            <div className="cta-details">
              <p className="p-light">Step-4</p>
              <h2>Swap ETH for $Dlance</h2>
              <p  className="cta-p">You can start swapping as soon as you have ETH available! </p>
              <p  className="cta-p">
                Type in the amount of $Dlance you wish to purchase and then
                click“Convert ETH”. Your wallet provider will ask you to confirm
                the transaction and will also show you the cost of gas fee .{" "}
              </p>
            </div>
            <div className="cta-details">
          <h2 className="p-light">How to Claim </h2>
          <p className="cta-p">Once the presale has ended, you’ll be able to head over to the claim button to claim your purchased Dlance token . </p>
        </div>
           
          </div>
        
        </div>
     
      </div>
    </section>
  );
}

export default Cta;
