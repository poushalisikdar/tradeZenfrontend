import React from "react";
function Hero() {
  return (
    <div className="container ">
      <div style={{ marginTop: "6rem" }} className="row text-center ">
        <h1 className="fs-2 text-center mb-5 p-5  ">
          We pioneered the discount broking model in India.<br></br> Now, we are
          breaking ground with our technology.
        </h1>
      </div>

      <div className="row border-top pricinghero ">
        <div className="col-6 mt-5">
          <p className="mt-2 p-5">
           <p>We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.</p> <p>Today, our disruptive pricing models and in-house
            technology have made us the biggest stock broker in India.</p> <p> Over 1+
            Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.</p>
          </p>
        </div>
        <div className="pricinghero col-6  mt-5">
          <p className="mt-2 p-5 pricing">
            <p> In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.</p>
           
           <p><a href="">Rainmatter</a> , our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.</p> <p>And yet, we are always up to something new every day. Catch
            up on the latest updates on our <a href="">blog </a> or see what the media is <a href="">saying about us.</a></p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero
