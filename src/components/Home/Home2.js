import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar1.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMediumSquare,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            {/* Experienced software developer with a focus in backend development, building server-side applications. Currently working at
SAP Labs transforming requirements into efficient solutions. Previously worked in Mckinsey & Company */}
            <p className="home-about-body">
              I'm Shivraj Patil, a data enthusiast passionate about uncovering insights and creating impactful data-driven solutions.
              I love to solve complex problems and am highly inclined towards mathematical thinking.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Python, SAS, SQL, Power BI, Tableau, Databricks, and Snowflake. </b>
              </i>
              <br />

              <br />
              I specialize in delivering business intelligence solutions and
              <i>
                <b className="purple"> building scalable data systems </b> to drive informed decision-making.

              </i>
              <br />
              <br />
              I utilize cloud platforms like  <b className="purple">AWS, Azure, and GCP</b> to streamline
              <i>
                <b className="purple">
                  {" "}
                  data analytics workflows 
                </b>
              </i>
              <i> to ensure scalable, and efficient data processing. </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{
                width: "250px", // Set the desired width
                height: "300px", // Set the desired height
                objectFit: "cover", // Ensures the image fits nicely
              }} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ShivrajRameshPatil"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shivrajpatil2000/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
