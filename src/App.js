import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import HomeOwner from './components/HomeOwner';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<><Header/><Home/> <Footer/></>} />
      <Route path="/homeowner" element={<><Header/><HomeOwner/> <Footer/></>} />
      <Route path="/privacypolicy" element={<><Header/><PrivacyPolicy/> <Footer/></>} />
      <Route path="/contact" element={<><Header/><Contact/> <Footer/></>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
