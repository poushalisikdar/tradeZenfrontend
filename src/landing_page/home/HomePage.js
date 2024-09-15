import React from 'react'
import Navbar from '../Navbar';
import Award from './Award';
import Hero from './Hero';
import State from './State';
import Education from './Education';
import OpenAccount from '../OpenAccount';

import Pricing from './Pricing';

function HomePage() {
    return ( 
        <>
       
        <Hero/>
        <Award/>
        <State/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
       

        </>
       
     );
}

export default HomePage;