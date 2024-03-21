import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src="https://imgs.search.brave.com/MOwhxXL5ljnFh5zkVYeQg2cxK2VdejrkhM1Y1OSa5XY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vcGhvdG9z/L3BvcnRyYWl0LW9m/LXNtaWxpbmctbWVk/aWNhbC10ZWFtLXBp/Y3R1cmUtaWQ5MDYw/MDY1ODQ_az0yMCZt/PTkwNjAwNjU4NCZz/PTYxMng2MTImdz0w/Jmg9cHB6S3ZSdUxv/RVYzVkM4SUNsYldo/bHZxOXhLZnk2UzRm/Y3JSWm1aSHF5dz0" alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About MindEase</span>
        </h3>
        <p className="about-description">
        Welcome to Mind Ease, your trusted partner for accessible and personalized mental healthcare. Our expert counselors offer online consultations and specialized services, prioritizing your well-being. Join us on this journey towards a healthier mind.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Choose a Specialist"
          description="Find your perfect specialist and book with ease at Health Plus. Expert doctors prioritize your health, offering tailored care."
        />

        <SolutionStep
          title="Make a Schedule"
          description="Choose the date and time that suits you best, and let our dedicated team of medical professionals ensure your well-being with personalized care."
        />

        <SolutionStep
          title="Get Your Solutions"
          description="Our experienced doctors and specialists are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health."
        />
      </div>
    </div>
  );
}

export default About;
