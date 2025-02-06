import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Hostel Management System"
              description="This system offers a comprehensive solution for managing hostel operations, enabling students to register, log in via OTP, view hostel details, and manage their stay. It also allows hostel employees to handle room allocations, track payments, and use face recognition for attendance, streamlining administrative tasks and improving overall efficiency."
              skills={["Python", "MySQL", "OpenCV", "Flask"]}
              ghLink={"https://github.com/ShivrajRameshPatil/Hostel-Management-System"}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="YouTube Data Analysis"
              description="This project delivers a robust and reliable platform for analyzing YouTube video data, including views, likes, comments, and channel statistics. By leveraging MapReduce for efficient big data processing, it enables insightful visualizations through interactive dashboards, helping creators and analysts make data-driven decisions."
              skills={["Java", "Python", "Hadoop", "Spark","MongoDB","HTML","JavaScript","Power BI"]}
              ghLink={"https://github.com/ShivrajRameshPatil/YouTube-Data-Analysis"}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Power BI- US Healthcare Industry Dynamics Analysis"
              description="This data analysis project, is driven by the goal of providing valuable insights to healthcare stakeholders. By deciphering complex trends and patterns, the objective is to empower decision-makers, healthcare professionals, and policymakers to make informed choices that enhance the overall efficiency and effectiveness of the U.S. healthcare system."
              skills={["Power BI", "DAX", "Microsoft Excel", "SharePoint","Python"]}
              ghLink={"https://github.com/ShivrajRameshPatil/Power-BI-US-Healthcare-Industry-Dynamics-Analysis"}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Power BI- HR Workforce Analysis"
              description="This project analyzes HR workforce data to uncover insights into employee demographics, job roles, satisfaction, compensation, and attrition. By examining key metrics like age, department, salary, and work-life balance, it identifies factors influencing retention and performance. The insights help optimize HR policies, predict attrition, and enhance employee engagement and productivity."
              skills={["Power BI", "DAX", "Microsoft Excel", "SharePoint"]}
              ghLink={"https://github.com/ShivrajRameshPatil/Power-BI-HR-Workforce-Analysis"}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Tableau- Amazon Shipping Analytics"
              description="Developed an interactive dashboard to track outstanding orders, shipping destinations, and monthly trends, providing real-time insights to optimize logistics and improve decision-making. Using data from Excel files, the dashboard allows the Shipping Manager to filter by month and year, offering visibility into outstanding orders and shipping priorities, enhancing operational efficiency."
              skills={["Tableau","Microsoft Excel", "SharePoint"]}
              ghLink={"https://github.com/ShivrajRameshPatil/Tableau-Amazon-Shipping-Analytics"}
            />
          </Col>
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
