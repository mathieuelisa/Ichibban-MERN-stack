import "./App.scss";
// Components
import Footer from "./Components/Footer";
import Header from "./Components/Header";

// Pages
import HomePage from "./Pages/HomePage";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

// Data
import products from "./products";

// React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="test">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/:id" element={<Cart />} />
          <Route path="/" element={<HomePage products={products} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
