import React from "react";
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container ">
      <div className="mt-5  row">
        <div className="ml-5 col-4 p-4"><img style={{marginLeft:"5rem"}}  src={imageURL}/></div>
        <div className="col-2"></div>


        <div className="col-6 mt-5" style={{fontSize:"17px ", paddingLeft:"7rem",paddingRight:"7rem"}}>
          <h2 className="mb-4 text-muted">{productName}</h2>
          <p className="text-muted">{productDescription}</p>
          <div className="mb-4 ">
            <a className="leftsection" style={{marginRight:"5rem"}}  href={tryDemo}>
              Learn more <i class="fa-solid fa-arrow-right"></i>
            </a>&nbsp; &nbsp; &nbsp; &nbsp;
            <a className="ml-5 leftsection" href={learnMore}>
              Learn more <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div>
            <a href={googlePlay}>
              <img src="media/googlePlayBadge.svg" />
            </a> &nbsp; &nbsp; &nbsp; &nbsp;
            <a href={appStore}>
              <img src="media/appstoreBadge (1).svg" />
            </a>
          </div>
        </div>
        <p style={{marginTop:"7rem"}} className="text-center fs-5  mb-5">Want to know more about our technology stack? Check out the <a style={{textDecoration:"none"}} href="">Zerodha.tech</a> blog.</p>
      </div>
    </div>
  );
}

export default LeftSection;
