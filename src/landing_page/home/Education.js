import React from "react";

function Education() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 mb-5">
          <img style={{width:"70%"}} src="media/education.svg" className="mb-5"/>
        </div>
        <div className="col-6 mt-5">
          <h4 className="mt-5 mb-4">Free and open market education</h4>
          <p style={{fontSize:"17px"}} className="">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a className=" mt-3 mb-4" style={{textDecoration:"none"}} href="">Varsity<i class="fa-solid fa-arrow-right"></i></a>

          <p className="mt-4" style={{fontSize:"17px"}}>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a className=" mt-3 mb-4" style={{textDecoration:"none"}} href="">TradingQ&A<i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Education
