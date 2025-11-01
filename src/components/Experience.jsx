import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div className="cards">
          <article className="card">
            <div className="card-header">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg" alt="American Express" />
              <div>
                <h3>Senior Software Engineer I — American Express</h3>
                <p className="subtitle">Bengaluru, India • Sep 2021 – Jul 2025</p>
              </div>
            </div>
            <ul className="bullets">
              <li>Re-built the high-traffic <b>MDT Offer Enrollment</b> site with event-driven microservices & reusable UI—<b>30% faster</b> loads and <b>40% fewer</b> clicks.</li>
              <li>Designed predictive automation for <b>OCMT Case Management</b> (skill/availability-based assignment, Next Best Action)—cut resolution time by <b>40%</b>.</li>
              <li>Shipped a <b>Lite Targeting</b> module (LWC) enabling business-side segmentation; projected <b>~$7M/yr</b> revenue lift.</li>
              <li><i>Stack:</i> Java, Spring Boot, Python, React, Apex, REST, Docker, AWS, Kubernetes, GitHub Actions.</li>
            </ul>
          </article>

          <article className="card">
            <div className="card-header">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Wipro_Primary_Logo_Color_RGB.svg" alt="Wipro" />
              <div>
                <h3>Salesforce Developer — Wipro</h3>
                <p className="subtitle">Jaipur, India • May 2019 – Dec 2020</p>
              </div>
            </div>
            <ul className="bullets">
              <li>Automated CPQ quoting (JS/HTML/CSS) and partner workflows—reduced quote time by <b>50%</b>.</li>
              <li>Customized Sales/Experience Cloud with Apex, LWC, and REST integrations; drove <b>+30% adoption</b>.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
