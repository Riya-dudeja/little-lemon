import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js'
import About from './components/About.js';
import BookingPage from './components/BookingPage.js';
import ConfirmedBooking from './components/ConfirmedBooking.js';
import Layout from './components/Layout.js';
import Menu from './components/Menu.js';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
     <Header />
     <Routes>
          <Route path="/booking" element={<BookingPage />} />
          <Route index element={<Layout />} />
          <Route path="/about" element={<About />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
          <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
