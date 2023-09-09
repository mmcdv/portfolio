import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import ProjectModal from "./projects";
import { isMobile } from "../../hooks/Mobile";

export const Portfolio = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>        
        {isMobile() && (
          <div>
            <p>* Click on a project to view more details</p>
          </div>
        )}        
        <div className="portfolio-box">
          <Row className="d-block d-lg-flex justify-content-between ">
            {dataportfolio.map((data, i) => (
              <Col 
                key={i} 
                className="po_item portfolio-col col-lg-5 col-11 mb-4 d-flex justify-content-center" 
                onClick={() => handleProjectClick(data)}
              >
                <img src={data.img} alt="" className="project-img" ></img>
                <div className="content">
                  <p className="text-white">{data.title}</p>
                  <a href={data.link}>view project</a>
                </div>
              </Col>

            ))}          
          </Row>
        </div>

        {selectedProject && (
          <ProjectModal
            show={showModal}
            onHide={handleCloseModal}
            project={selectedProject}
            meta={meta}
          />
        )}

      </Container>
    </HelmetProvider>
  );
};
