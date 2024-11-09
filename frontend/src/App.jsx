import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Myorders from "./pages/Myorders";
import Order from "./pages/Order";
import Product from "./pages/Product";
import Verify from "./pages/Verify";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/myorders" element={<Myorders />} />
      </Routes>
    </BrowserRouter>
  );
}
