import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoginPopup from "./components/LoginPopup";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Myorders from "./pages/Myorders";
import Order from "./pages/Order";
import Product from "./pages/Product";
import Verify from "./pages/Verify";
export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <BrowserRouter>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <Header setShowLogin={setShowLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/myorders" element={<Myorders />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
