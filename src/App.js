import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home/Home";
import NotFound from "./Component/NotFound/NotFound";
import About from "./Component/Pages/About/About";
import Blogs from "./Component/Pages/Blogs/Blogs";
import Login from "./Component/Pages/Login/Login";
import Services from "./Component/Pages/Services/Services";
import SignUp from "./Component/Pages/SignUp/SignUp";
// import Footer from "./Component/Shear/Footer/Footer";
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
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
