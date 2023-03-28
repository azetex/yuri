import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Contact = () => {
  const navigate = useNavigate();

  const handleKeyDown = (e) => e.keyCode === 27 && navigate("/");

  const formValidate = (values) => {
    const errors = {};

    if (values.name === "") {
      errors.name = "Name is required field";
    }

    if (!values.email) {
      errors.email = "Email is required field";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const formSubmit = (values) => {
    console.log("formSubmit values:", values);
    fetch("https://westcoastfaller.ca/api/contact/index.php", {
      //fetch("http://yuri-dev/public/api/contact/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        console.log("response:", response);

        if (response.ok) return response.text();
        throw new Error("Something went wrong");
      })
      .then((jsonData) => {
        console.log("jsonData:", jsonData);
        // console.log("JSON.parse(jsonData):", JSON.parse(jsonData));

        if (!jsonData.sent) throw new Error(jsonData.errorMessage);
        // document.getElementById("after-submit-ok").classList.remove("hide");
      })
      .catch((e) => {
        console.log("catch:", e);

        // document.getElementById("after-submit-error").classList.remove("hide");
      })
      .finally(() => {
        console.log("finally:");

        // document.getElementById("form-contact").classList.add("hide");
      });
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("article-is-visible");
    document.title = "JS Contact";
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div id="wrapper" onClick={(e) => e.target.id === "wrapper" && navigate("/")}>
      <div id="main" onClick={(e) => e.target.id === "main" && navigate("/")}>
        <article id="contact">
          <h2>Contact us</h2>
          <Formik initialValues={{ name: "", email: "", message: "" }} validate={(values) => formValidate(values)} onSubmit={(values) => formSubmit(values)} validateOnBlur={false} validateOnChange={false}>
            {() => (
              <Form id="form-contact">
                <div className="fields">
                  <div className="field half">
                    <label htmlFor="name">Name</label>
                    <Field type="text" name="name" id="name" as="input" placeholder="Your name ..." />
                    <div className="error">
                      <ErrorMessage name="name" />
                    </div>
                  </div>
                  <div className="field half">
                    <label htmlFor="email">Email</label>
                    <Field type="email" name="email" id="email" as="input" placeholder="Your email ..." />
                    <div className="error">
                      <ErrorMessage name="email" />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="message">Message</label>
                    <Field type="text" name="message" id="message" as="textarea" rows="8" placeholder="Write something really smart ..." />
                    <div className="error">
                      <ErrorMessage name="message" />
                    </div>
                  </div>
                </div>

                <div className="actions">
                  <Field type="submit" name="submit" id="submit" className="primary" />
                </div>
              </Form>
            )}
          </Formik>

          <div id="after-submit-error" className="hide">
            Sorry, but your message could not be sent. Please try contacting us by other channels (
            <strong>
              <a href="mailto:trainer@westcoastfaller.ca">email</a>
            </strong>
            or
            <strong>
              <a href="https://www.facebook.com/JSNewFallerTraining" target="_blank" rel="noreferrer">
                facebook
              </a>
            </strong>
            )
          </div>

          <div id="after-submit-ok" className="hide">
            Hi, thank you for your message. We will get back to you shortly.
          </div>

          <div>
            <h3>Follow us on Facebook</h3>
            <SocialIcon url="https://www.facebook.com/JSNewFallerTraining" target="_blank" rel="noreferrer"></SocialIcon>
          </div>
          <div className="close" onClick={() => navigate("/")}></div>
        </article>
      </div>
    </div>
  );
};

export default Contact;
