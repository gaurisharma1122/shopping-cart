import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context';
import "./Cart.css";
import CartItem from './CartItem';

const Cart = () => {

  const [totalPrice, setTotalPrice]= useState(0);
  const { cart } = useGlobalContext();

  useEffect(()=>{

    if(cart.length < 1){
      setTotalPrice(0);
    }
    else{
      let sum=0;
      cart.forEach(item => {
        sum= sum + parseInt(item.price);
      });
      setTotalPrice(sum);
    }

  }, [cart]);
  

  return (
    <div className='cart'>
      <div className="cart-container">
        <h1>Cart Items</h1>
        <div className="cart-item-container">
          {
            cart.map((item)=>{
              return(
                <CartItem key={item.id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  product={item}/>
              );
            })
          }
        </div>
        <h2>Total: $ {totalPrice}</h2>
      </div>
    </div>
  );
};

export default Cart;
