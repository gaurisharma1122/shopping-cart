import "./Home.css";
import Product from '../../components/product/Product';
import { useGlobalContext } from '../../context';

const Home = () => {

  const { products }= useGlobalContext();
  
  return (
    <section className='home'>
      <div className="home-container">
        <h1>Products</h1>
        <div className="products-container">
          {
            products.map((item)=>{
              return (
                <Product key={item.id}
                  title={item.title}
                  image={item.images[0]}
                  price={item.price}
                  product={item}/>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Home
