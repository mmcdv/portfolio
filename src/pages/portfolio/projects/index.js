import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectModal = ({ show, onHide, project, meta }) => {
  return (
    <Modal show={show} onHide={onHide} centered size='lg'>
      <Modal.Header closeButton>
        <Modal.Title className=''>{project.title}</Modal.Title>        
      </Modal.Header>
      <Modal.Body style={{ height: 520, overflowY: 'scroll' }}>
        <p>{project.description}</p>        
        <h5 className='mt-4'>Key Features:</h5>
        <p>{project.feature1}</p>
        <p>{project.feature2}</p>
        <p>{project.feature3}</p>
        <p>{project.feature4}</p>    
        <div className='mt-5'>
          <h5>Development Challenges</h5>  
          <h6 className='mb-1 mt-4'>Problem:</h6>
          <p>{project.problem}</p>
          <h6 className='mb-1 mt-4'>Solution:</h6>
          <p>{project.solution}</p>
          <h6 className='mb-1 mt-4'>Outcome:</h6>
          <p>{project.outcome}</p>
        </div>    
      </Modal.Body>
      <Modal.Footer className='d-flex justify-content-between'>
        <a href={project.source} target="_blank" rel="noopener noreferrer">
          <Button className='px-4 project-btn'>Source Code</Button>
        </a>
        <a href={project.preview} target='_blank'>
          <Button className='px-4 project-btn'>Live Demo</Button>
        </a> 
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectModal;
