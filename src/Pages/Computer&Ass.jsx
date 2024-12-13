import React, { useState,useContext } from 'react'
import '../Styles/Mobile.css'
import { faLaptop, faMobile, faPersonDress, faShirt, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import image1 from '../Assets/image1.webp'
import image2 from '../Assets/image2.jpg'
import image10 from '../Assets/image10.jpeg'
import image11 from '../Assets/image11.webp'
import image12 from '../Assets/image12.webp'
import image13 from '../Assets/image13.jpeg'
import laptop from '../Assets/Laptop sale.webp'
import { CartContext } from '../CardContext/CardContext';
import { Link } from 'react-router-dom'
const Accsseroies = () => {
  const { addToCart,count,handleincrease,handledecrease ,addToWishlist} = useContext(CartContext)


  const [hoveredProduct, setHoveredProduct] = useState(false);

  const handleHoverStart = (id) => {
    setHoveredProduct(id);
  };

  const handleHoverEnd = () => {
    setHoveredProduct(false);
  };

    const electronics=[
        {id:1,image:image1,title:"HP 15-fc0154AU Laptop " ,admin:'By HP',price:15000,oldprice:25000},
        {id:2,image:image2,title:"HP 15-fc0154AU Laptop " ,admin:'By HP',price:15000,oldprice:25000},
        {id:3,image:image10,title:"HP 15-fc0154AU Laptop " ,admin:'By HP',price:15000,oldprice:25000},
        {id:4,image:image11,title:"HP 15-fc0154AU Laptop " ,admin:'By HP',price:15000,oldprice:25000},
        {id:5,image:image12,title:"HP 15-fc0154AU Laptop " ,admin:'By HP',price:15000,oldprice:25000},
    ]
  return (
    <>
     <div className='Container-electronics'>
   <div class="breadcrumb flex-column" bis_skin_checked="1">
  <h1 class="text-capitalize">Electronics</h1>
  <ul class="list list-inline mb-0">
    <li class="list-inline-item">
      <a href="/home">Home</a>
    </li>
    <li class="list-inline-item">
      <a class="text-capitalize" href="/electronics">Electronics</a>
    </li>
    <li class="list-inline-item">
      <a class="text-capitalize" href="/products/subCat/673089ee45d0a9534fb3bee7">Computers and Accessories</a>
    </li>
  </ul>
</div>
</div>
<div className='electronics-container' >
<div className='electronic-left'>
    <div className='section-electronics'>
<div className='left-sidebars'>
<div className='Category'>
    <h6 className='h6'>Category</h6>
<div className='children'><p><FontAwesomeIcon icon={faShoppingBag} />Fashion</p></div>
<div className='children'><p><FontAwesomeIcon icon={faShirt} />Shirts</p></div>
<div className='children'><p><FontAwesomeIcon icon={faPersonDress} />Pents</p></div>
<div className='children'><p><FontAwesomeIcon icon={faMobile} />Mobiles</p></div>
<div className='children'><p><FontAwesomeIcon icon={faLaptop} />Laptop</p></div>
</div>
<div className='laptop-sale-img' >
<a href='#'>
    <img src={laptop} alt="" />
    </a>
</div>
<div className='laptop-sale-img2' >
<a href='mobile'>
    <img src={image13} alt="" />
    </a>
</div>
</div>
<dic className="right-section">
{electronics.map((electronic)=>(

   <div key={electronic.id} onMouseEnter={()=>handleHoverStart(electronic.id)} onMouseLeave={handleHoverEnd} className='product-thumb'>
    <div className='img-wrapper'>
        <a href='#'>
            <div className='image-container'>
                <img className='img' src={electronic.image} alt="wrong" />
            </div>
            <div className="overlay"></div>
        </a>
        {hoveredProduct === electronic.id &&(
          <>
        <ul className="actions">
              <li>
                <a href="#" title="Add to Wishlist">
                  ♥
                </a>
              </li>
              <li>
                <a href="#" className="quick-view" title="Quick View">
                  👁
                </a>
              </li>
            </ul>
             <div className="add-to-cart">
             <button onClick={()=>{
               addToCart(electronic)
               handleincrease()
             }} className="button-cart"> Add to cart</button>
             </div>
             </>
        )}
    </div>
    <div className="info">
            <span className="category">Fashion</span>
            <h4 className="title">
              <a href="#">{electronic.title}</a>
            </h4>
            <div className="rating" aria-label="5 Stars">
              ★★★★★
            </div>
            <span className="brand">
              By <a href="#" className="brand-link">V-Mart</a>
            </span>
            <div className="pricing">
              <span className="price">{electronic.price}</span>
              <span className="old-price">{electronic.oldPrice}</span>
            </div>
          </div>
   </div> 
))}
</dic>
</div>

</div>

   </div>

    </>
  )
}

export default Accsseroies