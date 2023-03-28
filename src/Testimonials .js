import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Testimonials = () => {
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) navigate("/");
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("article-is-visible");
    document.title = "JS Testimonials";
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div id="wrapper" onClick={(e) => e.target.id === "wrapper" && navigate("/")}>
      <div id="main" onClick={(e) => e.target.id === "main" && navigate("/")}>
        <article id="testimonials">
          <h2>Testimonials</h2>

          <h3>Henry Doerksen (Course completed: February 2023)</h3>
          <p>
            Before I started my 30 day training, Juraj was highly recommended to me by a few people that I know so I took the course through him. During those 30 days I realized the importance of having someone teach you who wanted to help you succeed throughout your whole career and set you up to think smarter about the tasks at hand and not to fight against the elements of the job. Juraj is really easy to get along with and has a great sense of humor. I would highly recommend Juraj to anyone who is considering taking this course. <br /> Thanks!
          </p>

          <h3>Daniele Leonardelli (Course completed: November 2021)</h3>
          <p>Training with Juraj was a great experience. He is very good at teaching and explaining all the steps needed for every procedure. He has lots of experience falling trees on the West Coast and knows how to handle every situation he encounters. He is excellent in analyzing it for training purposes. He is the best one out there.</p>

          <h3>Drew Nagainis (Course completed: May 2021)</h3>
          <p>Juraj is a great instructor and a very knowledgeable faller with extensive experience in the industry. He is very personable and enjoyable to be around. He is dedicated to helping you reach your full potential as a West Coast Faller.</p>

          <h3>Gaige Armitage (Course completed: October 2020)</h3>
          <p>I did my 30 day faller training with Juraj during the month of October in 2020, the one on one training was great for a hands-on practical style of learning, he’s safe, patient, well-versed in the world of falling has good clear instructions and knows his way around a saw. 10/10 would recommend to anyone that’s interested in become a faller to do your 30 day faller training with him, it’s been over a year and we still talk quite often and have become good friends over this time. </p>

          <div className="close" onClick={() => navigate("/")}></div>
        </article>
      </div>
    </div>
  );
};

export default Testimonials;
