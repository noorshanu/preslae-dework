import React from "react";

function Claim() {

  return (
    <section className="cta">
      <div className="container">
        <div className="text-center">
          <h2 className=" head-cta">How To Claim?</h2>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <div className=" cta-new-box">
              <div className="cta-details">
                <p className="p-light text-center">Step-1</p>
                <h2 className="text-center">Create MetaMask wallet</h2>
                <p className="cta-p">
                  Create a MetaMask Wallet using either a desktop computer or an
                  iOS/Android mobile device. That will allow you to buy, sell,
                  send, and receive $Dlance .
                </p>
                <p className="cta-p">
                  To start with, ensure you have a MetaMask wallet installed on
                  your browser in order to connect your wallet to the platform.
                </p>
                <p className="cta-p">
                  If you are purchasing on mobile, we recommend using Trust
                  Wallet and connecting through the in built browser (just copy
                  presale link into the Trust Wallet Browser).
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div className=" cta-new-box">
              <div className="cta-details">
                <p className="p-light text-center">Step-2</p>
                <h2 className="text-center">Send ETH to your wallet</h2>
                <p className="cta-p">
                  You can buy Ethereum (ETH) directly on MetaMask or transfer it
                  to your MetaMask Wallet from exchanges like Coinbase, Binance,
                  etc. Make sure to use the ERC-20 network when transferring
                  ETH.
                </p>
                <p className="cta-p">
                  Once you’ve connected your wallet, you’ll be able to purchase
                  with ETH{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-1"></div>
        </div>

        <div className="second">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <div className=" cta-new-box">
                <div className="cta-details">
                  <p className="p-light text-center">Step-3</p>
                  <h2 className="text-center">Add $Dlance into Metamask Wallet</h2>
                  <p className="cta-p">
                    Access your $Dlance token in your metamask click on the
                    custom token and paste the contract address and you will get
                    $Dlance in your Metamask wallet.
                  </p>
                </div>
              </div>
            </div>
          
          <div className="col-md-5">
            <div className=" cta-new-box">
              <div className="cta-details">
                <p className="p-light text-center">Step-4</p>
                <h2 className="text-center">Swap ETH for $Dlance</h2>
                <p className="cta-p">
                  You can start swapping as soon as you have ETH available!{" "}
                </p>
                <p className="cta-p">
                  Type in the amount of $Dlance you wish to purchase and then
                  click“Convert ETH”. Your wallet provider will ask you to
                  confirm the transaction and will also show you the cost of gas
                  fee .{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Claim;