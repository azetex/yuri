import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image_about from "./images/about-portret.jpeg";

const About = () => {
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) navigate("/");
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown, false);
    document.body.classList.add("article-is-visible");
    document.title = "JS About";
    return () => window.removeEventListener("keydown", handleKeyDown, false);
  });

  // useEffect(() => {
  // }, []);

  return (
    <div id="wrapper" onClick={(e) => e.target.id === "wrapper" && navigate("/")}>
      <div id="main" onClick={(e) => e.target.id === "main" && navigate("/")}>
        <article id="about">
          <h2 className="major">About me</h2>
          <span className="image main">
            <img src={image_about} alt="about" />
          </span>
          <p>Tree falling on the West Coast of BC has been my occupation and passion for many years.</p>
          <p>From a Certified West Coast Faller, through a Certified Falling Supervisor to a Certified Falling Trainer, I feel the circle is complete.</p>
          <p>Knowing how dangeroues this occupation can be, my vision is to provide training of the highest quality to the next generation of fallers.</p>
          <p>Working One on One in the field for 30 days ensures the safety habits acquired during this time stay with you for your whole career.</p>
          <p>All my graduates achieved high mark on their final evaluation and are working as independet contractors on the West Coast of BC.</p>
          <p>
            <strong>Juraj (Yuri) Seemann</strong>
            <br />
            Campbell River, BC
          </p>
          <span className="image main">
            <img data-lazysrc="images/certificate.jpg" alt="" />
          </span>
          <div className="close" onClick={() => navigate("/")}></div>
        </article>
      </div>
    </div>
  );
};

export default About;
