import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About ";
import Training from "./Training";
import Certification from "./Certification";
import Testimonials from "./Testimonials ";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Home from "./Home";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.title = "JS New Faller Training";
    document.body.classList.remove("is-preload");
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/training" element={<Training />} />
          <Route exact path="/certification" element={<Certification />} />
          <Route exact path="/testimonials" element={<Testimonials />} />
          <Route exact path="/gallery/:id" element={<Gallery />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/*" element={<Home />} />
        </Routes>
      </Router>
      <div id="bg"></div>
    </div>
  );
};

export default App;
