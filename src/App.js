import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import HomeOwner from './components/HomeOwner';
import Contact from './components/Contact';
import { useState } from 'react';

function App() {
  const [state, setState] = useState(null)
  const [preferred, setPreferred] = useState(null)
  const filteredData =(data)=>{
    setState(data)
  }
  const sortByPrice = (preference)=>{
      setPreferred(preference)
      console.log("Preference",preference)
  }
  return (
    <BrowserRouter>
    <Header filteredData={filteredData} sortByPrice={sortByPrice}/>
    <Routes>
      <Route path="/" element={<><Home state={state} preferred={preferred}/> </>} />
      <Route path="/homeowner" element={<><HomeOwner/> </>} />
      <Route path="/privacypolicy" element={<><PrivacyPolicy/> </>} />
      <Route path="/contact" element={<><Contact/> </>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
