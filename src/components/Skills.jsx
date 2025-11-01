import React from "react";

const groups = [
  {
    title: "Backend & Systems",
    items: ["Java", "Spring Boot", "FastAPI", "REST", "Microservices", "Event-Driven Systems"]
  },
  {
    title: "AI / ML",
    items: ["PyTorch", "LangGraph", "CrewAI", "LLM/RAG", "Model Deployment"]
  },
  {
    title: "Cloud & Infra",
    items: ["AWS (EC2, S3, Lambda)", "Docker", "Kubernetes", "GitHub Actions"]
  },
  {
    title: "Frontend",
    items: ["React", "HTML5", "CSS3", "LWC"]
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "SOQL"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="grid">
          {groups.map(g => (
            <div key={g.title} className="pill-card">
              <h3>{g.title}</h3>
              <div className="pills">
                {g.items.map(i => <span key={i} className="pill">{i}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
