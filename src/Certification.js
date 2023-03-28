import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Certification = () => {
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) navigate("/");
  };

  useEffect(() => {
    document.title = "JS Certification";
    window.addEventListener("keydown", handleKeyDown, false);
    return () => window.removeEventListener("keydown", handleKeyDown, false);
  });

  useEffect(() => {
    document.title = "JS Certification";
    document.body.classList.add("article-is-visible");
  }, []);

  return (
    <div id="wrapper" onClick={(e) => e.target.id === "wrapper" && navigate("/")}>
      <div id="main" onClick={(e) => e.target.id === "main" && navigate("/")}>
        <article id="certification">
          <h2>Certification</h2>
          <ol>
            <li>Sign off by QST (BC Safety Forest Council) on the last day of your New Faller Training Program</li>
            <li>180 days worked under Qualified Supervisor or Certified Faller</li>
            <li>Within the 2 years preceding the application for certification you need to collect minimum 20 Faller Trainee Weekly Audits, of which the most 5 recent reports indicate meeting the Standard</li>
            <li>Recommendation from your Supervisor for Certification</li>
            <li>Apply for Certification with BCFSC</li>
          </ol>
          <div className="close" onClick={() => navigate("/")}></div>
        </article>
      </div>
    </div>
  );
};

export default Certification;
