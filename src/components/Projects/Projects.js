import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import sarabAi from "../../Assets/Projects/sarabAi.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import movieMagic from "../../Assets/Projects/movieMagic.png";
import cryptoTrek from "../../Assets/Projects/cryptoTrek.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import stoneAgeRomeo from "../../Assets/Projects/stoneageRomeo.png";
import globalAccess from "../../Assets/Projects/globalaccess.png";
import geet from "../../Assets/Projects/geet.png";

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
              imgPath={globalAccess}
              isBlog={false}
              title="Global Access"
              description="Developed and deployed a responsive industrial services website using Next.js and Vercel. Designed a dynamic landing page with a hero slider, smooth navigation, and mobile-friendly UI to showcase construction solutions. Focused on performance, SEO, and clean component-based architecture."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://construction-iota-three.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stoneAgeRomeo}
              isBlog={false}
              title="Stone Age Romeo"
              description="Developed and deployed a modern portfolio website using Next.js, styled with CSS and hosted on Netlify. Focused on responsive design, smooth animations, and clean component architecture to deliver an interactive and performance-optimized user experience."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://stoneageromeo.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Carterreed"
              description="Developed a robust e-commerce platform using the MERN stack (MongoDB, Express.js, React.js, Node.js) to support
seamless user and admin operations. Designed an intuitive admin panel for efficient inventory and order management."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://carterreed.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cryptoTrek}
              isBlog={false}
              title="CryptoTrek"
              description="Crafted a cutting-edge Cryptocurrency Tracker App using React JS, Material UI, and Chart JS, delivering seamless
responsiveness across all devices for an improved user experience —a performance boost of 90 percent.
• Achieved optimal performance by seamlessly integrating real-time data fetching from cryptocurrency APIs, ensuring
users access up-to-the-minute information on prices and market trends.
"
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieMagic}
              isBlog={false}
              title="Movie Magic"
              description="Enabled genre-based navigation for a seamless exploration of curated lists of movies, series, and TV shows, enhancing content discovery and personalization.
Highlighted trending movies, series, and TV shows to give users easy access to the latest and popular entertainment options.
 Implemented a search teature for users to find specific movies, series, or TV shows by entering keywords, delivering quick and targeted access."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://64859e52ad38cc7b9e1d3bc5--chimerical-sunshine-03dad3.netlify.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sarabAi}
              isBlog={false}
              title="SarabAi"
              description="SarabAi is a sophisticated AI-powered chat application developed using React. This project leverages advanced natural language processing to deliver dynamic and interactive conversations, providing users with a seamless and intuitive experience. With SarabAi, users can engage in real-time dialogues, ask questions, and receive insightful responses, making it an invaluable tool for information retrieval, learning, and entertainment."
              demoLink="https://sarabai.netlify.app/"       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={geet}
              isBlog={false}
              title="Geet"
              description="Built a cross-platform music streaming app using React Native and Expo, featuring real-time playback controls, search functionality, and a dynamic UI. Integrated audio playback with track navigation, favorite songs management, and persistent bottom music player. Designed with a modern dark theme and intuitive tab navigation for a smooth user experience"
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://expo.dev/artifacts/eas/5PwqDBWSHzfTZS24k7BSeb.apk"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
