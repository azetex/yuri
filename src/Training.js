import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image_training from "./images/training.jpg";

const Training = () => {
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) navigate("/");
  };

  useEffect(() => {
    document.title = "JS Training";
    window.addEventListener("keydown", handleKeyDown, false);
    return () => window.removeEventListener("keydown", handleKeyDown, false);
  });

  useEffect(() => {
    document.title = "JS Training";
    document.body.classList.add("article-is-visible");
  }, []);

  return (
    <div id="wrapper" onClick={(e) => e.target.id === "wrapper" && navigate("/")}>
      <div id="main" onClick={(e) => e.target.id === "main" && navigate("/")}>
        <article id="training">
          <h2>Training</h2>
          <span className="image main">
            <img src={image_training} alt="training" />
          </span>
          <h3>Course Overview</h3>
          <ul>
            <li>Basic Chainsaw Operation</li>
            <li>Hazard Recognition, Evaluation and Control</li>
            <li>Appropriate falling cuts</li>
            <li>Directional control of falling tree</li>
            <li>Danger tree assessment</li>
            <li>Limbing, taping and bucking</li>
            <li>Face Management (5-10 Tree Plan)</li>
            <li>Safe Falling distance and communication with falling partner</li>
          </ul>

          <h3>Training schedule</h3>
          <ul>
            <li>30 days of One on One training</li>
            <ul>
              <li>Theory and gear preparation</li>
              <li>Supervised field training</li>
            </ul>
            <li>Training location to accommodate the trainee as much as possible</li>
            <li>Quality Assurance performed by the BC Forest Safety Council</li>
          </ul>

          <h3>Required supplies </h3>
          <ul>
            <li>Chainsaw and other hand tools</li>
            <li>Head gear</li>
            <li>Falling pants preferable 4600 Hi-vis apparel</li>
            <li>Caulk boots</li>
            <li>Radio with head set</li>
            <li>Whistle</li>
            <li>Wedge pouch, wedge belt, tape, fire extinquisher</li>
            <li>Personal first aid kit with pressure dressing</li>
            <li>Gloves</li>
            <li>Spare parts for chain saw, spark plug, fuel filter, sprocket, ...</li>
            <li>Wedges (min 4)</li>
            <li>Axe 3,5 lbs (min 17 inch)</li>
            <li>Rain gear</li>
          </ul>

          <h3>Course Module Detail</h3>
          <ol>
            <li>Identifying Safe Work Procedures</li>
            <li>Safety Meetings and Emergency Evacuation Procedures</li>
            <li>Maintaining and Operating Equipment</li>
            <li>Demonstrate Chainsaw Operation</li>
            <li>Limbing and Bucking</li>
            <li>Falling Site hazard assessment</li>
            <li>Danger Tree Assessment</li>
            <li>Techniques and Procedures</li>
            <li>Use of Axes and Wedges</li>
            <li>Falling danger trees</li>
            <li>Upslope Falling</li>
            <li>Jacking trees</li>
            <li>Machine assistance</li>
          </ol>
          <div className="close" onClick={() => navigate("/")}></div>
        </article>
      </div>
    </div>
  );
};

export default Training;
