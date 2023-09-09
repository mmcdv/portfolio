import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { isMobile } from "../../hooks/Mobile";

export const Certificates = () => {

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Certificates | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Certificates </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>                  
        <div className="portfolio-box">
          <Row className="d-block ">
            <div>
              <a href="" target="_blank" className="cert_link"> React</a>
            </div>
            <div>
              <a href="" target="_blank" className="cert_link"> PHP</a>
            </div>
            <div>
              <a href="" target="_blank" className="cert_link"> SQL</a>
            </div>
            <div>
              <a href="" target="_blank" className="cert_link"> CSS</a>
            </div>
          </Row>
        </div>      

      </Container>
    </HelmetProvider>
  );
};
