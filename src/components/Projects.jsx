import React from "react";

const projects = [
  {
    name: "CrisisAssist AI",
    desc: "Multi-agent emergency assistant using CrewAI + LangGraph with FastAPI & PyTorch; real-time scalable deployment on AWS with Docker/Kubernetes.",
    tags: ["Python", "FastAPI", "PyTorch", "CrewAI", "LangGraph", "AWS", "K8s"],
    link: "https://github.com/sonalivyascse19-stack" // adjust
  },
  {
    name: "AmexTechHub (GH’23 SF)",
    desc: "Searchable knowledge system connecting Salesforce, Slack, and Confluence with AI recommendations and insights.",
    tags: ["React", "Python", "RAG", "Salesforce"],
    link: "https://github.com/sonalivyascse19-stack"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="cards">
          {projects.map(p => (
            <article key={p.name} className="card">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <div className="pills">{p.tags.map(t => <span key={t} className="pill">{t}</span>)}</div>
              <a className="btn small" href={p.link} target="_blank">View</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
