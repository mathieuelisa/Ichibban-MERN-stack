import "./App.scss";
// Components
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";

import products from "./products";

function App() {
  return (
    <div className="test">
      <Header />
      <HomePage products={products} />
      <Footer />
    </div>
  );
}

export default App;
