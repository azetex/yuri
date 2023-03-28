import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import data from "../src/data.json";

const Gallery = (props) => {
  let { id } = useParams();
  const navigate = useNavigate();

  id = Number(id) < 0 ? 0 : Number(id) > data.images.length - 1 ? data.images.length - 1 : Number(id);
  const imageUrl = "../gallery/" + data.images[id].image;
  const imageTitle = data.images[id].caption;

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) navigate("/");
    else if (e.keyCode === 37 && id > 0) navigate("/gallery/" + --id);
    else if (e.keyCode === 39 && id < data.images.length - 1) navigate("/gallery/" + ++id);
  };

  const handlePrev = () => navigate("/gallery/" + --id);

  const handleNext = () => navigate("/gallery/" + ++id);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("article-is-visible");
    document.title = "JS Gallery/" + imageTitle;
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div id="wrapper" onClick={(e) => e.target.id === "wrapper" && navigate("/")}>
      <div id="main" onClick={(e) => e.target.id === "main" && navigate("/")}>
        <article id="gallery">
          <h2>Gallery</h2>
          <div className="slideshow">
            <div className="slide">
              <div className="slide-header">
                <div className={id === 0 ? "slide-header-prev hide" : "slide-header-prev"} onClick={handlePrev}></div>
                <div className="slide-header-title">{imageTitle}</div>
                <div className={id === data.images.length - 1 ? "slide-header-next hide" : "slide-header-next"} onClick={handleNext}></div>
              </div>
              <div className="slide-image-container">
                <img className="slide-image" src={imageUrl} alt={imageTitle} />
              </div>
            </div>
          </div>

          <div className="close" onClick={() => navigate("/")}></div>
        </article>
      </div>
    </div>
  );
};

export default Gallery;

// ANIMACE
/* 
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../src/data.json";

const Gallery = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [isTransparent, setIsTransparent] = useState(false);

  id = Number(id) < 0 ? 0 : Number(id) > data.images.length - 1 ? data.images.length - 1 : Number(id);

  const handlePrev = () => {
    setIsTransparent(!isTransparent);
    navigate("/gallery/" + --id);
  };

  const handleNext = () => {
    setIsTransparent(!isTransparent);
    navigate("/gallery/" + ++id);
  };

  const imageUrl1 = "../gallery/" + data.images[id].image;
  const imageTitle1 = data.images[id].caption;

  const imageUrl2 = "../gallery/" + data.images[id + 1].image;
  const imageTitle2 = data.images[id + 1].caption;

  useEffect(() => {
    document.body.classList.add("article-is-visible");
  }, []);

  useEffect(() => {
    if (id === 0) {
      document.querySelector(".slide-header-prev").classList.add("hide");
    } else if (id === data.images.length - 1) {
      document.querySelector(".slide-header-next").classList.add("hide");
    } else {
      document.querySelector(".slide-header-prev").classList.remove("hide");
      document.querySelector(".slide-header-next").classList.remove("hide");
    }
  });

  return (
    <div id="wrapper" onClick={(e) => e.target.id === "wrapper" && navigate("/")}>
      <div id="main">
        <article id="gallery">
          <h2>Gallery</h2>
          <div className="slideshow">
            <div className="slide">
              <div className="slide-header">
                <div className="slide-header-prev" onClick={handlePrev}></div>
                <div className="slide-header-title">{imageTitle2}</div>
                <div className="slide-header-next" onClick={handleNext}></div>
              </div>
              <div id="slide-image-container">
                <img className="bottom" src={imageUrl1} alt={imageTitle1} />
                <img className={isTransparent ? "top transparent" : "top"} src={imageUrl2} alt={imageTitle2} />
              </div>
            </div>
          </div>

          <div className="close" onClick={() => navigate("/")}></div>
        </article>
      </div>
    </div>
  );
};

export default Gallery;
*/
