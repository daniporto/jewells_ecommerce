import React from 'react';
import Hero from '../Components/Hero/Hero'
import NewCollections from '../Components/NewCollections/NewCollections';
import Newsletter from '../Components/NewsLetter/Newsletter';
import Offers from '../Components/Offers/Offers';
import Popular from '../Components/Popular/Popular';




const Shop = () => {
    return (
        <div>
        <Hero />
        <Popular />
        <Offers />
        <NewCollections/>
        <Newsletter/>
        
      
            
        </div>
    );
}

export default Shop;
