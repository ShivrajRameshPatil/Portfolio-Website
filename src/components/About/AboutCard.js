import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shivraj Patil </span>
            from <span className="purple"> Toronto, Canada.</span>
            <br />
            I am currently working as a Data Analyst at Tata Consultancy Services (Client: Manulife), where I build scalable data pipelines, business intelligence solutions, and AI-driven analytics to generate actionable insights. I have also worked at Intact Financial Corporation, Paytm, AlgoAnalytics, and Canspirit AI.
            <br />
            I have completed Master of Engineering (M.Eng) in Information Systems from Concordia University, where I applied data engineering, analytics, and AI techniques to solve complex problems, leveraging data modeling and advanced analysis to optimize systems and processes.
            <br />
            <br />
            Apart from my professional work, here are some activities I love to engage in:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Regular gymnasium training for physical fitness 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking and exploring nature
            </li>
            <li className="about-activity">
              <ImPointRight /> Gardening during the summer
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The only way to do great work is to love what you do."{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
