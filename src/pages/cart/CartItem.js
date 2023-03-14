import { useGlobalContext } from '../../context';

const CartItem = ({ title, image, price, product }) => {
    const { cart, removeFromCart }= useGlobalContext();
    
  return (
    <article className='cart-item'>
      <img src={image} alt={title} />
      <div className="cart-item-info">
        <h4>{title}</h4>
        <p>$ {price}</p>
      </div>
      <button className='delete-cart-item' onClick={ ()=> removeFromCart(product) }>
        <i className="fa-solid fa-trash"></i>
      </button>

    </article>
  );
};

export default CartItem;
