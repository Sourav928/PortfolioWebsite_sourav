import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cash from "../../Assets/cash.png";
import job from "../../Assets/job.png";
import portfolio from "../../Assets/portfolio.jpg";
import SimonGame from "../../Assets/SimonGame.jpg";
import HexCode from "../../Assets/HexCode.jpg";
import activityTracker from "../../Assets/activityTracker.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cash}
              isBlog={false}
              title="Baat-Cheet"
              description=" Developed a real-time chat application to facilitate a seamless and interactive chatting experience with features for text-based messaging and real-time message updates. Key features of the project include real-time chat functionality, user authentication, the ability to send and
receive messages instantly with Socket.io, and message time using timeago.js"
              ghLink="https://github.com/Sourav928/Baat-Cheet"
              // demoLink="https://cash-floww.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={job}
              isBlog={false}
              title="Food-Box"
              description="Developed a feature-rich food delivery application, provides a convenient platform for ordering and delivering.Application as features including registration and authentication, payment, and order placement."
              ghLink="https://github.com/Sourav928/Food-Box"
              // demoLink="https://job-brd.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={activityTracker}
              isBlog={false}
              title="Activity-Tracker"
              description="Developed a user friendly platform,that help users to keep the track of their daily tasks.Key features such as responsive website along with seamless CRUD operations.User friendly website is build with ReactJS, powered by NodeJS server,Express in backend with
MongoDB database"
              ghLink="https://github.com/Sourav928/Activity-Tracker"
              // demoLink="https://coin-stats.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SimonGame}
              isBlog={false}
              title="Simon Game"
              description="Developed a sophisticated simulation of the classic Simon game by leveraging a combination of jQuery, HTML, CSS, and JavaScript. The implementation showcases a mastery of front-end technologies, ensuring a seamless and engaging user experience."
              ghLink="https://github.com/Sourav928/SimonGame_Simulation"
              demoLink="https://stirring-liger-127a1a.netlify.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="My portfolio website is a one-stop platform displaying my projects, GitHub contributions, tech stack, resume, blog, and contact information. It encapsulates my journey as a software engineer, making it a valuable resource for potential employers and collaborators.This website serves as a dynamic tool for networking, job opportunities, and collaboration, reflecting my passion and proficiency as a software engineer."
              ghLink="https://github.com/Sourav928/Sourix_Portfolio"
              demoLink="https://jovial-halva-cfa5f4.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HexCode}
              isBlog={false}
              title="HeX-ColorCode-React"
              description="
Engineered a React application for the generation of hexadecimal color codes, utilizing fundamental React hooks, such as useState and useEffect.The Hexcode generator underscores a commitment to leveraging foundational React concepts for practical and user-centric applications."
              ghLink="https://github.com/Sourav928/HexColorCode-React"
              demoLink="https://shimmering-fairy-c5c39e.netlify.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
