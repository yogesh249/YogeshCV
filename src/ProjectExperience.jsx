import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
function ProjectExperience() {
    const [variant, setVariant] = useState("Secondary");



  return (
    <div>
        <Card 
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '100%' }} // Set width to 100%
          className="mb-2"
        >
          <Card.Header>Tech Mahindra–Technical Specialist</Card.Header>
          <Card.Body>
            <Card.Title>ALCS</Card.Title>

            <Card.Text>
                 Spearheaded the development of a high-performance XML parser, resulting in a monthly cost reduction of 
$10,000 and a 20% boost in processing efficiency.
<li>Led a cross-functional team of 6 developers, ensuring timely delivery and consistent code quality through 
rigorous code reviews and team mentoring.</li>
<li>Collaborated with stakeholders, aligning technical solutions with business objectives, resulting in a 15% 
improvement in project delivery timelines.</li>
<li>Resolved complex infrastructure issues by restructuring the codebase, improving maintainability, and reducing 
the ticket loss rate by 10%</li>
<br/><br/>
Roles & Responsibilities: I have held the position of Lead Developer and Architect for the ALCS application. My key 
duties involve maintaining the application, developing new modules, mentoring new team members, and 
addressing any issues that occur during its execution. The application ALCS has various modules which have been 
containerized and running on docker. We are also using Kubernetes to make it load balanced. Proactively led crossfunctional teams, driving strategic decision-making in architecture and implementation phases.
<br/><br/>
<li>Tech Stack used: Java/J2ee/Spring boot/Restful webservices/Docker</li>
<li>Databases: Oracle</li>
<li>Web server: Wildlfy 18</li>
<li>OS: Linux/Shell scripting</li>
            </Card.Text>

<hr/>
            <Card.Title>Imagine</Card.Title>
            <Card.Text>
                <li>Designed and directed a telecom application that integrated with multiple systems, delivering real-time data to 
end-users, improving customer satisfaction by 25%.</li>
<li>Effectively translated business requirements into technical solutions, leading to the successful implementation 
of a scalable architecture.</li>
<li>Led scrum teams to ensure smooth project execution, resolving blockers quickly and enhancing team 
productivity by 30%.</li>

<br/><br/>
Benefits to the Business: This gave the end-user a one stop portal to go to whenever he needed any information on 
            </Card.Text>
          </Card.Body>
        </Card>
        
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>{variant} Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
    </div>
  )
}

export default ProjectExperience