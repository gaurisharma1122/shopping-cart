import { useState, createContext, useContext, useEffect } from "react";
import { productsArray } from "./data";

export const AppContext= createContext();

const AppProvider= ({children})=>{

    
    const [products, setProducts]= useState([]);
    const [cart, setCart]= useState([]);

    const addToCart= (cartItem)=>{
        setCart([...cart, cartItem]);
    };

    const removeFromCart= (cartItem)=>{
        setCart(cart.filter((item)=> item.id !== cartItem.id));
    };

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(response=> response.json())
        .then(data=> {
            setProducts(data.products);
        });


    }, []);


    return(
        <AppContext.Provider value={{ products, cart, addToCart, removeFromCart }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext= ()=>{
    return useContext(AppContext);
}
export default AppProvider;