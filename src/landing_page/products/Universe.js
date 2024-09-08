import React from 'react'
 function Universe() {
    return ( 
       <div className='container'>
        <div className='row mt-4  text-center mb-5'>
            <h1 className='mt-5'>The Zerodha Universe</h1>
            <p className='mb-5'>Extend your trading and investment experience even further with our partner platforms</p>
        </div>
        <div className='row p-5 mb-5'>
            <div className='col-4' >
                <img style={{width:"190px", marginTop:"1rem"}} src='media/zerodhaFundhouse.png'/>
                <p className=''> Personalized advise on life and health insurance.</p>
            </div>
            <div className='col-4'>
                <img src='media/sensibull-logo.svg' style={{height:"25%", marginTop:"1rem"}}/>
                <p className='mt-3'> Personalized advise on life and health insurance.</p>
            </div>
            <div className='col-4'>
                <img src='media/tijori.svg' style={{width:"160px"}}/>
                <p className='mb-5'> Personalized advise on life and health insurance.</p>
            </div>
            <div className='col-4' >
                <img style={{width:"140px"}} src='media/dittoLogo.png'/>
                <p className=''> Personalized advise on life and health insurance.</p>
            </div>
            <div className='col-4'>
                <img src='media/smallcaseLogo.png'/>
                <p className=''> Personalized advise on life and health insurance.</p>
            </div>
            <div className='col-4'>
                <img src='media/streakLogo (1).png' style={{width:"160px"}}/>
                <p className=''> Personalized advise on life and health insurance.</p>
            </div>
            <button className='btn btn-primary  pt-2 pb-2 mt-5 mb-5' style={{ width: "18%", padding: "5px", margin: "0 auto", fontSize: "20px" }}>Sign up for free</button>
        </div>
       </div>
     );
 }
 
 export default Universe