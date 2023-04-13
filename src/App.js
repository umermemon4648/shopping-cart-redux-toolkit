import { 
  BrowserRouter as Router,
   Switch, Route, Link, Routes,useParams ,
  } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
function App() {
  return (


<>

<Router>
  <>
    <Navbar/>
  <Routes>
    <Route exact path="/" element={<Product/>} />
    <Route exact path="/cart" element={<Cart/>} />
  </Routes>
    <Footer />
  </>
</Router>

</>



);
}

export default App;
