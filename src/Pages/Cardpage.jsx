import React, { useContext, useState } from 'react';
import { CartContext } from '../CardContext/CardContext'; // Adjust the path as needed
import { Link } from 'react-router-dom';
import '../Styles/Cardpage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const Cardpage = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size); // Update the selected size
  };
  const { cart, removeItem, handledecrease, handleincrease,count } = useContext(CartContext); // Access the cart and related functions
  const [hoveredProduct, setHoveredProduct] = useState(null); // Track hovered product

  const handleHoverStart = (id) => setHoveredProduct(id);
  const handleHoverEnd = () => setHoveredProduct(null);

  
  return (
    <div className="card-container1" style={{ marginTop: '100px' }}>
      <h2 style={{ textAlign: 'center' }}>Your Cart</h2>

      {cart.length > 0 ? ( // Check if the cart is not empty
      <div className='flex1'>
        <div className="cart-items1">
          {cart.map((product) => (
            <div
              key={product.id}
              className="product-thumb1"
              onMouseEnter={() => handleHoverStart(product.id)}
              onMouseLeave={handleHoverEnd}
            >
              <div className="img-wrapper1">
                <div className="image-container1">
                  <img className="img1" src={product.image} alt={product.title} />
                </div>
                {hoveredProduct === product.id && (
                  <div className="hover-overlay1">
                    <ul className="actions1">
                      <li>
                        <a href="#" title="Add to Wishlist">
                          ♥
                        </a>
                      </li>
                      <li>
                        <a href="#" className="quick-view1" title="Quick View">
                          👁
                        </a>
                      </li>
                    </ul>
                    <button
                      className="button-cart1"
                      onClick={() => {
                        handledecrease();
                        removeItem(product.id);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
              <div className="info1">
                <span className="category1">Fashion</span>
                <h4 className="title1">{product.title}</h4>
                <div className="pricin1g">
                  <span className="price1">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
          <div className="payment-method1 ">
            <h1>Total Items: {count}</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the
              1500s.
            </p>
            
            <div className="flex1">
              <button onClick={handledecrease} className="button-size1">
                -
              </button>
              <span>{count}</span>
              <button onClick={handleincrease} className="button-size1">
                +
              </button>
              <button className="button-add-to-cart">
                <FontAwesomeIcon icon={faCartShopping} className="icon1" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
        </div>
      ) : (
        <p>Your cart is empty.</p> // Display message if the cart is empty
      )}
      <div className="navigation-links1">
        <Link to="/home" className="back-to-products1">
          Back to Products
        </Link>
      </div>
    </div>
  );
};

export default Cardpage;
