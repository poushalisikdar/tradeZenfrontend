import React from "react";

function RightSection({productName,productDescription, imageURL}) {
  return (
    <div className="container">
        <div className="row">
            <div className="col-3 " style={{marginLeft:"7rem", marginTop:"6rem"}}>
                <h2 className="mt-5 mb-3 text-muted ">{productName}</h2>
                <p style={{fontSize:"17px" , lineHeight:"28px"}}>{productDescription}</p>
                <a style={{textDecoration:"none"}} href="">Learn more<i class="fa-solid fa-arrow-right"></i></a>
            </div>
           <div className="col-2"></div>

            <div className="col-4 p-4" style={{marginRight:"1rem"}}>
                <img src={imageURL}/>
            </div>
        </div>
    </div>
  );
}

export default RightSection
