import React from 'react';
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
          <div className='descriptionbox-navifator'>
              <div className='descriptionbox-nav-box'>Description</div>
              <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
          </div>
          <div className='descriptionbox-description'>
              <p>An e-commerce wensite is an online plataform that facilitate 
              buying and selling of products or services over the internet serves as a virtual marktplace </p>
              <p>An e-commerce wensite is an online plataform that facilitate 
              buying and selling of products or services over the internet serves as a virtual marktplace</p>
          </div>
            
        </div>
    );
}

export default DescriptionBox;
