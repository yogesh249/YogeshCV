import React, { useState } from 'react';
import { Container, Row, Col, Tab, ListGroup } from 'react-bootstrap';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import ProjectExperience from './ProjectExperience';
import './MyTabs.css'; // Import the custom CSS file

function MyTabs() {
  const [activeKey, setActiveKey] = useState('education');

  return (
    <Container fluid style={{ backgroundColor: 'white', height: '100vh', width: '100vw', marginTop: 0, marginLeft: 0, paddingTop: 0, paddingLeft: 0 }}>
      <Row style={{ paddingTop: 0, paddingBottom: 0 }}>
        <Col sm={2}>
          <ListGroup>
            <ListGroup.Item
              action
              active={activeKey === 'education'}
              onClick={() => setActiveKey('education')}
              className={activeKey === 'education' ? 'active' : ''}
            >
              Education
            </ListGroup.Item>
            <ListGroup.Item
              action
              active={activeKey === 'experience'}
              onClick={() => setActiveKey('experience')}
              className={activeKey === 'experience' ? 'active' : ''}
            >
              Experience
            </ListGroup.Item>
            <ListGroup.Item
              action
              active={activeKey === 'skills'}
              onClick={() => setActiveKey('skills')}
              className={activeKey === 'skills' ? 'active' : ''}
            >
              Skills
            </ListGroup.Item>
            <ListGroup.Item
              action
              active={activeKey === 'projectExperience'}
              onClick={() => setActiveKey('projectExperience')}
              className={activeKey === 'projectExperience' ? 'active' : ''}
            >
              Project Experience
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="education" active={activeKey === 'education'}>
              <Education/>
            </Tab.Pane>
            <Tab.Pane eventKey="experience" active={activeKey === 'experience'}>
              <Experience/>
            </Tab.Pane>
            <Tab.Pane eventKey="skills" active={activeKey === 'skills'}>
              <Skills/>
            </Tab.Pane>
            <Tab.Pane eventKey="projectExperience" active={activeKey === 'projectExperience'}>
              <ProjectExperience/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Container>
  );
}

export default MyTabs;