import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/Homepage';
import Section1 from '../Pages/Section1';
import { Contactus } from '../Pages/Contactus';
import Shop from '../Pages/Shop';
import { Blog1 } from '../Pages/Blog1';
import { Blog2 } from '../Pages/Blog2';
import { Blog3 } from '../Pages/Blog3';
import SignInfoam from '../Pages/SignIn';
import Carusel from '../Pages/Carusel';
import { Electronics } from '../Pages/Electronics';
import Mobiles from '../Pages/Mobiles';
import Accsseroies from '../Pages/Computer&Ass';
import Watch from '../Pages/Watch';
import Blog from '../Pages/Blog';
import Cardpage from '../Pages/Cardpage';
import Section2 from '../Pages/Section2';
import WishlistPage from '../Pages/Wishlist';

export const Approutes = () => {

  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/section1" element={<Section1 />} />
      <Route path="/section2" element={<Section2  />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog1" element={<Blog1 />} />
      <Route path="/blog2" element={<Blog2 />} />
      <Route path="/blog3" element={<Blog3 />} />
      <Route path="/signin" element={<SignInfoam />} />
      <Route path="/carusel" element={<Carusel />} />
      <Route path="/electronics" element={<Electronics />} />
      <Route path="/mobile" element={<Mobiles />} />
      <Route path="/accessories" element={<Accsseroies />} />
      <Route path="/watch" element={<Watch />} />
      
      <Route path="/section2" element={<Section2  />} />
        <Route path="/cardpage" element={<Cardpage  />} />

      <Route path="/contact" element={<Contactus />} />
      <Route path="/wishlist" element={<WishlistPage />} />
    </Routes>
  );
};
