import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container foot">
        <p>© {new Date().getFullYear()} Sonali Vyas • MS CS — The University of Alabama</p>
        <div className="links">
          <a href="mailto:sonalivyas.cse19@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/sonali-vyas" target="_blank">LinkedIn</a>
          <a href="https://github.com/sonalivyascse19-stack" target="_blank">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
