import { useGlobalContext } from '../../context';
import "./Product.css";

const Product = ({ name, image, price, product }) => {

    const { cart, addToCart, removeFromCart }= useGlobalContext();
    return (
        <article className='product'>
            <div className="product-img">
                <img src={image} alt={name} />
            </div>
            <div className="product-info">
                <h4>{name}</h4>
                <p>$ {price}</p>
                {
                    cart.includes(product)?
                    <button className='add-to-cart-btn' onClick={()=> removeFromCart(product)}>Remove from Cart</button>:
                    <button className='add-to-cart-btn' onClick={()=> addToCart(product)}>Add to Cart</button>
                }
            </div>
        </article>
    )
}

export default Product
