import React from 'react'
 function Brokerage() {
    return ( 
       <div className='container'>
        <div className='row'>
            <div className=' brokerage col-8'>
                <h5 style={{marginLeft:"10rem",marginTop:"5rem",color:"#387ed1"}} className='mb-5'>Brokerage calculator</h5>
                <div className='mb-2 p-5'>
                    <ul>
                        <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li className='mb-5'>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                </div>
            </div>
            <div className='col-4'>
                <h5 style={{color:"#387ed1",marginTop:"5rem"}}>List of charges</h5>
            </div>
        </div>
       </div>
     );
 }
 
 export default Brokerage;