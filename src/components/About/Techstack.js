import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiPowerbi } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiTableau } from "react-icons/si"
import { DiJava } from "react-icons/di";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiMicrosoftexcel } from "react-icons/si";
import { SiAmazonaws } from "react-icons/si";
import { SiMicrosoftazure } from "react-icons/si";
import { SiGooglecloud } from "react-icons/si";
import { SiSnowflake } from "react-icons/si";
import { SiApachespark } from "react-icons/si";
import { SiApacheairflow } from "react-icons/si";
import { SiPandas, SiNumpy, SiTensorflow, SiPytorch } from "react-icons/si";
import { SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import { SiApachehadoop } from "react-icons/si";
import { SiAnsible } from "react-icons/si";
import { SiTerraform } from "react-icons/si";
import { SiMysql } from "react-icons/si";

function Techstack() {
  return ( 
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiMicrosoftsqlserver/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiMysql/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < DiMongodb/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiMicrosoftexcel/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiAmazonaws/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiMicrosoftazure/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiGooglecloud/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiSnowflake/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiApachespark/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiApachehadoop/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiApacheairflow/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiPandas/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiNumpy/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiTensorflow/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiPytorch/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiHtml5/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiCss3/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiJavascript/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiAnsible/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiTerraform/>
      </Col>

    </Row>
  );
}
export default Techstack;
