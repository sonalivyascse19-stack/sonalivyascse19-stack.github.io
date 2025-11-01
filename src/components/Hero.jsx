import React from "react";

export default function Hero() {
  return (
    <section id="top" className="hero-wrap">
      <div className="container hero">
        <div className="hero-text">
          <div className="badge">Available for Summer 2026 Internships</div>
          <h1>Building reliable <span className="accent">AI & Backend</span> systems that ship.</h1>
          <p className="lead">
            I’m <b>Sonali Vyas</b> — <b>Master’s in Computer Science</b> student at
            {" "} <b>The University of Alabama</b> and former Software Engineer at
            {" "} <b>American Express</b>. I design event-driven microservices,
            secure APIs, and AI-powered apps on AWS/Kubernetes with a focus on
            performance and elegant design.
          </p>
          <div className="cta">
            <a className="btn solid" href="/Sonali_Resume.pdf" download>Download Resume</a>
            <a className="btn" href="#projects">See Projects</a>
            <a className="btn" href="mailto:sonalivyas.cse19@gmail.com">Email Me</a>
          </div>
        </div>
        <div className="hero-avatar">
            <img src="/apple-avatar.jpeg" alt="Sonali Vyas avatar" />
        </div>
      </div>
    </section>
  );
}
