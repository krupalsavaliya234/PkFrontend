import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { UiProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/smart.jpg";
import projImg2 from "../assets/img/ecomm.jpg";
import projImg3 from "../assets/img/project2.png";
import projImg4 from "../assets/img/hackerRank.png";
import projImg5 from "../assets/img/Microsoft.png";
import projImg6 from "../assets/img/Arizona.png";
import projImg7 from "../assets/img/scerti5.png";

import projImg12 from "../assets/img/food.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import ExperienceSection from "./ExperienceSection";



export const Projects = () => {

  const projects = [
    {
      title: "Pizza Sales Analysis",
      description: "Used Power BI to analyze pizza sales.",
      imgUrl: projImg12,
      projectLink:"https://github.com/Pritam-Ku-Moharana/Pizza_Sales_Analysis"
    },
    {
      title: "Smart Hydro Automation",
      description: "Built an IoT system to automate garden watering based on soil moisture levels.",
      imgUrl: projImg1,
      projectLink:"https://github.com/Pritam-Ku-Moharana/Smart_Hydro_Automation"
    },
    {
    title: "E-commerce Data Analysis",
    description: "Utilized SQL to analyze customer behavior, product performance.",
    imgUrl:  projImg2,
    projectLink:"https://github.com/Pritam-Ku-Moharana/E_commerce_Analysis"
    },
    {
      title: "CPI Inflation Analysis, National Statistical Office",
      description: "Analyzed Consumer Price Index (CPI) data to identify key contributing.",
      imgUrl: projImg3,
      projectLink:"https://github.com/Pritam-Ku-Moharana/CPI_Analysis"
    }
    
  ];
  const uiprojects = [
    {
      title: "HackerRank Certification",
      description: "MYSQL",
      imgUrl: projImg4,
      projectLink:"https://www.hackerrank.com/certificates/5f854c2fa709"
    },
    {
      title: "Microsoft Excel on Coursera",
      description: "Data for Analysis",
      imgUrl: projImg5,
      projectLink:"https://coursera.org/verify/UGBMWBUE7WPZ"
    },
    {
      title: "Python on Coursera",
      description: "Python",
      imgUrl: projImg6,
      projectLink:"https://coursera.org/verify/A0WC2MVM23VC "
    },
    {
      title: "Hardware Basics by Netacad",
      description: "Hardware Basics",
      imgUrl: projImg7,
      projectLink:"https://www.credly.com/badges/faa5355a-fcb0-46b5-98f2-e026ab65b100/public_url"
    }
    
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p className="project-text">Developed a real-time sales dashboard using Power BI, SQL, and MS Excel for data import and visualization; provided insights into KPIs like sales trends and customer segmentation; enabled data-driven decision-making for stakeholders.
</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Certificates</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Education</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}  
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          uiprojects.map((project, index) => {
                            return (
                              <UiProjectCard
                                key={index}  
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                          <ExperienceSection/>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
