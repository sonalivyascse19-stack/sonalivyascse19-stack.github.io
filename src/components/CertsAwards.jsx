import React from "react";

export default function CertsAwards() {
  return (
    <section id="certs" className="section">
      <div className="container">
        <h2 className="section-title">Certifications • Awards & Accomplishments</h2>
        <div className="certs-grid">
          <div className="cert">
            <h3>AmexTechHub GrowthHack’23 — Semi-Finalist</h3>
            <p>Built AI-powered knowledge system; showcased to leadership.</p>
          </div>
          <div className="cert">
            <h3>AWS Cloud Practitioner (in-progress)</h3>
            <p>Solid cloud fundamentals; hands-on with EC2, S3, Lambda, IAM.</p>
          </div>
          <div className="cert">
            <h3>Salesforce Platform App Builder</h3>
            <p>Automation, data models, and API integrations.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
