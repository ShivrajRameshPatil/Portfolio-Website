import React from "react";
import { Col, Row } from "react-bootstrap";

// Programming & Data
import { SiPython, SiPandas, SiNumpy, SiTensorflow, SiPytorch } from "react-icons/si";
import { DiJava } from "react-icons/di";

// BI & Analytics
import { SiPowerbi, SiTableau, SiMicrosoftexcel } from "react-icons/si";

// Databases
import { SiMicrosoftsqlserver, SiMysql, SiSnowflake } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

// Data Engineering
import { SiApachespark, SiApachehadoop, SiApacheairflow } from "react-icons/si";

// Cloud
import { SiAmazonaws, SiMicrosoftazure, SiGooglecloud } from "react-icons/si";

// DevOps / Infra
import { SiTerraform, SiAnsible } from "react-icons/si";

// Web
import { SiHtml5, SiCss3, SiJavascript } from "react-icons/si";

// Gen AI
import { SiOpenai, SiLangchain } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons"><SiPython /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiJava /></Col>

      <Col xs={4} md={2} className="tech-icons"><SiPowerbi /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTableau /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiMicrosoftexcel /></Col>

      <Col xs={4} md={2} className="tech-icons"><SiMicrosoftsqlserver /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiMysql /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiMongodb /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiSnowflake /></Col>

      <Col xs={4} md={2} className="tech-icons"><SiApachespark /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiApachehadoop /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiApacheairflow /></Col>

      <Col xs={4} md={2} className="tech-icons"><SiAmazonaws /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiMicrosoftazure /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGooglecloud /></Col>

      <Col xs={4} md={2} className="tech-icons"><SiPandas /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiNumpy /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTensorflow /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPytorch /></Col>

      <Col xs={4} md={2} className="tech-icons"><SiOpenai /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiLangchain /></Col>

      <Col xs={4} md={2} className="tech-icons"><SiHtml5 /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiCss3 /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiJavascript /></Col>

      <Col xs={4} md={2} className="tech-icons"><SiTerraform /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAnsible /></Col>

    </Row>
  );
}

export default Techstack;
