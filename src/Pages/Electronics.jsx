
import { faLaptop, faMobile, faPersonDress, faShirt, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../Styles/Electronics.css'
import React, { useState,useContext } from 'react'
import laptop from '../Assets/Laptop sale.webp'
import image1 from '../Assets/image1.webp'
import image2 from '../Assets/image2.jpg'
import image3 from '../Assets/image3.jpg'
import image4 from '../Assets/image4.webp'
import image5 from '../Assets/image5.webp'
import image6 from '../Assets/image6.jpg'
import image7 from '../Assets/image7.webp'
import image8 from '../Assets/image8.avif'
import image9 from '../Assets/image9.avif'
import image10 from '../Assets/image10.jpeg'
import image11 from '../Assets/image11.webp'
import image12 from '../Assets/image12.webp'
import image13 from '../Assets/image13.jpeg'
import { CartContext } from '../CardContext/CardContext';


export const Electronics = () => {
  const { addToCart,handleincrease } = useContext(CartContext);

  const [hoverproduct,setHoveredProduct]=useState(false)

  const handlehoverstart=(id)=>{
setHoveredProduct(id)
  }
  const handlehoverend=()=>{
    setHoveredProduct(false)
  }

    const electronics=[
        {id:1,image:image1,title:"HP 15-fc0154AU Laptop " ,admin:'By HP',price:15000,oldprice:25000},
        {id:2,image:image2,title:"HP 15-fc0154AU Laptop " ,admin:'By HP',price:15000,oldprice:25000},
        {id:3,image:image3,title:"HP 15-fc0154AU Laptop " ,admin:'By HP',price:15000,oldprice:25000},
        {id:4,image:image4,title:"HP 15-fc0154AU Laptop " ,admin:'By HP',price:15000,oldprice:25000},
        {id:5,image:image5,title:"HP 15-fc0154AU Laptop " ,admin:'By HP',price:15000,oldprice:25000},
        {id:6,image:image6,title:"HP 15-fc0154AU Laptop " ,admin:'By HP',price:15000,oldprice:25000},
        {id:7,image:image7,title:"HP 15-fc0154AU Laptop " ,admin:'By HP',price:15000,oldprice:25000},
        {id:8,image:image8,title:"HP 15-fc0154AU Laptop " ,admin:'By HP',price:15000,oldprice:25000},
        {id:9,image:image9,title:"HP 15-fc0154AU Laptop " ,admin:'By HP',price:15000,oldprice:25000},
        {id:10,image:image10,title:"HP 15-fc0154AU Laptop " ,admin:'By HP',price:15000,oldprice:25000},
        {id:11,image:image11,title:"HP 15-fc0154AU Laptop " ,admin:'By HP',price:15000,oldprice:25000},
        {id:12,image:image12,title:"HP 15-fc0154AU Laptop " ,admin:'By HP',price:15000,oldprice:25000}
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
      <a class="text-capitalize" href='/accessories'>Computers and Accessories</a>
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
<a href='/accessories'>
    <img src={laptop} alt="" />
    </a>
</div>
<div className='laptop-sale-img2' >
<a href='/mobile'>
    <img src={image13} alt="" />
    </a>
</div>
</div>
<dic className="right-section">
{electronics.map((electronic)=>(

   <div key={electronic.id} className='product-thumb' onMouseEnter={()=>handlehoverstart(electronic.id)}
   onMouseLeave={handlehoverend}>
    <div className='img-wrapper'>
        <a href='#'>
            <div className='image-container'>
                <img className='img' src={electronic.image} alt="wrong" />
            </div>
            <div className="overlay"></div>
        </a>
        {hoverproduct ===electronic.id &&(
          <>
        <ul className="actions" >
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
