import React, { useContext } from 'react';
import { CartContext } from '../CardContext/CardContext';
import { Link } from 'react-router-dom';
import '../Styles/WishlistPage.css';

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useContext(CartContext);

  return (
    <div className="wishlist-container" style={{ marginTop: '100px' }}>
      <h2 style={{ textAlign: 'center' }}>Your Wishlist</h2>
      {wishlist.length > 0 ? (
        <div className="container">
          {wishlist.map((product) => (
            <div key={product.id} className="product-thumb">
              <div className="img-wrapper">
                <div className="image-container">
                  <img className="img" src={product.image} alt={product.title} />
                </div>
              </div>
              <div className="info">
                <h4 className="title">{product.title}</h4>
                <div className="pricing">
                  <span className="price">{product.price}</span>
                </div>
                <button
                  className="button-remove"
                  onClick={() => removeFromWishlist(product.id)}
                >
                  Remove from Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
      <div className="navigation-links">
        <Link to="/home" className="back-to-products">Back to Products</Link>
      </div>
    </div>
  );
};

export default WishlistPage;
