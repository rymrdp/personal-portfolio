import React from "react";
import AboutCSS from "./About.module.css";
import cssicon from "../assets/css.png";
import javaicon from "../assets/java.png";
import htmlicon from "../assets/html.png";
import ibmicon from "../assets/ibm.png";
import javascripticon from "../assets/javascript.png";
import reacticon from "../assets/react.png";
import jspicon from "../assets/jsp.png";
import mysqlicon from "../assets/mysql.png";
import springicon from "../assets/spring.png";

const About = () => {
  return (
    <section id="about">
      <div>
        <div className={AboutCSS.about}>
          <div>
            <div className={AboutCSS.about__container}>
              <div className={AboutCSS.about__content}>
                <div className={AboutCSS.text}>
                  <h1>About</h1>
                  <p>
                    Hey there. I am a Software Engineer with industry experience
                    specializing in developing solutions through Java and
                    JavaScript.
                  </p>
                </div>
                <div className={AboutCSS.information}>
                  <div className={AboutCSS.left_pane}>
                    <h3>Contact</h3>
                    <p>
                      For any kind of inquiries or help, please feel free to
                      contact me and I will get back to you the soonest.
                    </p>
                    <h3>Quick Links</h3>
                    <div className={AboutCSS.links}>
                      <ul>
                        <li>
                          <a
                            href="https://www.linkedin.com/in/reymar-dela-paz-0a26a0196/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Linkedin
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://github.com/rymrdp"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Github
                          </a>
                        </li>
                        <li>
                          <a href="mailto: contactme.reymar@gmail.com">Email</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={AboutCSS.right_pane}>
                    <div className="more-info">
                      <p>
                        I am currently working as a Software Engineer based in
                        The Philippines. I am passionate about things related to
                        Software and Web Development. I work on projects
                        regarding banking softwares, web apps, online APIs and
                        production support.
                      </p>
                      <p>
                        When I'm not writing code, I read and watch a lot about
                        the latest in the technology world. This is why I
                        consider myself as a <i>Tech Junkie</i>. I also love
                        playing with my dogs in my free time.
                      </p>
                      <h3>Tech Stack</h3>
                      <div
                        className={AboutCSS.tech_stack_container}
                        id="#techstack"
                      >
                        <div className={AboutCSS.container}>
                          <img src={javaicon} alt="javaicon" />
                          <p>Java</p>
                        </div>
                        <div className={AboutCSS.container}>
                          <img src={javascripticon} alt="javascripticon" />
                          <p>JavaScript</p>
                        </div>
                        <div className={AboutCSS.container}>
                          <img src={reacticon} alt="reacticon" />
                          <p>ReactJS</p>
                        </div>
                        <div className={AboutCSS.container}>
                          <img src={htmlicon} alt="htmlicon" />
                          <p>HTML</p>
                        </div>
                        <div className={AboutCSS.container}>
                          <img src={cssicon} alt="cssicon" />
                          <p>CSS</p>
                        </div>
                        <div className={AboutCSS.container}>
                          <img src={mysqlicon} alt="mysqlicon" />
                          <p>MySQL</p>
                        </div>
                        <div className={AboutCSS.container}>
                          <img src={springicon} alt="springicon" />
                          <p>Spring MVC</p>
                        </div>
                        <div className={AboutCSS.container}>
                          <img src={jspicon} alt="jspicon" />
                          <p>JSP / Servlets</p>
                        </div>
                        <div className={AboutCSS.container}>
                          <img src={ibmicon} alt="ibmicon" />
                          <p>AS400 / RPGLE</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
