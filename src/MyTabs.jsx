import Nav from 'react-bootstrap/Nav';
import { Container, Row, Col, Tab, ListGroup } from 'react-bootstrap';
import { useState } from 'react';
import Education from './Education';
import Experience from './Experience';
import { FaExpeditedssl } from 'react-icons/fa';

function MyTabs() {
  const [activeKey, setActiveKey] = useState('education');

  return (
    <Container fluid style={{ backgroundColor: 'gray', height: '100vh', width: '100vw', marginTop: 0, marginLeft: 0, paddingTop: 0, paddingLeft: 0 }}>
      <Row>
        <Col sm={2}>
          <ListGroup>
            <ListGroup.Item
              action
              active={activeKey === 'education'}
              onClick={() => setActiveKey('education')}
              style={activeKey === 'education' ? { backgroundColor: 'blue', color: 'white' } : {}}
            >
              Education
            </ListGroup.Item>
            <ListGroup.Item
              action
              active={activeKey === 'experience'}
              onClick={() => setActiveKey('experience')}
              style={activeKey === 'experience' ? { backgroundColor: 'blue', color: 'white' } : {}}
            >
              Experience
            </ListGroup.Item>
            <ListGroup.Item
              action
              active={activeKey === 'skills'}
              onClick={() => setActiveKey('skills')}
              style={activeKey === 'skills' ? { backgroundColor: 'blue', color: 'white' } : {}}
            >
              Skills
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
              <h3>Skills</h3>
              <p>Details about skills...</p>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Container>
  );
}

export default MyTabs;