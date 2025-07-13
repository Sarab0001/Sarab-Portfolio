import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import sarab from "../../Assets/sarab.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
  I’m a results-driven <b className="purple">Full Stack Developer</b> with years of experience building real-world web applications, digital products, and business solutions for startups, agencies, and growing brands.
  <br />
  <br />
  I specialize in crafting <b className="purple">custom websites</b>, <b className="purple">web apps</b>, and <b className="purple">dashboards</b> using modern technologies like <b className="purple">Next.js</b>, <b className="purple">React</b>, <b className="purple">Node.js</b>, and <b className="purple">MongoDB</b>.
  <br />
  <br />
  Whether you need a <b className="purple">high-performance landing page</b>, a <b className="purple">robust backend API</b>, or a <b className="purple">full-scale web platform</b>, I can help bring your vision to life with clean, scalable, and maintainable code.
  <br />
  <br />
  I’m comfortable owning the full development cycle—from planning and prototyping to deployment and performance optimization—using platforms like <b className="purple">Vercel</b>, <b className="purple">Netlify</b>, <b className="purple">Docker</b>, and <b className="purple">GitHub Actions</b>.
  <br />
  <br />
  I focus on delivering <b className="purple">pixel-perfect UIs</b>, <b className="purple">smooth user experiences</b>, and solutions tailored to your business goals. My work spans industries like <b className="purple">e-commerce</b>, <b className="purple">SaaS</b>, <b className="purple">construction</b>, <b className="purple">portfolio sites</b>, and <b className="purple">blockchain apps</b>.
  <br />
 
  <br />
  <i>Let’s build something impactful—on time and on budget.</i>
</p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={sarab} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Sarab0001"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/1-sarabjeet"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/i_am_sarab?igsh=YWFiNjhwMmgxd2pu&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
