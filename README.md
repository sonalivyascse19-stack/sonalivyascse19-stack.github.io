<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Sonali Vyas • Software Engineer</title>
  <meta name="description" content="Portfolio of Sonali Vyas — Software Engineer. Backend, AI/ML, Cloud, and Security." />

  <!-- Fonts (fast, no-blocking) -->
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

  <style>
    :root {
      --bg: #0b1220;
      --panel: #111826;
      --text: #e6e8ee;
      --muted: #a9b0c1;
      --brand: #7c9cff;   /* indigo-300 */
      --brand-2: #67e8f9; /* cyan-300 */
      --accent: #a78bfa;  /* violet-300 */
      --ok: #34d399;      /* emerald-400 */
      --ring: rgba(124,156,255,.55);
      --border: rgba(255,255,255,.08);
      --shadow: 0 10px 30px rgba(0,0,0,.35);
      --radius: 18px;
      --radius-sm: 12px;
      --maxw: 1100px;
      --transition: 220ms cubic-bezier(.2,.8,.2,1);
    }
    @media (prefers-color-scheme: light) {
      :root {
        --bg: #f6f7fb;
        --panel: #ffffff;
        --text: #0b1220;
        --muted: #4b5563;
        --brand: #4f46e5;
        --brand-2: #0891b2;
        --accent: #7c3aed;
        --ok: #059669;
        --ring: rgba(79,70,229,.3);
        --border: rgba(15,23,42,.08);
        --shadow: 0 10px 30px rgba(2,6,23,.08);
      }
    }

    /* light/dark override via toggle */
    html.theme-dark { --bg:#0b1220; --panel:#111826; --text:#e6e8ee; --muted:#a9b0c1; --brand:#7c9cff; --brand-2:#67e8f9; --accent:#a78bfa; --ok:#34d399; --ring:rgba(124,156,255,.55); --border:rgba(255,255,255,.08); --shadow:0 10px 30px rgba(0,0,0,.35); }
    html.theme-light { --bg:#f6f7fb; --panel:#fff; --text:#0b1220; --muted:#4b5563; --brand:#4f46e5; --brand-2:#0891b2; --accent:#7c3aed; --ok:#059669; --ring:rgba(79,70,229,.3); --border:rgba(15,23,42,.08); --shadow:0 10px 30px rgba(2,6,23,.08); }

    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji","Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", sans-serif;
      color: var(--text);
      background: radial-gradient(1000px 600px at 80% -10%, rgba(124,156,255,.25), transparent 60%),
                  radial-gradient(800px 500px at -10% 0%, rgba(103,232,249,.18), transparent 60%),
                  var(--bg);
      line-height: 1.6;
      scroll-behavior: smooth;
    }

    .wrap { max-width: var(--maxw); margin: 0 auto; padding: 0 20px; }

    /* Nav */
    .nav {
      position: sticky; top: 0; z-index: 50;
      backdrop-filter: blur(10px);
      background: color-mix(in srgb, var(--bg) 82%, transparent);
      border-bottom: 1px solid var(--border);
    }
    .nav__inner {
      display: flex; align-items: center; justify-content: space-between;
      padding: 14px 0;
    }
    .brand {
      display: inline-flex; align-items: center; gap: 10px;
      font-weight: 700; letter-spacing: .2px; font-size: 16px;
      text-decoration: none; color: var(--text);
    }
    .brand__logo {
      width: 28px; height: 28px; border-radius: 10px;
      background: linear-gradient(135deg, var(--brand), var(--brand-2));
      box-shadow: 0 6px 20px rgba(124,156,255,.35), inset 0 0 0 1px rgba(255,255,255,.15);
    }
    .nav__links a {
      color: var(--muted); text-decoration: none; font-weight: 600; margin-left: 20px; font-size: 14px;
      padding: 10px 12px; border-radius: 10px; transition: color var(--transition), background var(--transition);
    }
    .nav__links a:hover { color: var(--text); background: var(--panel); box-shadow: var(--shadow); }

    .toggle {
      border: 1px solid var(--border);
      background: var(--panel);
      color: var(--muted);
      border-radius: 999px;
      padding: 8px 12px;
      font-weight: 600; font-size: 13px;
      cursor: pointer;
      transition: transform var(--transition), box-shadow var(--transition), color var(--transition);
    }
    .toggle:hover { transform: translateY(-1px); box-shadow: var(--shadow); color: var(--text); }

    /* Hero */
    .hero { padding: 80px 0 40px; }
    .hero__card {
      border: 1px solid var(--border);
      background: linear-gradient(180deg, color-mix(in srgb, var(--panel) 88%, transparent) 0%, var(--panel) 100%);
      border-radius: var(--radius);
      padding: 36px;
      display: grid; grid-template-columns: 1.2fr .8fr; gap: 28px;
      box-shadow: var(--shadow);
      position: relative; overflow: hidden;
    }
    @media (max-width: 900px) { .hero__card { grid-template-columns: 1fr; } }

    .chip {
      display: inline-flex; align-items: center; gap: 8px; color: var(--muted);
      border: 1px dashed var(--border);
      border-radius: 999px; padding: 6px 10px; font-size: 12px; font-weight: 600;
      background: color-mix(in srgb, var(--panel) 70%, transparent);
    }
    .chip i { width: 8px; height: 8px; border-radius: 50%; background: var(--ok); box-shadow: 0 0 0 3px color-mix(in srgb, var(--ok) 30%, transparent); }

    h1 { margin: 14px 0 4px; font-size: 40px; line-height: 1.2; letter-spacing: -0.5px; }
    .lead { color: var(--muted); font-size: 16px; }

    .cta { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 22px; }
    .btn {
      appearance: none; border: 1px solid var(--border); cursor: pointer;
      padding: 12px 16px; border-radius: 12px; font-weight: 700; letter-spacing: .2px;
      background: var(--panel); color: var(--text);
      transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
      text-decoration: none; display: inline-flex; align-items: center; gap: 10px;
    }
    .btn--primary {
      background: linear-gradient(135deg, var(--brand), var(--accent));
      border-color: transparent; color: white; box-shadow: 0 12px 30px rgba(124,156,255,.35);
    }
    .btn:hover { transform: translateY(-1px); box-shadow: var(--shadow); }

    .avatar {
      width: 140px; height: 140px; border-radius: 24px;
      background: linear-gradient(135deg, var(--brand), var(--brand-2));
      box-shadow: var(--shadow), inset 0 0 0 1px rgba(255,255,255,.22);
      border: 4px solid color-mix(in srgb, var(--panel) 70%, transparent);
    }

    /* Section */
    section { padding: 36px 0; }
    .section__title {
      font-size: 22px; margin: 0 0 18px; letter-spacing: .2px;
    }
    .panel {
      border: 1px solid var(--border);
      background: var(--panel);
      border-radius: var(--radius);
      padding: 22px;
      box-shadow: var(--shadow);
    }

    /* Skills badges */
    .skills { display: flex; flex-wrap: wrap; gap: 10px; }
    .badge {
      border: 1px solid var(--border); background: color-mix(in srgb, var(--panel) 85%, transparent);
      color: var(--text); padding: 8px 12px; border-radius: 999px; font-weight: 600; font-size: 13px;
    }

    /* Projects grid */
    .grid { display: grid; gap: 16px; grid-template-columns: repeat(3, 1fr); }
    @media (max-width: 900px) { .grid { grid-template-columns: 1fr 1fr; } }
    @media (max-width: 640px) { .grid { grid-template-columns: 1fr; } }
    .card {
      border: 1px solid var(--border); background: var(--panel); border-radius: var(--radius-sm);
      padding: 18px; transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
    }
    .card:hover { transform: translateY(-3px); border-color: var(--ring); box-shadow: var(--shadow); }
    .card h3 { margin: 4px 0 6px; font-size: 18px; }
    .card p { margin: 0; color: var(--muted); font-size: 14px; }
    .card .meta { margin-top: 12px; display: flex; gap: 8px; flex-wrap: wrap; }
    .meta .pill { font-size: 12px; padding: 6px 10px; border-radius: 999px; border: 1px solid var(--border); color: var(--muted); }

    /* Timeline */
    .timeline { position: relative; padding-left: 26px; }
    .timeline:before {
      content: ""; position: absolute; left: 8px; top: 2px; bottom: 2px; width: 2px;
      background: linear-gradient(var(--brand), var(--brand-2));
      border-radius: 2px;
    }
    .tl-item {
      position: relative; margin: 0 0 18px; padding: 0 0 0 10px;
    }
    .tl-item:before {
      content: ""; position: absolute; left: -5px; top: 2px; width: 12px; height: 12px; border-radius: 50%;
      background: var(--panel); border: 2px solid var(--brand);
      box-shadow: 0 0 0 4px color-mix(in srgb, var(--brand) 20%, transparent);
    }
    .tl-h { font-weight: 700; }
    .tl-s { color: var(--muted); font-size: 13px; }

    /* Footer */
    footer { padding: 30px 0 60px; color: var(--muted); font-size: 14px; text-align: center; }
    .links { display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; }
    .links a { color: var(--muted); text-decoration: none; border-bottom: 1px dotted var(--border); }
    .links a:hover { color: var(--text); border-color: var(--ring); }

    /* little focus style */
    a, button { outline: none; }
    a:focus-visible, button:focus-visible { box-shadow: 0 0 0 3px var(--ring); border-radius: 10px; }
  </style>
</head>
<body>
  <header class="nav">
    <div class="wrap nav__inner">
      <a class="brand" href="#top" aria-label="Home">
        <span class="brand__logo" aria-hidden="true"></span>
        <span>Sonali Vyas</span>
      </a>
      <nav class="nav__links" aria-label="Primary">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <button class="toggle" id="themeToggle" type="button" aria-label="Toggle color theme">☀︎ / ☾</button>
      </nav>
    </div>
  </header>

  <main id="top" class="wrap">
    <!-- HERO -->
    <section class="hero">
      <div class="hero__card">
        <div>
          <span class="chip"><i></i> Available for Summer 2026 Internships</span>
          <h1>Building reliable <span style="background:linear-gradient(135deg,var(--brand),var(--brand-2));-webkit-background-clip:text;background-clip:text;color:transparent;">AI & backend</span> systems that ship.</h1>
          <p class="lead">
            I’m <strong>Sonali Vyas</strong> — Software Engineer with 4+ years at American Express, now pursuing my M.S. in CS.
            I design event-driven microservices, secure APIs, and AI-powered apps on AWS/Kubernetes.
          </p>
          <div class="cta">
            <a class="btn btn--primary" href="Sonali_Vyas_Resume.pdf" download>⬇ Download Resume</a>
            <a class="btn" href="#projects">See Projects</a>
            <a class="btn" href="mailto:sonalivyas.cse19@gmail.com">Email Me</a>
          </div>
        </div>
        <div style="display:flex;justify-content:center;align-items:center;">
          <div class="avatar" aria-hidden="true" title="Avatar placeholder"></div>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about">
      <h2 class="section__title">About</h2>
      <div class="panel">
        Passionate about building <strong>secure, scalable</strong> software with a crisp UX. At Amex, I re-architected a
        high-traffic offer enrollment system (thousands of enrollments/day), cutting load times by <strong>30%</strong> and user clicks by <strong>40%</strong>.
        I love fast feedback loops, clean design systems, and code that earns its keep in production.
      </div>
    </section>

    <!-- SKILLS -->
    <section id="skills">
      <h2 class="section__title">Skills</h2>
      <div class="panel skills">
        <span class="badge">Python</span>
        <span class="badge">Java</span>
        <span class="badge">FastAPI</span>
        <span class="badge">Spring Boot</span>
        <span class="badge">REST / gRPC</span>
        <span class="badge">Microservices</span>
        <span class="badge">Docker</span>
        <span class="badge">Kubernetes</span>
        <span class="badge">AWS (EC2, Lambda, S3)</span>
        <span class="badge">PostgreSQL</span>
        <span class="badge">MySQL</span>
        <span class="badge">PyTorch</span>
        <span class="badge">LangGraph / CrewAI</span>
        <span class="badge">GitHub Actions (CI/CD)</span>
        <span class="badge">Security & Compliance</span>
      </div>
    </section>

    <!-- EXPERIENCE -->
    <section id="experience">
      <h2 class="section__title">Experience</h2>
      <div class="panel timeline">
        <div class="tl-item">
          <div class="tl-h">Senior Software Engineer I — American Express</div>
          <div class="tl-s">Sep 2021 – Jul 2025 · Bangalore, India</div>
          <div>
            Rebuilt offer enrollment into event-driven microservices (React/Angular + Apex/SOQL).
            <strong>−30%</strong> load time, <strong>−40%</strong> clicks. AI-assisted case resolution cut wait times by <strong>40%</strong>;
            automated workflows saved agents <strong>15+ hrs/week</strong>. Deployed on Docker/K8s with secure CI/CD.
          </div>
        </div>
        <div class="tl-item">
          <div class="tl-h">Success Engineer — Salesforce</div>
          <div class="tl-s">Jan 2021 – Sep 2021 · Hyderabad, India</div>
          <div>Implemented Sales/Experience Cloud features and led stakeholder enablement to boost adoption by <strong>30%</strong>.</div>
        </div>
        <div class="tl-item">
          <div class="tl-h">Project Engineer — Wipro</div>
          <div class="tl-s">May 2019 – Dec 2020 · Jaipur, India</div>
          <div>Built automated CPQ workflow (JS/HTML/CSS) reducing quote generation time by <strong>50%</strong>.</div>
        </div>
      </div>
    </section>

    <!-- PROJECTS -->
    <section id="projects">
      <h2 class="section__title">Projects</h2>
      <div class="grid">
        <article class="card">
          <h3>CrisisAssist AI</h3>
          <p>Multi-agent system (CrewAI + LangGraph) with FastAPI + PyTorch for real-time event detection & response. Deployed on AWS/EKS.</p>
          <div class="meta">
            <span class="pill">FastAPI</span><span class="pill">PyTorch</span><span class="pill">Kubernetes</span>
          </div>
        </article>
        <article class="card">
          <h3>AmexTechHub</h3>
          <p>AI-powered knowledge system connecting Salesforce, Slack, and Confluence; CI/CD automations for smart updates.</p>
          <div class="meta">
            <span class="pill">Python</span><span class="pill">CI/CD</span><span class="pill">APIs</span>
          </div>
        </article>
        <article class="card">
          <h3>Offer Targeting Module</h3>
          <p>Lightning Web Components for granular merchant targeting, contributing to ~<strong>$7M</strong> projected annual uplift.</p>
          <div class="meta">
            <span class="pill">LWC</span><span class="pill">Apex</span><span class="pill">SOQL</span>
          </div>
        </article>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact">
      <h2 class="section__title">Contact</h2>
      <div class="panel">
        Let’s build something great.  
        📬 <a href="mailto:sonalivyas.cse19@gmail.com">sonalivyas.cse19@gmail.com</a> · 
        🔗 <a href="https://www.linkedin.com/in/sonali-vyas" target="_blank" rel="noopener">LinkedIn</a> · 
        💻 <a href="https://github.com/sonalivyascse19-stack" target="_blank" rel="noopener">GitHub</a>
      </div>
    </section>
  </main>

  <footer>
    <div class="links">
      <a href="#top">Back to top ↑</a>
      <a href="Sonali_Vyas_Resume.pdf" download>Resume</a>
      <a href="mailto:sonalivyas.cse19@gmail.com">Email</a>
    </div>
    <div style="margin-top:10px;">© <span id="y"></span> Sonali Vyas</div>
  </footer>

  <script>
    // simple year + theme toggle
    document.getElementById('y').textContent = new Date().getFullYear();

    const root = document.documentElement;
    const btn = document.getElementById('themeToggle');
    const saved = localStorage.getItem('theme');
    if (saved) document.documentElement.className = saved;

    btn.addEventListener('click', () => {
      const current = document.documentElement.className;
      const next = current === 'theme-dark' ? 'theme-light' :
                   current === 'theme-light' ? '' : 'theme-dark';
      document.documentElement.className = next;
      if (next) localStorage.setItem('theme', next); else localStorage.removeItem('theme');
    });
  </script>
</body>
</html>
