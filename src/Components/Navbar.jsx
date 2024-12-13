import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSearch, faAngleDown, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import "../Styles/Navbar.css";
import { Badge, Button } from 'react-bootstrap';
import Menu from '../Assets/menu.png';
import { CartContext } from '../CardContext/CardContext';

const Navbar = ({ show, setShow }) => {
  const { count,cart } = useContext(CartContext);
  const [showPagesDropdown, setShowPagesDropdown] = useState(false);
  const [showBlogsDropdown, setShowBlogsDropdown] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);
  const handleInput = () => setShowInput(true);

  return (
    <>
      <nav>
        <div className="Navbar">
          <div className="Navbar1">
            <div className="left">
              <h1>E-Commerce</h1>
            </div>

            <button className="Toggle" onClick={handleToggle}>
              <img src={Menu} alt="menu" />
            </button>

            <div className={`mid ${toggle ? "show" : "hide"}`}>
              <ul className="ul">
                <li className="li">
                  <Link to="/home">Home</Link>
                </li>
                <li className="li">
                  <Link to="/shop">Shop</Link>
                </li>
                <li
                  className="li"
                  onMouseEnter={() => setShowPagesDropdown(true)}
                  onMouseLeave={() => setShowPagesDropdown(false)}
                >
                  <Link to="/electronics">
                    Electronics <FontAwesomeIcon icon={faAngleDown} className="icon" />
                  </Link>
                  {showPagesDropdown && (
                    <ul className="submenu">
                      <li><Link to="/mobile">Mobiles</Link></li>
                      <li><Link to="/accessories">Computer & Accessories</Link></li>
                      <li><Link to="/watch">Smart Watch Accessories</Link></li>
                    </ul>
                  )}
                </li>
                <li
                  className="li"
                  onMouseEnter={() => setShowBlogsDropdown(true)}
                  onMouseLeave={() => setShowBlogsDropdown(false)}
                >
                  <Link to="/blog">
                    Blogs <FontAwesomeIcon icon={faAngleDown} className="icon" />
                  </Link>
                  {showBlogsDropdown && (
                    <ul className="submenu">
                      <li><Link to="/blog1">A guide to latest trends</Link></li>
                      <li><Link to="/blog2">Five ways to lead a happy life</Link></li>
                      <li><Link to="/blog3">Tips on having a happy life</Link></li>
                    </ul>
                  )}
                </li>
                <li className="li"><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            <div className="right">
              <ul className="icon-list">
                <li className="badge">
                  {!showInput && (
                    <FontAwesomeIcon
                      onClick={handleInput}
                      icon={faSearch}
                      className="icon"
                    />
                  )}
                  {showInput && (
                    <input
                      type="text"
                      name="input"
                      className="search-input"
                      placeholder="Search..."
                    />
                  )}
                </li>
                {/* <li className="badge" onClick={() => setshow(true)}>
                  <FontAwesomeIcon icon={faCartShopping} className="icon" />
                  <Badge className="ms-2 badge-position">{count}</Badge>
                </li> */}
                <li className='badge' >
                  <Link to="/cardpage">
  <FontAwesomeIcon  icon={faCartShopping} className="icon badge-updated" />
  <Badge className="ms-2 badge-position">{cart.length}</Badge>
  </Link>
</li>

                {/* <li className="badge">
                  <Link to="/wishlist">
                    <FontAwesomeIcon icon={faHeart} className="icon" />
                    <Badge className="ms-2 badge-position">0</Badge>
                  </Link>
                </li> */}
                <Button variant="primary" href="/signin">Sign In</Button>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
