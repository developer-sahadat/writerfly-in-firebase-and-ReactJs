import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home/Home";
import NotFound from "./Component/NotFound/NotFound";
import About from "./Component/Pages/About/About";
import Blogs from "./Component/Pages/Blogs/Blogs";
import CheckoutPage from "./Component/Pages/CheckoutPage/CheckoutPage";
import Login from "./Component/Pages/Login/Login";
import Services from "./Component/Pages/Services/Services";
import SignUp from "./Component/Pages/SignUp/SignUp";
import RequireAuth from "./Component/RequireAuth/RequireAuth";
import Footer from "./Component/Shear/Footer/Footer";
import Header from "./Component/Shear/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route
          path="/checkoutPage"
          element={
            <RequireAuth>
              <CheckoutPage />
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
