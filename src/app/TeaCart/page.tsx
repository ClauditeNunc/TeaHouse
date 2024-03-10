'use client'
import React, { useState, useEffect } from 'react';
import { useCart } from '../CartContext';
import "./customCart.css"
import { Playfair } from 'next/font/google';

const playdate = Playfair({ subsets: ['latin'], weight: ['800'] });

const TeaCart: React.FC = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const [showCart, setShowCart] = useState(false);

  const calculateTotal = () => {
    const total = cartItems.reduce((total: number, item: any) => total + (item.price * item.quantity), 0);
    return Number(total.toFixed(2));
  };

  useEffect(() => {
    if (cartItems.length === 0) {
      setShowCart(false);
    }
  }, [cartItems]);

  const handleShow = () => {
    setShowCart(true);
  };

  const handleClose = () => {
    setShowCart(false);
  }

  return (
    <div className='fixed z-[500]'>
      <div className={`fixed w-[500px] h-[400px] top-[50%] left-0 border-4 border-[#88b44e] transform translate-y-[-50%] bg-[#262c30] text-[white] flex flex-col items-center rounded-r-[50px] ${showCart ? 'cart-slide-enter' : 'hidden'}`}>
        <div className='w-[500px] flex flex-col items-center'>
          <h2 className={playdate.className + " text-3xl text-[#88b44e] tracking-wider mt-5"}>My Cart</h2>
          <ul className='h-[280px] w-[450px] my-[10px] overflow-auto scrollbar'>
            {cartItems.map(item => (
              <li key={item.id} className='flex items-center justify-between border-b py-3'>
                <div className='flex flex-col'>
                  <p className={playdate.className + " text-xl"}>
                    {item.name}
                  </p>
                  <p>
                    ${item.price}
                  </p>
                </div>
                <div className='flex justify-between w-[250px]'>
                  <div className='flex items-center'>
                    <button className='bg-[#262c30] border-[0.5px] w-[35px] mr-2 text-3xl rounded-full duration-300 hover:bg-[#88b44e] hover:shadow-[0_0_10px_0_white]' onClick={() => decreaseQuantity(item.name)}>{"-"}</button>
                    <div className='flex items-center'>
                      <p>Quantity:</p>
                      <p>{item.quantity}</p>
                    </div>
                    <button className='bg-[#262c30] border-[0.5px] w-[35px] ml-2 text-3xl rounded-full duration-300 hover:bg-[#88b44e] hover:shadow-[0_0_10px_0_white]' onClick={() => increaseQuantity(item.name)}>{"+"}</button>
                  </div>
                  <button className='pl-2' onClick={() => removeFromCart(item.name)}>
                    <img src='./img/a.png' />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className='flex justify-between items-center w-full'>
            <div className='flex justify-end w-[55%]'>
              <p>Total: ${calculateTotal()}</p>
            </div>
            <button className='mr-7 duration-300 hover:bg-[#88b44e] hover:shadow-[0_0_10px_0_white] rounded-full w-[40px] text-2xl text-center' onClick={handleClose}>{"<-"}</button>
          </div>
        </div>
      </div>
      {!showCart && cartItems.length > 0 && (
        <button className='fixed rounded-full p-5 ml-3 z-[1000] top-[50%] text-white left-0 transform translate-y-[-50%] bg-[#262c30] duration-300 hover:shadow-[0_0_20px_10px_#88b44e]' onClick={handleShow} >
          <img src="./img/cart.png" alt="A cart icon" />
        </button>
      )}
    </div>
  );
};

export default TeaCart;
