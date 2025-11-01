import React from "react";

export default function Nav() {
  return (
    <header className="nav-wrap">
      <nav className="container nav">
        <a className="brand" href="#top">Sonali Vyas</a>
        <ul>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certs">Certifications</a></li>
          <li><a className="btn" href="/Sonali_Resume.pdf" download>Download Resume</a></li>
        </ul>
      </nav>
    </header>
  );
}
