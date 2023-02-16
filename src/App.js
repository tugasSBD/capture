import React from "react";
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route exact path='/' element={<AboutUs />} />
          <Route exact path='/work' element={<OurWork />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route exact path='/work/:id' element={<MovieDetail />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
