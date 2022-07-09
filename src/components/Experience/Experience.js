import React from "react";
import ExperienceCSS from "./Experience.module.css";

const Experience = () => {
  return (
    <section id="experience">
      <div className={ExperienceCSS.experience__container}>
        <div className={ExperienceCSS.experience__content}>
          <div className={ExperienceCSS.text}>
            <h1>Experience</h1>
            <p>
              Seeking learning opportunities in Software Engineering and Web
              Development. I hope to make a difference while learning and doing
              what I love.
            </p>
          </div>
          <div className={ExperienceCSS.workinfo}>
            <div className={ExperienceCSS.leftpane}>
              <h3>Certifications Received</h3>
              <div className={ExperienceCSS.certscontainer}>
                <div className={ExperienceCSS.certs}>
                  <h4>Azure Data Fundamentals</h4>
                  <h5>Microsoft</h5>
                  <a
                    href="https://www.credly.com/badges/11711c9e-6f0c-4561-82bc-552689f7d2f7?source=linked_in_profile"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Show Credential
                  </a>
                </div>
                <div className={ExperienceCSS.certs}>
                  <h4>Azure AI Fundamentals</h4>
                  <h5>Microsoft</h5>
                  <a
                    href="https://www.credly.com/badges/3b54e817-86c4-40e2-8be2-1ce4bb11d0ee?source=linked_in_profile"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Show Credential
                  </a>
                </div>
                <div className={ExperienceCSS.certs}>
                  <h4>Azure Fundamentals</h4>
                  <h5>Microsoft</h5>
                  <a
                    href="https://www.credly.com/badges/0fa4eab0-5af7-401f-bba3-d50520057ff1?source=linked_in_profile"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Show Credential
                  </a>
                </div>
                <div className={ExperienceCSS.certs}>
                  <h4>Licensed Electronics Engineer</h4>
                  <h5>PRC - Philippines</h5>
                  <a
                    href="https://www.linkedin.com/in/reymar-dela-paz-0a26a0196/details/certifications/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Show Credential
                  </a>
                </div>
                <div className={ExperienceCSS.certs}>
                  <h4>Licensed Electronics Technician</h4>
                  <h5>PRC - Philippines</h5>
                  <a
                    href="https://www.linkedin.com/in/reymar-dela-paz-0a26a0196/details/certifications/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Show Credential
                  </a>
                </div>
              </div>
            </div>
            <div className={ExperienceCSS.rightpane}>
              <h3>Work Experience</h3>
              <div className={ExperienceCSS.workcontainer}>
                <div className={ExperienceCSS.work}>
                  <h4>Associate Software Engineer</h4>
                  <h5>
                    Finastra | <b>2021 - Present</b>
                  </h5>
                  <h6>
                    Performs delivery of fixes to issues regarding bank-related
                    functions. Works on Web and Core Development, SAPI and
                    online API related issues.
                  </h6>
                  <p>
                    Finastra is one of the largest fintech companies in the
                    world, offering the broadest portfolio of solutions for
                    financial institutions of all sizes.
                  </p>
                  <a
                    href="https://www.finastra.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Learn More
                  </a>
                </div>

                <div className={ExperienceCSS.work}>
                  <h4>Network Design Engineer</h4>
                  <h5>
                    Huawei | <b>2019 - 2020</b>
                  </h5>
                  <h6>
                    During my sprint in Huawei, I have worked closely with the
                    Product Managers to provide customer-requested Network
                    Solutions in the form of BOQs. I also contributed in the
                    automation of internal processes of the team.
                  </h6>
                  <p>
                    Huawei is a leading global provider of information and
                    communications technology (ICT) infrastructure and smart
                    devices.
                  </p>
                  <a
                    href="https://www.huawei.com/en/corporate-information"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Learn More
                  </a>
                </div>

                <div className={ExperienceCSS.work}>
                  <h4>Graduation</h4>
                  <h5>
                    University of Santo Tomas | <b>2019</b>
                  </h5>
                  <h6>Bachelor of Science in Electronics Engineering</h6>
                  <p>
                    Activities and societies: Internal Vice President, CISCO
                    Networking Academy Gateway Engineering (2018-2019); Vice
                    President for Creatives, Engineering Division for Student
                    Alliance (2018-2019); Executive Associate at UST Tech
                    Advancement Group (2017-2018)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
