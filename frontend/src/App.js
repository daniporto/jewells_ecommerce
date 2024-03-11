
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import necklaces_banner from './Components/Assets/necklaces_banner.png'
import bracelets_banner from './Components/Assets/bracelets_banner.png'
import util_banner from './Components/Assets/util_banner.png'




function App() {
  return (
    <div >
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/necklaces' element={<ShopCategory banner={necklaces_banner} category="necklaces" />}/>
      <Route path='/bracelets' element={<ShopCategory banner={bracelets_banner} category="bracelets"/>}/>
      <Route path='/util' element={<ShopCategory banner={util_banner} category="util"/>}/>
      <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
