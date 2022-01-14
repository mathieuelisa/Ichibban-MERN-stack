import "./App.scss";
// Components
import Footer from "./Components/Footer";
import Header from "./Components/Header";

// Pages
import HomePage from "./Pages/HomePage";
import Product from "./Pages/Product";

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
          <Route path="/" element={<HomePage products={products} />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
