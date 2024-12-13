import React from 'react';
import { motion } from 'framer-motion'; // For animations
import { useInView } from 'react-intersection-observer'; // For detecting if component is in view
import Button from '@mui/material/Button'; 
import fashion from "../Assets/fashion.png";
import "../Styles/Homepage.css";
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Carousel from '../Pages/Carusel';

const Homepage = () => {
  const { ref: sectionRef1, inView: inViewSection1 } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // When 50% of the component is visible
  });

  const { ref: sectionRef2, inView: inViewSection2 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <>
      <motion.div
        className='homepage'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className='section-left'>
          <div className="text-section">
            <p>Smart Products</p>
            <h1>Winter Offer 2024 Collection</h1>
            <div className="button">
              <Button className="home-button">Shop Now</Button>
            </div>
          </div>
        </div>
        <div className='section-right'>
        </div>
        <div className='image'>
          <motion.img
            src={fashion}
            alt='fashion'
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </motion.div>

      {/* Section 1 with animation triggered on scroll */}
      <motion.div
        ref={sectionRef1}
        initial={{ opacity: 0 }}
        animate={{ opacity: inViewSection1 ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <Section1 />
      </motion.div>

      {/* Carousel with animation triggered on scroll */}
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: inViewSection1 ? 0 : -100 }}
        transition={{ duration: 1 }}
      >
        <Carousel />
      </motion.div>

      {/* Section 2 with animation triggered on scroll */}
      <motion.div
        ref={sectionRef2}
        initial={{ opacity: 0 }}
        animate={{ opacity: inViewSection2 ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <Section2 />
      </motion.div>

      {/* Section 3 with animation triggered on scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inViewSection2 ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <Section3 />
      </motion.div>
    </>
  );
};

export default Homepage;
