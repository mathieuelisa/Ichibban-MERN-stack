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
import Profil from "./Pages/Profil";

// Data
import products from "./products";

// React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shipping from "./Pages/Shipping";
import Payment from "./Pages/Payment";
import Order from "./Pages/Order";
import OrderDetails from "./Pages/OrderDetails";
import UserList from "./Pages/UserList";
import UserEdit from "./Pages/UserEdit";
import ProductsList from "./Pages/ProductsList";
import ProductEdit from "./Pages/ProductEdit";

function App() {
  return (
    <div className="test">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage products={products} />} />
          <Route path="/order/:id" element={<OrderDetails />} />
          <Route path="/order" element={<Order />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/shipping" element={<Shipping />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/:id" element={<Cart />} />
          <Route path="/admin/product" element={<ProductsList />} />
          <Route path="/admin/product/:id/edit" element={<ProductEdit />} />
          <Route path="/admin/user/:id/edit" element={<UserEdit />} />
          <Route path="/admin/users" element={<UserList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
