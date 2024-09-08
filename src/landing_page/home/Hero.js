import React from 'react'

function Hero() {
    return (
        <div className='container  text-center mt-5'>
            <div  style={{ height: "100vh" }} >
                <img src='media/homeHero.png' className=' p-2 mb-5 mt-5' style={{ width: "70%", height: "auto" }} />
    
                <h1 className='mt-3 mb-2'>Invest in everything</h1>
                <p className='mb-4' style={{ fontSize: "18px" }}>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='btn btn-primary  pt-2 pb-2 mt-2' style={{ width: "18%", padding: "5px", margin: "0 auto", fontSize: "20px" }}>Sign up for free</button>
            </div>
    
        </div>
    );
    
}

export default Hero




