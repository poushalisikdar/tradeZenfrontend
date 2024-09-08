import React from 'react'

function Pricing() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-4'>
                    <h2 className='mt-5'>Unbeatable pricing</h2>

                    <p style={{fontSize:"17px"}} className='mt-5'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a className="mx-2 mt-3" style={{textDecoration:"none"}} href="">See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row mb-5 text-center mt-5' >
                        <div className='col border '><h1 className='p-4'>₹0</h1>
                            <p className='mb-5'>Free Equity delivery and<br></br> direct mutual funds </p>
                        </div>
                        <div className='col border'><h1 className='p-4'>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;