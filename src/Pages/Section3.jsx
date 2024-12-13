// Section3.jsx (Your Section3 component)
import React from 'react';
import lifestyle from '../Assets/lifestyle.avif';
import lifestyle2 from '../Assets/lifestyle2.jpeg';
import lifestyle3 from '../Assets/lifestyle3.jpg';
import '../Styles/Section3.css';

const Section3 = () => {
  return (
    <div className="container3">
      <div className="items3">
        <div className="section-header">
          <span>_________</span>
          <h1>Our Blog</h1>
          <span>_________</span>
        </div>
        
        {/* Card Sections - All in Flex Row */}
        <div className="card-section-container">
          {/* First Card */}
          <div className="card-section3">
            <div className="img">
              <a href="/blog1">
                <img src={lifestyle} alt="Lifestyle" />
             
              <div className="blog-category-names">
                <span className="purple">Lifestyle</span>
                <span className="purple">Men</span>
              </div>
              <div className="text-section3">
                <h2>A Guide to Latest Trends</h2>
                <p>By Admin</p>
              </div>
              </a>
            </div>
          </div>

          {/* Second Card */}
          <div className="card-section3">
            <div className="img">
              <a href="/blog2"> 
                <img src={lifestyle2} alt="Lifestyle" />
             
              <div className="blog-category-names">
                <span className="purple">Lifestyle</span>
              </div>
              <div className="text-section3">
                <h2>Five Ways to Lead a Happy Life</h2>
                <p>By Admin</p>
              </div>
              </a>
            </div>
          </div>

          {/* Third Card */}
          <div className="card-section3">
            <div className="img">
              <a href="/Blog3">
                <img src={lifestyle3} alt="Lifestyle" />
             
              <div className="blog-category-names">
                <span className="purple">Lifestyle</span>
              </div>
              <div className="text-section3">
                <h2>Tips on Having a Happy Life</h2>
                <p>By Admin</p>
              </div>
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
