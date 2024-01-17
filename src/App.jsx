import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Pages/Header";
import Hero from "./Components/Pages/Hero";
import Products from "./Components/Pages/Products";
import TopProducts from "./Components/Pages/TopProducts";
import NoPage from "./Components/Pages/NoPage";
import ShopNow from "./Components/Pages/ShopNow";
import Footer from "./Components/Pages/Footer";
import LoginSignup from "./Components/Pages/LoginSignup";



 function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Header />}>
          <Route path="/" element={<Footer/>}>
          <Route index element={<Hero />} />
          <Route path="products" element={<Products />} />
          <Route path="topProducts" element={<TopProducts />} />
          <Route path="shopNow" element={<ShopNow />} />
          <Route path="*" element={<NoPage />} />
          <Route path="login" element={<LoginSignup/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>  
  );
}

export default App;




