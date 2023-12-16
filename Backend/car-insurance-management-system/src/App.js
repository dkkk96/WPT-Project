import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavigationBar } from './components/NavBar';
import { Home } from './components/Home';
import { About } from './components/About';
import { ContactUs } from './components/ContactUs';
import { Blog } from './components/Blog';
import { Footer } from './components/Footer';
import { BlogPage1 } from './components/BlogPages/BlogPage1';
import { BlogPage2 } from './components/BlogPages/BlogPage2';
import { BlogPage3 } from './components/BlogPages/BlogPage3';
import LoginForm from './components/LoginForm';
import { TermsAndConditions } from './components/TermsAndConditions';
import SignupForm from './components/SignupForm';
import { PurchasePolicy } from './components/PurchasePolicy';
import BuyNow from './components/BuyNow';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
          <Route path="/buy-now" element={<BuyNow />} />
          <Route path="/purchase-policy" element={<PurchasePolicy />} />
        <Route path='/about' element={<About/>}></Route>
        <Route path='/blog/' element={<Blog/>}></Route>
        <Route path='/contact-us' element={<ContactUs/>}></Route>
        <Route path='/blog/what-is-boot-space' element={<BlogPage1/>}></Route>
        <Route path='/blog/hydrogen-cars-in-india' element={<BlogPage2/>}></Route>
        <Route path='/blog/is-it-safe-to-buy-car-insurance-online' element={<BlogPage3/>}></Route>
        <Route path='/Login' element={<LoginForm/>}></Route>
        <Route path='/terms-and-conditions' element={<TermsAndConditions/>}></Route>
        <Route path='/register' element={<SignupForm/>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </div>
  );
}

export default App;
