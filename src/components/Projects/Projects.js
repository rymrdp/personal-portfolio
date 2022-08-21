import React from "react";
import ProjectsCSS from "./Projects.module.css";
import listingio from "../assets/listingio.png";
import resume from "../assets/resume.png";
import borrow from "../assets/borrow.png";
import todolist from "../assets/todolist.png";
import { GitHub } from "@material-ui/icons";

const Projects = () => {
  return (
    <section id="projects">
      <div className={ProjectsCSS.projects}>
        <div>
          <div className={ProjectsCSS.projects__container}>
            <div className={ProjectsCSS.projects__content}>
              <div className={ProjectsCSS.text}>
                <h1>Recent Projects</h1>
              </div>
              <div className={ProjectsCSS.projects_containerbox}>
                <div className={ProjectsCSS.container}>
                  <div className={ProjectsCSS.imgbox}>
                    <img src={resume} alt="resu-me" />
                  </div>
                  <div className={ProjectsCSS.link}>
                    <a
                      href="https://github.com/rymrdp/resu-me"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHub className={ProjectsCSS.icon} />
                      <span>Resu-Me: Online Resume Builder</span>
                    </a>
                  </div>
                </div>
                <div className={ProjectsCSS.container}>
                  <div className={ProjectsCSS.imgbox}>
                    <img src={listingio} alt="listingio" />
                  </div>
                  <div className={ProjectsCSS.link}>
                    <a
                      href="https://github.com/rymrdp/listing.io"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHub className={ProjectsCSS.icon} />
                      <span>listing.io: Inventory Management System</span>
                    </a>
                  </div>
                </div>
                <div className={ProjectsCSS.container}>
                  <div className={ProjectsCSS.imgbox}>
                    <img src={borrow} alt="borrow" />
                  </div>
                  <div className={ProjectsCSS.link}>
                    <a
                      href="https://github.com/rymrdp/borrow"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHub className={ProjectsCSS.icon} />
                      <span>Borrow: e-Library Management System</span>
                    </a>
                  </div>
                </div>
                <div className={ProjectsCSS.container}>
                  <div className={ProjectsCSS.imgbox}>
                    <img src={todolist} alt="todolist" />
                  </div>
                  <div className={ProjectsCSS.link}>
                    <a
                      href="https://github.com/rymrdp/todo-app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHub className={ProjectsCSS.icon} />
                      <span>ToDo List: Java Spring Boot and ReactJS</span>
                    </a>
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

export default Projects;
