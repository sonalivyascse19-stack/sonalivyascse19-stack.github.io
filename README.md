<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Sonali Vyas — Resume</title>
  <style>
    :root{
      --bg:#f7f8fb;
      --card:#ffffff;
      --accent:#0b5fff;
      --muted:#6b7280;
      --heading:#0f172a;
      --mono: "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      --glass: rgba(11,95,255,0.08);
    }
    html,body{height:100%;}
    body{
      margin:0;
      font-family:var(--mono);
      background:linear-gradient(180deg,var(--bg),#fff);
      color:#111827;
      -webkit-font-smoothing:antialiased;
      -moz-osx-font-smoothing:grayscale;
      padding:32px;
      display:flex;
      justify-content:center;
    }
    .container{
      max-width:900px;
      width:100%;
      background:var(--card);
      border-radius:12px;
      box-shadow:0 8px 30px rgba(15,23,42,0.08);
      padding:28px;
      display:grid;
      grid-template-columns: 1fr 300px;
      gap:28px;
      align-items:start;
    }

    /* header / left column */
    header{
      grid-column: 1 / span 2;
      display:flex;
      justify-content:space-between;
      align-items:center;
      gap:16px;
      margin-bottom:6px;
    }
    .name {
      display:flex;
      flex-direction:column;
    }
    .name h1{
      margin:0;
      font-size:26px;
      color:var(--heading);
      letter-spacing: -0.3px;
    }
    .name p{
      margin:6px 0 0 0;
      color:var(--muted);
      font-size:13px;
    }
    .contact{
      text-align:right;
      font-size:13px;
      color:var(--muted);
    }
    .contact a{ color:var(--accent); text-decoration:none; }
    .contact a:hover{ text-decoration:underline; }

    /* left column content */
    .left{
      padding-right:6px;
    }
    .section{
      margin-bottom:18px;
    }
    .section h2{
      font-size:14px;
      margin:0 0 10px 0;
      color:var(--heading);
      display:flex;
      align-items:center;
      gap:10px;
    }
    .section p, .section li{
      color:#111827;
      font-size:14px;
      line-height:1.45;
      margin:6px 0;
    }

    .job{
      margin-bottom:10px;
    }
    .job .title{
      display:flex;
      justify-content:space-between;
      gap:10px;
      align-items:baseline;
    }
    .job .title strong { font-size:15px; color:#0f172a; }
    .job .meta { color:var(--muted); font-size:13px; }

    ul.bullets{ padding-left:18px; margin:6px 0; }
    ul.bullets li{ margin:6px 0; }

    /* right column */
    .right{
      background:linear-gradient(180deg,var(--glass),transparent);
      border-radius:10px;
      padding:18px;
      align-self:start;
      min-height:120px;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.6);
    }
    .skill-list{
      display:flex;
      flex-direction:column;
      gap:8px;
    }
    .skill-group{ font-size:13px; color:var(--muted); }
    .skill-group strong{ color:var(--heading); display:block; margin-bottom:6px; font-size:13px; }
    .pill{
      display:inline-block;
      background:#eef2ff;
      color:var(--accent);
      padding:6px 10px;
      border-radius:999px;
      font-size:12px;
      margin:4px 6px 6px 0;
    }

    footer{
      grid-column:1 / span 2;
      margin-top:10px;
      font-size:12px;
      color:var(--muted);
      text-align:center;
    }

    /* responsive */
    @media (max-width:880px){
      .container{ grid-template-columns: 1fr; padding:18px; }
      .right{ order: 3; margin-top:6px; }
    }
  </style>
</head>
<body>
  <main class="container" role="main">
    <header>
      <div class="name" aria-label="Name and headline">
        <h1>SONALI VYAS</h1>
        <p>Master of Science (Computer Science) — University of Alabama (May 2027)</p>
      </div>
      <div class="contact" aria-label="Contact information">
        <div>(659) 261-6562</div>
        <div><a href="mailto:sonalivyas.cse19@gmail.com">sonalivyas.cse19@gmail.com</a></div>
        <div><a href="https://www.linkedin.com/in/sonali-vyas" target="_blank" rel="noopener">linkedin.com/in/sonali-vyas</a></div>
        <div><a href="https://github.com/sonalivyascse19-stack" target="_blank" rel="noopener">github.com/sonalivyascse19-stack</a></div>
      </div>
    </header>

    <!-- main left column -->
    <section class="left" aria-labelledby="about-heading">
      <div class="section" id="summary">
        <h2>Summary</h2>
        <p>Backend-focused software engineer and M.S. student with 3+ years of professional experience building scalable microservice systems, APIs, and AI-integrated platforms. Passionate about clean design, production-ready code, and shipping features that deliver measurable product impact.</p>
      </div>

      <div class="section" id="experience">
        <h2>Experience</h2>

        <article class="job" aria-label="American Express role">
          <div class="title">
            <strong>Senior Software Engineer I — American Express</strong>
            <span class="meta">Sep 2021 — Jul 2025 · Bangalore, India</span>
          </div>
          <ul class="bullets">
            <li><strong>MDT Offer Enrollment Site Enhancement:</strong> Re-built a high-traffic enrollment site using event-driven microservices and reusable UI components (React & Angular; Apex & SOQL backend). Reduced user clicks by <strong>40%</strong> and improved page load speed by <strong>30%</strong>.</li>
            <li><strong>OCMT Case Management System:</strong> Implemented predictive AI suggestions and a case assignment engine, integrated securely across platforms—reduced resolution wait times by <strong>40%</strong> and saved agents >15 hours/week.</li>
            <li><strong>Custom Lite Module:</strong> Built a Lightning Web Components UI enabling granular merchant offer targeting; contributed to ~<strong>$7M</strong> projected annual revenue uplift.</li>
            <li><em>Tech:</em> Python, Java, Apex, REST APIs, Microservices, Docker, Git, React, Salesforce</li>
          </ul>
        </article>

        <article class="job" aria-label="Salesforce role">
          <div class="title">
            <strong>Success Engineer — Salesforce</strong>
            <span class="meta">Jan 2021 — Sep 2021 · Hyderabad, India</span>
          </div>
          <ul class="bullets">
            <li>Implemented advanced Sales Cloud and Experience Cloud features and delivered stakeholder training—improved user adoption by <strong>30%</strong>.</li>
            <li>Collaborated with global clients on UI configurations and integrations.</li>
          </ul>
        </article>

        <article class="job" aria-label="Wipro role">
          <div class="title">
            <strong>Project Engineer — Wipro</strong>
            <span class="meta">May 2019 — Dec 2020 · Jaipur, India</span>
          </div>
          <ul class="bullets">
            <li>Built an automated CPQ quoting system using JavaScript, HTML5, and CSS3—reduced quote generation time by <strong>50%</strong>.</li>
          </ul>
        </article>
      </div>

      <div class="section" id="projects">
        <h2>Selected Projects</h2>

        <article class="job" aria-label="CrisisAssist">
          <div class="title">
            <strong>CrisisAssist AI</strong>
            <span class="meta">Aug 2025 — Present</span>
          </div>
          <ul class="bullets">
            <li>Built a multi-agent emergency response platform with <strong>CrewAI</strong> + <strong>LangGraph</strong>, using Python, FastAPI, React, and PyTorch for event detection.</li>
            <li>Deployed on AWS with Docker & Kubernetes for real-time, scalable performance and reliability.</li>
          </ul>
        </article>

        <article class="job" aria-label="AmexTechHub">
          <div class="title">
            <strong>AmexTechHub (GrowthHack’23 Semi-Finalist)</strong>
            <span class="meta">Project</span>
          </div>
          <ul class="bullets">
            <li>Created a smart, searchable knowledge platform integrating Salesforce, Slack, and Confluence with AI-driven recommendations.</li>
          </ul>
        </article>
      </div>

      <div class="section" id="education">
        <h2>Education</h2>
        <p><strong>University of Alabama</strong> — Master of Science in Computer Science (Expected May 2027)</p>
        <p><strong>Rajasthan Technical University</strong> — B.Tech, Computer Science (Honors) (May 2019)</p>
      </div>
    </section>

    <!-- right column -->
    <aside class="right" aria-labelledby="skills-heading">
      <div class="section" id="skills">
        <h2 id="skills-heading">Skills</h2>

        <div class="skill-list">
          <div class="skill-group">
            <strong>Frontend</strong>
            <div>
              <span class="pill">React</span>
              <span class="pill">HTML5</span>
              <span class="pill">CSS3</span>
              <span class="pill">Lightning Web Components</span>
              <span class="pill">Tailwind</span>
            </div>
          </div>

          <div class="skill-group">
            <strong>Backend & Systems</strong>
            <div>
              <span class="pill">FastAPI</span>
              <span class="pill">Spring Boot</span>
              <span class="pill">REST APIs</span>
              <span class="pill">Microservices</span>
              <span class="pill">Event-driven</span>
            </div>
          </div>

          <div class="skill-group">
            <strong>AI / ML</strong>
            <div>
              <span class="pill">PyTorch</span>
              <span class="pill">LangGraph</span>
              <span class="pill">CrewAI</span>
              <span class="pill">Multi-Agent Systems</span>
            </div>
          </div>

          <div class="skill-group">
            <strong>Cloud & Infra</strong>
            <div>
              <span class="pill">Docker</span>
              <span class="pill">Kubernetes</span>
              <span class="pill">AWS</span>
              <span class="pill">GitHub Actions</span>
            </div>
          </div>

          <div class="skill-group">
            <strong>Databases</strong>
            <div>
              <span class="pill">PostgreSQL</span>
              <span class="pill">MySQL</span>
              <span class="pill">SOQL</span>
            </div>
          </div>

        </div>
      </div>

      <div class="section" id="links">
        <h2>Quick Links</h2>
        <p class="meta"><a href="https://www.linkedin.com/in/sonali-vyas" target="_blank" rel="noopener">LinkedIn</a></p>
        <p class="meta"><a href="https://github.com/sonalivyascse19-stack" target="_blank" rel="noopener">GitHub</a></p>
      </div>
    </aside>

    <footer>
      <div>Resume generated for web / GitHub Pages view • Based on Sonali Vyas — copy for applications with small edits as needed</div>
    </footer>
  </main>
</body>
</html>
