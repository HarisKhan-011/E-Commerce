import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faDollar, faShippingFast, faVolumeOff } from '@fortawesome/free-solid-svg-icons';
import "../Styles/Section1.css"

export const Section1 = () => {
    console.log("Section1 component is rendering");
    return (
      <>
        <div className='container'>
          <div className='section'>
            <div className='shipping-icon'>
                <div className='icons'>
                <i><FontAwesomeIcon icon={faShippingFast} className="section-icon" /></i></div>
              <h6>Free shipping</h6>
              <p>Free shipping on all order</p>
            </div>
          </div>
          <div className='section'>
            <div className='shipping-icon'>
            <div className='icons'>
                <i><FontAwesomeIcon icon={faClock} className="section-icon" /></i></div>
              <h6>Support 24/7</h6>
              <p>Free shipping on all order</p>
            </div>
          </div>
          <div className='section'>
            <div className='shipping-icon'>
            <div className='icons'>
                <i><FontAwesomeIcon icon={faDollar} className="section-icon" /></i></div>
              <h6>Money Return</h6>
              <p>Free shipping on all order</p>
            </div>
          </div>
          <div className='section'>
            <div className='shipping-icon'>
            <div className='icons'>
                <i><FontAwesomeIcon icon={faVolumeOff} className="section-icon" /></i></div>
              <h6>Order Discount</h6>
              <p>Free shipping on all order</p>
            </div>
          </div>
        </div>
      </>
    );
  };
export default Section1;
