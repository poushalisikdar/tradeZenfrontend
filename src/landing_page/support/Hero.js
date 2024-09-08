import React from "react";
function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 mt-5 mb-3" id="supportwrapper">
        <h4 className="mt-5">Support Portal</h4>
        <a style={{color:"white"}} href="">Track Tickets</a>
      </div>
      <div className="row supp ">
        <div className="col-6 mb-5">
            <h4>Search for an answer or browse help topics to create a <br></br>ticket</h4>
            <input placeholder="Eg: how do i activate F&O, why is my order getting rejected..."/> <br></br>
            <a  href="">
            Track account opening 
            </a>
            <a  href="">
            Track segment activation 
            </a>
            <a  href="">
            Intraday margins 
            </a> <br></br>
            <a  href="">
            Kite user manual
            </a>
        </div>
        <div className="col-6">
        <h4>Featured</h4>
        <ol>
            <li><a  href="">
        Offer for sale (OFS) - September 2024
            </a></li>
        
            <li> <a  href="">
            Latest Intraday leverages and Square-off timings
            </a></li>
        </ol>
        
           
        </div>
      </div>


    </section>
  );
}

export default Hero
