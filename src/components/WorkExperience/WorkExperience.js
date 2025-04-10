import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import ExperienceCards from "./ExperienceCards";
import Particle from "../Particle";

function WorkExperience() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My <strong className="purple">Work Experience</strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are the roles I've had, along with my contributions and responsibilities.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    {/* Intact Experience */}
                    <Col md={4} className="project-card">
                        <ExperienceCards
                            title="Data Analyst"
                            company="Intact Financial Corporation"
                            duration="05/2024 - 09/2024"
                            description={"As a Data Analyst at Intact Financial Corporation, I conducted in-depth analysis of operational performance using Python, SAS, and SQL, driving a 20% improvement in KPIs across Personal and Commercial Lines. I developed Power BI dashboards for workforce management, optimizing team efficiency by 25% and minimizing scheduling conflicts by 30%. Additionally, I automated SAS processes using Control-M and KSH scripts, enhancing operational efficiency by 40%, and maintained version control with GitHub to ensure seamless collaboration and code integrity."}
                        />
                    </Col>

                    {/* Intact Experience */}
                    <Col md={4} className="project-card">
                        <ExperienceCards
                            title="Security Analytics Intern"
                            company="Intact Financial Corporation"
                            duration="05/2023 - 04/2024"
                            description={"As a Security Analytics Intern at Intact Financial Corporation, I developed Power BI dashboards that improved reporting by 15% and optimized data modeling with DAX. I implemented Row-Level Security (RLS) in Power BI for role-based data access, reducing access issues by 30%. Additionally, I conducted SQL-based data analysis, improving efficiency by 20%. I automated reporting using Excel formulas (VLOOKUP, INDEX-MATCH, arrays) and VBA macros, increasing efficiency by 25% and enhancing insights from CSPM, WAF, CASB tools."}
                        />
                    </Col>
                </Row>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ExperienceCards
                            title="Business Intelligence Developer Intern"
                            company="Paytm"
                            duration="01/2022- 07/2022"
                            description={"As a Business Intelligence Developer Intern at Paytm, I analyzed customer data using Python and SQL from GCP BigQuery, leading to a 15% increase in engagement. I developed Tableau dashboards, saving 30 hours of manual analysis monthly, and supported data-driven decisions for marketing and product teams. Additionally, I maintained documentation on Confluence and managed tasks on Jira, ensuring efficient collaboration and progress tracking across teams."}
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ExperienceCards
                            title="Data Science Intern"
                            company="AlgoAnalytics"
                            duration="05/2021 - 12/2021"
                            description={"As a Data Engineer Intern at AlgoAnalytics, I led data architecture for a petabyte-scale project using Spark, Databricks, and AWS S3, improving efficiency. I automated S3 archiving, reducing storage costs by 95%, and developed Azure Databricks validation for 10+ pipelines, cutting issue detection time by 70%. I also built monitoring dashboards in Snowflake and Tableau and optimized SQL queries to reduce execution time and pipeline latency."}
                        />
                    </Col>
                </Row>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ExperienceCards
                            title="ETL Developer Intern"
                            company="Canspirit AI"
                            duration="01/2021 - 04/2021"
                            description={"As an ETL Developer Intern at Canspirit AI, I integrated 1,000+ healthcare files weekly into a SQL warehouse, improving data accessibility. I optimized data transformation in IBM DataStage, increasing efficiency and accuracy by 95%, and resolved 100+ issues during integration testing to ensure solution reliability."}
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default WorkExperience;
