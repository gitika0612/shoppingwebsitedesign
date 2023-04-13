import ProductList from './pages/ProductList';
import Product from './pages/product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />}/>
        <Route path="login" element={<Login />}/>
        <Route path="cart" element={<Cart />}/>
        <Route path="productList" element={<ProductList />}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
