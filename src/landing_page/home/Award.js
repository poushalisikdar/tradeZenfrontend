import React from 'react'

function Award() {
    return (

        <div className='container mt-4'>
            <div className='row'>
                <div className='col-6'>
                    <img className='mr-5 p-5' src='media/largestBroker.svg' />
                </div>
                < div className='col-6 mt-5 '>
                <h1  className='mb-4'>Largest Stock broker in india</h1>
                <p style={{fontSize:"18px"}}>2+ million Zerodha client contribute to over 15% of all retail order volumes in india daily bt trading and investing in:</p>
                    <div className='row mt-5'>
                        <div className='col-6'>
                        <ul>
                            <li>
                                <p>Feature and Option</p>
                            </li>
                            <li>
                                <p>Commodity derivatives</p>
                            </li>
                            <li>
                                <p>Current derivaties</p>
                            </li>
                            
                        </ul>
                        </div>
                        <div className='col-6'>
                        <ul>
                            <li>
                                <p>Stocks & IPOs</p>
                            </li>
                            <li>
                                <p>Direct mutual funds</p>
                            </li>
                            <li>
                                <p>Bonds and Govt.Securities</p>
                            </li>
                            
                        </ul>
                        </div>
                    </div>
<img style={{width:"98%"}} className='mt-4' src='media/pressLogos.png' />
                </div>
            </div>
        </div >

    );
}

export default Award;