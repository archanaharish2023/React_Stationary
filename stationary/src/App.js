import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import AboutUs from "./components/pages/AboutUs";
import Footer from "./components/layout/Footer";
import ContactUs from "./components/pages/ContactUs";
import ProductList from "./components/pages/ProductList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/products" element={<ProductList />} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
