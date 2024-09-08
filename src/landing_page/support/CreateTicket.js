import React from "react";

function CreateTicket() {
  return (
    <div className="container" style={{ marginLeft:"13rem", marginTop:"5rem", marginBottom:"5rem"}}>
      <div className="row mt-5 ">
        <h3 className=" mb-5 fs-4 text-muted">To create a ticket, select a relevant topic</h3 >

        <div className="col-4 createticket">
          <h5 style={{fontWeight:"normal"}}><i class="fa-solid fa-circle-plus"></i>Account Opening</h5>
          <a href="">Getting started</a> <br></br>
          <a href=""> Online</a> <br></br>
          <a href=""> Offline</a> <br></br>
          <a href=""> Charges</a> <br></br>
          <a href=""> Company, Partnership and HUF</a> <br></br>
          <a href=""> Non Resident Indian (NRI) </a>
        </div>
        <div className="col-4 createticket">
          <h5 style={{fontWeight:"normal"}}> <i class="fa-regular fa-user"></i> Your Zerodha Account</h5>
          <a href=""> Login credentials</a> <br></br>
          <a href="">Your Profile</a> <br></br>
          <a href=""> Charges</a> <br></br>
          <a href=""> Account modification and segment addition</a> <br></br>
          <a href=""> CMR & DP ID </a>
          <a href=""> Nomination </a>
          <a href=""> Transfer and conversion of shares </a>
        </div>
        <div className="col-4 createticket">
          <h5 style={{fontWeight:"normal"}}><i class="fa-solid fa-star"></i>  Trading and Markets</h5>
          <a href=""> Trading FAQs</a> <br></br>
          <a href="">Margins</a> <br></br>
          <a href="">Product and order types</a> <br></br>
          <a href=""> Corporate actions</a> <br></br>
          <a href="">Kite features</a>
        </div>
      </div>
      <div className="row mt-5">
      <div className="col-4 createticket">
          <h5 style={{fontWeight:"normal"}}><i class="fa-regular fa-credit-card"></i>    Funds</h5>
          <a href=""> Fund withdrawal</a> <br></br>
          <a href="">Adding funds</a> <br></br>
          <a href=""> Adding bank accounts</a> <br></br>
          <a href=""> eMandates</a> <br></br>
         
        </div>
        <div className="col-4 createticket">
          <h5 style={{fontWeight:"normal"}}><i class="fa-solid fa-circle"></i> Console
          </h5>
          <a href=""> IPO</a> <br></br>
          <a href=""> Protfolio</a> <br></br>
          <a href=""> Falnds statement</a> <br></br>
          <a href=""> Profile</a> <br></br>
          <a href=""> Reports</a>
        </div>
        <div className="col-4 createticket">
          <h5 style={{fontWeight:"normal"}}><i class="fa-solid fa-coins"></i>  Coin</h5>
          <a href=""> Understanding mutual funds and Coin</a> <br></br>
          <a href=""> Coin app</a> <br></br>
          <a href="">Coin web</a> <br></br>
          <a href=""> Transactions and reports</a> <br></br>
          <a href=""> National Pension Scheme (NPS) </a>
        </div>

      </div>
    </div>
  );
}

export default CreateTicket
