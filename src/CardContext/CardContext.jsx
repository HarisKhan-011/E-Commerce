import React, { useState, createContext,useContext} from 'react';

// Create CartContext
export const CartContext = createContext();



export const useCart = () => {
  return useContext(CartContext);
};
// Create CartProvider component
export const CartProvider = ({ children }) => {

  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const[hover,sethover]=useState(false)
const[count,setcount]=useState(0)

const addToWishlist = (product) => {
  setWishlist((prevItems) => {
    if (prevItems.some((item) => item.id === product.id)) {
      return prevItems; // Avoid duplicates
    }
    return [...prevItems, product];
  });
};

const removeFromWishlist = (id) => {
  setWishlist((prevItems) => prevItems.filter((item) => item.id !== id));
};
const handleincrease=()=>{
  setcount(count+1)
}

const handledecrease=()=>{
  if (count > 0) setcount(count - 1);

}


const addToCart = (item) => {
  if (cart.some((product) => product.id === item.id)) {
    return;  // If item is already in the cart, do nothing
  }
  setCart([...cart, item]);  // Add item to the cart
};



  // Remove an item from the cart
  const removeItem = (id) => {
    setCart((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const cardhandlehoverstart=()=>{
sethover(true)
  }
  const cardhandlehoverend=()=>{
    sethover(false)
  }

  // Return the context provider
  return (
    <CartContext.Provider value={{ cart,hover,wishlist,sethover,addToWishlist,removeFromWishlist, addToCart, removeItem,count,handleincrease,handledecrease}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
