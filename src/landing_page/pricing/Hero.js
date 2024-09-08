import React from 'react'

function Hero() {
    return ( 
       <div className='container mt-3 border-bottom '>
        <div  style={{marginTop:"8rem",marginBottom:"4rem"}} className=' row text-center border-bottom p-5'>
            <h1 className='fs-1'>Pricing</h1>
            <h5 className='text-muted mt-5 mb-5 '>Free equity investments and flat ₹20 intraday and F&O trades</h5>
        </div>

        <div className='row mb-5' style={{marginLeft:"9rem"}}>
            <div className='col-3'>
                <img src='media/pricing-eq.svg'/>
                <h3 className='text-muted'>Free equity delivery</h3>
                <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div style={{marginLeft:"4rem", marginRight:"4rem"}} className='col-3'>
                <img src='media/intradayTrades.svg'/>
                <h3 style={{marginLeft:"1rem"}} className='text-muted '>Intraday & F&O</h3>
                <p style={{marginLeft:"1rem"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className='col-3'>
                <img src='media/pricing-eq.svg'/>
                <h3 style={{marginLeft:"2rem"}}className='text-muted'>Free direct MF</h3>
                <p style={{marginLeft:"2rem"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
        </div>
       </div>
     );
}

export default Hero