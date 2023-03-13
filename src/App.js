import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
