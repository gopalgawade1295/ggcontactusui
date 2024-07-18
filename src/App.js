import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import WhatsApp from './components/WhatsApp';
import Home from './screens/Home';
import Modal from './components/Modal';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
      <WhatsApp show={show} setShow={setShow}/>
      <Modal show={show} setShow={setShow}/>
    </div>
  );
}

export default App;
