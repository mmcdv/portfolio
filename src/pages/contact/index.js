import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { contactConfig } from "../../content_option";
import ReCAPTCHA from "react-google-recaptcha";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


export const ContactUs = () => {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleCaptchaVerify = () => {
    setCaptchaVerified(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ loading: true });

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormdata({
            loading: false,
            alertmessage: "Success! Thank you for your messege.",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          console.log(error.text);
          setFormdata({
            alertmessage: `Faild to send! Please try again.`,
            variant: "danger",
            show: true,
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
      );
      setFormdata({
        email: "",
        name: "",
        message: ""
      })
  };

  const theme = localStorage.getItem('theme');

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <Alert
              //show={formData.show}
              variant={formData.variant}
              className={`rounded-0 co_alert ${
                formData.show ? "d-block" : "d-none"
              }`}
              onClose={() => setFormdata({ show: false })}
              dismissible
            >
              <p className="my-0">{formData.alertmessage}</p>
            </Alert>
          </Col>
          <Col lg="5" className="mb-5">
            <h2 className="py-4 ">Get in touch</h2>
            <address className="">
              <div>
                <strong className="pe-3">Email:</strong>
                <a className="contact_info" href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                  {contactConfig.YOUR_EMAIL}
                </a> 
              </div>
              <div className="mt-1">
                <strong className="pe-3">Phone:</strong>
                <a className="contact_info" href={`tel:+${contactConfig.YOUR_FONE}`}>
                  {contactConfig.YOUR_FONE}
                </a>  
              </div>      
            </address>            
            <p>{contactConfig.description}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form onSubmit={handleSubmit} className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">                  
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Name"
                    className="mb-3"
                  >
                    <Form.Control 
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Name"
                      value={formData.name || ""}
                      type="text"
                      required
                      onChange={handleChange}
                    />
                  </FloatingLabel>                  
                </Col>
                <Col lg="6" className="form-group">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                  >
                    <Form.Control 
                      type="email" 
                      placeholder="Email" 
                      value={formData.email || ""}
                      className="form-control rounded-0"
                      id="email"
                      name="email"
                      required
                      onChange={handleChange}
                    />
                  </FloatingLabel>                  
                </Col>
              </Row>              
              <FloatingLabel
                controlId="floatingInput"
                label="Message"
                className="mb-3"
              >
                <Form.Control 
                  as="textarea" 
                  placeholder="Message" 
                  className="form-control rounded-0"
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  style={{ height: 150 }}
                />
              </FloatingLabel>
              <Row className="mt-4">              
                <Col lg="12" className="form-group">
                  <ReCAPTCHA 
                    sitekey="6LeU5OUmAAAAALbsK23-fds7Wo-JQGQsrLaDMx9Y"
                    theme={theme}
                    onChange={handleCaptchaVerify}          
                  />
                  <button className="btn ac_btn mt-4" disabled={!captchaVerified} type="submit">
                    {formData.loading ? "Sending..." : "Send"}
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
      <div className={formData.loading ? "loading-bar" : "d-none"}></div>
    </HelmetProvider>
  );
};
