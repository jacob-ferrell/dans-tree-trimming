import { useState, useEffect } from "react";
import "./App.css";
import "./styles/content.css";
import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [showMobileHeader, setShowMobileHeader] = useState(isMobileScreen);

  useEffect(() => {
    const handleResize = () => {
      setShowMobileHeader(isMobileScreen());
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function isMobileScreen() {
    return window.innerWidth <= 768;
  }

  return (
    <Router>
      <div className="App">
        {showMobileHeader ? <MobileHeader /> : <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
