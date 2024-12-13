import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import '../Styles/Shop.css';
import Fashion from '../Assets/Fashion.webp';
import Footwear from '../Assets/Footwear.webp';
import Electronic from '../Assets/Electronics.webp';
import Mobile from '../Assets/Mobile.jpg';
import Camera from '../Assets/Camera.jpeg';
import Computer from '../Assets/Computer.avif';
import Carusel from '../Pages/Carusel';

const Shop = () => {
  const Shopslink = [
    { id: 1, image: Fashion, title: 'Fashion', link: '/fashion' },
    { id: 2, image: Footwear, title: 'Footwear', link: '/footwear' },
    { id: 3, image: Mobile, title: 'Mobiles', link: '/mobile' },
    { id: 4, image: Electronic, title: 'Electronics', link: '/electronics' },
    { id: 5, image: Camera, title: 'Cameras', link: '/accessories' },
    { id: 6, image: Computer, title: 'Computers', link: '/accessories' },
  ];

  return (
    <>
      <div className="shop-container">
        <Carusel />
        <div className="section-header">
          <span>_________</span>
          <h1>Pages</h1>
          <span>_________</span>
        </div>
        <div className="shop-links">
          {Shopslink.map((shop) => (
            <motion.a
              href={shop.link}
              className="shop-card"
              key={shop.id}
              // Add fade-in animation and scale effect on hover
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5}}
              whileHover={{ scale: 1.05 }} // Scale up on hover
            >
              <div className="shop-img">
                <img src={shop.image} alt={shop.title} />
              </div>
              <div className="shop-text">
                <h6>{shop.title}</h6>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
