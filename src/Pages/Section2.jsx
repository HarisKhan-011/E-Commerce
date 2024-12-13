import React, { useContext, useState } from 'react';
import shirt1 from '../Assets/shirt1.png';
import shirt2 from '../Assets/shirt2.png';
import shirt3 from '../Assets/shirt3.png';
import shirt4 from '../Assets/shirt4.png';
import shirt5 from '../Assets/shirt5.png';
import shirt6 from '../Assets/shirt6.png';
import shirt7 from '../Assets/shirt7.png';
import shirt8 from '../Assets/shirt8.png';
import '../Styles/Section2.css';
import { CartContext } from '../CardContext/CardContext';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // Corrected import

const Section2 = () => {
  const navigate = useNavigate();
  const { addToCart, count, handleincrease, handledecrease, addToWishlist } = useContext(CartContext);
  const [isCartUpdated, setIsCartUpdated] = useState(false);

  const [hoveredProduct, setHoveredProduct] = useState(false);

  const handleHoverStart = (id) => {
    setHoveredProduct(id);
  };

  const handleHoverEnd = () => {
    setHoveredProduct(false);
  };

  const handleaddcart=(product)=>{
    addToCart(product)
    handleincrease()
    setIsCartUpdated(true)
  }

  const products = [
    { id: 1, image: shirt1, title: 'Stylish Shirt 1', price: 'Rs 460', oldPrice: 'Rs 490' },
    { id: 2, image: shirt2, title: 'Stylish Shirt 2', price: 'Rs 460', oldPrice: 'Rs 490' },
    { id: 3, image: shirt3, title: 'Stylish Shirt 3', price: 'Rs 460', oldPrice: 'Rs 490' },
    { id: 4, image: shirt4, title: 'Stylish Shirt 4', price: 'Rs 460', oldPrice: 'Rs 490' },
    { id: 5, image: shirt5, title: 'Stylish Shirt 5', price: 'Rs 460', oldPrice: 'Rs 490' },
    { id: 6, image: shirt6, title: 'Stylish Shirt 6', price: 'Rs 460', oldPrice: 'Rs 490' },
    { id: 7, image: shirt7, title: 'Stylish Shirt 7', price: 'Rs 460', oldPrice: 'Rs 490' },
    { id: 8, image: shirt8, title: 'Stylish Shirt 8', price: 'Rs 460', oldPrice: 'Rs 490' },
  ];

  return (
    <>
      <div className="section-header">
        <span>_________</span>
        <h1>Popular Products</h1>
        <span>_________</span>
      </div>
      <div className="container">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-thumb"
            onMouseEnter={() => handleHoverStart(product.id)}
            onMouseLeave={handleHoverEnd}
          >
            <div className="img-wrapper">
              <a href="#">
                <div className="image-container">
                  <img className="img" src={product.image} alt={product.title} />
                </div>
                <div className="overlay"></div>
              </a>
              {hoveredProduct === product.id && (
                <>
                  <ul className="actions">
                    <li onClick={() => addToWishlist(product)}>
                      <a href="#" title="Add to Wishlist">♥</a>
                    </li>
                    <li>
                      <a href="#" className="quick-view" title="Quick View">👁</a>
                    </li>
                  </ul>
                  <div className="add-to-cart">
                    <motion.button
 onClick={() => handleaddcart(product)}
                      className="button-cart"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Add to cart
                    </motion.button>
                  </div>
                </>
              )}
            </div>
            <div className="info">
              <span className="category">Fashion</span>
              <h4 className="title">
                <a href="#">{product.title}</a>
              </h4>
              <div className="rating" aria-label="5 Stars">★★★★★</div>
              <span className="brand">
                By <a href="#" className="brand-link">V-Mart</a>
              </span>
              <div className="pricing">
                <span className="price">{product.price}</span>
                <span className="old-price">{product.oldPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Section2;
