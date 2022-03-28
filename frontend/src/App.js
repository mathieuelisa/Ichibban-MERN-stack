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
import OrdersList from "./Pages/OrdersList";

function App() {
  return (
    <div className="test">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/search/:search" element={<HomePage />} />
          <Route path="/page/:page" element={<HomePage />} />
          <Route path="/search/:search/page/:page" element={<HomePage />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login/shipping" element={<Shipping />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order/:id" element={<OrderDetails />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/product/:id" element={<Product />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/:id" element={<Cart />} />

          <Route path="/admin/orders" element={<OrdersList />} />
          <Route path="/admin/products" element={<ProductsList />} />
          <Route path="/admin/products/page/:page" element={<ProductsList />} />
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
