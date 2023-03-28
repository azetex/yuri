import { useEffect } from "react";
import { Link } from "react-router-dom";
import image_logo from "./images/logo02-crop.png";

const Home = () => {
  useEffect(() => {
    document.body.classList.remove("article-is-visible");
  }, []);

  return (
    <div id="wrapper">
      <header id="header">
        <div className="logo">
          <img src={image_logo} alt="logo" />
        </div>
        <div className="content">
          <div className="inner">
            <h1>JS NEW FALLER TRAINING</h1>
            <p>One on One training makes a dangerous job safe</p>
          </div>
        </div>
        <nav className="use-middle">
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/training">Training</Link>
            </li>
            <li>
              <Link to="/certification">Certification</Link>
            </li>
            <li>
              <Link to="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/gallery/0">Gallery</Link>
            </li>
          </ul>
        </nav>
      </header>
      <footer id="footer">
        <p className="copyright">&copy; JS NEW FALLER TRAINING</p>
      </footer>
    </div>
  );
};

export default Home;
