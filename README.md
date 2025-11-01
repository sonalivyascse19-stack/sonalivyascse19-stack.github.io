<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sonali Vyas | Portfolio</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Inter', sans-serif;
      background: linear-gradient(180deg, #f0f7ff 0%, #e6f0ff 100%);
      margin: 0;
      padding: 0;
      color: #0f172a;
      overflow-x: hidden;
    }
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem 8%;
      background: #ffffff;
      box-shadow: 0 2px 8px rgba(0, 50, 150, 0.1);
      position: sticky;
      top: 0;
      z-index: 100;
      border-bottom: 3px solid #1e3a8a;
    }
    header h1 {
      font-size: 1.75rem;
      color: #1e3a8a;
      font-weight: 700;
    }
    nav a {
      margin: 0 1rem;
      text-decoration: none;
      color: #0f172a;
      font-weight: 500;
      transition: color 0.3s;
    }
    nav a:hover {
      color: #2563eb;
    }
    .hero {
      text-align: center;
      padding: 6rem 10%;
      background: linear-gradient(135deg, #e0f2fe, #93c5fd);
      color: #0f172a;
      animation: fadeIn 1.2s ease-in;
    }
    .hero h2 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      background: linear-gradient(90deg, #1e3a8a, #2563eb);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .hero img {
      width: 130px;
      height: 130px;
      border-radius: 50%;
      object-fit: cover;
      border: 4px solid #2563eb;
      margin-top: 2rem;
      box-shadow: 0 4px 12px rgba(30, 58, 138, 0.2);
    }
    .hero p {
      font-size: 1.1rem;
      color: #1e293b;
      max-width: 600px;
      margin: 0 auto 2rem;
      line-height: 1.6;
    }
    .btn-container {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
    }
    .btn {
      padding: 0.8rem 1.8rem;
      border-radius: 10px;
      font-weight: 600;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .btn-primary {
      background: linear-gradient(90deg, #1d4ed8, #2563eb);
      color: white;
    }
    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);
    }
    .btn-secondary {
      background-color: #dbeafe;
      color: #1e3a8a;
    }
    .btn-secondary:hover {
      background-color: #bfdbfe;
    }
    section {
      padding: 5rem 8%;
      max-width: 1100px;
      margin: 0 auto;
      animation: fadeInUp 1s ease forwards;
    }
    h3 {
      font-size: 1.8rem;
      color: #1e3a8a;
      margin-bottom: 1.5rem;
      border-bottom: 3px solid #2563eb;
      display: inline-block;
      padding-bottom: 0.4rem;
    }
    .skills-grid, .projects-grid, .experience-grid, .certifications-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }
    .card {
      background-color: white;
      border-radius: 16px;
      padding: 2rem;
      box-shadow: 0 4px 12px rgba(30, 58, 138, 0.1);
      border-left: 5px solid #2563eb;
      transition: all 0.3s ease;
      animation: fadeInUp 1.2s ease;
      text-align: left;
      position: relative;
    }
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 24px rgba(37, 99, 235, 0.25);
    }
    .card img.logo {
      width: 80px;
      height: auto;
      display: block;
      margin-bottom: 1rem;
    }
    footer {
      text-align: center;
      padding: 2rem;
      font-size: 0.9rem;
      background-color: #1e3a8a;
      color: white;
      border-top: 4px solid #2563eb;
    }
  </style>
</head>
<body>
  <header>
    <h1>Sonali Vyas</h1>
    <nav>
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#certifications">Certifications</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <section class="hero">
    <h2>Building Reliable AI & Backend Systems That Ship 🚀</h2>
    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Profile Placeholder">
    <p>Hi! I'm <strong>Sonali Vyas</strong> — a <strong>Master’s in Computer Science student at The University of Alabama</strong> and former <strong>Software Engineer at American Express</strong>. I design event-driven microservices, secure APIs, and AI-powered apps on AWS/Kubernetes with a focus on scalable performance and elegant design.</p>
    <div class="btn-container">
      <a href="resume.pdf" class="btn btn-primary">Download Resume</a>
      <a href="#projects" class="btn btn-secondary">See Projects</a>
      <a href="mailto:sonalivyas.cse19@gmail.com" class="btn btn-secondary">Email Me</a>
    </div>
  </section>

  <section id="about">
    <h3>About</h3>
    <p>I’m a curious and enthusiastic technologist passionate about crafting intelligent backend systems and AI-driven tools that make an impact. After 4+ years at <strong>American Express</strong> and <strong>Salesforce projects with Wipro</strong>, I’m now advancing my expertise as a <strong>Master’s in Computer Science student at The University of Alabama</strong>. My work blends strong engineering fundamentals with creativity, always aiming to build products that are both reliable and human-centered.</p>
  </section>

  <section id="experience">
    <h3>Experience</h3>
    <div class="experience-grid">
      <div class="card">
        <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg" alt="American Express Logo">
        <h4>Software Engineer — American Express</h4>
        <p>Developed and optimized microservices supporting millions of transactions daily. Designed event-driven automation systems and built robust APIs using Java, Spring Boot, and AWS. Collaborated across teams to improve system efficiency by 30% while ensuring high security and scalability standards.</p>
      </div>
      <div class="card">
        <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/6/67/Wipro_Primary_Logo_Color_RGB.svg" alt="Wipro Logo">
        <h4>Salesforce Developer — Wipro Technologies</h4>
        <p>Customized and optimized Salesforce CRM solutions for enterprise clients, integrating Apex, Lightning Components, and REST APIs. Automated workflows to enhance business efficiency and developed scalable data models supporting client operations across multiple business units.</p>
      </div>
    </div>
  </section>

  <section id="skills">
    <h3>Skills</h3>
    <div class="skills-grid">
      <div class="card">Python, Java, Apex, C++</div>
      <div class="card">FastAPI, Flask, Spring Boot</div>
      <div class="card">AWS, Docker, Kubernetes</div>
      <div class="card">Salesforce, LWC, REST APIs, GraphQL</div>
      <div class="card">PyTorch, TensorFlow, Data Engineering</div>
      <div class="card">PostgreSQL, MongoDB, MySQL</div>
    </div>
  </section>

  <section id="certifications">
    <h3>Certifications, Awards & Accomplishments</h3>
    <div class="skills-grid">
      <div class="card">
        <h4>Salesforce Certified Platform Developer I</h4>
        <p>Validated expertise in Salesforce Apex, Lightning Web Components, and declarative app development.</p>
      </div>
      <div class="card">
        <h4>Amex GrowthHack'23 Semi-Finalist</h4>
        <p>Recognized for building AmexTechHub — a smart AI-powered document insight system integrating Slack and Confluence.</p>
      </div>
      <div class="card">
        <h4>Python for Machine Learning — Coursera</h4>
        <p>Completed specialization focusing on AI model deployment and production-scale ML pipelines using PyTorch and FastAPI.</p>
      </div>
    </div>
  </section>

  <section id="projects">
    <h3>Projects</h3>
    <div class="projects-grid">
      <div class="card">
        <h4>CrisisAssist AI</h4>
        <p>Developed an AI-driven emergency response platform integrating IoT sensor data, live analytics, and real-time dashboards using FastAPI and AWS IoT Core.</p>
      </div>
      <div class="card">
        <h4>Amex Insight Engine</h4>
        <p>Created a data visualization dashboard using React and Python pipelines to enhance real-time business insights for 10M+ transactions.</p>
      </div>
      <div class="card">
        <h4>AI-Powered Resume Analyzer</h4>
        <p>Built an NLP-based web app to assess resume quality and alignment with job descriptions using OpenAI APIs and Flask.</p>
      </div>
    </div>
  </section>

  <section id="contact">
    <h3>Contact</h3>
    <p>If you’d like to collaborate, discuss projects, or just say hi — feel free to reach out!</p>
    <div class="btn-container">
      <a href="mailto:sonalivyas.cse19@gmail.com" class="btn btn-primary">Get in Touch</a>
    </div>
  </section>

  <footer>
    © 2025 Sonali Vyas | Designed with 💙 using HTML & CSS
  </footer>
</body>
</html>
