import React from "react";

function State() {
  return (
    <div className="container mt-5">
      <div className="row p-5">
        <div className="col-6 mr-5">
            <h2 className="mt-5">Trust with confidence</h2>
            <h4 className="mt-5 text-muted">Customer-first always</h4>
            <p style={{fontSize:"18px"}} className="mt-3 text-muted">That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>


            <h4  className="mt-4 text-muted">No spam or gimmicks</h4>
            <p style={{fontSize:"18px"}} className="mt-3 text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>


            <h4  className="mt-4 text-muted">The Zerodha universe</h4>
            <p style={{fontSize:"18px"}} className="mt-3 text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>


            <h4 className="mt-4 text-muted">Do better with money</h4>
            <p style={{fontSize:"18px"}} className="mt-3 text-muted">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
        </div>
        <div className="col-6 p-2 ml-5">
            <img src="media/ecosystem.png " style={{width:"100%"}}/>
<div className="ml-5 p-3">
<a className="p-5" style={{textDecoration:"none"}} href="">Explore our products  <i class="fa-solid fa-arrow-right"></i></a>

<a className="mx-2" style={{textDecoration:"none"}} href="">Try Kite demo  <i class="fa-solid fa-arrow-right"></i></a>
</div>
            
        </div>
      </div>
    </div>
  );
}

export default State;
