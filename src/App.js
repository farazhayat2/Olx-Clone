import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Auth from "./components/Pages/Auth";
import Navbar from "./components/navbar";
import Home from "./components/Pages/Home";
import Profile from "./components/Pages/Profile";
import ProductDetail from "./components/Pages/ProductDetail";
import AddProduct from "./components/Pages/AddProduct"
// import Chatbox from "./components/Pages/ChatBox";
import Chatlist from "./components/Pages/Chatlist"
import CategoryPage from "./components/Pages/CategoryPage";





function App() {
  const location = useLocation();
  const hideNavbar = ["/auth"].includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product/:category/:id" element={<ProductDetail />} />
          <Route path="/addproduct" element={<AddProduct />} />
          {/* <Route path="/chat/:id" element={<Chatbox />} /> */}
          <Route path="/chat" element={<Chatlist/>} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
